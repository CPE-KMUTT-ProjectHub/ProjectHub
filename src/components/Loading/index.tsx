import Image from 'next/image'
import './loading.css'
import Logo from '@/images/KMUTT_LOGO.png'

const Loading: React.FC = (): JSX.Element => {
  return (
    <div className="loading">
      <Image className="m-0 m-auto" src={Logo} alt="logo" width={100} />
    </div>
  )
}

export default Loading
