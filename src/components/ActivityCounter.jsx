import { Users, TrendingUp, Clock } from 'lucide-react';

const ActivityCounter = ({ activityData }) => {
  const { currentMembers, capacity, peakHours, lastUpdated } = activityData;
  const occupancyPercentage = Math.round((currentMembers / capacity) * 100);

  // Determine status color based on occupancy
  const getStatusColor = () => {
    if (occupancyPercentage < 50) return 'text-green-600';
    if (occupancyPercentage < 80) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getStatusBgColor = () => {
    if (occupancyPercentage < 50) return 'bg-green-100';
    if (occupancyPercentage < 80) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <Users className="w-6 h-6" />
        Live Gym Activity
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Current Members */}
        <div className={`${getStatusBgColor()} rounded-lg p-4`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Current Members</span>
            <Users className={`w-5 h-5 ${getStatusColor()}`} />
          </div>
          <div className={`text-3xl font-bold ${getStatusColor()}`}>
            {currentMembers}
          </div>
          <div className="text-sm text-gray-600 mt-1">
            of {capacity} capacity
          </div>
          
          {/* Progress bar */}
          <div className="mt-3 bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className={`h-full transition-all duration-500 ${
                occupancyPercentage < 50
                  ? 'bg-green-500'
                  : occupancyPercentage < 80
                  ? 'bg-yellow-500'
                  : 'bg-red-500'
              }`}
              style={{ width: `${occupancyPercentage}%` }}
            />
          </div>
        </div>

        {/* Occupancy Percentage */}
        <div className="bg-blue-100 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Occupancy</span>
            <TrendingUp className="w-5 h-5 text-blue-600" />
          </div>
          <div className="text-3xl font-bold text-blue-600">
            {occupancyPercentage}%
          </div>
          <div className="text-sm text-gray-600 mt-1">
            {occupancyPercentage < 50 ? 'Low traffic' : occupancyPercentage < 80 ? 'Moderate traffic' : 'High traffic'}
          </div>
        </div>

        {/* Peak Hours */}
        <div className="bg-purple-100 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Peak Hours</span>
            <Clock className="w-5 h-5 text-purple-600" />
          </div>
          <div className="text-xl font-bold text-purple-600">
            {peakHours}
          </div>
          <div className="text-sm text-gray-600 mt-1">
            Last updated: {lastUpdated}
          </div>
        </div>
      </div>

      {/* Status indicator */}
      <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
          <span>Live updates every 10 seconds</span>
        </div>
      </div>
    </div>
  );
};

export default ActivityCounter;
