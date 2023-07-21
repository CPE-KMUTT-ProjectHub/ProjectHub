import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <main className="flex bg-white min-h-screen flex-col items-center gap-2">
        <div className="text-2xl lg:text-4xl font-bold text-gray-800 mt-10">KMUTT Project HUB</div>
        <img className="mt-4 w-[20rem] lg:w-[40rem]" src="/heropage/heroimg.png" alt="hero-img" />
        <div className="mt-4 relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            id="search"
            name="search"
            className="block w-[20rem] lg:w-[40rem] rounded-full border-0 bg-white py-1.5 pl-10 pr-3 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:leading-6"
            placeholder="Search"
            type="search"
          />
        </div>
      </main>
    </>
  )
}

export default Home
