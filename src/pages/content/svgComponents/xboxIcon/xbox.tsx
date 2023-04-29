import React, { useEffect, useState } from "react";

interface Props {
  className: string;
  pressedButtons: string[];
  leftAxisX: number;
  leftAxisY: number;
  rightAxisX: number;
  rightAxisY: number;
}

const XboxIcon: React.FC<Props> = ({
  className,
  pressedButtons,
  leftAxisX,
  leftAxisY,
  rightAxisX,
  rightAxisY,
}) => {
  const [leftTransform, setLeftTransform] = useState("");
  const [rightTransform, setRightTransform] = useState("");
  useEffect(() => {
    const normalizedLeftAxisX = (leftAxisX - 396) / 100;
    const normalizedLeftAxisY = -(leftAxisY - 224) / 100;
    const transformX = 21.3 * normalizedLeftAxisX;
    const transformY = 21.3 * normalizedLeftAxisY;
    const leftAnalogTransformString = `translate(${transformX},${transformY})`;
    setLeftTransform(leftAnalogTransformString);
  }, [leftAxisX, leftAxisY]);

  useEffect(() => {
    const normalizedLeftAxisX = (rightAxisX - 498) / 100;
    const normalizedLeftAxisY = -(rightAxisY - 223) / 100;
    const transformX = 21.3 * normalizedLeftAxisX;
    const transformY = 21.3 * normalizedLeftAxisY;
    const rightAnalogTransformString = `translate(${transformX},${transformY})`;
    setRightTransform(rightAnalogTransformString);
  }, [rightAxisX, rightAxisY]);
  return (
    <svg
      className={className}
      version="1.1"
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="300px"
      viewBox="0 0 626.1 471.3"
      xmlSpace="preserve"
    >
      <g>
        <path
          d="M603.3,272.8c-8.5-40.7-24.1-88.1-33.3-113.1c-9.2-25-23.9-67.3-27.9-72.8c-10.4-14.4-14-16.8-17.2-19.3
		c-3.2-2.4-2.6-3.7-7.7-15.4c-4.6-10.7-43.3-25.6-72.9-31.7c-18.1-3.8-25.4-1.2-29.2,1c-3.8,2.2-9.3,7.7-19.3,9.5
		c0,0-63.7-1.4-81.6-1.4c-17.8,0-81.6,1.4-81.6,1.4c-10-1.8-15.5-7.4-19.3-9.5c-3.8-2.2-11.1-4.8-29.2-1
		c-29.7,6.2-68.3,21.1-72.9,31.7c-5.1,11.7-4.5,13-7.7,15.4c-3.2,2.4-6.8,4.9-17.2,19.3c-4,5.5-18.7,47.8-27.9,72.8
		c-9.2,25-24.8,72.5-33.3,113.1c-8.5,40.7-11.6,75.1-5.3,103.5c10.2,45.5,51.4,58,57.8,58c7.2,0,28.2-18.8,45.7-42.5
		c17.5-23.7,47.2-62.3,64.4-69.6c17.1-7.3,75.2-4.4,126.6-4.4s109.4-2.9,126.6,4.4c17.1,7.3,46.9,45.9,64.4,69.6
		c17.5,23.7,38.6,42.5,45.7,42.5c6.4,0,47.6-12.4,57.8-58C614.9,347.9,611.7,313.5,603.3,272.8z"
        />
        <g>
          <path
            fill="#353434"
            d="M478.1,51.5c37,13.2,49.3,23.1,64,35.4h0h0c-10.4-14.4-14-16.8-17.2-19.3c-3.2-2.4-2.6-3.7-7.7-15.4
			c-4.6-10.7-43.3-25.6-72.9-31.7c-18.1-3.8-25.4-1.2-29.2,1c-3.8,2.2-9.3,7.7-19.3,9.5c0,0-63.7-1.4-81.6-1.4
			c-17.8,0-81.6,1.4-81.6,1.4c-10-1.8-15.5-7.4-19.3-9.5c-3.8-2.2-11.1-4.8-29.2-1c-29.7,6.2-68.3,21.1-72.9,31.7
			c-5.1,11.7-4.5,13-7.7,15.4c-3.2,2.4-6.8,4.9-17.2,19.3l0,0l0,0c14.7-12.4,27-22.2,64-35.4c37-13.2,51.8-7.6,63.4,5.7
			s37.3,39.1,40.4,41.1c3.2,2,3.3,6,60.1,6s57-4,60.1-6c3.2-2,28.8-27.8,40.4-41.1C426.3,43.9,441.2,38.2,478.1,51.5z"
            style={{ fill: "#009FE3 " }}
          />
        </g>
        <circle fill="#5A6CF3" cx="269.5" cy="132.5" r="14.2" />
        <circle
          cx="269.5"
          cy="131.7"
          r="11.6"
          fill={pressedButtons.includes("Back") ? "red" : ""}
        />
        <circle fill="#5A6CF3" cx="357" cy="132.5" r="14.2" />
        <circle
          cx="357"
          cy="131.7"
          r="11.6"
          fill={pressedButtons.includes("Start") ? "red" : ""}
        />
        <circle fill="#5A6CF3" cx="159.6" cy="131.6" r="42.8" />
        <circle cx="159.6" cy="131.6" r="37" />
        <circle fill="#5A6CF3" cx="234.4" cy="230.4" r="51.4" />
        <circle
          fill="#353434"
          cx="159.6"
          cy="132.4"
          r="33.3"
          style={{ fill: "#009FE3 " }}
        />
        <circle fill="#5A6CF3" cx="394.4" cy="222.8" r="42.8" />
        <circle
          cx="159.6"
          cy="130.7"
          r="21.3"
          transform={leftTransform}
          fill={pressedButtons.includes("L3") ? "red" : ""}
        />
        <circle cx="394.4" cy="222.8" r="37" />
        <circle
          fill="#353434"
          cx="394.4"
          cy="223.6"
          r="33.3"
          style={{ fill: "#009FE3 " }}
        />
        <circle
          cx="394.3"
          cy="222"
          r="21.3"
          transform={rightTransform}
          fill={pressedButtons.includes("R3") ? "red" : ""}
        />
        <path
          fill="#353434"
          style={{ fill: "#009FE3 " }}
          d="M272.1,215.5h-19.6c-2.2,0-3.9-1.7-3.9-3.9V192c0-3.6-2.9-6.6-6.6-6.6H225c-3.6,0-6.6,2.9-6.6,6.6v19.6
		c0,2.2-1.7,3.9-3.9,3.9h-19.6c-3.6,0-6.6,2.9-6.6,6.6v17.1c0,3.6,2.9,6.6,6.6,6.6h19.6c2.2,0,3.9,1.7,3.9,3.9v19.6
		c0,3.6,2.9,6.6,6.6,6.6H242c3.6,0,6.6-2.9,6.6-6.6v-19.6c0-2.2,1.7-3.9,3.9-3.9h19.6c3.6,0,6.6-2.9,6.6-6.6v-17.1
		C278.7,218.4,275.7,215.5,272.1,215.5z"
        />
        <path
          fill={
            pressedButtons.some((button) => button.includes("D-Pad"))
              ? "red"
              : ""
          }
          d="M271.2,218.4h-22.3c-1.7,0-3.2-1.4-3.2-3.2v-22.3c0-2.9-2.4-5.3-5.3-5.3h-13.8c-2.9,0-5.3,2.4-5.3,5.3v22.3
		c0,1.7-1.4,3.2-3.2,3.2h-22.3c-2.9,0-5.3,2.4-5.3,5.3v13.8c0,2.9,2.4,5.3,5.3,5.3h22.3c1.7,0,3.2,1.4,3.2,3.2v22.3
		c0,2.9,2.4,5.3,5.3,5.3h13.8c2.9,0,5.3-2.4,5.3-5.3V246c0-1.7,1.4-3.2,3.2-3.2h22.3c2.9,0,5.3-2.4,5.3-5.3v-13.8
		C276.5,220.7,274.1,218.4,271.2,218.4z"
        />
        <path
          fill={
            pressedButtons.some((button) => /(LB|LT|RB|RT)/.test(button))
              ? "red"
              : ""
          }
          d="M524.9,67.6c-3.2-2.4-2.6-3.7-7.7-15.4c-4.6-10.7-43.3-25.6-72.9-31.7c-18.1-3.8-25.4-1.2-29.2,1
		c-3.8,2.2-9.3,7.7-19.3,9.5c0,0-63.7-1.4-81.6-1.4c-17.8,0-81.6,1.4-81.6,1.4c-10-1.8-15.5-7.4-19.3-9.5c-3.8-2.2-11.1-4.8-29.2-1
		c-29.7,6.2-68.3,21.1-72.9,31.7c-5.1,11.7-4.5,13-7.7,15.4c15-9.3,34.5-22.9,77.3-30.5c34.5-6.1,14.4,5.1,65.8,4.6
		c55.9-0.5,67.6-0.3,67.6-0.3s11.8-0.2,67.6,0.3c51.5,0.5,31.3-10.7,65.8-4.6C490.3,44.7,509.9,58.3,524.9,67.6z"
        />
        <g>
          <path
            fill="#1D1D1B"
            d="M276.9,137.5h-9.6v-7.3h9.6V137.5z M268.8,135.9h6.4v-4.1h-6.4V135.9z"
          />
        </g>
        <g>
          <path
            fill="#FFFFFF"
            d="M276.9,137.5h-9.6v-7.3h9.6V137.5z M268.8,135.9h6.4v-4.1h-6.4V135.9z"
          />
        </g>
        <g>
          <path
            fill="#FFFFFF"
            d="M264.9,132.7h-2.4v-7.3h9.6v2.4h-1.6v-0.8H264v4.1h0.8V132.7z"
          />
        </g>
        <rect x="350.8" y="126.8" fill="#FFFFFF" width="12.6" height="1.4" />
        <rect x="350.8" y="130.8" fill="#FFFFFF" width="12.6" height="1.4" />
        <rect x="350.8" y="134.7" fill="#FFFFFF" width="12.6" height="1.4" />
        <circle fill="#5A6CF3" cx="427.3" cy="133.2" r="21.8" />
        <circle
          fill={pressedButtons.includes("X") ? "red" : ""}
          cx="427.7"
          cy="132.7"
          r="19.8"
        />
        <circle fill="#5A6CF3" cx="468.7" cy="93.4" r="21.5" />
        <circle
          fill={pressedButtons.includes("Y") ? "red" : ""}
          cx="469.1"
          cy="93"
          r="19.5"
        />
        <circle fill="#5A6CF3" cx="468.7" cy="173.6" r="21.5" />
        <circle
          fill={pressedButtons.includes("A") ? "red" : ""}
          cx="469.1"
          cy="173.2"
          r="19.5"
        />
        <circle fill="#5A6CF3" cx="509.5" cy="135.3" r="21.3" />
        <circle
          fill={pressedButtons.includes("B") ? "red" : ""}
          cx="509.9"
          cy="134.9"
          r="19.3"
        />
        <g>
          <path
            fill="#009FE3"
            d="M417.8,145.5l7.1-13.1l-6.5-12h4.9l4.1,7.5l4.1-7.5h4.8l-6.5,12l7.1,13.1h-5l-4.6-8.5l-4.6,8.5H417.8z"
          />
        </g>
        <g>
          <g>
            <path
              fill="#E30613"
              d="M502.6,122.3h8.1c2.2,0,3.8,0.2,4.7,0.6c0.9,0.4,1.7,1.1,2.3,2.1c0.6,1,0.9,2.2,0.9,3.5
				c0,1.2-0.3,2.3-0.8,3.2c-0.5,1-1.2,1.7-2.1,2.1c1.2,0.4,2.1,1.2,2.8,2.2c0.7,1,1,2.3,1,3.8c0,1.8-0.4,3.3-1.3,4.6
				c-0.9,1.2-1.9,2-3.1,2.3c-0.8,0.2-2.7,0.3-5.7,0.3h-6.9V122.3z M506.7,126.4v5.7h2.7c1.6,0,2.6,0,3-0.1c0.7-0.1,1.2-0.4,1.6-0.9
				c0.4-0.5,0.6-1.1,0.6-1.9c0-0.7-0.2-1.3-0.5-1.8c-0.3-0.5-0.7-0.7-1.2-0.9s-1.8-0.2-3.9-0.2H506.7z M506.7,136.3v6.6h3.8
				c1.7,0,2.7-0.1,3.2-0.3c0.5-0.2,0.9-0.5,1.2-1c0.3-0.5,0.5-1.2,0.5-1.9c0-0.8-0.2-1.5-0.5-2c-0.3-0.5-0.8-0.9-1.4-1.1
				c-0.6-0.2-1.7-0.3-3.5-0.3H506.7z"
            />
          </g>
        </g>
        <g>
          <path
            fill="#009640"
            d="M479.8,185.8H475l-1.9-6.1h-8.8l-1.8,6.1h-4.7l8.6-26.8h4.7L479.8,185.8z M471.6,175.2l-3-10l-3,10H471.6z"
          />
        </g>
        <g>
          <path
            fill="#FFE000"
            d="M466.9,106.1V95.7l-7.4-14.3h4.8l4.8,9.8l4.7-9.8h4.7L471,95.7v10.4H466.9z"
          />
        </g>
        <circle fill="#FFFFFF" cx="314.4" cy="72.7" r="14.2" />
      </g>
    </svg>
  );
};
export default XboxIcon;
