export interface INav {
  name: string
  current: boolean
  href: string
}

export const navigation: INav[] = [
  { name: 'Home', href: '/', current: true },
  { name: 'Demo', href: '/test', current: false },
]
