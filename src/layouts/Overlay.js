import React from 'react'

const Overlay = ({children}) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-80">
      {children}
    </div>
  )
}

export default Overlay
