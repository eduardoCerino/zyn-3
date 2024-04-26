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
      <circle cx={12} cy={12} r={8.4} stroke="#FFA9A9" strokeWidth={1.2} />
      <path
        d="M16 8l-8 8M8 8l8 8"
        stroke="#D9333F"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconError