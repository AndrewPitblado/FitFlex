import { X, ExternalLink, AlertCircle, CheckCircle } from 'lucide-react';
import { getAlternativeMachines } from '../data/mockData';

const MachineModal = ({ machine, isOpen, onClose }) => {
  if (!isOpen || !machine) return null;

  const alternatives = getAlternativeMachines(machine.id);
  const isBusy = machine.status === 'busy';

  // Status badge
  const getStatusBadge = () => {
    const badges = {
      free: { text: 'Available', color: 'bg-green-100 text-green-800', icon: CheckCircle },
      moderate: { text: 'Moderately Busy', color: 'bg-yellow-100 text-yellow-800', icon: AlertCircle },
      busy: { text: 'Currently Busy', color: 'bg-red-100 text-red-800', icon: AlertCircle }
    };
    
    const badge = badges[machine.status] || badges.free;
    const Icon = badge.icon;
    
    return (
      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${badge.color}`}>
        <Icon className="w-4 h-4" />
        {badge.text}
      </span>
    );
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
          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{machine.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{machine.type} Equipment</p>
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
              {/* Status */}
              <div className="mb-6">
                {getStatusBadge()}
                <div className="mt-2 text-sm text-gray-600">
                  Current usage: <span className="font-semibold">{machine.currentUsage}%</span>
                </div>
              </div>

              {/* Busy Warning & Alternatives */}
              {isBusy && alternatives.length > 0 && (
                <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-amber-900 mb-2">
                        This machine is currently busy
                      </h4>
                      <p className="text-sm text-amber-800 mb-3">
                        Try these alternative {machine.type} machines:
                      </p>
                      <div className="space-y-2">
                        {alternatives.map((alt) => (
                          <div 
                            key={alt.id} 
                            className="flex items-center justify-between bg-white p-2 rounded border border-amber-200"
                          >
                            <span className="font-medium text-gray-900">{alt.name}</span>
                            <span className={`text-xs px-2 py-1 rounded ${
                              alt.status === 'free' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {alt.status === 'free' ? 'Available' : `${alt.currentUsage}% busy`}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Video Tutorial */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  Video Tutorial
                </h4>
                <a
                  href={machine.tutorial.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg p-4 text-center font-medium transition-all shadow-md hover:shadow-lg"
                >
                  <ExternalLink className="w-5 h-5 inline-block mr-2" />
                  Watch Tutorial Video
                </a>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Opens in a new tab
                </p>
              </div>

              {/* Instructions */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-3">
                  How to Use
                </h4>
                <ol className="space-y-3">
                  {machine.tutorial.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 pt-0.5">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Safety Tips */}
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Safety Tips
                </h4>
                <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
                  <li>Start with a light weight to learn proper form</li>
                  <li>Ask a trainer if you need assistance</li>
                  <li>Wipe down equipment after use</li>
                  <li>Stay hydrated and take breaks as needed</li>
                </ul>
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

export default MachineModal;
