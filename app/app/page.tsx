import { redirect } from 'next/navigation';
import { PLAYSTORE_APP_URL } from '@/components/navbar/Navbar';

/**
 * Route: /app
 * Redirects visitors directly to the Google Play Store app listing.
 */
export default function AppPage() {
  redirect(PLAYSTORE_APP_URL);
}
