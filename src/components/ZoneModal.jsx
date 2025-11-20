import { X, Dumbbell, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Equipment from './Equipment';

const ZoneModal = ({ zone, isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen || !zone) return null;

  const equipment = zone.equipment || [];

  if (equipment.length === 0) {
    return (
      <>
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl p-6">
            <p>No equipment found in this zone.</p>
            <button onClick={onClose} className="mt-4 px-4 py-2 bg-gray-800 text-white rounded">Close</button>
          </div>
        </div>
      </>
    );
  }


  const handleEquipmentClick = (equipmentId) => {
    onClose();
    navigate(`/equipment/${equipmentId}`);
  };

  // Get status color for the zone
  const getZoneStatusColor = () => {
    const avgUsage = zone.equipment.reduce((sum, eq) => sum + eq.currentUsage, 0) / zone.equipment.length;
    if (avgUsage < 30) return 'text-green-600';
    if (avgUsage < 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{zone.name}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  <span className={`font-semibold ${getZoneStatusColor()}`}>
                    {zone.equipment.length} pieces of equipment
                  </span>
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="px-6 py-4">
              <p className="text-gray-600 mb-6">{zone.description}</p>

              {/* Equipment Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {zone.equipment.map((equipment) => {
                  const statusColor = equipment.currentUsage < 30 
                    ? 'border-green-500 bg-green-50' 
                    : equipment.currentUsage < 70 
                    ? 'border-yellow-500 bg-yellow-50' 
                    : 'border-red-500 bg-red-50';

                  return (
                    <button
                      key={equipment.id}
                      onClick={() => handleEquipmentClick(equipment.id)}
                      className={`p-4 border-2 rounded-lg transition-all hover:shadow-lg hover:scale-105 ${statusColor}`}
                    >
                       <div className="flex justify-center mb-3">
                        <Dumbbell className="w-16 h-16 text-gray-400" />
                      </div>
                      
                      <h4 className="font-semibold text-gray-900 text-sm mb-1 text-center">
                        {equipment.name}
                      </h4>
                      
                      <div className="text-xs text-center">
                        <span className={`font-medium ${
                          equipment.currentUsage < 30 
                            ? 'text-green-700' 
                            : equipment.currentUsage < 70 
                            ? 'text-yellow-700' 
                            : 'text-red-700'
                        }`}>
                          {equipment.currentUsage < 30 
                            ? 'Available' 
                            : equipment.currentUsage < 70 
                            ? `${equipment.currentUsage}% busy` 
                            : 'Busy'}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4">
              <button
                onClick={onClose}
                className="w-full bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-4 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZoneModal;