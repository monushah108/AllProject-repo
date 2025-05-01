import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/Theme';

export default function Shimmer() {
  // ${isDark && 'dark:bg-gray-900 text-white'} 
  const [isDark, setIsDark] = useContext(ThemeContext);

  return (
    <>
    {Array.from({ length: 9 }).map((_, i) => (
      <div
        key={i}
        className={`animate-pulse p-4  rounded-md shadow flex flex-col items-center ${isDark && 'dark:bg-gray-900 text-white'} `}
        
      >
        <div className="w-16 h-16 bg-gray-300 rounded-full mb-4" />
        <div className="h-4 w-24 bg-gray-300 rounded mb-2" />
        <div className="flex gap-2">
          <div className="h-4 w-12 bg-gray-300 rounded" />
          <div className="h-4 w-12 bg-gray-300 rounded" />
        </div>
      </div>
    ))}
    </>
  )
}
