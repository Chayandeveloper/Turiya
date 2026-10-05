import { apiClient } from './client';
import { Tournament } from '@/types';
import { TOURNAMENTS_DATA } from '@/lib/constants/mock-data';

export async function getTournaments(category?: string): Promise<Tournament[]> {
  const data = category && category !== 'All' 
    ? TOURNAMENTS_DATA.filter((t) => t.status === category || t.category === category)
    : TOURNAMENTS_DATA;
  return apiClient<Tournament[]>('/tournaments', { method: 'GET' }, data);
}

export async function getTournamentBySlug(slug: string): Promise<Tournament | null> {
  const item = TOURNAMENTS_DATA.find((t) => t.slug === slug) || null;
  return apiClient<Tournament | null>(`/tournaments/${slug}`, { method: 'GET' }, item);
}

export async function registerTournamentTeam(tournamentSlug: string, teamData: any): Promise<{ success: boolean; message: string }> {
  return apiClient<{ success: boolean; message: string }>(
    `/tournaments/${tournamentSlug}/register`,
    {
      method: 'POST',
      body: JSON.stringify(teamData),
    },
    { success: true, message: 'Your team registration has been recorded successfully! Our tournament committee will contact you.' }
  );
}
