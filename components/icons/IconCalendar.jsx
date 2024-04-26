import React from 'react'

const IconCalendar = ({
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
        d="M17 3v4M7 3v4"
        stroke="#003B5E"
        strokeWidth={1.2}
        strokeLinecap="round"
      />
      <path
        d="M3 10c0-1.886 0-2.828.586-3.414C4.172 6 5.114 6 7 6h10c1.886 0 2.828 0 3.414.586C21 7.172 21 8.114 21 10v1H3v-1z"
        stroke="#003B5E"
        strokeWidth={1.2}
      />
      <rect
        x={3}
        y={6}
        width={18}
        height={15}
        rx={2}
        stroke="#003B5E"
        strokeWidth={1.2}
      />
      <path
        d="M6 15h4M14 15h4M6 18h4M14 18h4"
        stroke="#00A9E0"
        strokeWidth={1.2}
        strokeLinecap="round"
      />
    </svg>
  )
}

export default IconCalendar