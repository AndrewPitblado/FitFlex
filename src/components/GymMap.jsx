import { Info } from 'lucide-react';

const GymMap = ({ machines, onMachineClick }) => {
  // Helper to get color based on status
  const getStatusColor = (status) => {
    switch (status) {
      case 'busy':
        return 'fill-red-500 hover:fill-red-600';
      case 'moderate':
        return 'fill-yellow-500 hover:fill-yellow-600';
      case 'free':
        return 'fill-green-500 hover:fill-green-600';
      default:
        return 'fill-gray-300';
    }
  };

  // Handle machine click
  const handleMachineClick = (machineId) => {
    if (onMachineClick) {
      onMachineClick(machineId);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
          <Info className="w-6 h-6" />
          Gym Floor Plan & Heat Map
        </h2>
        <p className="text-sm text-gray-600">Click on any equipment to view tutorials and alternatives</p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-green-500"></div>
          <span className="text-sm text-gray-700">Available (0-20% usage)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-yellow-500"></div>
          <span className="text-sm text-gray-700">Moderate (30-70% usage)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-red-500"></div>
          <span className="text-sm text-gray-700">Busy (70-100% usage)</span>
        </div>
      </div>

      {/* SVG Floor Plan */}
      <div className="border-2 border-gray-200 rounded-lg overflow-hidden bg-gray-50">
        <svg
          viewBox="0 0 800 600"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background */}
          <rect width="800" height="600" className="fill-white" />

          {/* Grid lines for visual structure */}
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f0f0f0" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="800" height="600" fill="url(#grid)" />

          {/* Cardio Zone */}
          <g id="zone-cardio">
            <rect x="30" y="30" width="250" height="250" className="fill-blue-50 stroke-blue-300" strokeWidth="2" rx="8" />
            <text x="155" y="60" className="text-lg font-bold fill-blue-700 text-anchor-middle" textAnchor="middle">CARDIO ZONE</text>
            
            {/* Treadmills */}
            {machines['treadmill-01'] && (
              <g onClick={() => handleMachineClick('treadmill-01')} className="cursor-pointer">
                <rect 
                  x="50" y="80" width="50" height="90" 
                  className={`transition-all duration-300 stroke-gray-700 ${getStatusColor(machines['treadmill-01'].status)}`} 
                  strokeWidth="2" rx="4"
                />
                <text x="75" y="130" className="text-xs fill-white font-semibold pointer-events-none" textAnchor="middle">T1</text>
              </g>
            )}
            
            {machines['treadmill-02'] && (
              <g onClick={() => handleMachineClick('treadmill-02')} className="cursor-pointer">
                <rect 
                  x="120" y="80" width="50" height="90" 
                  className={`transition-all duration-300 stroke-gray-700 ${getStatusColor(machines['treadmill-02'].status)}`} 
                  strokeWidth="2" rx="4"
                />
                <text x="145" y="130" className="text-xs fill-white font-semibold pointer-events-none" textAnchor="middle">T2</text>
              </g>
            )}
            
            {machines['treadmill-03'] && (
              <g onClick={() => handleMachineClick('treadmill-03')} className="cursor-pointer">
                <rect 
                  x="190" y="80" width="50" height="90" 
                  className={`transition-all duration-300 stroke-gray-700 ${getStatusColor(machines['treadmill-03'].status)}`} 
                  strokeWidth="2" rx="4"
                />
                <text x="215" y="130" className="text-xs fill-white font-semibold pointer-events-none" textAnchor="middle">T3</text>
              </g>
            )}

            {/* Elliptical */}
            {machines['elliptical-01'] && (
              <g onClick={() => handleMachineClick('elliptical-01')} className="cursor-pointer">
                <ellipse 
                  cx="75" cy="220" rx="30" ry="40" 
                  className={`transition-all duration-300 stroke-gray-700 ${getStatusColor(machines['elliptical-01'].status)}`} 
                  strokeWidth="2"
                />
                <text x="75" y="225" className="text-xs fill-white font-semibold pointer-events-none" textAnchor="middle">E1</text>
              </g>
            )}

            {/* Bike */}
            {machines['bike-01'] && (
              <g onClick={() => handleMachineClick('bike-01')} className="cursor-pointer">
                <circle 
                  cx="185" cy="220" r="35" 
                  className={`transition-all duration-300 stroke-gray-700 ${getStatusColor(machines['bike-01'].status)}`} 
                  strokeWidth="2"
                />
                <text x="185" y="225" className="text-xs fill-white font-semibold pointer-events-none" textAnchor="middle">BIKE</text>
              </g>
            )}
          </g>

          {/* Weights Zone */}
          <g id="zone-weights">
            <rect x="520" y="30" width="250" height="250" className="fill-orange-50 stroke-orange-300" strokeWidth="2" rx="8" />
            <text x="645" y="60" className="text-lg font-bold fill-orange-700 text-anchor-middle" textAnchor="middle">FREE WEIGHTS</text>
            
            {/* Bench Press */}
            {machines['bench-01'] && (
              <g onClick={() => handleMachineClick('bench-01')} className="cursor-pointer">
                <rect 
                  x="540" y="80" width="70" height="50" 
                  className={`transition-all duration-300 stroke-gray-700 ${getStatusColor(machines['bench-01'].status)}`} 
                  strokeWidth="2" rx="4"
                />
                <text x="575" y="110" className="text-xs fill-white font-semibold pointer-events-none" textAnchor="middle">BENCH</text>
              </g>
            )}

            {/* Squat Rack */}
            {machines['squat-01'] && (
              <g onClick={() => handleMachineClick('squat-01')} className="cursor-pointer">
                <rect 
                  x="680" y="80" width="70" height="50" 
                  className={`transition-all duration-300 stroke-gray-700 ${getStatusColor(machines['squat-01'].status)}`} 
                  strokeWidth="2" rx="4"
                />
                <text x="715" y="110" className="text-xs fill-white font-semibold pointer-events-none" textAnchor="middle">SQUAT</text>
              </g>
            )}

            {/* Deadlift Platform */}
            {machines['deadlift-01'] && (
              <g onClick={() => handleMachineClick('deadlift-01')} className="cursor-pointer">
                <rect 
                  x="540" y="160" width="90" height="60" 
                  className={`transition-all duration-300 stroke-gray-700 ${getStatusColor(machines['deadlift-01'].status)}`} 
                  strokeWidth="2" rx="4"
                />
                <text x="585" y="195" className="text-xs fill-white font-semibold pointer-events-none" textAnchor="middle">DEADLIFT</text>
              </g>
            )}

            {/* Dumbbell Area */}
            {machines['dumbbell-rack'] && (
              <g onClick={() => handleMachineClick('dumbbell-rack')} className="cursor-pointer">
                <rect 
                  x="660" y="160" width="90" height="60" 
                  className={`transition-all duration-300 stroke-gray-700 ${getStatusColor(machines['dumbbell-rack'].status)}`} 
                  strokeWidth="2" rx="4"
                />
                <text x="705" y="195" className="text-xs fill-white font-semibold pointer-events-none" textAnchor="middle">DUMBBELLS</text>
              </g>
            )}
          </g>

          {/* Machines Zone */}
          <g id="zone-machines">
            <rect x="30" y="320" width="740" height="250" className="fill-purple-50 stroke-purple-300" strokeWidth="2" rx="8" />
            <text x="400" y="350" className="text-lg font-bold fill-purple-700 text-anchor-middle" textAnchor="middle">MACHINE ZONE</text>
            
            {/* Chest Press */}
            {machines['chest-press'] && (
              <g onClick={() => handleMachineClick('chest-press')} className="cursor-pointer">
                <circle 
                  cx="120" cy="430" r="40" 
                  className={`transition-all duration-300 stroke-gray-700 ${getStatusColor(machines['chest-press'].status)}`} 
                  strokeWidth="2"
                />
                <text x="120" y="435" className="text-xs fill-white font-semibold pointer-events-none" textAnchor="middle">CHEST</text>
              </g>
            )}

            {/* Leg Press */}
            {machines['leg-press'] && (
              <g onClick={() => handleMachineClick('leg-press')} className="cursor-pointer">
                <circle 
                  cx="240" cy="430" r="40" 
                  className={`transition-all duration-300 stroke-gray-700 ${getStatusColor(machines['leg-press'].status)}`} 
                  strokeWidth="2"
                />
                <text x="240" y="435" className="text-xs fill-white font-semibold pointer-events-none" textAnchor="middle">LEG</text>
              </g>
            )}

            {/* Leg Extension */}
            {machines['leg-extension'] && (
              <g onClick={() => handleMachineClick('leg-extension')} className="cursor-pointer">
                <rect 
                  x="320" y="400" width="80" height="60" 
                  className={`transition-all duration-300 stroke-gray-700 ${getStatusColor(machines['leg-extension'].status)}`} 
                  strokeWidth="2" rx="4"
                />
                <text x="360" y="435" className="text-xs fill-white font-semibold pointer-events-none" textAnchor="middle">LEG EXT</text>
              </g>
            )}

            {/* Lat Pulldown */}
            {machines['lat-pull'] && (
              <g onClick={() => handleMachineClick('lat-pull')} className="cursor-pointer">
                <circle 
                  cx="480" cy="430" r="40" 
                  className={`transition-all duration-300 stroke-gray-700 ${getStatusColor(machines['lat-pull'].status)}`} 
                  strokeWidth="2"
                />
                <text x="480" y="435" className="text-xs fill-white font-semibold pointer-events-none" textAnchor="middle">LAT</text>
              </g>
            )}

            {/* Cable Machine */}
            {machines['cable-machine'] && (
              <g onClick={() => handleMachineClick('cable-machine')} className="cursor-pointer">
                <rect 
                  x="570" y="400" width="80" height="60" 
                  className={`transition-all duration-300 stroke-gray-700 ${getStatusColor(machines['cable-machine'].status)}`} 
                  strokeWidth="2" rx="4"
                />
                <text x="610" y="435" className="text-xs fill-white font-semibold pointer-events-none" textAnchor="middle">CABLE</text>
              </g>
            )}
          </g>
        </svg>
      </div>

      <div className="mt-3 text-xs text-gray-500 text-center">
        Floor plan updates in real-time based on current gym activity
      </div>
    </div>
  );
};

export default GymMap;
