import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./../components/header/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Amazon",
  description: "Ecommerce website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          {children}
          <footer><p>Copyright 2024 - All right reserved by next-amazon</p></footer>
        </div>
      </body>
    </html>
  )
}
