import * as React from "react"
const Sphere = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={108}
    height={108}
    fill="none"
    {...props}
  >
    <g filter="url(#a)" shapeRendering="crispEdges">
      <circle cx={57} cy={52} r={50} fill="url(#b)" />
      <circle cx={57} cy={52} r={50} fill="url(#c)" fillOpacity={0.67} />
    </g>
    <defs>
      <radialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(130.657 28.834 49.272) scale(56.0223)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2089EA" />
        <stop offset={1} stopColor="#093A66" stopOpacity={0.18} />
      </radialGradient>
      <radialGradient
        id="c"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(127.543 29.751 36.095) scale(68.1047)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0A80ED" />
        <stop offset={1} stopOpacity={0.43} />
      </radialGradient>
      <filter
        id="a"
        width={108}
        height={108}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-3} dy={2} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.00692708 0 0 0 0 0.0444917 0 0 0 0 0.0791667 0 0 0 1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_450_190" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_450_190"
          result="shape"
        />
      </filter>
    </defs>
    <p>hghfhh</p>
  </svg>
)
export default Sphere
