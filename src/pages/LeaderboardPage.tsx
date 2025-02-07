// import { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Trophy } from 'lucide-react';
// import { LeaderboardRow } from '../components/LeaderboardRow';
// import { LoadingSpinner } from '../components/LoadingSpinner';
// import type { BullResult } from '../types';

// const MOCK_RESULTS: BullResult[] = [
//   { id: '1', bullNumber: '101', completionTime: 15.42, raceDistance: '200m', raceId: '1' },
//   { id: '2', bullNumber: '205', completionTime: 15.67, raceDistance: '200m', raceId: '1' },
//   { id: '3', bullNumber: '156', completionTime: 15.89, raceDistance: '200m', raceId: '1' },
//   { id: '4', bullNumber: '178', completionTime: 16.12, raceDistance: '200m', raceId: '1' },
//   { id: '5', bullNumber: '143', completionTime: 16.45, raceDistance: '200m', raceId: '1' },
// ].sort((a, b) => a.completionTime - b.completionTime);

// export const LeaderboardPage = () => {
//   const { raceId, distance } = useParams<{ raceId: string; distance: string }>();
//   const [loading] = useState(false);

//   if (loading) return <LoadingSpinner />;
//   if (!raceId || !distance) return null;

//   return (
//     <div className="min-h-screen bg-amber-50 p-4">
//       <div className="max-w-md mx-auto">
//         <div className="flex items-center justify-center mb-8">
//           <Trophy className="w-8 h-8 text-amber-700 mr-2" />
//           <h1 className="text-2xl font-bold text-amber-900">
//             {distance} Leaderboard
//           </h1>
//         </div>

//         <div className="space-y-2">
//           {MOCK_RESULTS.map((result, index) => (
//             <LeaderboardRow
//               key={result.id}
//               result={result}
//               position={index + 1}
//               index={index}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

import React from 'react'

function LeaderboardPage() {
  return (
    <div>LeaderboardPage</div>
  )
}

export default LeaderboardPage