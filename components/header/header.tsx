import Link from "next/link"
import React from "react"

const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-base-300">
          <Link href="/" className="btn btn-ghost text-lg">Goriber Amazon</Link>
          <ul className="flex">
            <li>
              <Link className="btn btn-ghost rounded-btn" href="/card">
                Card
              </Link>
            </li>
            <li>
              <Link className="btn btn-ghost rounded-btn" href="/card">
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
