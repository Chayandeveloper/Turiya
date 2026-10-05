import { apiClient } from './client';
import { Academy } from '@/types';
import { ACADEMIES_DATA } from '@/lib/constants/mock-data';

export async function getAcademies(): Promise<Academy[]> {
  return apiClient<Academy[]>('/academies', { method: 'GET' }, ACADEMIES_DATA);
}

export async function getAcademyBySlug(slug: string): Promise<Academy | null> {
  const item = ACADEMIES_DATA.find((a) => a.slug === slug) || null;
  return apiClient<Academy | null>(`/academies/${slug}`, { method: 'GET' }, item);
}
