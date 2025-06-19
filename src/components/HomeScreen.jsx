'use client'

import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import GraphSection from './GraphSection'
import CustomerSection from './CustomerSection'
import CardsSection from './CardSection'
import StatisticsSection from './StatisticsSection'


export default function HomeScreen() {
  const [progress, setProgress] = useState(100)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev <= 0) {
          clearInterval(interval)
          setIsLoaded(true)
          return 0
        }
        return prev - 1
      })
    }, 30)
    return () => clearInterval(interval)
  }, [])

  if (!isLoaded) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
        <div className="w-full max-w-2xl flex flex-col items-center gap-8">
          <div className="w-full bg-black border border-white rounded-full h-6 overflow-hidden">
            <div
              className="bg-white h-full transition-all duration-100 ease-linear"
              style={{ width: `${progress}%`, marginLeft: `${100 - progress}%` }}
            />
          </div>
          <p className="text-lg font-semibold">Loading {100 - progress}%</p>
        </div>
      </main>
    )
  }

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen transition-colors duration-300">
      <Navbar />
      <div className="p-4 sm:p-6 lg:p-8 space-y-20">
        <GraphSection />
        <CustomerSection />
        <StatisticsSection />
        <CardsSection />

      </div>
    </div>
  )
}
