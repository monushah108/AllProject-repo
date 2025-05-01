import React, { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/Theme';

export default function Card({ id, name, image, types }) {
  const [isDark] = useContext(ThemeContext);
  const [imgError, setImgError] = useState(false);

  return (
    <div
      key={id}
      className={`shadow rounded p-3 flex items-center flex-col gap-3 
        ${isDark ? 'dark:bg-gray-900 text-white' : ''}`}
    >
      <div>
        {!imgError ? (
          <img
            src={image}
            alt={`${name} image`}
            onError={() => setImgError(true)}
            className="w-24 h-24 object-contain"
          />
        ) : (
          <div
            className={`w-24 h-24 flex items-center justify-center rounded-full 
              ${isDark ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'} text-lg font-semibold`}
          >
            {name.charAt(0).toUpperCase()}
          </div>
        )}
      </div>

      <div className="space-y-2">
        <h2 className="font-semibold text-lg text-center">{name}</h2>
        {types.map((item, index) => (
          <span
            key={index}
            className="shadow rounded font-normal text-xs p-2 mx-1 font-nunito"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
