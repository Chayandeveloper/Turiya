import { apiClient } from './client';
import { Story } from '@/types';
import { STORIES_DATA } from '@/lib/constants/mock-data';

export async function getStories(): Promise<Story[]> {
  return apiClient<Story[]>('/stories', { method: 'GET' }, STORIES_DATA);
}

export async function getStoryBySlug(slug: string): Promise<Story | null> {
  const item = STORIES_DATA.find((s) => s.slug === slug) || null;
  return apiClient<Story | null>(`/stories/${slug}`, { method: 'GET' }, item);
}
