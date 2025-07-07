import React from "react";

const Logo = ({
  height = 40,
  width = 40,
}: {
  height?: number;
  width?: number;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    viewBox="31.5 23.5 80 80"
    width={width}
    height={height}
  >
    <defs>
      <style>
        {
          "      .st0 {        fill: #fff;      }      .st1 {        isolation: isolate;      }      .st2 {        fill: #ff715c;      }    "
        }
      </style>
    </defs>
    <g>
      <path
        className="st2"
        d="M71.5,23.5h0c22.09,0,40,17.91,40,40h0c0,22.09-17.91,40-40,40h0c-22.09,0-40-17.91-40-40h0c0-22.09,17.91-40,40-40Z"
      />
      <g>
        <polygon
          className="st0"
          points="73.71 85.41 84.56 79.78 49.19 68.12 39.14 73.75 73.71 85.41"
        />
        <polygon
          className="st0"
          points="83.36 71.74 94.21 66.11 59.24 54.45 48.79 60.08 83.36 71.74"
        />
        <polygon
          className="st0"
          points="93.41 58.07 103.46 52.85 68.48 41.19 58.43 46.82 93.41 58.07"
        />
      </g>
    </g>
  </svg>
);
export default React.memo(Logo);
