import React from 'react'

function AccountBox() {
  return (
    <div className="w-48 hidden lg:flex items-center justify-end space-x-5">
        <div>Log in</div>
        <div className="p-2 px-4 flex items-center bg-blue-600 rounded-xl text-white font-medium cursor-pointer">
            <span>Sign up</span>
        </div>
    </div>
  )
}

export default AccountBox