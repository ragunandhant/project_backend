import { useParams } from 'react-router-dom';
import { DistanceCard } from '../components/DistanceCard';

export const DistanceSelectionPage = () => {
  const { raceId } = useParams<{ raceId: string }>();

  if (!raceId) return null;

  return (
    <div className="min-h-screen bg-amber-50 p-4">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-amber-900 text-center mb-8">
          Select Race Distance
        </h2>
        
        <div className="space-y-4">
          <DistanceCard distance="200m" raceId={raceId} index={0} />
          <DistanceCard distance="300m" raceId={raceId} index={1} />
        </div>
      </div>
    </div>
  );
};