import React from 'react';

interface Props {
  degree?: number;
  color?: string;
}

export const Arrow: React.FC<Props> = ({ degree, color }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        transform={`rotate(${degree})`}
      >
        <path
          d="M15 18.5L9 12.5L15 6.5"
          stroke={color || '#6B7783'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
