import React from 'react';
import { ArrowRight } from 'lucide-react';


const Start = () => {
  
  return (
    <div className="bg-[#2B292A] min-h-screen p-6 flex flex-col justify-between">
      {/* Food illustrations */}
      <div className="relative h-72">
        {/* Circular food items */}
        <img src="../public/1.png" alt="food" />
      </div>

      {/* Text content */}
      <div className="space-y-2 mb-12">
        <div className="text-4xl font-bold">
          <span className="text-emerald-400">Eat</span>
          <span className="text-white"> Well,</span>
        </div>
        <div className="text-4xl font-bold">
          <span className="text-emerald-400">Feel</span>
          <span className="text-white"> Well,</span>
        </div>
        <div className="text-4xl font-bold">
          <span className="text-emerald-400">Live</span>
          <span className="text-white"> Well.</span>
        </div>
      </div>

      {/* Bottom navigation dots and button */}
      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          <div className="w-2 h-2 rounded-full bg-gray-500"></div>
          <div className="w-2 h-2 rounded-full bg-gray-500"></div>
          <div className="w-8 h-2 rounded-full bg-emerald-400"></div>
        </div>
        <button className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
          <ArrowRight className="w-6 h-6 text-black" />
        </button>
      </div>
    </div>
  );
};

export default Start;
