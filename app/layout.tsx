import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Navbar } from '@/components/navbar/Navbar';
import { Footer } from '@/components/footer/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Turiya Football | Grassroots Sports Business System',
    template: '%s | Turiya Football',
  },
  description:
    'Building the future of football across India and the Northeast. Connecting players, coaches, clubs, academies, and tournament organisers into one digital ecosystem.',
  keywords: [
    'Grassroots Football',
    'Village Football India',
    'Northeast Football',
    'Assam Football',
    'Football Scouting Trials',
    'Youth Academies',
    'Village Tournament Management',
    'Turiya Football',
  ],
  authors: [{ name: 'Turiya Football Network' }],
  metadataBase: new URL('https://turiyafootball.org'),
  openGraph: {
    title: 'Turiya Football | Grassroots Sports Business System',
    description:
      'Discover village talent, operate verified tournaments, and build economically sustainable grassroots sports communities.',
    url: 'https://turiyafootball.org',
    siteName: 'Turiya Football',
    images: [
      {
        url: '/assets/0A6A0673.JPG',
        width: 1200,
        height: 630,
        alt: 'Turiya Football Tournament & Grassroots Match Action',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Turiya Football | Grassroots Sports Business System',
    description: 'Empowering grassroots football communities and village talent.',
    images: ['/assets/0A6A0673.JPG'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Marcellus&family=Outfit:wght@300;400;500;600&family=Tenor+Sans&display=swap"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
