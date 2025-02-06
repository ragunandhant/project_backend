// "use client"

// import { useState } from 'react';
// import { toast } from 'react-toastify';
// import { motion } from 'framer-motion';
// import { Timer, Plus, Trash2 } from 'lucide-react';

// interface BullEntry {
//   bullNumber: string;
//   completionTime: string;
// }

// export default function BullResultFormPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const [entries, setEntries] = useState<BullEntry[]>([
//     { bullNumber: '', completionTime: '' }
//   ]);

//   const addEntry = () => {
//     setEntries(prev => [...prev, { bullNumber: '', completionTime: '' }]);
//   };

//   const removeEntry = (index: number) => {
//     setEntries(prev => prev.filter((_, i) => i !== index));
//   };

//   const updateEntry = (index: number, field: keyof BullEntry, value: string) => {
//     setEntries(prev => prev.map((entry, i) => 
//       i === index ? { ...entry, [field]: value } : entry
//     ));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       // TODO: Implement form submission with race ID from params.id
//       toast.success('Results saved successfully!');
//     } catch (error) {
//       toast.error('Failed to save results');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-amber-50 p-4">
//       <div className="max-w-md mx-auto">
//         <div className="flex items-center justify-center mb-8">
//           <Timer className="w-8 h-8 text-amber-700 mr-2" />
//           <h1 className="text-2xl font-bold text-amber-900">Enter Race Results</h1>
//         </div>

//         <motion.form
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-white p-6 rounded-xl shadow-lg"
//           onSubmit={handleSubmit}
//         >
//           {entries.map((entry, index) => (
//             <div key={index} className="mb-6 relative">
//               <div className="flex gap-4">
//                 <div className="flex-1">
//                   <label 
//                     htmlFor={`bull-${index}`}
//                     className="block text-sm font-medium text-amber-900 mb-1"
//                   >
//                     Bull Number
//                   </label>
//                   <input
//                     type="text"
//                     id={`bull-${index}`}
//                     value={entry.bullNumber}
//                     onChange={(e) => updateEntry(index, 'bullNumber', e.target.value)}
//                     className="w-full px-3 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
//                     required
//                   />
//                 </div>
//                 <div className="flex-1">
//                   <label 
//                     htmlFor={`time-${index}`}
//                     className="block text-sm font-medium text-amber-900 mb-1"
//                   >
//                     Time (seconds)
//                   </label>
//                   <input
//                     type="number"
//                     id={`time-${index}`}
//                     value={entry.completionTime}
//                     onChange={(e) => updateEntry(index, 'completionTime', e.target.value)}
//                     step="0.01"
//                     className="w-full px-3 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
//                     required
//                   />
//                 </div>
//                 {entries.length > 1 && (
//                   <button
//                     type="button"
//                     onClick={() => removeEntry(index)}
//                     className="absolute -right-2 -top-2 p-1 bg-red-100 text-red-600 rounded-full hover:bg-red-200"
//                   >
//                     <Trash2 className="w-4 h-4" />
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))}

//           <button
//             type="button"
//             onClick={addEntry}
//             className="w-full mb-4 flex items-center justify-center gap-2 py-2 px-4 border-2 border-dashed border-amber-300 rounded-lg text-amber-700 hover:bg-amber-50"
//           >
//             <Plus className="w-4 h-4" />
//             Add Another Bull
//           </button>

//           <button
//             type="submit"
//             className="w-full bg-amber-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-amber-700 transition-colors"
//           >
//             Save Results
//           </button>
//         </motion.form>
//       </div>
//     </div>
//   );
// }

import React from 'react'

function page() {
  return (
    <div>page</div>
  )
}

export default page