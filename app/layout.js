import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Maktub',
  description: 'Blog of strories',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${inter.className} `}
      >
   
          <Navbar />
          <main className="">
            {children}
          </main>
       
      </body>
    </html>
  )
}
