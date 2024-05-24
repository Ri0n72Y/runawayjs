import { SVGAttributes } from "react";
import styled, { keyframes } from "styled-components";

export function RedDot(props: SVGAttributes<SVGSVGElement>) {
  return (
    <Dot
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="4" cy="4" r="4" fill="#FF0000" />
    </Dot>
  );
}

const frames = keyframes`
  0% {
    scale: 1;
  }
  25% {
    scale: 1.5;
  }
  100% {
    scale: 1;
  }
`;

const Dot = styled.svg`
  animation: 1s ${frames} ease-out infinite;
`;
