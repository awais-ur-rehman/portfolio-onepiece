/** Original editable character. The separate lid opens with scroll. */
export function Character({ contact = false }: { contact?: boolean }) {
  return (
    <svg
      className={`character ${contact ? "character-contact" : ""}`}
      viewBox="0 0 600 660"
      fill="none"
      aria-hidden="true"
    >
      <g
        stroke="#141219"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M193 400C158 392 136 364 119 327L83 245 48 258C49 304 70 385 105 435 133 477 175 504 211 492"
          fill="var(--scene-color)"
        />
        <path
          d="m82 264-8-39c-3-14-5-54-13-56-13-3-7 36-7 38-3-14-7-63-18-59-11 4 0 47 0 57-8-18-17-54-26-48-9 6 7 44 10 62-9-11-15-27-23-24-12 7 13 38 22 57 11 23 25 29 44 26"
          fill="var(--scene-color)"
          transform="translate(18 12)"
        />
        <path
          d="M211 375c-49 2-80 26-97 79L75 660h468l-48-193c-17-58-48-90-101-94Z"
          fill="#18161e"
        />
        <path
          d="m226 370 16-56 118-2 18 63c-41 37-104 32-152-5Z"
          fill="var(--scene-color)"
        />
        <path
          d="M203 207c-20-6-27 12-20 35 4 17 13 24 26 18M383 203c22-8 29 11 21 34-4 17-13 24-26 18"
          fill="var(--scene-color)"
        />
        <path
          d="M200 190c-1 83 7 136 54 158 29 14 49 16 81-3 43-26 53-88 49-153Z"
          fill="var(--scene-color)"
        />
        <path
          d="M204 282c9 41 17 63 58 73 38 9 64-7 85-33l29-52-16 27-19 5-14 18-21-7-26 10-26-15-25-5Z"
          fill="#24212b"
          strokeWidth="2"
        />
        <path d="m285 231-8 44 21 3M275 301c15 8 29 7 44-2" />
        <path
          d="M216 222c10-10 25-10 35-2M323 219c14-10 30-10 41-1"
          strokeWidth="6"
        />
        <ellipse cx="236" cy="245" rx="16" ry="19" fill="#f3f0ea" />
        <ellipse cx="342" cy="243" rx="16" ry="19" fill="#f3f0ea" />
        <ellipse
          className="pupil"
          cx="241"
          cy="246"
          rx="5"
          ry="8"
          fill="#17151d"
          stroke="none"
        />
        <ellipse
          className="pupil"
          cx="346"
          cy="244"
          rx="5"
          ry="8"
          fill="#17151d"
          stroke="none"
        />
        <ellipse cx="292" cy="191" rx="93" ry="22" fill="#17151d" />
        <path
          d="M220 192c34 13 100 17 149-1"
          stroke="#a49ab5"
          strokeWidth="2"
        />
        <g className="head-lid">
          <path
            d="M199 175c-9-28 0-59 20-72-4-16 12-29 29-25 8-22 35-19 46-14 17-18 41-10 48 4 22-5 38 8 36 28 22 8 23 36 12 49l-7 29c-49 21-133 22-184 1Z"
            fill="#24212b"
          />
          <path
            d="M205 174c42-20 130-22 176-1"
            stroke="#777087"
            strokeWidth="2"
          />
          <path
            d="M234 123c-4-13 9-21 17-18M276 98c9-12 26-6 25 7M328 110c16-9 29 5 23 17"
            stroke="#4b4457"
            strokeWidth="2"
          />
        </g>
        <path
          d="m170 475-24 185M442 474l41 186M247 381c34 21 87 22 121-3"
          stroke="#36313e"
        />
      </g>
      <g className="thoughts" stroke="#18161e" strokeWidth="3">
        <g transform="translate(278 103) rotate(-13)">
          <rect x="-25" y="-20" width="50" height="40" rx="7" fill="#d4cb71" />
          <path d="m-10-7-8 7 8 7M10-7l8 7-8 7m-8-18-5 22" />
        </g>
        <g transform="translate(352 65) rotate(16)">
          <path d="m0-24 7 15 17 9-17 7L0 24-8 7-24 0l16-9Z" fill="#c48294" />
        </g>
        <g transform="translate(221 42)">
          <circle r="15" fill="#a9bc9b" />
          <path d="M-24 0h48M0-24v48" />
        </g>
      </g>
    </svg>
  );
}
