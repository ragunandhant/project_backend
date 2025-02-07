"use client"

import { useState, useEffect } from 'react';
import { use } from 'react'; // Import `use` to resolve the Promise
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { Timer, Plus, Trash2 } from 'lucide-react';

interface BullEntry {
  bullNumber: string;
  completionTime: string;
}

export default function BullResultFormPage({
  params,
}: {
  params: Promise<{ id: string }>; // params is a Promise
}) {
  const { id } = use(params); // Use `use` to unwrap the Promise and get `id`

  const [entries, setEntries] = useState<BullEntry[]>([
    { bullNumber: '', completionTime: '' },
  ]);
  const [password, setPassword] = useState(''); // Password state
  const [categoryId, setCategoryId] = useState<string | null>(null);

  // Set categoryId once `id` is resolved
  useEffect(() => {
    if (id) {
      setCategoryId(id);
    }
  }, [id]);

  const addEntry = () => {
    setEntries((prev) => [...prev, { bullNumber: '', completionTime: '' }]);
  };

  const removeEntry = (index: number) => {
    setEntries((prev) => prev.filter((_, i) => i !== index));
  };

  const updateEntry = (index: number, field: keyof BullEntry, value: string) => {
    setEntries((prev) =>
      prev.map((entry, i) =>
        i === index ? { ...entry, [field]: value } : entry
      )
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!categoryId) {
      toast.error('Category ID is missing');
      return;
    }
    try {
      // Submit each entry
      for (const entry of entries) {
        const response = await fetch('/api/entries', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name1: '', 
            name2: '', 
            cartno: entry.bullNumber,
            time: entry.completionTime,
            categoriesId: categoryId,
            password: password, // Include password in the request
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          if (response.status === 403) {
            toast.error('Invalid password');
            return;
          }
          throw new Error(data.error_message || 'Something went wrong');
        }
      }

      toast.success('Results saved successfully!');
      // Reset form
      setEntries([{ bullNumber: '', completionTime: '' }]);
      setPassword('');
    } catch (error) {
      console.error(error);
      toast.error('Failed to save results');
    }
  };

  return (
    <div className="min-h-screen bg-amber-50 p-4">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Timer className="w-8 h-8 text-amber-700 mr-2" />
          <h1 className="text-2xl font-bold text-amber-900">Enter Race Results</h1>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-xl shadow-lg"
          onSubmit={handleSubmit}
        >
          {entries.map((entry, index) => (
            <div key={index} className="mb-6 relative">
              <div className="flex gap-4">
                <div className="flex-1">
                  <label
                    htmlFor={`bull-${index}`}
                    className="block text-sm font-medium text-amber-900 mb-1"
                  >
                    Bull Number
                  </label>
                  <input
                    type="text"
                    id={`bull-${index}`}
                    value={entry.bullNumber}
                    onChange={(e) =>
                      updateEntry(index, 'bullNumber', e.target.value)
                    }
                    className="w-full px-3 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor={`time-${index}`}
                    className="block text-sm font-medium text-amber-900 mb-1"
                  >
                    Time (seconds)
                  </label>
                  <input
                    type="number"
                    id={`time-${index}`}
                    value={entry.completionTime}
                    onChange={(e) =>
                      updateEntry(index, 'completionTime', e.target.value)
                    }
                    step="0.01"
                    className="w-full px-3 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                </div>
                {entries.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeEntry(index)}
                    className="absolute -right-2 -top-2 p-1 bg-red-100 text-red-600 rounded-full hover:bg-red-200"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addEntry}
            className="w-full mb-4 flex items-center justify-center gap-2 py-2 px-4 border-2 border-dashed border-amber-300 rounded-lg text-amber-700 hover:bg-amber-50"
          >
            <Plus className="w-4 h-4" />
            Add Another Bull
          </button>

          {/* Password field before submit button */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-amber-900 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-amber-700 transition-colors"
          >
            Save Results
          </button>
        </motion.form>
      </div>
    </div>
  );
}
