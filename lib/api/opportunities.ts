import { apiClient } from './client';
import { Opportunity } from '@/types';
import { OPPORTUNITIES_DATA } from '@/lib/constants/mock-data';

export async function getOpportunities(filterCategory?: string): Promise<Opportunity[]> {
  const data = filterCategory && filterCategory !== 'All'
    ? OPPORTUNITIES_DATA.filter((o) => o.category === filterCategory)
    : OPPORTUNITIES_DATA;
  return apiClient<Opportunity[]>('/opportunities', { method: 'GET' }, data);
}

export async function getOpportunityBySlug(slug: string): Promise<Opportunity | null> {
  const item = OPPORTUNITIES_DATA.find((o) => o.slug === slug) || null;
  return apiClient<Opportunity | null>(`/opportunities/${slug}`, { method: 'GET' }, item);
}

export async function applyForOpportunity(opportunitySlug: string, application: any): Promise<{ success: boolean; message: string }> {
  return apiClient<{ success: boolean; message: string }>(
    `/opportunities/${opportunitySlug}/apply`,
    {
      method: 'POST',
      body: JSON.stringify(application),
    },
    { success: true, message: 'Your application has been submitted successfully to the selection committee!' }
  );
}
