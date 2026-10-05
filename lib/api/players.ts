import { apiClient } from './client';
import { Player } from '@/types';
import { PLAYERS_DATA } from '@/lib/constants/mock-data';

export async function getPlayers(): Promise<Player[]> {
  return apiClient<Player[]>('/players', { method: 'GET' }, PLAYERS_DATA);
}

export async function getPlayerBySlug(slug: string): Promise<Player | null> {
  const item = PLAYERS_DATA.find((p) => p.slug === slug) || null;
  return apiClient<Player | null>(`/players/${slug}`, { method: 'GET' }, item);
}
