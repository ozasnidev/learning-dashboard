export function DayCard({ id, title, practice, duration, onStatusChange }) {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('completedDays') || '[]')
    setChecked(stored.includes(id))
  }, [id])

  const toggleChecked = () => {
    const stored = JSON.parse(localStorage.getItem('completedDays') || '[]')
    let updated

    if (checked) {
      updated = stored.filter(dayId => dayId !== id)
    } else {
      updated = [...stored, id]
    }

    localStorage.setItem('completedDays', JSON.stringify(updated))
    setChecked(!checked)

    if (onStatusChange) onStatusChange()
  }

  return (
    <div className="bg-gray-700 p-3 rounded-lg flex items-start justify-between">
      <div className={`${checked ? 'opacity-60' : ''}`}>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-300">⏱️ {duration} — 🧪 {practice}</p>
      </div>
      <label className="ml-4 flex items-center space-x-2 cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={toggleChecked}
          className="form-checkbox h-5 w-5 text-green-500 bg-gray-800 border-gray-500 rounded focus:ring-0"
        />
        <span className="text-xs text-green-300">Hecho</span>
      </label>
    </div>
  )
}