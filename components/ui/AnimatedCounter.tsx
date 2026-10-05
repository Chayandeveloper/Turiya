'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1.8,
  className,
  style,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.25 });

  // Regex parsing: prefix (e.g. "₹"), number (e.g. "500" or "2,00,000"), suffix (e.g. "+", "%")
  const match = value.match(/^([^\d]*)(\d[\d,.]*)(.*)$/);

  const prefix = match ? match[1] : '';
  const numStr = match ? match[2].replace(/,/g, '') : '';
  const suffix = match ? match[3] : '';
  const targetNum = numStr ? parseFloat(numStr) : null;

  const [displayNum, setDisplayNum] = useState(0);

  useEffect(() => {
    if (targetNum === null) return;

    if (!isInView) {
      setDisplayNum(0);
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth cubic ease-out deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * targetNum);

      setDisplayNum(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayNum(targetNum);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, targetNum, duration]);

  if (targetNum === null) {
    return (
      <span ref={ref} className={className} style={style}>
        {value}
      </span>
    );
  }

  // Format with commas if original string had commas (e.g. "2,00,000")
  const formattedNum = match && match[2].includes(',')
    ? displayNum.toLocaleString('en-IN')
    : displayNum.toString();

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}{formattedNum}{suffix}
    </span>
  );
};
