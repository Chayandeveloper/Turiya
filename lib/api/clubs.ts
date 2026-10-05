import { apiClient } from './client';
import { Club } from '@/types';
import { CLUBS_DATA } from '@/lib/constants/mock-data';

export async function getClubs(): Promise<Club[]> {
  return apiClient<Club[]>('/clubs', { method: 'GET' }, CLUBS_DATA);
}

export async function getClubBySlug(slug: string): Promise<Club | null> {
  const item = CLUBS_DATA.find((c) => c.slug === slug) || null;
  return apiClient<Club | null>(`/clubs/${slug}`, { method: 'GET' }, item);
}
