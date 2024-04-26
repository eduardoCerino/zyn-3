import React from 'react'

const IconError = ({
    stroke = '#000',
    width = '24px',
    height = '24px',
    ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      
      <path
        d="M18 6L6 18M6 6l12 12"
        stroke="#003B5E"
        strokeLinecap="square"
        />
    </svg>
  )
}

export default IconError