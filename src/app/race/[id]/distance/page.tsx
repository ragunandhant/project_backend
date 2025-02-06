"use client";

import { DistanceCard } from '@/components/DistanceCard';
import { use } from 'react';

export default function DistanceSelectionPage({ params }: { params: { id: string } }) {

  const raceId = use(params).id;
  

  if (!raceId) return null;

  return (
    <div className="min-h-screen bg-amber-50 p-4">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-amber-900 text-center mb-8">
          Select Race Distance
        </h2>

        <div className="space-y-4">
          <DistanceCard distance="200m" raceId={raceId} index={} />
          <DistanceCard distance="300m" raceId={raceId} index={} />
        </div>
      </div>
    </div>
  );
}
