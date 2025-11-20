// Simulation service to randomly update machine statuses and gym activity
import { gymMachines, initialActivityData } from '../data/mockData';

const STATUSES = ['free', 'moderate', 'busy'];
const UPDATE_INTERVAL = 10000; // 10 seconds

/**
 * Get a random status based on weighted probabilities
 * Free: 40%, Moderate: 35%, Busy: 25%
 */
const getRandomStatus = () => {
  const rand = Math.random();
  if (rand < 0.4) return 'free';
  if (rand < 0.75) return 'moderate';
  return 'busy';
};

/**
 * Get usage percentage based on status
 */
const getUsageForStatus = (status) => {
  switch (status) {
    case 'free':
      return Math.floor(Math.random() * 20); // 0-20%
    case 'moderate':
      return Math.floor(Math.random() * 40) + 30; // 30-70%
    case 'busy':
      return Math.floor(Math.random() * 30) + 70; // 70-100%
    default:
      return 0;
  }
};

/**
 * Update machine statuses randomly
 */
export const updateMachineStatuses = (currentMachines) => {
  const updatedMachines = { ...currentMachines };
  
  // Randomly update 2-4 machines each cycle
  const machineIds = Object.keys(updatedMachines);
  const numToUpdate = Math.floor(Math.random() * 3) + 2;
  
  for (let i = 0; i < numToUpdate; i++) {
    const randomId = machineIds[Math.floor(Math.random() * machineIds.length)];
    const newStatus = getRandomStatus();
    
    updatedMachines[randomId] = {
      ...updatedMachines[randomId],
      status: newStatus,
      currentUsage: getUsageForStatus(newStatus)
    };
  }
  
  return updatedMachines;
};

/**
 * Update the current member count
 */
export const updateMemberCount = (currentCount, capacity) => {
  // Vary the count by -5 to +5 members
  const change = Math.floor(Math.random() * 11) - 5;
  const newCount = Math.max(10, Math.min(capacity, currentCount + change));
  return newCount;
};

/**
 * Start the simulation
 * @param {Function} onUpdate - Callback function called with updated data
 * @returns {Function} - Cleanup function to stop the simulation
 */
export const startSimulation = (onUpdate) => {
  let currentMachines = { ...gymMachines };
  let currentMembers = initialActivityData.currentMembers;
  
  const intervalId = setInterval(() => {
    // Update machines
    currentMachines = updateMachineStatuses(currentMachines);
    
    // Update member count
    currentMembers = updateMemberCount(currentMembers, initialActivityData.capacity);
    
    // Call the update callback
    onUpdate({
      machines: currentMachines,
      activityData: {
        ...initialActivityData,
        currentMembers,
        lastUpdated: new Date().toLocaleTimeString()
      }
    });
  }, UPDATE_INTERVAL);
  
  // Return cleanup function
  return () => clearInterval(intervalId);
};
