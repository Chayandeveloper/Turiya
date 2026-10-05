import { apiClient } from './client';
import { NewsItem } from '@/types';
import { NEWS_DATA } from '@/lib/constants/mock-data';

export async function getNews(): Promise<NewsItem[]> {
  return apiClient<NewsItem[]>('/news', { method: 'GET' }, NEWS_DATA);
}
