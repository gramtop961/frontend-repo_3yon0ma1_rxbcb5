import React from 'react';

// Simple SVG bar chart without extra deps
const data = [72, 65, 80, 60, 74, 88, 70];
const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const OccupancyChart = () => {
  const max = Math.max(...data, 100);
  return (
    <div className="bg-white/80 backdrop-blur border border-slate-200 rounded-xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-slate-900">Weekly Occupancy</h3>
        <span className="text-xs text-slate-500">% of capacity</span>
      </div>
      <div className="h-48 flex items-end gap-3">
        {data.map((v, i) => (
          <div key={i} className="flex-1 flex flex-col items-center justify-end">
            <div
              className="w-full max-w-[36px] rounded-t-md bg-gradient-to-t from-blue-600 to-blue-400"
              style={{ height: `${(v / max) * 100}%` }}
            />
            <span className="mt-2 text-xs text-slate-500">{labels[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OccupancyChart;
