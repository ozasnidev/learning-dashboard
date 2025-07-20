export function ProgressBar({ progress }) {
  return (
    <div>
      <div className="w-full bg-gray-600 h-3 rounded">
        <div
          className="bg-green-500 h-3 rounded transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-xs text-gray-300 mt-1">{progress}% completado</p>
    </div>
  )
}