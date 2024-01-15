import React from 'react'

function MainHand({ clicked }) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={50}
    height={150}

  >
    <defs>
      <symbol xmlns="http://www.w3.org/2000/svg" id="a" viewBox="0 0 91 113.75">
        <path d="M76.8 21.2c.43-.39-.19-.98-.63-.63-4.68 3.84-9.28 7.77-13.82 11.77-2.22 1.96-10.67 9.13-12.15 11.14-1.1 1.5-1.63 3.68-.89 5.47.96 2.32 2.69 4.48 3.9 6.69 1.1 2.01 2.15 4.05 3.05 6.15.43 1 1.68 3.2 1.01 4.24-1.73 2.68-4.79.62-6.53-.65-1.19-.87-2.7-1.58-4.12-.79-3.89 2.18.34 5.17 2.31 6.81 2.06 1.73 3.85 3.78 6.71 3.36 1.58-.24 3.27-.67 4.72-1.37 1.5-.72 2.32-2.41 3.11-3.84 0 1.53.28 3.08.24 4.59-.02.6-.07 1.19-.16 1.78-.07.45-.17.77-.53 1.08-.5.43-1.18.66-1.81.82-1.6.4-3.4.5-5.03.25-2.25-.34-4.21-1.5-6.03-2.81-2.05-1.48-5.76-5.09-5.78-5.11-1.04-1.02-2.48-1.94-3.99-1.35-1.06.41-1.64 1.59-1.67 2.72-1.49-.89-3.29-.92-4.35.95-.25.44-.35.89-.37 1.34-.61-.3-1.28-.38-1.99-.15-1.28-2.99-2.89-5.8-3.78-8.96-1.06-3.77-.08-7.24.88-10.91.85-3.23 1.77-6.48 2.13-9.81.18-1.68-.14-3.6.41-5.2.53-1.55 1.94-2.84 3-4.05 8.22-9.35 18.38-17.36 24.89-28.11.33-.54-.47-.96-.83-.48-2.53 3.4-5.27 6.57-8.11 9.66C45.6 10.46 40.44 5.05 34.83.37c-.44-.37-1.04.2-.64.64 4.94 5.41 10.42 10.45 15.73 15.51-4.07 4.39-13.4 14-13.87 14.51-2.94-2.89-6.54-5.25-9.79-7.75-3.78-2.91-7.5-5.9-11.41-8.63-.48-.34-1.09.44-.64.82 3.52 2.93 7.24 5.63 10.89 8.4 3.44 2.6 6.82 5.33 10.39 7.75-1.1 1.21-2.19 2.43-3.23 3.69-1.43 1.72-2.23 3.21-2.28 5.48-.13 5.99-2.14 11.48-3.05 17.34-.93 6.01 3.9 16.25 3.91 16.29-.69.82-.64 1.99-.24 3.05-.12.6-.05 1.28-.12 1.87-.09.72-.29 1.42-.51 2.1-.52 1.55-1.21 3-1.49 4.61-.13.71-.23 1.37.05 2.06.33.81.9 1.66 1.7 2.08 1.58.83 3.37-.15 4.54-1.25.63-.59 1.18-1.34 1.57-2.11.44-.87.69-1.78.94-2.71.21.03.45.05.74.06 1.54.06 4.76.06 4.81.04 1.2.94 2.41 1.85 3.64 2.74 1.04.76 1.73 1.15 3 .79 1.66-.46 3.31-1.3 4.86-2.09h.06c.88.02 8.46-3.09 9.19-4.26.7-1.13.71-2.58.31-3.83.11-.11.21-.23.3-.36.28-.45.33-.98.39-1.5.17-1.32.14-2.64.03-3.97-.11-1.26-.17-2.52-.29-3.78 1.06-2 1.93-4.13 2.15-6.39.24-2.53-.6-5.02-1.59-7.31-1.26-2.9-2.86-5.63-3.61-8.73-.75-3.11-.85-6.37-1.02-9.55.94-.83 12-10.66 16.55-14.82v.04zM34.45 87.96c-.45.51-.93 1.08-1.56 1.38-.68.33-1.59.46-2.28.08-1.39-.76-1.23-2.41-.96-3.71.31-1.46.95-2.8 1.4-4.21.22-.69.38-1.4.46-2.12 0-.08.02-.18.03-.26 1.1 1.51 2.67 2.77 3.99 3.99.32.3.58.52.83.67-.27 1.52-.88 3.01-1.9 4.17l-.01.01zm4.22-4.78a4.87 4.87 0 0 1-1.4-.36l-.06-.03c-1.05-.46-1.81-1.24-2.73-2.11-.82-.78-1.7-1.56-2.33-2.5-.37-.55-.86-1.19-.85-2.2-.03-.99.48-1.43 1.1-1.57.82-.15 1.29.16 1.75.58.61 1.93 2.61 3.79 3.78 4.96 1.2 1.21 2.48 2.32 3.79 3.39-1.02-.06-2.04-.06-3.05-.17v.01zm9.05 3.25c-1.94-.96-3.83-2.84-5.48-4.21-1.59-1.32-3.14-2.71-4.53-4.24-.83-.91-2.02-2.02-2.33-3.24-.29-1.16.17-2.98 1.9-2.71.73.11 1.41.8 1.87 1.3.02.02.05.03.07.05.84 1.5 2.52 2.94 3.55 3.96 1.84 1.81 3.83 3.46 5.92 4.98 1.05.76 2.12 1.49 3.21 2.19.34.22.68.46 1.05.67-1.76.77-3.85 1.91-5.23 1.23v.02zm14.35-5.07c-.63.44-1.59.68-2.29.98-1.09.47-2.17.95-3.26 1.42-1.13.49-1.79 1-3.08.44-.69-.3-1.36-.85-1.98-1.27-2.65-1.76-5.19-3.72-7.48-5.93-1.14-1.1-2.23-2.27-3.22-3.52-.85-1.07-1.74-3.47.54-3.73.91-.1 1.66.64 2.22 1.22.04.04 3.6 3.45 5.51 4.87 1.89 1.41 4 2.75 6.35 3.19 1.94.37 3.97.27 5.89-.14.63-.14 1.27-.37 1.82-.7.11 1.16-.09 2.51-1.03 3.17h.01zm-.38-31.94c1.93 4.51 4.95 8.99 3.51 14.09-.7 2.5-2.13 4.86-3.58 6.99-1.18 1.74-2.35 2.16-4.33 2.64-1.18.29-2.66.72-3.79.17-1.32-.64-2.54-1.91-3.66-2.85-.92-.77-2.39-1.65-3.06-2.66-.8-1.21-.07-2.16 1.1-2.27.6-.06 1.15.28 1.64.58.91.56 1.65 1.36 2.6 1.87 1.99 1.07 6.07.71 6.67-2.01.17-.8-.19-1.75-.44-2.49-.58-1.73-1.37-3.41-2.18-5.04-.93-1.89-1.92-3.74-2.97-5.56-1.25-2.18-3.53-4.61-2.64-7.26.84-2.51 3.94-4.51 5.84-6.2 1.16-1.03 2.32-2.06 3.49-3.09-.39 4.44.04 8.96 1.81 13.09h-.01z" />
      </symbol>
    </defs>
    <g className="layer">
      <title>{"Layer 1"}</title>
      <use xlinkHref="#a" x={0.005} y={50.548} fill="#008080" />
    </g>
  </svg>
  )
}

export default MainHand