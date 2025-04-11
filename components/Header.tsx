'use client'

import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Header = () => {
    const [sideIsOpen, setSideIsOpen] = useState(true)

    const handleSide = () => {
        setSideIsOpen((prev) => !prev)
    }

  return (
      <>
          <Navbar  handleSide={handleSide} />
          <Sidebar sideIsOpen={sideIsOpen} handleSide={handleSide} />
    </>
  )
}

export default Header