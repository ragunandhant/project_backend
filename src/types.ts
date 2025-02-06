
export interface Race {
  id: string;
  name: string;
  description: string;
  date: string;
  location: string;
}

export interface ApiResponse<T> {
  message: string;
  error: boolean;
  error_message: string | null;
  data: T;
}