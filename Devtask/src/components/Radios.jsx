import React from 'react'

export default function Radios() {
  return (
<fieldset className="flex flex-col mb-4">
  <legend className="text-sm font-medium text-gray-800 mb-2">
    Are you an Agency?<span className="text-red-500">*</span>
  </legend>
  <div className="flex items-center space-x-6">
    <label className="flex items-center space-x-2">
      <input
        type="radio"
        name="agency"
        defaultValue="yes"
        required
        className="h-4 w-4 accent-purple-600 focus:accent-purple-700"
      />
      <span className="text-gray-800 text-sm">Yes</span>
    </label>
    <label className="flex items-center space-x-2">
      <input
        type="radio"
        name="agency"
        defaultValue="no"
        required
        className="h-4 w-4 accent-purple-600 focus:accent-purple-700"
      />
      <span className="text-gray-800 text-sm">No</span>
    </label>
  </div>
</fieldset>


  )
}
