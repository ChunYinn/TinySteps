import React, { useState, useEffect } from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';
import croco from '../assets/img/crocodile.png'
import elephant from '../assets/img/elephant.png'
import bear from '../assets/img/bear.png'
import cat from '../assets/img/cat.png'
import dinosaur from '../assets/img/dinosaur.png'
import dog from '../assets/img/dog.png'
// import mouse from '../assets/img/mouse.png'
import rabbit from '../assets/img/rabbit.png'
import tiger from '../assets/img/tiger.png'
import owl from '../assets/img/owl.png'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Dots({ currentStep, setCurrentStep }) {

  const steps = [
    { id: 1, name: 'Step 1', status: currentStep > 1 ? 'complete' : 'current' },
    { id: 2, name: 'Step 2', status: currentStep > 2 ? 'complete' : currentStep === 2 ? 'current' : 'upcoming' },
    { id: 3, name: 'Step 3', status: currentStep > 3 ? 'complete' : currentStep === 3 ? 'current' : 'upcoming' },
    { id: 4, name: 'Step 4', status: currentStep === 4 ? 'current' : 'upcoming' },
  ];
  
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

export function StepOne({onAction}) {
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const animals = [
    { id: 'croco', src: croco },
    { id: 'elephant', src: elephant },
    { id: 'bear', src: bear },
    { id: 'cat', src: cat },
    { id: 'dinosaur', src: dinosaur },
    { id: 'dog', src: dog },
    { id: 'rabbit', src: rabbit },
    { id: 'tiger', src: tiger },
    { id: 'owl', src: owl },
  ];

  const selectAnimal = (animalId) => {
    setSelectedAnimal(animalId);
    onAction();
  };

  return (
    <div className='flex flex-col items-center'>
      <h3 className='font-bold'>Step 1: 選擇最愛的動物</h3>
      <div className='flex flex-wrap mt-7 space-x-3 mx-auto max-w-3xl overflow-auto item-center justify-center'>
        {animals.map((animal) => (
          <button
            key={animal.id}
            onClick={() => selectAnimal(animal.id)}
            className={`p-2 mt-2 rounded-full border-2 ${
              selectedAnimal === animal.id
                ? 'border-indigo-600'
                : 'border-transparent'
            } hover:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          >
            <img
              src={animal.src}
              alt={animal.id}
              className={`h-12 w-12 ${
                selectedAnimal === animal.id ? '' : 'hover:opacity-75'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export function StepTwo({onAction}) {
  const [selectedColor, setSelectedColor] = useState(null);
  const colors = ['red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink', 'gray']

  const selectColor = (color) => {
    setSelectedColor(color);
    onAction();
  };

  return (
    <div className='flex flex-col items-center'>
      <h3 className='font-bold'>Step 2: 選擇最愛的顏色</h3>

      {/* Color Picker */}
      <div className='flex flex-wrap mt-7 space-x-3 mx-auto max-w-3xl overflow-auto item-center justify-center'>
        {colors.map((color, index) => (
          <button 
            type='button'
            key={index}
            onClick={() => selectColor(color)}
            className={`flex justify-center items-center w-14 h-7 mt-3 rounded-md bg-${color}-100 px-2 py-1 text-xs font-medium text-${color}-700 hover:border-${color}-500 hover:border-2 ${
              selectedColor === color ? 'border-2 border-indigo-700' : ''
            }`}
          >
            {index+1}
          </button>
        ))}
      </div>
    </div>
  );
}


export function StepThree({onAction}) {
  // State to store the value of the textarea
  const [challenge, setChallenge] = useState('');

  // Handler to update the state when the textarea value changes
  const handleChallengeChange = (event) => {
    setChallenge(event.target.value);
    onAction();
  };

  return (
    <div className='flex flex-col items-center'>
      <h3 className='font-bold'>Step 3: 填寫想克服的挑戰</h3>

      {/* Text Area */}
      <div className='mt-7 w-full max-w-3xl'> {/* Ensure width is controlled by parent */}
        <textarea
          rows={4}
          name="comment"
          id="comment"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={challenge} // Controlled component
          onChange={handleChallengeChange} // Update state on change
          placeholder='請輸入想克服的挑戰'
        />
      </div>
    </div>
  );
}



export function StepFour({onAction}) {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = ["好奇心", "勇於學習", "創造力", "洞察力", "判斷力", "正直", "公平", "勇氣", "專注力", "耐心", "自信", "同理心", "善良", "毅力", "領導力", "解決問題", "人際交往"];

  const selectSkill = (skill) => {
    setSelectedSkill(skill);
    onAction();
  };

  return (
    <div className='flex flex-col items-center'>
      <h3 className='font-bold'>Step 4: 選擇想培養的技能</h3>
      <div className='flex flex-wrap mt-7 space-x-3 mx-auto max-w-3xl overflow-auto item-center justify-center'>
        {skills.map((skill, index) => (
          <button
            key={index}
            onClick={() => selectSkill(skill)}
            className={`px-3 py-1 m-1 rounded-md text-sm font-medium ${
              selectedSkill === skill
                ? 'bg-blue-600 text-white'
                : 'bg-blue-100 text-blue-600'
            } hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
          >
            {skill}
          </button>
        ))}
      </div>
    </div>
  );
}


export default function CustomForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [actionTaken, setActionTaken] = useState(false);

  // This effect resets actionTaken to false every time the currentStep changes
  useEffect(() => {
    setActionTaken(false);
  }, [currentStep]);

  // Call this function when the user takes an action in one of the steps
  const handleUserAction = () => {
    setActionTaken(true);
  };

  // Call this function to advance to the next step
  const goToNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne onAction={handleUserAction} />;
      case 2:
        return <StepTwo onAction={handleUserAction} />;
      case 3:
        return <StepThree onAction={handleUserAction} />;
      case 4:
        return <StepFour onAction={handleUserAction} />;
      default:
        return <h3>Unknown step</h3>;
    }
  };

  const buttonText = currentStep === 4 ? "開始創造故事 !" : "下一步";

  return(
    <div className="flex flex-col items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-7">
      <h3 className="text-3xl font-bold mb-4 sm:mb-6 sm:text-center">客製故事</h3>
      <Dots currentStep={currentStep} setCurrentStep={setCurrentStep} />
      <div className="mt-10 w-full items-center">
        {renderStep()}
      </div>
      {/* Responsive button - Only show if an action has been taken */}
      {actionTaken && (
        <button
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mb-4 mt-14"
          onClick={goToNextStep}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}


