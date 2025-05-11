import * as React from "react";
import type { SVGProps } from "react";
const DaisyUI = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <rect width={512} height={256} x={256} y={670.72} fill="#1AD1A5" rx={128} />
    <circle cx={512} cy={353.28} r={256} fill="#fff" />
    <circle
      cx={512}
      cy={353.28}
      r={261}
      stroke="#000"
      strokeOpacity={0.2}
      strokeWidth={10}
    />
    <circle cx={512} cy={353.28} r={114.688} fill="#FF9903" />
  </svg>
);
export default DaisyUI;
