import { useEffect, useState } from 'react'
import { ProgressBar } from '../widgets/ProgressBar'
import { DayCard } from './DayCard'

export function WeekCard({ title, days }) {
  const [completedDays, setCompletedDays] = useState([])

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('completedDays') || '[]')
    const weekDayIds = days.map(day => day.id)
    const completed = weekDayIds.filter(id => stored.includes(id))
    setCompletedDays(completed)
  }, [days])

  const totalDays = days.length
  const progress = Math.floor((completedDays.length / totalDays) * 100)

  // Actualizador cuando un checkbox cambia
  const handleStatusChange = () => {
    const stored = JSON.parse(localStorage.getItem('completedDays') || '[]')
    const weekDayIds = days.map(day => day.id)
    const completed = weekDayIds.filter(id => stored.includes(id))
    setCompletedDays(completed)
  }

  return (
    <div className="bg-gray-800 rounded-lg p-4 mb-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <ProgressBar progress={progress} />
      <details className="mt-2">
        <summary className="cursor-pointer text-green-400">
          Ver días ({totalDays})
        </summary>
        <div className="mt-2 space-y-2">
          {days.map((day, i) => (
            <DayCard key={i} {...day} onStatusChange={handleStatusChange} />
          ))}
        </div>
      </details>
    </div>
  )
}