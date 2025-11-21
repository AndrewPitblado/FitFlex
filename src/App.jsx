import { useState, useEffect } from 'react';
import { Dumbbell } from 'lucide-react';
import ActivityCounter from './components/ActivityCounter';
import GymMap from './components/GymMap';
import MachineModal from './components/MachineModal';
import Equipment from './components/Equipment';
import { gymMachines, initialActivityData } from './data/mockData';
import { startSimulation } from './utils/simulationService';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  const [machines, setMachines] = useState(gymMachines);
  const [activityData, setActivityData] = useState(initialActivityData);
  const [selectedMachine, setSelectedMachine] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Start the simulation on component mount
  useEffect(() => {
    const cleanup = startSimulation((data) => {
      setMachines(data.machines);
      setActivityData(data.activityData);
    });

    // Cleanup on unmount
    return cleanup;
  }, []);

  // Handle machine click
  const handleMachineClick = (machineId) => {
    const machine = machines[machineId];
    if (machine) {
      setSelectedMachine(machine);
      setIsModalOpen(true);
    }
  };

  // Handle modal close
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMachine(null);
  };

  return (
    <BrowserRouter>
    
    
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center gap-3">
              <Dumbbell className="w-8 h-8" />
              <div>
                <h1 className="text-3xl font-bold">FitFlex Gym</h1>
                <p className="text-blue-100 text-sm">Live Floor Plan & Activity Tracker</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={
              <div className="flex flex-col gap-6">
                <ActivityCounter activityData={activityData} />
                <GymMap machines={machines} onMachineClick={handleMachineClick} />
              </div>
            } />
            <Route path="/equipment/:equipmentId" element={<Equipment />} />
          </Routes>

          {/* Info Card */}
          <div className="mt-6 bg-white rounded-lg shadow-lg p-6">
            <h3 className="font-bold text-gray-800 mb-2">How to Use</h3>
            <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
              <li>The floor plan updates every 10 seconds to show real-time gym activity</li>
              <li>Green = Available, Yellow = Moderately Busy, Red = Currently Busy</li>
              <li>Click on any equipment to view detailed tutorials and find alternatives</li>
              <li>Alternative machines are suggested when your selected equipment is busy</li>
            </ul>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-12 bg-gray-800 text-gray-300 py-6">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm">
              FitFlex Gym - Facade Prototype &copy; 2025
            </p>
            <p className="text-xs mt-2 text-gray-400">
              This is a demonstration interface with simulated data
            </p>
            <a href="https://www.flaticon.com/free-icons/gym" title="gym icons">Gym icons created by Irfansusanto20 - Flaticon</a>
          </div>
        </footer>

        {/* Machine Modal */}
        <MachineModal
          machine={selectedMachine}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
   
    </BrowserRouter>
  );
}

export default App;
