'use client'

import { useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'

const kits = [
  { id: 1, name: 'ECorp', colors: ['bg-green-500', 'bg-white'] },
  { id: 2, name: 'ICorp', colors: ['bg-yellow-400', 'bg-white'] },
  { id: 3, name: 'The Agency', colors: ['bg-purple-600', 'bg-white'] },
]

export default function CardSection() {
  const [selected, setSelected] = useState(3)

  return (
    <section id="cards" className="flex justify-center items-center min-h-[80vh] bg-gradient-to-br from-black via-gray-900 to-black px-4 py-16">
      <div className="bg-[#1e1e1e] text-white w-full max-w-md rounded-xl p-6 shadow-xl border border-gray-700 relative">
        <h2 className="text-lg font-semibold mb-4">Brand Kits</h2>
        <div className="space-y-4">
          {kits.map(kit => (
            <div
              key={kit.id}
              onClick={() => setSelected(kit.id)}
              className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer transition-colors duration-300
                ${selected === kit.id ? 'border-2 border-purple-500 bg-[#2c2c2c]' : 'bg-[#2a2a2a]'}
              `}
            >
              {/* Selection Indicator */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-4 h-4 rounded-sm border ${
                    selected === kit.id ? 'bg-purple-500 border-purple-500' : 'border-gray-500'
                  }`}
                />
                <div className="flex items-center gap-2">
                  {kit.colors.map((c, i) => (
                    <div key={i} className={`w-3 h-3 rounded-full ${c}`} />
                  ))}
                </div>
                <span className="text-sm font-medium">{kit.name}</span>
              </div>

              {/* Settings Icon */}
              <SlidersHorizontal className="w-4 h-4 text-gray-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
