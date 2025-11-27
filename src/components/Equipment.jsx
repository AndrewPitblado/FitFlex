import React, {useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, CheckCircle2 } from 'lucide-react';
import { gymMachines } from '../data/mockData';

const Equipment = () => {
    const { equipmentId } = useParams();
    const navigate = useNavigate();
    const equipment = gymMachines[equipmentId];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [equipmentId]);

    if (!equipment) {
        return (
            <div className="container mx-auto px-4 py-6">
                <h2 className="text-2xl font-bold mb-4">Equipment Not Found</h2>
                <p className="text-gray-700">The requested equipment does not exist.</p>
                <button 
                    onClick={() => navigate(-1)}
                    className="mt-4 px-4 py-2 bg-gray-800 text-white rounded"
                >
                    Go Back
                </button>
            </div>
        );
    }

    const availableCount = equipment.count - equipment.occupied;
    const statusColor = availableCount > equipment.count * 0.5
        ? 'bg-green-100 text-green-800 border-green-300'
        : availableCount > 0
        ? 'bg-yellow-100 text-yellow-800 border-yellow-300'
        : 'bg-red-100 text-red-800 border-red-300';

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-6 max-w-4xl">
                {/* Header */}
                <button 
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors mb-6"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back
                </button>

                {/* Equipment Info Card */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <div className="flex items-start gap-6">
                        <img 
                            src={equipment.image} 
                            alt={equipment.name} 
                            className="w-32 h-32 object-contain"
                        />
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                {equipment.name}
                            </h1>
                            <p className="text-gray-600 mb-4">
                                Type: <span className="font-semibold">{equipment.type}</span>
                            </p>
                            <div className={`inline-flex items-center px-4 py-2 rounded-full border-2 ${statusColor} font-semibold`}>
                                {availableCount === equipment.count
                                    ? 'All Available'
                                    : availableCount > 0
                                    ? `${availableCount}/${equipment.count} Available`
                                    : 'All Busy'}
                            </div>
                        </div>
                        <button 
                            onClick={() => navigate(-1)}
                            className="px-4 py-2 bg-gray-800 text-white rounded -lg shadow-sm hover:bg-gray-900 transition-all flex items-center gap-2"
                        >
                            VR Tutorial
                        </button>
                    </div>
                </div>

                {/* Video Tutorial Section */}
                {equipment.tutorial?.videoUrl && (
                    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                        <div className="flex items-center gap-2 mb-4">
                            <Play className="w-6 h-6 text-red-600" />
                            <h2 className="text-2xl font-bold text-gray-900">Video Tutorial</h2>
                        </div>
                        <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                            <iframe
                                className="w-full h-full"
                                src={equipment.tutorial.videoUrl}
                                title={`${equipment.name} Tutorial`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                )}

                {/* Step-by-Step Instructions */}
                {equipment.tutorial?.instructions && (
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            How to Use
                        </h2>
                        <div className="space-y-4">
                            {equipment.tutorial.instructions.map((instruction, index) => (
                                <div 
                                    key={index}
                                    className="flex gap-4 items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center font-bold">
                                            {index + 1}
                                        </div>
                                    </div>
                                    <p className="text-gray-700 flex-1 pt-1">
                                        {instruction}
                                    </p>
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Safety Tips (Optional) */}
                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6 mt-6">
                    <h3 className="text-lg font-bold text-yellow-900 mb-2">
                        💡 Safety Tips
                    </h3>
                    <ul className="text-yellow-800 space-y-1 text-sm">
                        <li>• Always warm up before using equipment</li>
                        <li>• Start with lighter weights to learn proper form</li>
                        <li>• Ask a trainer if you're unsure about anything</li>
                        <li>• Wipe down equipment after use</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Equipment;