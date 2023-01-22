import React from 'react'
import Header from '../components/Header'

function Layout({ children }: any) {
  return (
    <div>
      {/* @ts-ignore */}
      <Header />
       {/* Main Content */}
       {children}
    </div>
  )
}

export default Layout