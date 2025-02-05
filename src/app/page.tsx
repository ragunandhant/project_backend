"use client";

import { useState } from "react";
import { RaceCard } from "../components/RaceCard";
import { LoadingSpinner } from "../components/LoadingSpinner";
import Image from "next/image";

const MOCK_RACES = [
  { id: "1", name: "சி. கோபால்புரம் பிரிவு ரேக்ளா போட்டி", date: "2025-01-16" },
  { id: "2", name: "பெரியபட்டி ரேக்ளா போட்டி", date: "2025-01-26" },
  { id: "3", name: "வெள்ளலூர் ரேக்ளா போட்டி ", date: "2025-02-02" },
  { id: "4", name: "சுங்கார மடக்கு ரேக்ளா போட்டி", date: "2025-02-08" },
];

export default function Page() {
  const [loading] = useState(false);

  if (loading) return <LoadingSpinner />;

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
          {MOCK_RACES.map((race, index) => (
            <RaceCard key={race.id} race={race} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
