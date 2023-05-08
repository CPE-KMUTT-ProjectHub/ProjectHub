import { ReactNode } from 'react'

const Link: React.FC<Props> = ({ to, children }: Props): JSX.Element => {
  return (
    <a className="text-sm no-underline no-border mt-10" href={to}>
      <button className="bg-cyan-500 hover:bg-cyan-700 transition ease-in-out rounded px-3 py-2">{children}</button>
    </a>
  )
}

export default Link

type Props = {
  to: string
  children: ReactNode
}
