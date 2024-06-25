import React from "react"

const InfoSection: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">Welcome to My Extension</h2>
      <p className="text-sm text-gray-400 mb-4">
        This extension helps you analyze the reading time of articles. Click the
        button below to analyze the current page.
      </p>
      <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
        Surmarize page
      </button>
    </div>
  )
}

export default InfoSection
