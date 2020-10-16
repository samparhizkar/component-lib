import React, { FC } from 'react';

// className, desc, and fill are optional,
// whereas title and size are required
interface Props {
  className?: string;
  desc?: string;
  fill?: string;
  size: number;
  title: string;
}

// we provide our Props interface to the
// function component type
const Circle: FC<Props> = ({
                             className = 'rl-circle',
                             desc,
                             fill,
                             size,
                             title,
                           }) => (
  <svg
    className={className}
    height={size}
    fill={fill}
    role="img"
    viewBox="0 0 100 100"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title}</title>
    {desc && <desc>{desc}</desc>}
    <circle cx="50" cy="50" r="50" />
  </svg>
);

export default Circle;
