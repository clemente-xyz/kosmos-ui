import React from "react";

import { IVectorProps } from "../../types";

function ErrorIllustration({
  height = "99px",
  style,
  className,
}: IVectorProps): JSX.Element {
  return (
    <svg
      height={height}
      viewBox="0 0 216 99"
      style={style}
      className={className}
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Error" transform="translate(-17.000000, -43.000000)">
          <g id="Group" transform="translate(17.000000, 44.000000)">
            <path
              d="M46,90 C42.1340068,90 39,86.8659932 39,83 C39,79.1340068 42.1340068,76 46,76 L7,76 C3.13400675,76 4.73447626e-16,72.8659932 0,69 C-4.73447626e-16,65.1340068 3.13400675,62 7,62 L47,62 C50.8659932,62 54,58.8659932 54,55 C54,51.1340068 50.8659932,48 47,48 L22,48 C18.1340068,48 15,44.8659932 15,41 C15,37.1340068 18.1340068,34 22,34 L62,34 C58.1340068,34 55,30.8659932 55,27 C55,23.1340068 58.1340068,20 62,20 L119,20 C122.865993,20 126,23.1340068 126,27 C126,30.8659932 122.865993,34 119,34 L183,34 C186.865993,34 190,37.1340068 190,41 C190,44.8659932 186.865993,48 183,48 L205,48 C208.865993,48 212,51.1340068 212,55 C212,58.8659932 208.865993,62 205,62 L186,62 C182.134007,62 179,65.1340068 179,69 C179,72.8659932 182.134007,76 186,76 L192,76 C195.865993,76 199,79.1340068 199,83 C199,86.8659932 195.865993,90 192,90 L46,90 Z M209,90 C205.134007,90 202,86.8659932 202,83 C202,79.1340068 205.134007,76 209,76 C212.865993,76 216,79.1340068 216,83 C216,86.8659932 212.865993,90 209,90 Z"
              id="Background"
              fill="hsl(209, 75%, 95%)"
            />
            <path
              d="M75,96 C62.8497355,96 53,86.3741221 53,74.5 C53,62.6258779 62.8497355,53 75,53 C75.516677,53 76.029194,53.0174063 76.5369705,53.0516517 C76.1841654,51.087799 76,49.0654066 76,47 C76,28.2223185 91.2223185,13 110,13 C124.991043,13 137.716066,22.7019845 142.238615,36.1694983 C143.310147,36.0574596 144.398251,36 145.5,36 C162.344685,36 176,49.4314575 176,66 C176,81.7406088 163.675305,94.727337 148,95.9781847 L148,96 L91.5078125,96 M86.9959717,96 L80.0313721,96"
              id="Shape"
              stroke="hsl(209, 100%, 50%)"
              strokeWidth="2.5"
              fill="#FFFFFF"
              strokeLinecap="round"
            />
            <circle
              id="Oval"
              stroke="hsl(209, 100%, 50%)"
              strokeWidth="2.5"
              cx="110.5"
              cy="76.5"
              r="5.5"
            />
            <polyline
              id="Line"
              stroke="hsl(209, 100%, 50%)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              points="95 65 102 59.5068359 95 54.2775821"
            ></polyline>
            <polyline
              id="Line"
              stroke="hsl(209, 100%, 50%)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(122.500000, 59.638791) scale(-1, 1) translate(-122.500000, -59.638791) "
              points="119 65 126 59.5068359 119 54.2775821"
            ></polyline>
            <path
              d="M133.440285,23 C126.931394,24.7225775 121.79208,29.8128579 120,36.2931851"
              id="Oval"
              stroke="#a4c8ff"
              strokeWidth="2.5"
              strokeLinecap="round"
              transform="translate(126.720142, 29.646593) scale(-1, 1) translate(-126.720142, -29.646593) "
            />
            <circle
              id="Oval"
              stroke="#a4c8ff"
              strokeWidth="2"
              cx="141"
              cy="3"
              r="3"
            />
            <circle id="Oval" fill="#a4c8ff" cx="172" cy="19" r="3" />
            <path
              d="M153,18 L157.242641,13.7573593 L153,18 L148.757359,13.7573593 L153,18 Z M153,18 L148.884418,22.1155824 L153,18 L157.115582,22.1155824 L153,18 Z"
              id="Line-5"
              stroke="#a4c8ff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M57.4038059,34.5961941 L60.4038059,31.5961941 L57.4038059,34.5961941 L54.4038059,31.5961941 L57.4038059,34.5961941 Z M57.4038059,34.5961941 L54.4038059,37.5961941 L57.4038059,34.5961941 L60.4038059,37.5961941 L57.4038059,34.5961941 Z"
              id="Line-4"
              stroke="#a4c8ff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle id="Oval" fill="#a4c8ff" cx="68" cy="22" r="3" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default ErrorIllustration;
