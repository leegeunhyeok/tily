import * as React from 'react';

export type LogoIconProps = React.SVGProps<SVGSVGElement> & Size;

type Size = {
  width?: number;
  height?: number;
};

export const LogoIcon = ({ width, height, ...rest }: LogoIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 128 128"
      {...rest}
    >
      <path
        d="M36.959 86.973S91.082 2.783 97.095 8.796h0C103.109 14.81 55 99 55 99s-21.048 18.041-24.054 18.041 5.814-29.218 5.814-29.218L55 99"
        fill="none"
        stroke="#000"
        strokeWidth={3}
      />
    </svg>
  );
};
