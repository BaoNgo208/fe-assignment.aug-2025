const totalSteps = 3;

interface StepHeaderProps {
  step: number;
}

export const StepHeader: React.FC<StepHeaderProps> = ({ step }) => {
  const pct = (step / totalSteps) * 100;
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-500">
          Step {step} of {totalSteps}
        </span>
        <span className="text-sm font-medium">{Math.round(pct)}%</span>
      </div>
      <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
        <div
          className="h-2 bg-indigo-600 rounded-full transition-all duration-300"
          style={{ width: `${pct}%` }}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={pct}
          role="progressbar"
        />
      </div>
    </div>
  );
};
