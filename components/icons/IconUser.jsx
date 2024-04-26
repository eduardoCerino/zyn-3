import React from 'react'

const IconUser = ({
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
        d="M19.727 19.93a8 8 0 00-15.454 0"
        stroke="#00A9E0"
        strokeLinecap="round"
      />
      <circle cx={12} cy={8} r={3.5} stroke="#003B5E" strokeLinecap="round" />
    </svg>
  )
}

export default IconUser