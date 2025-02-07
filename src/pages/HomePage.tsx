// import { useState } from 'react';
// import { RaceCard } from '../components/RaceCard';
// import { LoadingSpinner } from '../components/LoadingSpinner';
// import { Skull as Bull } from 'lucide-react';

// const MOCK_RACES = [
//   { id: '1', name: 'Pongal Bull Race 2024', date: '2024-01-15' },
//   { id: '2', name: 'Aadi Festival Race', date: '2024-07-20' },
//   { id: '3', name: 'Tamil Heritage Race', date: '2024-09-10' },
// ];

// export const HomePage = () => {
//   const [loading] = useState(false);

//   if (loading) return <LoadingSpinner />;

//   return (
//     <div className="min-h-screen bg-amber-50 p-4">
//       <div className="max-w-md mx-auto">
//         <div className="flex items-center justify-center mb-8">
//           <Bull className="w-8 h-8 text-amber-700 mr-2" />
//           <h1 className="text-2xl font-bold text-amber-900">Tamil Bull Race</h1>
//         </div>
        
//         <div className="space-y-4">
//           {MOCK_RACES.map((race, index) => (
//             <RaceCard key={race.id} race={race} index={index} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };