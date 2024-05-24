import { SVGAttributes } from "react";

const Triangle = (props: SVGAttributes<SVGSVGElement>) => (
  <svg
    width="9"
    height="16"
    viewBox="0 0 9 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0.748845 8.72058C0.340012 8.32718 0.340012 7.67282 0.748845 7.27942L7.30662 0.969197C7.94193 0.357876 9 0.808113 9 1.68977L9 14.3102C9 15.1919 7.94193 15.6421 7.30662 15.0308L0.748845 8.72058Z"
      fill="currentColor"
    />
  </svg>
);

export default Triangle;
