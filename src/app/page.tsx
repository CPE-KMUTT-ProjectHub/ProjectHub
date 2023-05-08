import Link from '@/components/Link'
import logo from '@/images/KMUTT_LOGO.png'
import Image from 'next/image'

const Home: React.FC = (): JSX.Element => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2">
      <Image width={100} src={logo} alt="kmutt-logo" priority />
      <div className="text-2xl">KMUTT Project HUB</div>
      <div className="text-xl">Coming Soon...</div>
      <Link to="https://github.com/CPE-KMUTT-ProjectHub">Github</Link>
    </main>
  )
}

export default Home
