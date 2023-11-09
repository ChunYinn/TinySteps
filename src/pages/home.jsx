import book from '../assets/img/3dbook.png';
import { LifebuoyIcon, NewspaperIcon, PhoneIcon } from '@heroicons/react/20/solid'

const cards = [
  {
    name: '個性化故事創造',
    description: '結合OpenAI尖端技術與兒童成長心理學，我們為每位孩子定制富有啟發和教育意義的睡前故事。家長只需簡單輸入孩子的喜好和當前挑戰，我們的系統便能創作出助力學習與情緒發展的個人化故事。',
    icon: PhoneIcon,
  },
  {
    name: '情緒智能培養',
    description: '依照哈佛大學研究提出的兒童成長心理學原則，我們的故事旨在幫助孩子認識並管理自己的情緒。透過故事中角色和情節的體驗，孩子將學會理解各種情緒是生活的一部分，並能自然地過渡和調整情緒，為他們建立解決現實生活問題的韌性。',
    icon: LifebuoyIcon,
  },
  {
    name: '一天一點的進步',
    description: '我們的故事書不僅包含傳統文化的元素，還結合了現代教育心理學的洞察，專門為提升孩子的學習興趣、情緒智能和社交技能而設計。透過這些故事，孩子們能在潛移默化中學習和成長，同時家長也能參與到這一有意義的教育過程中。',
    icon: NewspaperIcon,
  },
]

export default function Example() {
  return (
    <>
    <div className="flex flex-col md:flex-row items-center bg-white"> 
      {/* Image container */}
      <div className="md:w-1/2">
        <img
          src={book} // Assuming you've imported 'book' at the top of your file
          alt="3D Book"
          className="w-full h-auto object-cover" // Adjust object-fit as needed
        />
      </div>
      
      {/* Text content */}
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            讓每個故事
            <br />
            成為孩子成長的力量
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
          您的孩子喜歡恐龍、太空船，還是魔法森林？我們的故事書會根據他們的興趣和需求來編寫。無論是克服害怕黑暗，還是學會與新朋友交流，都能幫助孩子面對特定的挑戰。
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/form"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              開始
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
            我們做什麼？
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          加入『童行』的大家庭，讓我們一起為您的孩子量身定制成長的故事，開啟他們的無限可能。
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div key={card.name} className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
              <card.icon className="h-7 w-5 flex-none text-indigo-400" aria-hidden="true" />
              <div className="text-base leading-7">
                <h3 className="font-semibold text-white">{card.name}</h3>
                <p className="mt-2 text-gray-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
    

    
  )
}