import { ReactNode } from 'react'
import { GoMarkGithub } from "react-icons/go";

const Link: React.FC<Props> = ({ to, children }: Props): JSX.Element => {
  return (
    <a className="text-sm no-underline no-border mt-5" href={to}>
      <button className="bg-white-500 hover:bg-white-700 transition ease-in-out rounded px-3 py-2"><GoMarkGithub/> {children}</button>
    </a>
  )
}

export default Link

type Props = {
  to: string
  children: ReactNode
}
