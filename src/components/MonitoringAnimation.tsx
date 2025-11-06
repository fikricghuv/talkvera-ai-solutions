import { useState, useEffect } from 'react';
import { BarChart3, TrendingUp, Clock, DollarSign } from 'lucide-react';

const DashboardAnalyticsAnimation = () => {
  const [progress, setProgress] = useState(0);
  const [hours, setHours] = useState(0);
  const [savings, setSavings] = useState(0);
  const [barHeights, setBarHeights] = useState([30, 45, 60, 40, 70, 55]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev + 1) % 101);
      
      // Animasi angka jam
      setHours(prev => {
        const target = 24 + Math.sin(Date.now() / 1000) * 4;
        return prev + (target - prev) * 0.1;
      });
      
      // Animasi angka uang
      setSavings(prev => {
        const target = 5000 + Math.sin(Date.now() / 800) * 1000;
        return prev + (target - prev) * 0.1;
      });
      
      // Animasi bar chart
      if (progress % 20 === 0) {
        setBarHeights(barHeights.map(() => 
          Math.random() * 50 + 30
        ));
      }
    }, 50);

    return () => clearInterval(interval);
  }, [progress, barHeights]);

  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      <div className="relative w-full max-w-md aspect-square">
        {/* Glow effect background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl animate-pulse"></div>
        
        {/* Main dashboard container */}
        <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 shadow-2xl border border-gray-700/50 backdrop-blur-sm">
          {/* Header with icon */}
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <BarChart3 className="w-6 h-6 text-blue-400" />
            </div>
            <div className="flex-1">
              <div className="h-2 bg-gray-700 rounded-full w-32"></div>
              <div className="h-1.5 bg-gray-700 rounded-full w-20 mt-2"></div>
            </div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Hours saved card */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl p-4 border border-blue-500/20">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <div className="h-1.5 bg-blue-400/30 rounded-full w-12"></div>
              </div>
              <div className="text-2xl font-bold text-white">
                {hours.toFixed(1)}
              </div>
              <div className="text-xs text-gray-400 mt-1">jam/hari</div>
            </div>

            {/* Money saved card */}
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-xl p-4 border border-green-500/20">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-green-400" />
                <div className="h-1.5 bg-green-400/30 rounded-full w-12"></div>
              </div>
              <div className="text-2xl font-bold text-white">
                ${savings.toFixed(0)}
              </div>
              <div className="text-xs text-gray-400 mt-1">hemat/hari</div>
            </div>
          </div>

          {/* Bar chart */}
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              <div className="h-1.5 bg-gray-700 rounded-full w-24"></div>
            </div>
            
            <div className="flex items-end justify-between gap-2 h-32">
              {barHeights.map((height, index) => (
                <div
                  key={index}
                  className="flex-1 bg-gradient-to-t from-cyan-500 to-blue-500 rounded-t-lg transition-all duration-700 ease-out relative group"
                  style={{ height: `${height}%` }}
                >
                  {/* Tooltip on hover */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 px-2 py-1 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {(height * 10).toFixed(0)}%
                  </div>
                </div>
              ))}
            </div>
            
            {/* X-axis labels */}
            <div className="flex justify-between mt-2">
              {['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'].map((day, index) => (
                <div key={index} className="text-xs text-gray-500 flex-1 text-center">
                  {day}
                </div>
              ))}
            </div>
          </div>

          {/* Progress indicator */}
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-xs text-gray-400">
              <span>Real-time monitoring</span>
              <span>{progress}%</span>
            </div>
            <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-100"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAnalyticsAnimation;