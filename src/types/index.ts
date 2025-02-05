export interface Race {
  id: string;
  name: string;
  date: string;
}

export interface BullResult {
  id: string;
  bullNumber: string;
  completionTime: number;
  raceDistance: '200m' | '300m';
  raceId: string;
}

export interface RaceFormData {
  name: string;
  date: string;
}