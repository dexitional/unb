import React from 'react'
import Header from '../components/Header'

function Layout({ children }: any) {
  return (
    <div>
      <Header />
      {/* Main Content */}
       {children}
    </div>
  )
}

export default Layout