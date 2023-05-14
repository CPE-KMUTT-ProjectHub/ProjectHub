import { ReactNode } from 'react'

const Link: React.FC<Props> = ({ to, children, target }: Props): JSX.Element => {
  return (
    <a className="text-sm no-underline no-border mt-5" href={to} target={target}>
      <button className="bg-white-500 hover:bg-white-700ß transition ease-in-out rounded px-3 py-2">{children}</button>
    </a>
  )
}

export default Link

type Props = {
  to: string
  children: ReactNode
  target: string
}
