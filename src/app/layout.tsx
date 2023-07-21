import { Montserrat, Mulish, Nunito } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
})
const nunito = Nunito({ variable: '--font-nunito', subsets: ['latin'] })
const mulish = Mulish({ variable: '--font-mulish', subsets: ['latin'] })

export const metadata = {
  title: 'Project Hub KMUTT',
  description: 'Explore new possibility',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${nunito.variable} ${mulish.variable} overscroll-none`}>{children}</body>
    </html>
  )
}
