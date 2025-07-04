import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigationButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-4 p-4">
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        ⬅ Back
      </button>
      <button
        onClick={() => navigate(1)}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
      >
        Forward ➡
      </button>
    </div>
  );
};

export default NavigationButtons;
