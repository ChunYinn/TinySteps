import React, { useState, useEffect } from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';
import duck from '../assets/img/duck.png'
import elephant from '../assets/img/elephant.png'
import pig from '../assets/img/pig.png'
import cat from '../assets/img/cat.png'
import horse from '../assets/img/horse.png'
import cow from '../assets/img/cow.png'
// import mouse from '../assets/img/mouse.png'
import rabbit from '../assets/img/rabbit.png'
import sheep from '../assets/img/sheep.png'
import monkey from '../assets/img/monkey.png'
import { useNavigate } from 'react-router-dom';
import LoadingAnimation from '../assets/img/nap.gif';


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
                // href="#"
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
                // href="#"
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
                // href="#"
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

export function StepOne({onAction, setSelectedAnimal, selectedAnimal}) {

  const animals = [
    { id: 'duck', src: duck },
    { id: 'elephant', src: elephant },
    { id: 'pig', src: pig },
    { id: 'cat', src: cat },
    { id: 'horse', src: horse },
    { id: 'cow', src: cow },
    { id: 'rabbit', src: rabbit },
    { id: 'sheep', src: sheep },
    { id: 'monkey', src: monkey },
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
            className={`p-2 mt-2 mb-2 rounded-full border-2 ${
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

export function StepTwo({ onAction, setSelectedColor, selectedColor}) {

  const colors = [
    { name: 'red', light: '#ffcdd2', dark: '#e57373', border: '#ef5350' },
    { name: 'yellow', light: '#fff9c4', dark: '#fff176', border: '#ffee58' },
    { name: 'green', light: '#c8e6c9', dark: '#81c784', border: '#66bb6a' },
    { name: 'blue', light: '#bbdefb', dark: '#64b5f6', border: '#42a5f5' },
    { name: 'indigo', light: '#c5cae9', dark: '#7986cb', border: '#5c6bc0' },
    { name: 'purple', light: '#e1bee7', dark: '#ba68c8', border: '#ab47bc' },
    { name: 'pink', light: '#f8bbd0', dark: '#f06292', border: '#ec407a' },
    { name: 'gray', light: '#eeeeee', dark: '#e0e0e0', border: '#bdbdbd' }
  ];

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
            onClick={() => selectColor(color.name)}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '3.5rem', // 14 in tailwind
              height: '1.75rem', // 7 in tailwind
              marginTop: '0.75rem', // 3 in tailwind
              borderRadius: '0.375rem', // rounded-md in tailwind
              backgroundColor: color.light,
              color: color.dark,
              borderWidth: selectedColor === color.name ? '2px' : '0',
              borderColor: color.border,
              padding: '0.25rem 0.5rem', // px-2 py-1 in tailwind
              fontSize: '0.75rem', // text-xs in tailwind
              fontWeight: 'medium' // font-medium in tailwind
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export function StepThree({onAction, setChallenge, challenge}) {

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

export function StepFour({onAction, setSelectedSkill, selectedSkill}) {

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

  // state to track if all steps have been completed
  const [allStepsCompleted, setAllStepsCompleted] = useState(false);

  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [challenge, setChallenge] = useState('');
  const [selectedSkill, setSelectedSkill] = useState(null);

  // New state variables for each step's completion status
  const [isAnimalSelected, setIsAnimalSelected] = useState(false);
  const [isColorSelected, setIsColorSelected] = useState(false);
  const [isChallengeEntered, setIsChallengeEntered] = useState(false);
  const [isSkillSelected, setIsSkillSelected] = useState(false);

  const [loading, setLoading] = useState(false); // New state for loading
  const navigate = useNavigate(); // Hook for navigation

  // This effect resets actionTaken to false every time the currentStep changes
  useEffect(() => {
    if (selectedAnimal) setIsAnimalSelected(true);
    if (selectedColor) setIsColorSelected(true);
    if (challenge) setIsChallengeEntered(true);
    if (selectedSkill) setIsSkillSelected(true);

    setAllStepsCompleted(
      isAnimalSelected &&
      isColorSelected &&
      isChallengeEntered &&
      isSkillSelected
    );
  }, [selectedAnimal, selectedColor, challenge, selectedSkill, isAnimalSelected, isColorSelected, isChallengeEntered, isSkillSelected]);

  // Call this function when the user takes an action in one of the steps
  const handleUserAction = () => {
    setActionTaken(true);
  };

  // Call this function to advance to the next step
  const goToNextStep = () => {
    const stepCompleted = (currentStep === 1 && isAnimalSelected) ||
                          (currentStep === 2 && isColorSelected) ||
                          (currentStep === 3 && isChallengeEntered) ||
                          (currentStep === 4 && isSkillSelected);

    if (stepCompleted && currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === 4 && allStepsCompleted) {
      finishStoryCreation();
    }
  };

  const getStoryAndImage = async () => {
    setLoading(true);
  
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ selectedAnimal, selectedColor, challenge, selectedSkill })
    }
  
    try {
      const response = await fetch('https://tiny-steps-2023.de.r.appspot.com/process-story-and-image', options);
      const data = await response.json();
   
      console.log('Raw API response:', data); // Log the raw response
  
      if (data.story && data.imageUrl) {
        
        const fullText = data.story;
        const titleStart = fullText.indexOf("標題:");
        const storyStart = fullText.indexOf("故事開始:");
        const title = fullText.substring(titleStart + 3, storyStart).trim();
        const story = fullText.substring(storyStart + 5).trim();

        // Navigate to the new page with story and image URL
        navigate('/stories/new', { 
          state: { 
            title,
            story,
            imageUrl: data.imageUrl,
            selectedAnimal,
            selectedColor, 
            challenge, 
            selectedSkill 
           } 
        });
      } else {
        // The data is not in the expected format
        throw new Error('The response data is not in the expected format.');
      }
    } catch (error) {
      console.error('Error fetching story:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const finishStoryCreation = async () => {
    if (allStepsCompleted) {
      await getStoryAndImage();
    } else {
      // Optionally, inform the user that all steps must be completed
      console.warn('Please complete all steps before finishing the story creation.');
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne onAction={handleUserAction} setSelectedAnimal={setSelectedAnimal} selectedAnimal={selectedAnimal} />;
      case 2:
        return <StepTwo onAction={handleUserAction} setSelectedColor={setSelectedColor} selectedColor={selectedColor} />;
      case 3:
        return <StepThree onAction={handleUserAction} setChallenge={setChallenge} challenge={challenge} />;
      case 4:
        return <StepFour onAction={handleUserAction} setSelectedSkill={setSelectedSkill} selectedSkill={selectedSkill} />;
      default:
        return <h3>Unknown step</h3>;
    }
  };
  

  const buttonText = currentStep === 4 ? "開始創造故事 !" : "下一步";

  if (loading) {
    return (
      <div className="flex justify-center items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-screen">
        <img src={LoadingAnimation} alt="Loading..." />
      </div>
    );
  }


  return(
    <div className="flex flex-col items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-7">
      <h3 className="text-3xl font-bold mb-4 sm:mb-6 sm:text-center">客製故事</h3>
      <Dots currentStep={currentStep} setCurrentStep={setCurrentStep} />
      <div className="mt-14 w-full items-center">
        {renderStep()}
      </div>
      {/* Responsive button - Only show if an action has been taken */}
      {currentStep === 4 ? (
        <button
          className={`bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mb-4 mt-14 ${!allStepsCompleted ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={finishStoryCreation}
          disabled={!allStepsCompleted}
        >
          {buttonText}
        </button>
      ) : (
        actionTaken && (
          <button
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mb-4 mt-14"
            onClick={goToNextStep}
          >
            {buttonText}
          </button>
        )
      )}
    </div>
  );
}

