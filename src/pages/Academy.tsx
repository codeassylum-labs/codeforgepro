import React, { useState } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const steps = [
  'Welcome to ForgeAcademy',
  'Choose Your First Module',
  'Complete Your First Build',
  'Earn Your Certification'
];

const Academy: React.FC = () => {
  const [step, setStep] = useState(0);
  const { width, height } = useWindowSize();
  const nextStep = () => step < steps.length - 1 && setStep(step + 1);

  const containerStyle = "bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto mt-12 text-center";
  const stepStyle = "text-lg font-medium text-[#1E88E5] mb-4";
  const buttonStyle = "bg-[#D81B60] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#C2185B] transition";
  const progressBarStyle = "w-full bg-gray-200 rounded-full h-4 mb-6";
  const progressFillStyle = "bg-[#1E88E5] h-4 rounded-full transition-all duration-500";
  const progressPercent = ((step + 1) / steps.length) * 100;

  return (
    <div className={containerStyle}>
      <h2 className="text-2xl font-bold mb-6">🚀 {steps[step]}</h2>
      <div className={progressBarStyle}>
        <div className={progressFillStyle} style={{ width: `${progressPercent}%` }}></div>
      </div>
      {step === 0 && <p className={stepStyle}>Start your journey with ForgeAcademy.</p>}
      {step === 1 && <p className={stepStyle}>Select a module to begin learning.</p>}
      {step === 2 && <p className={stepStyle}>Build your first agent using the Builder module.</p>}
      {step === 3 && (
        <>
          <p className="text-green-600 font-semibold">🎉 You’re officially a ForgeCreator!</p>
          <Confetti width={width} height={height} />
          <button className={buttonStyle} onClick={() => alert('Shared to social!')}>Share Your Badge</button>
        </>
      )}
      {step < steps.length - 1 && (
        <button className={buttonStyle} onClick={nextStep}>Next</button>
      )}
    </div>
  );
};

export default Academy;
