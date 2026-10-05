'use client';

import React from 'react';
import { Search, Filter, RotateCcw } from 'lucide-react';

export interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  categories?: { id: string; label: string }[];
  selectedCategory?: string;
  onCategoryChange?: (id: string) => void;
  placeholder?: string;
  totalResults?: number;
  onReset?: () => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  searchQuery,
  onSearchChange,
  categories,
  selectedCategory,
  onCategoryChange,
  placeholder = 'Search by name, district, or role...',
  totalResults,
  onReset,
}) => {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-light)',
        padding: '1rem 1.25rem',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        marginBottom: '2rem',
      }}
    >
      {/* Search Input */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.65rem',
          flex: '1 1 280px',
          backgroundColor: 'var(--bg-main)',
          padding: '0.6rem 1rem',
          borderRadius: 'var(--radius-pill)',
          border: '1px solid var(--border-light)',
        }}
      >
        <Search size={18} color="var(--primary-green)" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={placeholder}
          style={{
            border: 'none',
            background: 'transparent',
            outline: 'none',
            width: '100%',
            fontSize: '0.9rem',
            color: 'var(--navy)',
            fontFamily: 'inherit',
          }}
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            style={{ fontSize: '0.8rem', color: 'var(--text-muted)', cursor: 'pointer' }}
          >
            Clear
          </button>
        )}
      </div>

      {/* Categories if available */}
      {categories && categories.length > 0 && onCategoryChange && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            <Filter size={15} />
            <span>Category:</span>
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--border-light)',
              backgroundColor: '#FFFFFF',
              color: 'var(--navy)',
              fontSize: '0.875rem',
              fontWeight: 600,
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Results Count & Reset */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginLeft: 'auto' }}>
        {totalResults !== undefined && (
          <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 600 }}>
            <strong style={{ color: 'var(--navy)' }}>{totalResults}</strong> found
          </span>
        )}
        {onReset && (searchQuery || (selectedCategory && selectedCategory !== 'All')) && (
          <button
            onClick={onReset}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.825rem',
              color: 'var(--primary-green)',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            <RotateCcw size={14} />
            <span>Reset</span>
          </button>
        )}
      </div>
    </div>
  );
};
