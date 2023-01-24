import React from 'react'
import Header from './Header'

function Layout({ children }: any) {
  return (
    <>
    <Header />
    <div>
       {/* Main Content */}
       {children}
    </div> 
    </>
  )
}

export default Layout