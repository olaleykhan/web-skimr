// src/components/Header.tsx

import React from "react"

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">My Extension</h1>
        <button className="bg-gray-700 text-white px-3 py-1 rounded-lg hover:bg-gray-600">
          Settings
        </button>
      </div>
    </header>
  )
}

export default Header
