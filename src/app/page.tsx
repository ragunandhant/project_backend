"use client";

import { useEffect, useState } from "react";
import { RaceCard } from "../components/RaceCard";
import { LoadingSpinner } from "../components/LoadingSpinner";
import Image from "next/image";
import type { Race, } from "../types";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [races, setRaces] = useState<Race[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRaces = async () => {
      try {
        const response = await fetch('/api/race');
        const data = await response.json();
        console.log(data,"12345");
        
        
        if (data.error) {
          throw new Error(data.error_message || 'Failed to fetch races');
        }
        
        setRaces(data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchRaces();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 text-center p-4">{error}</div>;

  return (
    <div className="min-h-screen bg-amber-50 p-4">
      <div className="max-w-md mx-auto">
        {/* Image above heading */}
        <div className="flex justify-center mb-4">
          <Image
            src="/WhatsApp Image 2025-02-05 at 22.04.06_9b74fb4b.jpg"
            alt="Tamil Bull Race"
            width={160}
            height={160}
            className="object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="flex items-center justify-center mb-8">
          <h1 className="text-2xl font-bold text-amber-900 text-center">ரேக்ளா தலைமைக் சங்கம் தமிழ்நாடு</h1>
        </div>

        <div className="space-y-4">
          {races.map((race, index) => (
            <RaceCard key={race.id} race={race} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
