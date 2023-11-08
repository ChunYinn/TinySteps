export default function Example() {
  return (
    <div className="bg-white">
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
  )
}