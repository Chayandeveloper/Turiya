/**
 * Turiya Football - Laravel API Client
 * Configured to connect directly with the Laravel / PHP backend REST API.
 * Falls back gracefully to typed data mocks for seamless frontend development and static evaluation.
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_LARAVEL_API_URL || 'http://127.0.0.1:8000/api/v1';
const USE_MOCKS = process.env.NEXT_PUBLIC_USE_LARAVEL_API !== 'true';

export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: 'success' | 'error';
  meta?: {
    currentPage?: number;
    totalPages?: number;
    totalCount?: number;
  };
}

export async function apiClient<T>(
  endpoint: string, 
  options?: RequestInit, 
  fallbackMock?: T
): Promise<T> {
  if (USE_MOCKS && fallbackMock !== undefined) {
    // Simulate slight realistic network latency if needed, or return mock
    return fallbackMock;
  }

  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    if (!res.ok) {
      if (fallbackMock !== undefined) {
        console.warn(`[Turiya API] Remote endpoint ${endpoint} returned ${res.status}. Falling back to mock data.`);
        return fallbackMock;
      }
      throw new Error(`API Error: ${res.statusText} (${res.status})`);
    }

    const json: ApiResponse<T> = await res.json();
    return json.data;
  } catch (err) {
    if (fallbackMock !== undefined) {
      console.warn(`[Turiya API] Network request to ${endpoint} failed. Using mock data.`, err);
      return fallbackMock;
    }
    throw err;
  }
}
