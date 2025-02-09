import React, { useEffect, useState } from 'react';

export default function StatsComponent() {
  const stats = [
    { label: 'Total Days', value: 1825 },
    { label: 'Total Patients', value: 50000 },
    { label: 'Quality Rating', value: 98, noPlus: true, isPercentage: true },
    { label: 'Years of Experience', value: 10 },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, index) =>
          count < stats[index].value ? count + Math.ceil(stats[index].value / 100) : stats[index].value
        )
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-5 max-w-6xl mx-auto py-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="relative p-8 rounded-lg w-60 text-center text-white 
                     bg-white/10 backdrop-blur-md border border-white/20 
                     shadow-lg shadow-white/30 hover:shadow-xl hover:shadow-white/40 transition"
        >
          {!stat.noPlus && <i className="fa-solid fa-plus absolute top-3 right-3 text-white text-xl"></i>}
          <h3 className="text-5xl font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]">
            {counts[index]}{stat.isPercentage ? '%' : ''}
          </h3>
          <p className="text-lg mt-3 font-semibold text-gray-200 drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
