// Mock data for gym machines and equipment
export const gymMachines = {
  // Cardio Zone
  "treadmill-01": {
    id: "treadmill-01",
    name: "Treadmill",
    type: "Cardio",
    zone: "cardio",
    count: 10,
    occupied: 2,
    status: "free",
    currentUsage: 20,
    coordinates: { x: 50, y: 80 },
    tutorial: {
      videoUrl: "https://www.youtube.com/watch?v=placeholder-treadmill",
      instructions: [
        "Step onto the side rails",
        "Attach the safety clip to your clothing",
        "Press the Start button and begin walking",
        "Gradually increase speed using the controls",
        "Press Stop when finished and wait for belt to stop"
      ]
    }
  },
  

  "elliptical-01": {
    id: "elliptical-01",
    name: "Elliptical 1",
    type: "Cardio",
    zone: "cardio",
    count: 5,
    occupied: 0,
    status: "free",
    currentUsage: 0,
    coordinates: { x: 50, y: 200 },
    tutorial: {
      videoUrl: "https://www.youtube.com/watch?v=placeholder-elliptical",
      instructions: [
        "Step onto the pedals one at a time",
        "Hold the moving handles or stationary grips",
        "Begin moving in a forward motion",
        "Adjust resistance using the console",
        "Step off carefully when finished"
      ]
    }
  },
  "bike-01": {
    id: "bike-01",
    name: "Stationary Bike 1",
    type: "Cardio",
    zone: "cardio",
    count: 6,
    occupied: 3,
    status: "moderate",
    currentUsage: 50,
    coordinates: { x: 110, y: 200 },
    tutorial: {
      videoUrl: "https://www.youtube.com/watch?v=placeholder-bike",
      instructions: [
        "Adjust the seat height to hip level",
        "Sit on the bike and place feet in pedals",
        "Start pedaling at a comfortable pace",
        "Adjust resistance as needed",
        "Cool down before stopping"
      ]
    }
  },

  // Weights Zone
  "bench-01": {
    id: "bench-01",
    name: "Flat Bench Press",
    type: "Weights",
    zone: "weights",
    count: 4,
    occupied: 3,
    status: "busy",
    currentUsage: 75,
    coordinates: { x: 550, y: 100 },
    tutorial: {
      videoUrl: "https://www.youtube.com/watch?v=placeholder-bench",
      instructions: [
        "Lie flat on the bench with feet on floor",
        "Grip the bar slightly wider than shoulder-width",
        "Unrack the bar with straight arms",
        "Lower the bar to mid-chest with control",
        "Press back up to starting position"
      ]
    }
  },
  "squat-01": {
    id: "squat-01",
    name: "Squat Rack",
    type: "Weights",
    zone: "weights",
    count: 6,
    occupied: 4,
    status: "moderate",
    currentUsage: 67,
    coordinates: { x: 650, y: 100 },
    tutorial: {
      videoUrl: "https://www.youtube.com/watch?v=placeholder-squat",
      instructions: [
        "Set the bar at upper chest height",
        "Step under the bar and position on upper back",
        "Unrack and step back with feet shoulder-width",
        "Lower by bending knees and hips",
        "Stand back up and repeat"
      ]
    }
  },
  "deadlift-01": {
    id: "deadlift-01",
    name: "Deadlift Platform 1",
    type: "Weights",
    zone: "weights",
    count: 2,
    occupied: 1,
    status: "moderate",
    currentUsage: 50,
    coordinates: { x: 600, y: 220 },
    tutorial: {
      videoUrl: "https://www.youtube.com/watch?v=placeholder-deadlift",
      instructions: [
        "Stand with feet hip-width apart, bar over mid-foot",
        "Bend down and grip the bar outside your legs",
        "Keep back straight and chest up",
        "Drive through heels to stand up with the bar",
        "Lower the bar with control"
      ]
    }
  },
  "dumbbell-rack": {
    id: "dumbbell-rack",
    name: "Dumbbell Area",
    type: "Weights",
    zone: "weights",
    count: 10,
    occupied: 7,
    status: "busy",
    currentUsage: 70,
    coordinates: { x: 700, y: 220 },
    tutorial: {
      videoUrl: "https://www.youtube.com/watch?v=placeholder-dumbbells",
      instructions: [
        "Select appropriate weight dumbbells",
        "Keep core engaged during exercises",
        "Use controlled movements",
        "Return dumbbells to rack after use",
        "Wipe down equipment when finished"
      ]
    }
  },

  // Machines Zone
  "leg-press": {
    id: "leg-press",
    name: "Leg Press Machine",
    type: "Machines",
    zone: "machines",
    count: 3,
    occupied: 0,
    status: "free",
    currentUsage: 0,
    coordinates: { x: 300, y: 450 },
    tutorial: {
      videoUrl: "https://www.youtube.com/watch?v=placeholder-legpress",
      instructions: [
        "Sit in the machine with back against the pad",
        "Place feet shoulder-width apart on platform",
        "Release the safety handles",
        "Lower the weight by bending knees to 90 degrees",
        "Push through heels to extend legs"
      ]
    }
  },
  "lat-pull": {
    id: "lat-pull",
    name: "Lat Pulldown",
    type: "Machines",
    zone: "machines",
    count: 4,
    occupied: 2,
    status: "moderate",
    currentUsage: 50,
    coordinates: { x: 450, y: 450 },
    tutorial: {
      videoUrl: "https://www.youtube.com/watch?v=placeholder-latpull",
      instructions: [
        "Adjust the knee pad to secure your legs",
        "Grip the bar wider than shoulder-width",
        "Pull the bar down to upper chest",
        "Squeeze shoulder blades together",
        "Slowly return to starting position"
      ]
    }
  },
  "chest-press": {
    id: "chest-press",
    name: "Chest Press Machine",
    type: "Machines",
    zone: "machines",
    count: 5,
    occupied: 4,
    status: "busy",
    currentUsage: 80,
    coordinates: { x: 200, y: 450 },
    tutorial: {
      videoUrl: "https://www.youtube.com/watch?v=placeholder-chestpress",
      instructions: [
        "Adjust seat so handles are at chest height",
        "Grip the handles with palms facing down",
        "Push handles forward until arms are extended",
        "Slowly return to starting position",
        "Keep back against the pad throughout"
      ]
    }
  },
  "leg-extension": {
    id: "leg-extension",
    name: "Leg Extension Machine",
    type: "Machines",
    zone: "machines",
    count: 3,
    occupied: 0,
    status: "free",
    currentUsage: 0,
    coordinates: { x: 350, y: 520 },
    tutorial: {
      videoUrl: "https://www.youtube.com/watch?v=placeholder-legext",
      instructions: [
        "Sit in the machine and adjust the back pad",
        "Place ankles behind the lower pad",
        "Extend legs fully while keeping thighs on seat",
        "Hold briefly at the top",
        "Lower with control to starting position"
      ]
    }
  },
  "cable-machine": {
    id: "cable-machine",
    name: "Cable Cross Machine",
    type: "Machines",
    zone: "machines",
    count: 4,
    occupied: 3,
    status: "busy",
    currentUsage: 75,
    coordinates: { x: 550, y: 450 },
    tutorial: {
      videoUrl: "https://www.youtube.com/watch?v=placeholder-cable",
      instructions: [
        "Set the pulleys to desired height",
        "Attach appropriate handle or rope",
        "Select weight on the stack",
        "Perform exercise with controlled motion",
        "Return weights gently, don't drop"
      ]
    }
  }
};

// Helper function to get all machines by status
export const getMachinesByStatus = (status) => {
  return Object.values(gymMachines).filter(machine => machine.status === status);
};

// Helper function to get machines by type
export const getMachinesByType = (type) => {
  return Object.values(gymMachines).filter(machine => machine.type === type);
};

// Helper function to get alternative machines (same type, better availability)
export const getAlternativeMachines = (machineId) => {
  const currentMachine = gymMachines[machineId];
  if (!currentMachine) return [];

  return Object.values(gymMachines)
    .filter(machine => 
      machine.type === currentMachine.type && 
      machine.id !== machineId &&
      (machine.status === 'free' || (machine.status === 'moderate' && currentMachine.status === 'busy'))
    )
    .sort((a, b) => a.currentUsage - b.currentUsage);
};

// Initial gym activity data
export const initialActivityData = {
  currentMembers: 42,
  capacity: 100,
  peakHours: "5:00 PM - 7:00 PM",
  lastUpdated: new Date().toLocaleTimeString()
};
