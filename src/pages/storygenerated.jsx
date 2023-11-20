import { useLocation } from 'react-router-dom';
import LoadingAnimation from '../assets/img/nap.gif';
import React, { useState, useRef, useEffect } from 'react';
import Speech from '../speech.mp3';


export default function Example() {
  const location = useLocation();
  const { title, story, imageUrl, selectedAnimal, selectedColor, challenge, selectedSkill } = location.state || {};
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Format today's date as YYYY-MM-DD
  const today = new Date().toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).replace(/\//g, '-');

  // Calculate word count
  const wordCount = (story.match(/[\u4e00-\u9fff]/g) || []).length;

  // Update your stats array with dynamic values
  const stats = [
    { label: '字數', value: wordCount.toString() },
    { label: '語言', value: '中文' },
    { label: '歲數', value: '1~5' },
    { label: '日期', value: today },
  ];

  useEffect(() => {
    // Initialize the audio ref here
    audioRef.current = new Audio(Speech);
  }, []);

  // Effect to handle audio play and pause
  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Function to toggle audio play/pause
  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  // Clean up audio on component unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = ''; // Reset source to avoid memory leaks
      }
    };
  }, []);

  // Function to play the audio
    // const playAudio = () => {
    //   const audio = new Audio(Speech); // Adjust the path as necessary 
    //   audio.play().catch(error => console.error('Error playing the audio', error));
    // };

  if (!story) {
    return (
      <div className="flex justify-center items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-screen">
        <img src={LoadingAnimation} alt="Loading..." />
      </div>
    );
  }

  return (
    <div className="bg-white py-14 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <img
                className="absolute inset-0 h-full w-full object-cover "
                src={imageUrl}
                alt="Story pic"
              />
              {/* <div className="absolute inset-0 bg-gray-900 mix-blend-multiply" /> */}
              <div
                className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-40"
                  style={{
                    clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
                />
              </div>
              <figure className="relative isolate">
                {/* <img src="https://tailwindui.com/img/logos/workcation-logo-white.svg" alt="" className="h-12 w-auto" /> */}
                <blockquote className="mt-6 text-xl font-semibold leading-8 text-white">
                  <p>
                    <br/>
                    <br/>
                    <br/>
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-sm leading-6 text-gray-300">
                  <strong className="font-semibold text-white">故事: </strong> {title}
                </figcaption>
              </figure>
            </div>
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              
              <div className='flex flex-row gap-3 mb-5'>
                <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                  {selectedAnimal}
                </span>
                <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                  {selectedColor}
                </span>
                <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                  {challenge}
                </span>
                <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                  {selectedSkill}
                </span>
              </div>             

              <div className="flex items-center gap-4 mt-5sa">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {title}
                </h1>

                <button onClick={toggleAudio} className="focus:outline-none ">
                  {isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg> 
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                    </svg>
                  )}
                </button>
              </div>


              <div className="max-w-xl">
                <p className="mt-6">
                  {story}  
                </p>
              </div>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
              {stats.map((stat, statIdx) => (
                <div key={statIdx} className="flex flex-col">
                  <dt className="text-base font-semibold text-gray-600">{stat.label}</dt>
                  <dd className="text-lg font-medium text-gray-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
