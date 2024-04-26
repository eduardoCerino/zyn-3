import React from 'react'

const IconSuccess = ({
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
    <circle cx={12} cy={12} r={8} fill="#9BFA99" />
    <path
      d="M9.5 12l1.894 1.894a.15.15 0 00.212 0L15.5 10"
      stroke="#18A015"
      strokeWidth={1.2}
    />
    <path
      d="M19.5 12A7.5 7.5 0 1112 4.5"
      stroke="#18A015"
      strokeLinecap="round"
    />
  </svg>
  )
}

export default IconSuccess