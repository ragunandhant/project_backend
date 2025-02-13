"use client";

import { Trophy } from 'lucide-react';
import { LeaderboardRow } from '@/components/LeaderboardRow';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { useEffect, useState } from 'react';

export type Entry = {
  id: string; // UUID
  name1: string;
  name2: string | null; // Optional field
  cartno: string;
  time: number; // Double precision
  created_at: Date;
  updated_at: Date;
  categoriesId: string; // UUID
};

type ApiResponse = {
  message: string;
  error: boolean;
  error_message: string | null;
  data: Entry[];
  contestName: string;
};

export default function LeaderboardPage({
  params,
}: {
  params: Promise<{ id: string; contestid: string }>;
}) {
  const [results, setResults] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);
  const [contestName, setContestName] = useState<string | null>(null);
  const [raceId, setRaceId] = useState<string | null>(null);
  const [contestId, setContestId] = useState<string | null>(null);

  useEffect(() => {
    const fetchParams = async () => {
      const { id, contestid } = await params;
      setRaceId(id);
      setContestId(contestid);
    };

    fetchParams();
  }, [params]);

  useEffect(() => {
    if (!raceId || !contestId) return;

    const fetchData = async () => {
      try {
        const response = await fetch(`/api/category/${contestId}`);
        const data: ApiResponse = await response.json();
        setContestName(data.contestName);
        if (!data.error && data.data) {
          const sortedResults = data.data.sort((a, b) => a.time - b.time);
          setResults(sortedResults);
        }
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [contestId, raceId]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-amber-50 p-4">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Trophy className="w-8 h-8 text-amber-700 mr-2" />
          <h1 className="text-2xl font-bold text-amber-900">
            {contestName ? contestName.slice(0, 5) : 'Race'} Scoreboard
          </h1>
        </div>

        <div className="space-y-2">
          {results.map((result, index) => (
            <LeaderboardRow
              key={result.id}
              result={result}
              position={index + 1}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
