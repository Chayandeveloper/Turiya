import { apiClient } from './client';
import { League } from '@/types';
import { LEAGUES_DATA } from '@/lib/constants/mock-data';

export async function getLeagues(): Promise<League[]> {
  return apiClient<League[]>('/leagues', { method: 'GET' }, LEAGUES_DATA);
}

export async function getLeagueBySlug(slug: string): Promise<League | null> {
  const mockItem = LEAGUES_DATA.find((l) => l.slug === slug) || null;
  return apiClient<League | null>(`/leagues/${slug}`, { method: 'GET' }, mockItem);
}
