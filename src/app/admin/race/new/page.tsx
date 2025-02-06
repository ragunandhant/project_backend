// "use client"

// import { useState } from 'react';
// import { toast } from 'react-toastify';
// import { motion } from 'framer-motion';
// import { Flag } from 'lucide-react';
// import type { RaceFormData } from '@/types';

// export default function RaceFormPage() {
//   const [formData, setFormData] = useState<RaceFormData>({
//     name: '',
//     date: '',
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       // TODO: Implement form submission
//       toast.success('Race created successfully!');
//     } catch (error) {
//       toast.error('Failed to create race');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-amber-50 p-4">
//       <div className="max-w-md mx-auto">
//         <div className="flex items-center justify-center mb-8">
//           <Flag className="w-8 h-8 text-amber-700 mr-2" />
//           <h1 className="text-2xl font-bold text-amber-900">Create New Race</h1>
//         </div>

//         <motion.form
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-white p-6 rounded-xl shadow-lg"
//           onSubmit={handleSubmit}
//         >
//           <div className="mb-4">
//             <label 
//               htmlFor="name"
//               className="block text-sm font-medium text-amber-900 mb-1"
//             >
//               Race Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               value={formData.name}
//               onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
//               className="w-full px-3 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
//               required
//             />
//           </div>

//           <div className="mb-6">
//             <label 
//               htmlFor="date"
//               className="block text-sm font-medium text-amber-900 mb-1"
//             >
//               Race Date
//             </label>
//             <input
//               type="date"
//               id="date"
//               value={formData.date}
//               onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
//               className="w-full px-3 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-amber-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-amber-700 transition-colors"
//           >
//             Create Race
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