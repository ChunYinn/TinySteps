import React, { useState } from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';

// Define your steps with an id to identify them
const steps = [
  { id: 1, name: 'Step 1', status: 'complete' },
  { id: 2, name: 'Step 2', status: 'complete' },
  { id: 3, name: 'Step 3', status: 'current' },
  { id: 4, name: 'Step 4', status: 'upcoming' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Dots({ currentStep, setCurrentStep }) {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="flex items-center">
        {steps.map((step) => (
          <li key={step.id} className={classNames('relative', step.id !== steps.length ? 'pr-8 sm:pr-20' : '')}>
            {step.status === 'complete' ? (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-indigo-600" />
                </div>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentStep(step.id);
                }}
                className="relative flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-900"
              >
                <CheckIcon className="h-5 w-5 text-white" aria-hidden="true" />
                <span className="sr-only">{step.name}</span>
              </a>
              </>
            ) : step.status === 'current' ? (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentStep(step.id);
                }}
                className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white"
                aria-current="step"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-indigo-600" aria-hidden="true" />
                <span className="sr-only">{step.name}</span>
              </a>

              </>
            ) : (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentStep(step.id);
                }}
                className="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400"
              >
                <span
                  className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"
                  aria-hidden="true"
                />
                <span className="sr-only">{step.name}</span>
              </a>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default function CustomForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <h3>Step 1</h3>;
      case 2:
        return <h3>Step 2</h3>;
      case 3:
        return <h3>Step 3</h3>;
      case 4:
        return <h3>Step 4</h3>;
      default:
        return <h3>Unknown step</h3>;
    }
  };

  return(
    <div className="flex flex-col items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-7">
      <h3 className="text-3xl font-bold mb-4 sm:mb-6 sm:text-center">客製故事</h3>
      <Dots currentStep={currentStep} setCurrentStep={setCurrentStep} />
      <div className="mt-10 w-full">
        {renderStep()}
      </div>
    </div>
  );
}
