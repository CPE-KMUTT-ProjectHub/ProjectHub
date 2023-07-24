import Navbar from '@/components/Navbar'
const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <main className="flex bg-white min-h-screen flex-col items-center gap-2">
        <div className="text-2xl lg:text-4xl font-bold text-gray-800 mt-10">KMUTT Project HUB</div>
        <img className="mt-4 w-[20rem] lg:w-[40rem]" src="/heropage/heroimg.png" alt="hero-img" />
      </main>
    </>
  )
}

export default Home
