"use client";

import { useState, useEffect } from "react";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { DistanceCard } from "@/components/DistanceCard";
import { use } from "react";

type Distance = {
  name: string;
  raceId: string;
  id: string;
};
export default function DistanceSelectionPage({ params }: { params: { id: string } }) {
  const raceId = use(params).id;

  const [distances, setDistances] = useState<Distance[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDistances() {
      try {
        const response = await fetch(`/api/race/${raceId}`);
        if (!response.ok) throw new Error("Failed to fetch distances");
        const data = await response.json();
        console.log(data);
        setDistances(data.data);
      } catch (err) {
        setError("Error fetching race distances");
      } finally {
        setLoading(false);
      }
    }
    
    if (raceId) {
      fetchDistances();
    }
  }, [raceId]);

  if (!raceId) return null;
  if (loading) return <LoadingSpinner />;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="min-h-screen bg-amber-50 p-4">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-amber-900 text-center mb-8">
          Select Race Distance
        </h2>

        <div className="space-y-4">
          {distances?.map((distance, index) => (
            <DistanceCard key={index} distance={distance.name} raceId={raceId} index={index} contestId={distance.id} />
          ))}
        </div>
      </div>
    </div>
  );
}


{/* <DistanceCard distance="200m" raceId={raceId} index={0} /> */}