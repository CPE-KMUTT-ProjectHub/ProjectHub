import { Montserrat, Mulish, Nunito } from 'next/font/google'
import './globals.css'
import AuthProvider from '@/components/AuthProvider'
import Navbar from '@/components/navbar/navbar'

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

export default function RootLayout({ children, Session }: { children: React.ReactNode; Session: any }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${nunito.variable} ${mulish.variable} overscroll-none`}>
        <AuthProvider session={Session}>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
