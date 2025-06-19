'use client'

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ReferenceLine,
} from 'recharts'
import { useState } from 'react'

const data = [
  { name: 'A', value1: 549, value2: 278 },
  { name: 'B', value1: 875, value2: 0 },
  { name: 'C', value1: 617, value2: 506 },
  { name: 'D', value1: 36, value2: 185 },
  { name: 'E', value1: 191, value2: 122 },
  { name: 'F', value1: 550, value2: 881 },
  { name: 'G', value1: 539, value2: 269 },
  { name: 'H', value1: 29, value2: 82 },
  { name: 'I', value1: 44, value2: 109 },
  { name: 'J', value1: 106, value2: 607 },
  { name: 'K', value1: 528, value2: 0 },
]

export default function GraphSection() {
  const [type, setType] = useState('All')
  const [status, setStatus] = useState('Complete')

  const toggle = (val, setVal, current) => setVal(val === current ? val : val)

  return (
    <section id="graph" className="bg-white text-black py-16 px-6 sm:px-10 lg:px-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h2 className="text-4xl font-semibold">EMBODIED<br /><span className="text-[#7b4c4c]">CARBON</span> EMISSIONS</h2>
          <p className="text-sm text-gray-600 mt-2">Intensity measured by kgCO₂e/m²</p>
        </div>
        <a href="#" className="text-sm underline flex items-center gap-1">
          Download the data <span className="text-xl">↓</span>
        </a>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap items-center gap-4 mb-8">
        <div className="flex gap-2 items-center">
          <span className="font-medium">Type</span>
          {['Refurbishment', 'New build', 'All'].map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`px-4 py-1 rounded-full border ${
                type === t ? 'bg-[#7b4c4c] text-white' : 'bg-white text-black'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="flex gap-2 items-center">
          <span className="font-medium">Status</span>
          {['Complete', 'Estimate'].map((s) => (
            <button
              key={s}
              onClick={() => setStatus(s)}
              className={`px-4 py-1 rounded-full border ${
                status === s ? 'bg-[#7b4c4c] text-white' : 'bg-white text-black'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Key */}
      <div className="text-sm text-gray-600 mb-2 space-y-1">
        <p><span className="border-t-2 border-dashed border-gray-400 inline-block w-5 mr-2" />500 kgCO₂e/m² – Embodied Carbon Target 2030</p>
        <p><span className="border-t-2 border-black inline-block w-5 mr-2" />600 kgCO₂e/m² – Embodied Carbon Target 2025</p>
      </div>

      {/* Chart */}
      <div className="w-full h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'Embodied carbon intensity (kgCO₂e/m²)', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <ReferenceLine y={500} stroke="#999" strokeDasharray="5 5" />
            <ReferenceLine y={600} stroke="black" />
            <Bar dataKey="value1" fill="#7b4c4c" />
            <Bar dataKey="value2" fill="#c6a1a1" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
