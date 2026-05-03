import { useState, useEffect, useCallback } from "react";

// ─── LOGOS SVG ───────────────────────────────────────────────────────────────
function IsotipoSVG({ style }) {
  return (
    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 516.71 644.38" style={{...style}}>
      <g > <g> <path d="M220.76,147.65c5.25,12.77,10.76,25.34,16.52,37.7,2.75,5.89,4.77,10.35,6.06,13.4,3.56,8.35,7.63,17.01,10.24,25.43,1.24,3.99,2.49,8.03,3.72,12.14.39,1.27.78,2.21,1.18,2.8.18.27.44.49.72.62.13.06.25.1.38.12.13-.01.25-.05.38-.12.29-.13.54-.35.72-.62.4-.58.79-1.52,1.18-2.8,1.23-4.11,2.48-8.15,3.72-12.14,2.61-8.42,6.68-17.08,10.24-25.43,1.3-3.06,3.32-7.51,6.07-13.4,5.77-12.36,11.27-24.94,16.52-37.7,3.6-8.79,5.57-16.69,5.91-23.7.32-6.79-.4-15.9-2.16-27.34-2.93-18.99-8.72-36.83-17.38-53.52-2.99-5.79-6.93-13.7-11.81-23.74-2.97-6.11-7.75-14.47-11.21-18.18-.76-.82-1.49-1.14-2.18-1.17-.68.03-1.42.35-2.18,1.17-3.46,3.71-8.23,12.06-11.21,18.18-4.87,10.04-8.81,17.95-11.8,23.74-8.66,16.69-14.45,34.53-17.38,53.52-1.76,11.44-2.48,20.55-2.16,27.34.34,7.01,2.31,14.91,5.91,23.7Z"/> <path d="M53.14,98.81c13.21,7.41,25.01,17.1,35.31,29.06,10.31,12.01,20.54,23.93,30.76,35.89,10.6,12.42,24.55,30.76,36.39,43.68,1.03,1.12,6,6.71,14.86,16.73,6.96,7.87,11.71,13.58,14.24,17.06,6.21,8.65,11.84,17.68,16.93,27.16.37.68.82,1.6,1.35,2.77.47,1.03,1.54,1.66,2.67,1.57,4.55-.38,9.13-.57,13.74-.57,1.16,0,2.32,0,3.52.04l15.99.34c1.77.04,3.12-1.61,2.71-3.34-4.2-17.41-10.17-34.75-15.92-50.99-3.6-10.14-9.44-20.53-13.54-29.06-9.07-18.96-19.25-34.94-32.16-50.3-15.53-18.51-35.02-31.13-56.51-38.71-6.25-2.24-14.2-4.47-23.97-6.83-17.68-4.31-34.07-5.38-52.16-4.6-.66,0-1.28.54-1.45,1.32-.87,3.44,4.47,7.2,7.24,8.78Z"/> <path d="M90.53,202.52c30.93,5.24,55.52,23.23,74.48,50.55,5.81,8.37,10.51,15.19,14.15,20.45,1.06,1.54.24,3.61-1.57,4.09-19.53,5.17-37.73,13.91-53.77,25.43-1.57.29-3.06-.12-4.55-1.45-3.77-3.35-6.54-6.04-8.32-8.16-7.7-9.07-16.18-17.72-25.46-26-16.15-14.41-24.47-21.82-25.01-22.27-16.97-14.86-35.32-25.87-55.02-33-4.4-1.62-6.13-4.61-5.21-9.05.08-.38.32-.75.63-.98,2.4-1.77,4.76-2.68,7.02-2.81,0,0,32.59-5.29,82.64,3.19Z"/> <path d="M274.93,270.01c-.4,1.67.88,3.29,2.6,3.32l25.14.51c2.6.07,5.19.16,7.74.34,1.12.08,2.17-.55,2.64-1.57.86-1.89,1.52-3.3,2.04-4.24,5.09-9.48,10.72-18.51,16.93-27.16,2.53-3.48,7.24-9.19,14.2-17.06,8.9-10.02,13.87-15.61,14.86-16.73,11.88-12.92,25.83-31.26,36.43-43.68,10.22-11.96,20.45-23.89,30.76-35.89,10.31-11.96,22.11-21.65,35.31-29.06,2.77-1.57,8.12-5.34,7.24-8.78-.16-.79-.79-1.32-1.49-1.32-18.05-.79-34.44.29-52.16,4.6-9.73,2.36-17.72,4.6-23.93,6.83-21.53,7.58-40.99,20.2-56.55,38.71-12.87,15.36-23.1,31.34-32.12,50.3-4.1,8.53-9.98,18.92-13.58,29.06-5.81,16.5-11.88,34.14-16.06,51.81Z"/> <path d="M508.83,199.33c2.27.11,4.63,1.03,7.03,2.81.31.23.56.61.63.99.87,4.43-.86,7.42-5.22,9.03-19.7,7.12-38.05,18.13-55.06,33-.5.46-8.82,7.87-24.96,22.27-9.27,8.28-17.76,16.93-25.46,26-1.78,2.11-4.56,4.8-8.32,8.16-1.49,1.32-2.98,1.74-4.55,1.45-16.22-11.25-34.61-19.64-54.36-24.46-1.83-.45-2.7-2.53-1.63-4.09,3.68-5.39,8.62-12.52,14.79-21.43,18.96-27.32,43.76-44.17,74.44-50.55,0,0,33.82-5.58,82.67-3.19Z"/> <path d="M301.78,304.82l-79.73-1.67c-68.56-1.44-125.3,52.98-126.73,121.53l-1.92,91.26c-1.43,68.56,52.98,125.3,121.54,126.74l79.73,1.67c68.55,1.44,125.3-52.98,126.73-121.53l1.91-91.26c1.43-68.56-52.98-125.3-121.54-126.74ZM367.4,478.1c-31.54,13.97-93.87,47.83-106.7,101.06-.58,2.41-4.1,2.41-4.69,0-12.83-53.22-75.16-87.08-106.7-101.06-1.93-.85-1.93-3.54,0-4.4,31.53-14.04,93.87-47.84,106.7-101.12.58-2.41,4.1-2.41,4.69,0,12.83,53.28,75.17,87.08,106.7,101.12,1.92.86,1.92,3.55,0,4.4Z"/> </g> </g>
    </svg>
  );
}
function WordmarkSVG({ style }) {
  return (
    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2067.5 969.14" style={{...style}}>
      <g id="" > <g> <path d="M1013.49,968v-58.94l-10.5,2.37v-4.26l12.49-5.39h4.73v66.23h-6.72Z"/> <path d="M1075.84,969.14c-5.87,0-10.9-1.43-15.09-4.3-4.2-2.87-7.41-6.87-9.65-12.02-2.24-5.14-3.36-11.12-3.36-17.93s1.12-12.79,3.36-17.93c2.24-5.14,5.44-9.14,9.6-12.02,4.16-2.87,9.21-4.3,15.14-4.3s10.86,1.44,15,4.3c4.13,2.87,7.32,6.88,9.56,12.02,2.24,5.14,3.36,11.12,3.36,17.93s-1.12,12.79-3.36,17.93c-2.24,5.14-5.43,9.15-9.56,12.02-4.13,2.87-9.13,4.3-15,4.3ZM1075.75,963.37c4.1,0,7.74-1.14,10.93-3.41,3.18-2.27,5.69-5.53,7.52-9.79,1.83-4.26,2.74-9.35,2.74-15.28s-.92-11-2.74-15.23c-1.83-4.22-4.34-7.47-7.52-9.74-3.19-2.27-6.83-3.41-10.93-3.41s-7.57,1.13-10.79,3.41c-3.22,2.27-5.76,5.52-7.62,9.74-1.86,4.23-2.79,9.3-2.79,15.23s.93,11.02,2.79,15.28c1.86,4.26,4.4,7.52,7.62,9.79,3.22,2.27,6.81,3.41,10.79,3.41Z"/> <path d="M1158.06,969.14c-5.87,0-10.9-1.43-15.09-4.3-4.2-2.87-7.41-6.87-9.65-12.02-2.24-5.14-3.36-11.12-3.36-17.93s1.12-12.79,3.36-17.93c2.24-5.14,5.44-9.14,9.6-12.02,4.16-2.87,9.21-4.3,15.14-4.3s10.86,1.44,15,4.3c4.13,2.87,7.32,6.88,9.56,12.02,2.24,5.14,3.36,11.12,3.36,17.93s-1.12,12.79-3.36,17.93c-2.24,5.14-5.43,9.15-9.56,12.02-4.13,2.87-9.13,4.3-15,4.3ZM1157.96,963.37c4.1,0,7.74-1.14,10.93-3.41,3.18-2.27,5.69-5.53,7.52-9.79,1.83-4.26,2.74-9.35,2.74-15.28s-.92-11-2.74-15.23c-1.83-4.22-4.34-7.47-7.52-9.74-3.19-2.27-6.83-3.41-10.93-3.41s-7.57,1.13-10.79,3.41c-3.22,2.27-5.76,5.52-7.62,9.74-1.86,4.23-2.79,9.3-2.79,15.23s.93,11.02,2.79,15.28c1.86,4.26,4.4,7.52,7.62,9.79,3.22,2.27,6.81,3.41,10.79,3.41Z"/> <path d="M1227.12,931.96c-2.78,0-5.28-.63-7.52-1.89-2.24-1.26-4.01-3.08-5.3-5.44-1.29-2.37-1.94-5.12-1.94-8.28s.66-5.99,1.99-8.33c1.32-2.33,3.11-4.13,5.35-5.39,2.24-1.26,4.75-1.89,7.52-1.89s5.27.63,7.47,1.89c2.21,1.26,3.96,3.06,5.25,5.39,1.29,2.33,1.94,5.11,1.94,8.33s-.65,5.91-1.94,8.28c-1.29,2.37-3.06,4.18-5.3,5.44-2.24,1.26-4.75,1.89-7.52,1.89ZM1227.12,926.56c1.58,0,3.03-.38,4.35-1.13,1.32-.76,2.41-1.89,3.26-3.41s1.28-3.41,1.28-5.68-.41-4.26-1.23-5.77c-.82-1.51-1.89-2.65-3.22-3.41s-2.78-1.13-4.35-1.13-2.97.38-4.35,1.13c-1.39.76-2.51,1.89-3.36,3.41s-1.28,3.44-1.28,5.77.43,4.16,1.28,5.68,1.95,2.65,3.31,3.41c1.36.76,2.79,1.13,4.3,1.13ZM1220.68,968l38.79-66.23h6.62l-38.79,66.23h-6.62ZM1260.23,969.14c-2.78,0-5.28-.63-7.52-1.89-2.24-1.26-4.01-3.08-5.3-5.44-1.29-2.37-1.94-5.12-1.94-8.28s.66-5.99,1.99-8.33c1.32-2.33,3.11-4.13,5.35-5.39,2.24-1.26,4.75-1.89,7.52-1.89s5.27.63,7.47,1.89c2.21,1.26,3.96,3.06,5.25,5.39,1.29,2.33,1.94,5.11,1.94,8.33s-.65,5.91-1.94,8.28c-1.29,2.37-3.06,4.18-5.3,5.44-2.24,1.26-4.75,1.89-7.52,1.89ZM1260.23,963.74c1.58,0,3.03-.38,4.35-1.13,1.32-.76,2.41-1.89,3.26-3.41s1.28-3.41,1.28-5.68-.41-4.26-1.23-5.77c-.82-1.51-1.89-2.65-3.22-3.41s-2.78-1.13-4.35-1.13-2.97.38-4.35,1.13c-1.39.76-2.51,1.89-3.36,3.41s-1.28,3.44-1.28,5.77.43,4.16,1.28,5.68,1.95,2.65,3.31,3.41c1.36.76,2.79,1.13,4.3,1.13Z"/> <path d="M1342.35,968v-66.23h9.46l33.49,58.28h.28v-58.28h6.62v66.23h-9.18l-33.78-58.66h-.28v58.66h-6.62Z"/> <path d="M1417.28,968l23.27-66.23h9.46l22.9,66.23h-7l-20.53-60.74h-.28l-20.81,60.74h-7ZM1428.63,947.66l1.99-5.49h28.95l1.99,5.49h-32.92Z"/> <path d="M1506.31,968v-60.74h-19.87v-5.49h46.36v5.49h-19.87v60.74h-6.62Z"/> <path d="M1581.42,969.14c-4.48,0-8.53-.88-12.16-2.65-3.63-1.76-6.51-4.53-8.66-8.28-2.15-3.75-3.22-8.53-3.22-14.33v-42.1h6.62v42.2c0,4.48.72,8.15,2.18,11.02,1.45,2.87,3.52,4.97,6.2,6.29,2.68,1.32,5.69,1.99,9.04,1.99,3.53,0,6.58-.66,9.13-1.99,2.55-1.33,4.57-3.42,6.06-6.29,1.48-2.87,2.22-6.54,2.22-11.02v-42.2h6.62v42.1c0,5.8-1.07,10.58-3.22,14.33-2.15,3.75-5.03,6.51-8.66,8.28-3.63,1.76-7.68,2.65-12.16,2.65Z"/> <path d="M1633.83,968v-66.23h20.44c5.11,0,9.29.85,12.54,2.55,3.25,1.7,5.63,3.99,7.14,6.86,1.51,2.87,2.27,6.13,2.27,9.79s-.79,6.76-2.37,9.7c-1.58,2.93-4.02,5.27-7.33,7-3.31,1.74-7.55,2.6-12.72,2.6h-13.34v27.72h-6.62ZM1640.46,934.89h13.34c5.42,0,9.38-1.31,11.87-3.93,2.49-2.62,3.74-5.94,3.74-9.98s-1.22-7.47-3.64-9.93c-2.43-2.46-6.45-3.69-12.06-3.69h-13.25v27.53ZM1669.03,968l-14.85-29.8h7.57l15.23,29.8h-7.95Z"/> <path d="M1699.3,968l23.27-66.23h9.46l22.9,66.23h-7l-20.53-60.74h-.28l-20.81,60.74h-7ZM1710.66,947.66l1.99-5.49h28.95l1.99,5.49h-32.92Z"/> <path d="M1780,968v-66.23h6.62v60.83h31.32v5.39h-37.94Z"/> <path d="M1843.86,968v-66.23h40.21v5.49h-33.59v24.69h30.75v5.49h-30.75v25.07h33.59v5.49h-40.21Z"/> <path d="M1932.98,969.14c-4.86,0-9.07-.88-12.63-2.65-3.56-1.76-6.29-4.24-8.18-7.43-1.89-3.18-2.84-6.83-2.84-10.93h6.91c0,2.78.63,5.33,1.89,7.66,1.26,2.33,3.14,4.21,5.63,5.63,2.49,1.42,5.57,2.13,9.22,2.13,3.28,0,6.04-.55,8.28-1.66,2.24-1.1,3.96-2.57,5.16-4.4,1.2-1.83,1.8-3.88,1.8-6.15,0-2.84-.58-5.11-1.75-6.81-1.17-1.7-2.76-3.07-4.78-4.12-2.02-1.04-4.32-1.95-6.91-2.74-2.59-.79-5.3-1.66-8.14-2.6-5.11-1.76-8.85-3.94-11.21-6.53-2.37-2.59-3.58-5.9-3.64-9.93,0-3.47.8-6.56,2.41-9.27,1.61-2.71,3.96-4.84,7.05-6.39,3.09-1.54,6.75-2.32,10.97-2.32s7.77.79,10.83,2.37c3.06,1.58,5.42,3.74,7.1,6.48,1.67,2.74,2.51,5.85,2.51,9.32h-6.81c0-1.95-.51-3.89-1.51-5.82-1.01-1.92-2.54-3.52-4.59-4.78-2.05-1.26-4.68-1.89-7.9-1.89-2.59,0-4.87.46-6.86,1.37-1.99.92-3.55,2.24-4.68,3.97-1.14,1.74-1.7,3.8-1.7,6.2,0,2.27.49,4.12,1.47,5.54.98,1.42,2.37,2.6,4.16,3.55,1.8.95,3.93,1.81,6.39,2.6,2.46.79,5.2,1.69,8.23,2.7,3.15,1.07,5.94,2.37,8.37,3.88,2.43,1.51,4.34,3.45,5.72,5.82,1.39,2.37,2.08,5.38,2.08,9.04,0,3.03-.8,5.93-2.41,8.7s-4.05,5.05-7.33,6.81c-3.28,1.76-7.38,2.65-12.3,2.65Z"/> </g> <g> <g> <path d="M349.88,521.47c-14.41,55.33-62.83,76.66-130.27,99.14h-.58l68.59,184.45-.58,3.46h-87.61v-3.46l45.54-19.02-59.95-165.43-54.76-.58-42.08,168.31,44.96,16.72v3.46H0v-3.46l55.33-16.72,87.04-346.42-46.69-19.02v-3.46h150.44c83,0,118.16,44.38,103.75,102.02ZM235.75,429.83h-57.64l-44.96,179.84h58.79c56.49,0,106.06-20.17,121.62-82.42,12.1-49.57-5.76-97.41-77.81-97.41Z"/> <path d="M594.26,731.28l1.15,1.73c-25.36,20.75-78.97,79.54-100.87,79.54-8.65,0-19.6-2.31-14.41-60.52l53.61-189.64h-6.92c-46.69,140.07-76.08,252.46-136.61,252.46-32.28,0-43.81-25.94-43.81-62.83,0-90.5,67.44-246.7,146.98-246.7,19.02,0,38.62,4.61,54.18,12.68l33.43-26.51,2.31.58-23.06,72.05-62.25,225.95,96.26-58.79ZM525.09,540.49c-14.41-13.26-32.28-20.75-48.99-20.75-54.18,0-94.53,139.49-94.53,217.3,0,30.55,8.07,51.3,26.51,51.3,20.17,0,36.31-3.46,117.01-247.85Z"/> <path d="M590.22,803.33l27.67-111.25h3.46c-19.6,95.11,28.82,111.82,68.02,111.82,24.21,0,46.69-8.65,55.91-34.01,13.83-36.31-11.53-71.47-43.23-98.56l-4.61-4.03c-29.97-26.51-58.22-57.64-38.04-112.4,12.1-32.28,46.11-55.33,92.22-55.33,14.99,0,37.47,2.31,68.59,19.02l-31.7,106.63h-2.88c16.14-67.44,8.65-112.4-52.45-112.4-23.06,0-47.84,10.95-55.33,33.43-13.26,34.58,10.95,68.02,40.92,91.07l5.76,4.04c35.16,27.09,62.25,61.67,44.96,109.52-16.14,44.38-46.69,63.98-92.8,63.98-31.7,0-66.86-8.65-86.46-11.53Z"/> <path d="M1074.96,568.16c0,90.5-67.44,246.7-146.98,246.7-18.44,0-36.89-4.04-51.88-11.53l-34.58,132,55.91,13.83-1.15,3.46h-138.91l1.15-3.46,55.33-13.83,100.29-405.79-88.77,54.18-1.15-1.73c25.36-20.75,78.97-79.54,100.87-79.54,8.65,0,19.6,2.3,14.41,60.52l-51.3,194.82h6.34c46.69-140.07,76.08-252.46,136.61-252.46,32.28,0,43.81,25.94,43.81,62.83ZM1039.8,583.15c0-30.55-8.07-51.3-26.51-51.3-20.17,0-36.31,3.46-117.01,247.85,14.41,13.26,32.28,20.75,48.99,20.75,54.18,0,94.53-139.49,94.53-217.3Z"/> <path d="M1340.1,731.28l1.15,1.73c-25.36,20.75-78.97,79.54-100.87,79.54-8.65,0-19.6-2.31-14.41-60.52l53.61-189.64h-6.92c-46.69,140.07-76.08,252.46-136.61,252.46-32.28,0-43.81-25.94-43.81-62.83,0-90.5,67.44-246.7,146.98-246.7,19.02,0,38.62,4.61,54.18,12.68l33.43-26.51,2.31.58-23.06,72.05-62.25,225.95,96.26-58.79ZM1270.93,540.49c-14.41-13.26-32.28-20.75-48.99-20.75-54.18,0-94.53,139.49-94.53,217.3,0,30.55,8.07,51.3,26.51,51.3,20.17,0,36.31-3.46,117.01-247.85Z"/> <path d="M1619.07,373.34l.58-.58-109.52,419.04,96.26-58.79,1.15,1.73c-25.36,20.75-78.97,79.54-100.87,79.54-8.65,0-19.6-2.31-14.41-60.52l47.84-191.37h-6.92c-46.69,140.07-76.08,252.46-136.61,252.46-32.28,0-43.81-25.94-43.81-62.83,0-90.5,67.44-246.7,146.98-246.7,18.44,0,36.89,4.03,51.88,11.53l29.97-121.04-74.36,3.46,1.15-3.46,107.79-24.79h3.46l-.58,2.31ZM1531.46,540.49c-14.41-13.26-32.28-20.75-48.99-20.75-54.18,0-94.53,139.49-94.53,217.3,0,30.55,8.07,51.3,26.51,51.3,20.17,0,36.31-3.46,117.01-247.85Z"/> <path d="M1630.59,666.73c26.51-117.58,102.6-167.16,130.27-167.16,50.72,0,89.34,40.92,66.29,146.98-25.36,117.59-102.02,167.73-129.69,167.73-50.72,0-89.34-40.92-66.86-147.56ZM1800.06,666.15c16.14-77.81-5.76-141.79-55.33-141.79-23.06,0-63.4,20.17-85.88,123.93-16.14,77.81,5.76,141.22,50.72,141.22,27.09,0,68.02-19.6,90.49-123.35Z"/> <path d="M1837.52,803.33l27.67-111.25h3.46c-19.6,95.11,28.82,111.82,68.02,111.82,24.21,0,46.69-8.65,55.91-34.01,13.83-36.31-11.53-71.47-43.23-98.56l-4.61-4.03c-29.97-26.51-58.22-57.64-38.04-112.4,12.1-32.28,46.11-55.33,92.22-55.33,14.99,0,37.47,2.31,68.59,19.02l-31.7,106.63h-2.88c16.14-67.44,8.65-112.4-52.45-112.4-23.06,0-47.84,10.95-55.33,33.43-13.26,34.58,10.95,68.02,40.92,91.07l5.76,4.04c35.16,27.09,62.25,61.67,44.96,109.52-16.14,44.38-46.69,63.98-92.8,63.98-31.7,0-66.86-8.65-86.46-11.53Z"/> </g> <g> <path d="M776.98,345.81v3.1h-93.56v-3.1l46.52-17.06-97.7-148.87h-50.66v150.42l44.97,15.51v3.1h-120.96v-3.1l44.97-15.51.52-310.14-42.9-17.06V0h135.43c78.05,0,117.85,26.88,117.85,77.54s-36.7,77.54-94.08,102.35l109.58,165.93ZM581.59,170.58h55.31c53.76,0,89.42-27.4,89.42-83.22,0-45.49-23.26-78.05-90.98-78.05h-53.76v161.27Z"/> <path d="M799.72,226.92c0-115.79,73.4-152.49,97.7-152.49,53.76,0,103.38,39.29,103.38,127.16,0,115.79-73.4,152.49-97.7,152.49-53.76,0-103.38-39.29-103.38-127.16ZM980.64,232.09c0-78.57-39.8-133.88-96.15-133.88-23.78,0-64.61,17.58-64.61,98.21s39.8,133.88,96.14,133.88c23.78,0,64.61-17.58,64.61-98.21Z"/> <path d="M1135.2,199.53c36.7,18.09,71.33,39.28,71.33,83.22,0,39.29-26.88,71.85-81.67,71.85-33.6,0-58.93-12.41-83.22-16.54l-14.47-110.62h4.14c18.09,99.76,84.26,112.69,114.24,112.69,27.4,0,47.56-15.51,47.56-42.39,0-29.46-28.95-48.59-73.4-70.82l-14.47-7.24c-34.63-17.06-64.61-36.18-64.61-75.99,0-42.9,33.6-71.85,80.12-71.85,18.61,0,44.45,5.17,61.51,20.68l10.34-16.54h3.1v113.72h-4.14c-5.69-52.21-33.08-103.38-90.46-103.38-31.01,0-44.97,18.61-44.97,40.32,0,31.53,31.01,49.11,65.65,66.16l13.44,6.72Z"/> <path d="M1359.02,79.09h73.92v3.1l-136.98,395.95h-36.7v-3.1l66.68-117.34-98.21-275.51v-3.1h84.77v3.1l-49.62,13.44,74.95,211.42h3.1l43.42-120.44c31.01-85.29,23.78-88.91-25.33-104.42v-3.1Z"/> </g> </g> </g>
    </svg>
  );
}

// ─── PALETA & FUENTES ─────────────────────────────────────────────────────────
const COBALT       = "#2D4FB8";
const COBALT_DARK  = "#152D7A";
const CREMA        = "#FAF6EC";
const CREMA_DARK   = "#E8DFC8";
const ORANGE       = "#E66832";
const ORANGE_DARK  = "#C24612";
const TEXT_DARK    = "#0F1A3D";
const TEXT_MUTED   = "#5A6B8C";

// ─── CONSTANTS ────────────────────────────────────────────────────────────────
const SABORES_NAT_DEFAULT = [
  {id:"qc", nombre:"Queso Crema", emoji:"🧀"},
  {id:"fr", nombre:"Frutos Rojos", emoji:"🍓"},
  {id:"pc", nombre:"Piña Colada", emoji:"🍍"},
  {id:"ta", nombre:"Tamarindo", emoji:"🟤"},
  {id:"gu", nombre:"Guayaba", emoji:"🍐"},
  {id:"co", nombre:"Coco", emoji:"🥥"},
  {id:"nu", nombre:"Nuez", emoji:"🪨"},
  {id:"ca", nombre:"Cajeta", emoji:"🍯"},
  {id:"fs", nombre:"Fresa", emoji:"🍓"},
  {id:"ma", nombre:"Mango", emoji:"🥭"},
  {id:"or", nombre:"Oreo", emoji:"🍪"},
  {id:"pi", nombre:"Piña", emoji:"🍍"},
];
// Compatibilidad: lista plana de nombres
const SABORES_NATURALES = SABORES_NAT_DEFAULT.map(s => s.nombre);
const SABORES_AGUA_DEFAULT = [
  {id:"cb", nombre:"Coco Azul", emoji:"🥥"},
  {id:"li", nombre:"Limón", emoji:"🍋"},
];
const SABORES_AGUA = SABORES_AGUA_DEFAULT.map(s => s.nombre);
const EXTRA_SABOR_PRECIO = 5;
const EXTRA_SABOR_AGUA = 10;
const CUCHARON_PRECIO    = 15;
const CUCHARON_AGUA      = 10;
const METODOS_PAGO       = ["Efectivo","Transferencia","Terminal","Cortesía"];
const COMISION_TERMINAL  = 0.035;
const IVA_COMISION       = 0.16;
const CAJEROS_DEFAULT    = [
  { nombre:"Rosy",    pin:"1111" },
  { nombre:"Ana",     pin:"2222" },
  { nombre:"Luis",    pin:"3333" },
  { nombre:"Carlos",  pin:"4444" },
];
const PRECIOS_LIBRES_DEFAULT = [10, 15, 20, 25, 30];
const VENTAS_LIBRES_DEFAULT = [
  { id:"libre_default", nombre:"Venta libre", emoji:"✏️" },
];
const PIN_DEFAULT = "1234";
const UMBRAL_DESCUADRE = 20;
const UMBRAL_GASTO_PIN = 100;
const UMBRAL_INVENTARIO_CRITICO = 1;
const PRODUCTOS_DEFAULT  = [
  { id:"nat_ch", nombre:"Natural Chico",  precio:65, categoria:"natural", emoji:"🥛" },
  { id:"nat_gr", nombre:"Natural Grande", precio:80, categoria:"natural", emoji:"🍧" },
  { id:"agua_ch",nombre:"Agua Chico",     precio:25, categoria:"agua",    emoji:"💧" },
  { id:"agua_gr",nombre:"Agua Grande",    precio:35, categoria:"agua",    emoji:"🫗" },
];

// ─── STORAGE ──────────────────────────────────────────────────────────────────
const MEM = {};
const load = (k, def) => {
  try { const v = localStorage.getItem(k); if (v !== null) return JSON.parse(v); } catch {}
  return MEM[k] !== undefined ? MEM[k] : def;
};
const save = (k, v) => {
  MEM[k] = v;
  try { localStorage.setItem(k, JSON.stringify(v)); } catch {}
};

// ─── HELPERS ──────────────────────────────────────────────────────────────────
const fmt     = (n) => `$${Number(n||0).toFixed(0)}`;
const fmtFull = (n) => new Intl.NumberFormat("es-MX",{style:"currency",currency:"MXN",maximumFractionDigits:0}).format(n||0);
const fmtDate = (iso) => new Date(iso).toLocaleDateString("es-MX",{day:"2-digit",month:"short"});
const fmtTime = (iso) => new Date(iso).toLocaleTimeString("es-MX",{hour:"2-digit",minute:"2-digit"});
const todayKey = () => {
  const d = new Date();
  return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
};
// Extrae la fecha LOCAL de un ISO string guardado (evita bug UTC vs local)
const localDateKey = (isoStr) => {
  if (!isoStr) return "";
  const d = new Date(isoStr);
  return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
};
const uid = () => Math.random().toString(36).slice(2,9);
const padNum = (n) => String(n).padStart(3, "0");

function calcItemTotal(it) {
  if (!it) return 0;
  const cant = it.cantidad || 1;
  if (it.tipo === "especial") return (Number(it.precio) || 0) * cant;
  const esAgua = it.producto?.categoria === "agua";
  const precioExtra = esAgua ? EXTRA_SABOR_AGUA : EXTRA_SABOR_PRECIO;
  const precioCucharon = esAgua ? CUCHARON_AGUA : CUCHARON_PRECIO;
  const extra = Math.max(0, (it.sabores||[]).length - 2) * precioExtra;
  const unitario = (it.producto?.precio || 0) + extra + (it.cucharon ? precioCucharon : 0);
  return unitario * cant;
}
function calcItemUnitario(it) {
  if (!it) return 0;
  if (it.tipo === "especial") return Number(it.precio) || 0;
  const esAgua = it.producto?.categoria === "agua";
  const precioExtra = esAgua ? EXTRA_SABOR_AGUA : EXTRA_SABOR_PRECIO;
  const precioCucharon = esAgua ? CUCHARON_AGUA : CUCHARON_PRECIO;
  const extra = Math.max(0, (it.sabores||[]).length - 2) * precioExtra;
  return (it.producto?.precio || 0) + extra + (it.cucharon ? precioCucharon : 0);
}
function calcPedidoTotal(items, esCortes) {
  if (esCortes) return 0;
  return (items||[]).reduce((s, it) => s + calcItemTotal(it), 0);
}
function getSaboresForProd(prod) { return prod?.categoria === "agua" ? SABORES_AGUA : SABORES_NATURALES; }
function calcPorciones(items) {
  const map = {};
  (items||[]).forEach(it => {
    if (it.tipo === "especial" || !it.sabores) return;
    const n = it.sabores.length;
    if (n === 0) return;
    const p = 1 / n;
    it.sabores.forEach(s => { map[s] = (map[s]||0) + p; });
  });
  return map;
}
const TOPPINGS_DEFAULT = [
  { id:"chamoy", nombre:"Chamoy", emoji:"🌶️" },
  { id:"tajin",  nombre:"Tajín",  emoji:"🧂" },
  { id:"crema",  nombre:"Crema",  emoji:"🥛" },
];
// Fallback para código que use TOPPING_ICONS
const TOPPING_ICONS = { chamoy: "🌶️", tajin: "🧂", crema: "🥛" };
function toppingsLabel(t, config, mode) {
  const _config = config || null;
  const _mode = mode || "emoji";
  if (!t) return "";
  const cfg = _config || TOPPINGS_DEFAULT;
  const activos = Object.entries(t).filter(([_,v])=>v).map(([k]) => {
    const found = cfg.find(c => c.id === k);
    return found || { id:k, nombre:k, emoji: TOPPING_ICONS[k]||"•" };
  });
  if (activos.length === 0) return "";
  if (_mode === "full") return activos.map(c => `${c.emoji} ${c.nombre}`).join(" · ");
  return activos.map(c => c.emoji).join(" ");
}

function comisionTerminal(monto) {
  const com = monto * COMISION_TERMINAL;
  const iva = com * IVA_COMISION;
  return { comision: com, iva, total: com + iva, neto: monto - com - iva };
}

// ─── HAPTICS + SOUND ──────────────────────────────────────────────────────────
function haptic(t = "light") {
  try {
    if (window.navigator?.vibrate) {
      if (t === "light") window.navigator.vibrate(10);
      else if (t === "medium") window.navigator.vibrate(20);
      else if (t === "success") window.navigator.vibrate([10,30,10]);
    }
  } catch {}
}
let audioCtx = null;
function playClick(t = "tap") {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const o = audioCtx.createOscillator(), g = audioCtx.createGain();
    o.connect(g); g.connect(audioCtx.destination);
    if (t === "tap")     { o.frequency.value = 800;  g.gain.setValueAtTime(0.07, audioCtx.currentTime); g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime+0.05); }
    else if (t === "success") { o.frequency.value = 600; o.frequency.linearRampToValueAtTime(1000, audioCtx.currentTime+0.1); g.gain.setValueAtTime(0.09, audioCtx.currentTime); g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime+0.15); }
    else if (t === "check")   { o.frequency.value = 1000; g.gain.setValueAtTime(0.06, audioCtx.currentTime); g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime+0.04); }
    o.start(); o.stop(audioCtx.currentTime+0.2);
  } catch {}
}
function useBtn() { return useCallback((t = "tap") => { playClick(t); haptic(t === "success" ? "success" : "light"); }, []); }

// ─── CSV EXPORT ───────────────────────────────────────────────────────────────
function exportCSV(pedidos, vasosExtra, periodo) {
  const rows = [["ID","Fecha","Hora","Cajero","Cliente","Tipo","Producto","Sabores","Notas","Cucharón","Extras $","Total Item","Pago","Total Pedido","Cortesía","Estado Pago","Entregado","Comisión Terminal"]];
  pedidos.forEach(p => {
    p.items.forEach(it => {
      const isEsp = it.tipo === "especial";
      const extraSabor = isEsp ? 0 : Math.max(0, (it.sabores||[]).length - 2) * EXTRA_SABOR_PRECIO;
      const extraCup   = isEsp ? 0 : (it.cucharon ? CUCHARON_PRECIO : 0);
      const itemTotal  = p.esCortes ? 0 : calcItemTotal(it);
      const com = p.metodoPago === "Terminal" && !p.esCortes ? comisionTerminal(p.total).total.toFixed(2) : 0;
      rows.push([p.id, fmtDate(p.fecha), fmtTime(p.fecha), p.cajero||"", p.cliente,
        isEsp ? "Especial" : "Raspa",
        isEsp ? (it.descripcion||"") : it.producto.nombre,
        isEsp ? "" : (it.sabores||[]).join(" + "),
        it.notas||"", isEsp ? "" : (it.cucharon?"Sí":"No"),
        extraSabor + extraCup, itemTotal, p.metodoPago, p.total,
        p.esCortes?"Sí":"No", p.pagado?"Pagado":"Pendiente", p.entregado?"Sí":"No", com]);
    });
  });
  if (vasosExtra && vasosExtra.length > 0) {
    rows.push([], ["--- VASOS EXTRA ---"], ["Fecha","Hora","Cajero","Cantidad","Nota"]);
    vasosExtra.forEach(v => rows.push([fmtDate(v.fecha), fmtTime(v.fecha), v.cajero||"", v.cantidad, v.nota||""]));
  }
  const csv = rows.map(r => r.map(c => `"${c}"`).join(",")).join("\n");
  const blob = new Blob(["\uFEFF"+csv], {type:"text/csv;charset=utf-8;"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `rosy_raspados_${periodo}_${todayKey()}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

// ─── ESTILOS GLOBALES ─────────────────────────────────────────────────────────
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700;800;900&display=swap');
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent;}
body { background: ${COBALT}; }
.btn{cursor:pointer;border:none;font-family:'Inter',sans-serif;transition:transform .12s, opacity .12s;user-select:none;-webkit-user-select:none;}
.btn:active{transform:scale(.94);opacity:.86;}
.display{font-family:'Archivo Black',sans-serif;letter-spacing:-.02em;}
.serif-it{font-family:'Instrument Serif',serif;font-style:italic;}
.input{background:rgba(255,255,255,.08);border:1.5px solid rgba(255,255,255,.18);border-radius:12px;color:white;font-family:'Inter',sans-serif;padding:11px 14px;font-size:15px;outline:none;width:100%;}
.input:focus{border-color:${ORANGE};background:rgba(255,255,255,.12);}
.input-light{background:white;border:1.5px solid ${CREMA_DARK};border-radius:12px;color:${TEXT_DARK};font-family:'Inter',sans-serif;padding:11px 14px;font-size:15px;outline:none;width:100%;}
.input-light:focus{border-color:${ORANGE};}
.textarea{background:rgba(255,255,255,.08);border:1.5px solid rgba(255,255,255,.18);border-radius:12px;color:white;font-family:'Inter',sans-serif;padding:11px 14px;font-size:14px;outline:none;width:100%;resize:none;}
.textarea:focus{border-color:${ORANGE};background:rgba(255,255,255,.12);}
.textarea-light{background:white;border:1.5px solid ${CREMA_DARK};border-radius:12px;color:${TEXT_DARK};font-family:'Inter',sans-serif;padding:11px 14px;font-size:14px;outline:none;width:100%;resize:none;}
.textarea-light:focus{border-color:${ORANGE};}
.input::placeholder, .textarea::placeholder{color:rgba(255,255,255,.5);}
.input-light::placeholder, .textarea-light::placeholder{color:#5A6B8C;}
@keyframes slideUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
.slide{animation:slideUp .22s ease;}
@keyframes pop{0%{transform:scale(.85)}60%{transform:scale(1.08)}100%{transform:scale(1)}}
.pop{animation:pop .3s ease;}
::-webkit-scrollbar{width:4px;height:4px}
::-webkit-scrollbar-track{background:transparent}
::-webkit-scrollbar-thumb{background:rgba(255,255,255,.18);border-radius:2px}
.cream-section ::-webkit-scrollbar-thumb{background:${CREMA_DARK};}
select option{background:${COBALT_DARK};color:white;}
`;

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const [cajeroActivo, setCajeroActivo] = useState(() => {
    // Siempre pedir cajero al iniciar la app
    save("rr_cajero_hoy", null);
    return null;
  });
  const [cajeros, setCajeros]           = useState(() => load("rr_cajeros", CAJEROS_DEFAULT));
  const [productos, setProductos]       = useState(() => load("rr_prods", PRODUCTOS_DEFAULT));
  const [pedidos, setPedidos]           = useState(() => load("rr_pedidos", []));
  const [vasosExtra, setVasosExtra]     = useState(() => load("rr_vasos", []));
  const [fondoCaja, setFondoCaja]       = useState(() => load("rr_fondo_hoy", null));
  const [cierres, setCierres]           = useState(() => load("rr_cierres", []));
  const [preciosLibres, setPreciosLibres] = useState(() => load("rr_precios_libres", PRECIOS_LIBRES_DEFAULT));
  const [ventasLibres, setVentasLibres]  = useState(() => load("rr_ventas_libres_tipos", VENTAS_LIBRES_DEFAULT));
  const [pinJefe, setPinJefe]           = useState(() => load("rr_pin_jefe", PIN_DEFAULT));
  const [toppingsConfig, setToppingsConfig] = useState(() => load("rr_toppings", TOPPINGS_DEFAULT));
  const [inventariosGuardados, setInventariosGuardados] = useState(() => load("rr_inventarios", {}));
  const [saboresNat, setSaboresNat] = useState(() => load("rr_sabores_nat", SABORES_NAT_DEFAULT));
  const [saboresAgua, setSaboresAgua] = useState(() => load("rr_sabores_agua", SABORES_AGUA_DEFAULT));
  const [gastosCaja, setGastosCaja]     = useState(() => load("rr_gastos_caja", []));
  const [cierresSemana, setCierresSemana] = useState(() => load("rr_cierres_semana", []));
  const [tab, setTab] = useState("pos");
  const [subTab, setSubTab] = useState("pedido"); // "pedido" o "cola" — solo en vertical
  const [savedToast, setSavedToast]     = useState(""); // mensaje de "guardado"
  const [pinModal, setPinModal]         = useState(null); // {action, label, onSuccess}
  const btn = useBtn();
  const showSaved = useCallback((msg = "Guardado") => { setSavedToast(msg); setTimeout(() => setSavedToast(""), 1800); }, []);
  const requirePin = useCallback((label, onSuccess) => { setPinModal({ label, onSuccess }); }, []);

  useEffect(() => save("rr_pedidos", pedidos), [pedidos]);
  useEffect(() => save("rr_prods", productos), [productos]);
  useEffect(() => save("rr_cajeros", cajeros), [cajeros]);
  useEffect(() => save("rr_cajero_hoy", cajeroActivo), [cajeroActivo]);
  useEffect(() => save("rr_vasos", vasosExtra), [vasosExtra]);
  useEffect(() => save("rr_fondo_hoy", fondoCaja), [fondoCaja]);
  useEffect(() => save("rr_cierres", cierres), [cierres]);
  useEffect(() => save("rr_precios_libres", preciosLibres), [preciosLibres]);
  useEffect(() => save("rr_ventas_libres_tipos", ventasLibres), [ventasLibres]);
  useEffect(() => save("rr_pin_jefe", pinJefe), [pinJefe]);
  useEffect(() => save("rr_toppings", toppingsConfig), [toppingsConfig]);
  useEffect(() => save("rr_inventarios", inventariosGuardados), [inventariosGuardados]);
  useEffect(() => save("rr_sabores_nat", saboresNat), [saboresNat]);
  useEffect(() => save("rr_sabores_agua", saboresAgua), [saboresAgua]);
  useEffect(() => save("rr_gastos_caja", gastosCaja), [gastosCaja]);
  useEffect(() => save("rr_cierres_semana", cierresSemana), [cierresSemana]);

  const agregarPedido     = useCallback(p => setPedidos(prev => [p, ...prev]), []);
  const actualizarPedido  = useCallback((id, c) => setPedidos(prev => prev.map(p => p.id === id ? { ...p, ...c } : p)), []);
  const agregarVasos      = useCallback((cantidad, nota) => {
    setVasosExtra(prev => [{ id: uid(), fecha: new Date().toISOString(), cajero: cajeroActivo, cantidad, nota }, ...prev]);
  }, [cajeroActivo]);
  const agregarCierre     = useCallback(c => setCierres(prev => [c, ...prev]), []);
  const agregarCierreSemana = useCallback(c => setCierresSemana(prev => [c, ...prev]), []);
  const agregarGasto      = useCallback((g) => setGastosCaja(prev => [{...g, id: uid(), fecha: new Date().toISOString(), cajero: cajeroActivo}, ...prev]), [cajeroActivo]);

  // Reset subTab a "pedido" al girar a horizontal
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 900) setSubTab("pedido"); };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Enter cierra teclado en cualquier input de la app (debe ir ANTES de returns condicionales)
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Enter" && (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")) {
        if (e.target.tagName === "TEXTAREA" && e.shiftKey) return;
        e.target.blur();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const enCola = pedidos.filter(p => !p.entregado).sort((a,b) => a.fecha.localeCompare(b.fecha));
  const pendientesPago = pedidos.filter(p => !p.pagado && !p.entregado && !p.esCortes).length;
  const numeroPedido = pedidos.length + 1;

  if (!cajeroActivo) {
    return <CajeroScreen cajeros={cajeros} onSelect={c => { btn("success"); setCajeroActivo(c); }} />;
  }

  const fondoHoyValido = fondoCaja?.fecha && localDateKey(fondoCaja.fecha) === todayKey(); // un solo fondo por día, compartido entre cajeros
  if (!fondoHoyValido) {
    return <FondoCajaScreen cajero={cajeroActivo} onConfirm={(monto) => {
      btn("success");
      setFondoCaja({ monto, cajero: cajeroActivo, fecha: new Date().toISOString() });
    }} onChangeUser={() => { btn(); setCajeroActivo(null); setTab("pos"); }}/>;
  }

  return (
    <div style={{fontFamily:"'Inter',sans-serif",background:COBALT,minHeight:"100vh",color:"white"}}>
      <style>{CSS}</style>
      {savedToast && (
        <div className="pop" style={{position:"fixed",top:20,left:"50%",transform:"translateX(-50%)",background:"#22C55E",color:"white",padding:"10px 22px",borderRadius:30,fontWeight:800,fontSize:14,zIndex:300,boxShadow:"0 6px 20px rgba(0,0,0,.3)",display:"flex",alignItems:"center",gap:8}}>
          <span>✓</span><span>{savedToast}</span>
        </div>
      )}
      {pinModal && (
        <PinModal label={pinModal.label} pinJefe={pinJefe} btn={btn}
          onSuccess={() => { const cb = pinModal.onSuccess; setPinModal(null); cb && cb(); }}
          onCancel={() => { btn(); setPinModal(null); }}/>
      )}
      <style>{`
        .tab-big { padding: 10px 22px; font-size: 14px; border-radius: 12px; font-weight: 900; letter-spacing: .04em; text-transform: uppercase; }
        .tab-small { padding: 8px 14px; font-size: 12px; border-radius: 10px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; }
        @media (max-width: 700px) {
          .tab-big { padding: 9px 14px; font-size: 12px; }
          .tab-small { padding: 7px 9px; font-size: 11px; }
        }
        @media (min-width: 900px) {
          .split-pos { display: grid; grid-template-columns: 1fr 1fr; gap: 0; }
          .split-pos .left-col { padding: 24px; min-height: calc(100vh - 90px); }
          .split-pos .right-col { background: ${CREMA}; color: ${TEXT_DARK}; padding: 24px; min-height: calc(100vh - 90px); }
        }
        @media (max-width: 899px) {
          .split-pos { display: block; }
          .split-pos .right-col { display: none; }
          .split-pos .left-col { padding: 16px 20px !important; }
        }
        .btn-toggle-cola {
          display: none;
        }
        @media (max-width: 899px) {
          .btn-toggle-cola {
            display: flex;
            position: fixed;
            bottom: 24px;
            right: 20px;
            z-index: 90;
            align-items: center;
            gap: 8px;
            background: ${ORANGE};
            color: white;
            border-radius: 30px;
            padding: 14px 20px;
            font-weight: 900;
            font-size: 14px;
            letter-spacing: .04em;
            box-shadow: 0 6px 24px rgba(0,0,0,.35);
            border: none;
            cursor: pointer;
          }
        }
      `}</style>

      <Header
        cajeroActivo={cajeroActivo}
        onChangeUser={() => { btn(); setCajeroActivo(null); setTab("pos"); }}
        tab={tab}
        setTab={(t) => {
          btn();
          if (t === "config") {
            // Pedir PIN antes de mostrar Configuración
            requirePin("Acceso a Configuración", () => setTab("config"));
          } else {
            setTab(t);
          }
        }}
        enColaCount={enCola.length}
        pendientesPago={pendientesPago}
      />

      <div>
        {tab === "pos" && (
          <>
            <div className="split-pos">
              <div className="left-col" style={{display: subTab === "cola" ? "none" : "block", boxSizing:"border-box"}}>
                <POSTab productos={productos} preciosLibres={preciosLibres} ventasLibres={ventasLibres} toppingsConfig={toppingsConfig} saboresNat={saboresNat} saboresAgua={saboresAgua} agregarPedido={agregarPedido} cajeroActivo={cajeroActivo} btn={btn} numeroPedido={numeroPedido} pedidos={pedidos} requirePin={requirePin} showSaved={showSaved}/>
              </div>
              {subTab === "cola" && window.innerWidth < 900 && (
                <div style={{background:CREMA,color:TEXT_DARK,minHeight:"calc(100vh - 90px)",padding:"20px"}} className="cream-section">
                  <ColaTab enCola={enCola} actualizarPedido={actualizarPedido} btn={btn} variant="light" requirePin={requirePin} showSaved={showSaved} productos={productos}/>
                </div>
              )}
              <div className="right-col cream-section">
                <ColaTab enCola={enCola} actualizarPedido={actualizarPedido} btn={btn} variant="light" requirePin={requirePin} showSaved={showSaved} productos={productos}/>
              </div>
            </div>
            {/* Botón flotante visible solo en vertical */}
            <button className="btn btn-toggle-cola" onClick={() => { btn(); setSubTab(s => s === "pedido" ? "cola" : "pedido"); }}>
              {subTab === "pedido"
                ? <><span style={{fontSize:18}}>🍧</span> Cola ({enCola.length})</>
                : <><span style={{fontSize:18}}>+</span> Nuevo pedido</>
              }
            </button>

          </>
        )}
        {tab === "cola" && (
          <div style={{background:CREMA, color:TEXT_DARK, minHeight:"calc(100vh - 90px)", padding:"20px"}} className="cream-section">
            <ColaTab enCola={enCola} actualizarPedido={actualizarPedido} btn={btn} variant="light" requirePin={requirePin} showSaved={showSaved} productos={productos}/>
          </div>
        )}
        {tab === "reportes" && <div style={{padding:"20px"}}><ReportesTab pedidos={pedidos} actualizarPedido={actualizarPedido} vasosExtra={vasosExtra} gastosCaja={gastosCaja} cierresSemana={cierresSemana} btn={btn} requirePin={requirePin}/></div>}
        {tab === "historial" && <div style={{background:CREMA,color:TEXT_DARK,minHeight:"calc(100vh - 90px)",padding:"20px"}} className="cream-section"><HistorialTab pedidos={pedidos} btn={btn} actualizarPedido={actualizarPedido} toppingsConfig={toppingsConfig}/></div>}
        {tab === "gastos"   && <div style={{padding:"20px"}}><GastosTab gastosCaja={gastosCaja} agregarGasto={agregarGasto} requirePin={requirePin} btn={btn} showSaved={showSaved}/></div>}
        {tab === "cierre"   && <div style={{padding:"20px"}}><CierreTab pedidos={pedidos} fondoCaja={fondoCaja} cierres={cierres} cierresSemana={cierresSemana} gastosCaja={gastosCaja} agregarCierre={agregarCierre} agregarCierreSemana={agregarCierreSemana} cajeroActivo={cajeroActivo} btn={btn} showSaved={showSaved} inventariosGuardados={inventariosGuardados} setInventariosGuardados={setInventariosGuardados} pinJefe={pinJefe} saboresNat={saboresNat} saboresAgua={saboresAgua} requirePin={requirePin}/></div>}
        {tab === "config"   && <div style={{padding:"20px"}}><ConfigTab productos={productos} setProductos={setProductos} pedidos={pedidos} setPedidos={setPedidos} cajeros={cajeros} setCajeros={setCajeros} cajeroActivo={cajeroActivo} setCajeroActivo={setCajeroActivo} preciosLibres={preciosLibres} setPreciosLibres={setPreciosLibres} ventasLibres={ventasLibres} setVentasLibres={setVentasLibres} toppingsConfig={toppingsConfig} setToppingsConfig={setToppingsConfig} saboresNat={saboresNat} setSaboresNat={setSaboresNat} saboresAgua={saboresAgua} setSaboresAgua={setSaboresAgua} pinJefe={pinJefe} setPinJefe={setPinJefe} btn={btn} requirePin={requirePin} showSaved={showSaved}/></div>}
      </div>
    </div>
  );
}

// ─── HEADER ───────────────────────────────────────────────────────────────────
function Header({ cajeroActivo, onChangeUser, tab, setTab, enColaCount }) {
  const initial = (cajeroActivo || "?").charAt(0).toUpperCase();
  return (
    <div style={{background:COBALT_DARK, padding:"14px 18px", display:"flex", alignItems:"center", justifyContent:"space-between", gap:12, flexWrap:"wrap", borderBottom:`2px solid rgba(255,255,255,.08)`}}>
      <div style={{display:"flex",alignItems:"center",gap:12}}>
        <div style={{width:36,height:44,color:"white",flexShrink:0}}>
          <IsotipoSVG style={{width:"100%",height:"100%"}}/>
        </div>
        <div>
          <div className="display" style={{fontSize:18,color:"white",lineHeight:1}}>ROSY RASPADOS</div>
          <div className="serif-it" style={{fontSize:15,color:"rgba(255,255,255,.6)",marginTop:2}}>100% naturales</div>
        </div>
      </div>

      <div style={{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>
        <button className="btn tab-big" onClick={()=>setTab("pos")}
          style={{background:tab==="pos"?"white":"rgba(255,255,255,.08)",color:tab==="pos"?COBALT:"white",border:"2px solid",borderColor:tab==="pos"?"white":"rgba(255,255,255,.18)"}}>
          Nuevo pedido
        </button>
        <button className="btn tab-big" onClick={()=>setTab("historial")}
          style={{background:tab==="historial"?"white":"rgba(255,255,255,.08)",color:tab==="historial"?COBALT:"white",border:"2px solid",borderColor:tab==="historial"?"white":"rgba(255,255,255,.18)"}}>
          Historial
        </button>
        <button className="btn tab-small" onClick={()=>setTab("reportes")}
          style={{background:tab==="reportes"?"white":"transparent",color:tab==="reportes"?COBALT:"rgba(255,255,255,.7)"}}>
          📊 Reportes
        </button>
        <button className="btn tab-small" onClick={()=>setTab("gastos")}
          style={{background:tab==="gastos"?"white":"transparent",color:tab==="gastos"?COBALT:"rgba(255,255,255,.7)"}}>
          💸 Gastos
        </button>
        <button className="btn tab-small" onClick={()=>setTab("cierre")}
          style={{background:tab==="cierre"?"white":"transparent",color:tab==="cierre"?COBALT:"rgba(255,255,255,.7)"}}>
          🔒 Cierre
        </button>
        <button className="btn tab-small" onClick={()=>setTab("config")}
          style={{background:tab==="config"?"white":"transparent",color:tab==="config"?COBALT:"rgba(255,255,255,.7)"}}>
          ⚙️
        </button>
      </div>

      <button className="btn" onClick={onChangeUser}
        style={{display:"flex",alignItems:"center",gap:10,background:"rgba(255,255,255,.15)",border:"2px solid rgba(255,255,255,.28)",borderRadius:12,padding:"6px 12px 6px 6px",color:"white"}}>
        <div style={{width:32,height:32,background:ORANGE,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Archivo Black',sans-serif",fontSize:14,color:"white"}}>{initial}</div>
        <div style={{textAlign:"left"}}>
          <div style={{fontSize:9,fontWeight:700,letterSpacing:".1em",color:"rgba(255,255,255,.75)"}}>CAJERO</div>
          <div className="display" style={{fontSize:13,color:"white",lineHeight:1}}>{(cajeroActivo||"").toUpperCase()}</div>
        </div>
        <span style={{color:"rgba(255,255,255,.7)",fontSize:14,marginLeft:4}}>↻</span>
      </button>
    </div>
  );
}

// ─── PANTALLA: SELECCIÓN DE CAJERO ────────────────────────────────────────────
function CajeroScreen({ cajeros, onSelect }) {
  const [seleccionado, setSeleccionado] = useState(null);
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  const cajeroObj = seleccionado !== null ? cajeros[seleccionado] : null;
  const nombre = cajeroObj?.nombre || cajeroObj || "";
  const pinRequerido = cajeroObj?.pin || null;

  const intentarEntrar = () => {
    if (pinRequerido && pin !== pinRequerido) {
      setError("PIN incorrecto"); setPin("");
      setTimeout(() => setError(""), 1500);
      return;
    }
    onSelect(nombre);
  };

  return (
    <div style={{fontFamily:"'Inter',sans-serif",background:COBALT,minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:28,color:"white"}}>
      <style>{CSS}</style>
      <div style={{width:80,height:100,color:"white",marginBottom:16}}>
        <IsotipoSVG style={{width:"100%",height:"100%"}}/>
      </div>
      <div style={{width:280,color:"white",marginBottom:10}}>
        <WordmarkSVG style={{width:"100%",height:"auto"}}/>
      </div>
      <div className="serif-it" style={{fontSize:18,color:"rgba(255,255,255,.65)",marginBottom:36}}>¿Quién está de cajero hoy?</div>

      {seleccionado === null ? (
        <div style={{width:"100%",maxWidth:380,display:"flex",flexDirection:"column",gap:10}}>
          {cajeros.map((c, i) => {
            const nom = c?.nombre || c;
            return (
              <button key={i} className="btn" onClick={() => { setSeleccionado(i); setPin(""); setError(""); }}
                style={{width:"100%",background:"rgba(255,255,255,.08)",color:"white",borderRadius:14,padding:"14px 18px",fontWeight:800,border:"2px solid rgba(255,255,255,.18)",textAlign:"left",display:"flex",alignItems:"center",gap:14}}>
                <span style={{width:42,height:42,background:"rgba(255,255,255,.12)",border:"2px solid rgba(255,255,255,.25)",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Archivo Black',sans-serif",fontSize:18,color:"white"}}>{nom.charAt(0).toUpperCase()}</span>
                <span className="display" style={{fontSize:18,letterSpacing:".02em"}}>{nom.toUpperCase()}</span>
              </button>
            );
          })}
          <div className="serif-it" style={{marginTop:10,fontSize:14,color:"rgba(255,255,255,.4)",textAlign:"center"}}>Edita los cajeros en ⚙️ Configuración</div>
        </div>
      ) : (
        <div style={{width:"100%",maxWidth:380}}>
          <div style={{textAlign:"center",marginBottom:20}}>
            <div style={{width:64,height:64,background:ORANGE,borderRadius:16,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Archivo Black',sans-serif",fontSize:28,color:"white",margin:"0 auto 10px"}}>
              {nombre.charAt(0).toUpperCase()}
            </div>
            <div className="display" style={{fontSize:24,color:"white"}}>{nombre.toUpperCase()}</div>
            {pinRequerido
              ? <div className="serif-it" style={{fontSize:15,color:"rgba(255,255,255,.6)",marginTop:4}}>Ingresa tu PIN</div>
              : <div className="serif-it" style={{fontSize:15,color:"rgba(255,255,255,.6)",marginTop:4}}>Sin PIN configurado</div>
            }
          </div>
          {pinRequerido && (
            <>
              <input className="input" type="password" inputMode="numeric" placeholder="••••" value={pin} maxLength={4}
                onChange={e=>setPin(e.target.value.slice(0,4))}
                onKeyDown={e=>{if(e.key==="Enter")intentarEntrar();}}
                style={{textAlign:"center",fontSize:32,letterSpacing:".4em",fontFamily:"'Archivo Black',sans-serif",marginBottom:10}}
                autoFocus/>
              {error && <div className="serif-it" style={{fontSize:14,color:ORANGE,textAlign:"center",marginBottom:10}}>{error}</div>}
            </>
          )}
          <button className="btn" onClick={intentarEntrar}
            style={{width:"100%",background:ORANGE,color:"white",borderRadius:14,padding:16,fontSize:16,fontWeight:900,letterSpacing:".04em",textTransform:"uppercase",marginBottom:10}}>
            Entrar →
          </button>
          <button className="btn" onClick={() => { setSeleccionado(null); setPin(""); setError(""); }}
            style={{width:"100%",background:"none",color:"rgba(255,255,255,.5)",fontSize:13,padding:8,fontFamily:"'Instrument Serif',serif",fontStyle:"italic"}}>
            ← Elegir otro cajero
          </button>
        </div>
      )}
    </div>
  );
}

// ─── PANTALLA: FONDO DE CAJA ──────────────────────────────────────────────────
function FondoCajaScreen({ cajero, onConfirm, onChangeUser }) {
  const [monto, setMonto] = useState("");
  const sugeridos = [200, 300, 500, 1000];
  const valido = monto !== "" && Number(monto) >= 0;
  return (
    <div style={{fontFamily:"'Inter',sans-serif",background:COBALT,minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:28,color:"white"}}>
      <style>{CSS}</style>
      <div style={{fontSize:64,marginBottom:14,color:"white"}}>💵</div>
      <div className="display" style={{fontSize:30,color:"white",marginBottom:4,letterSpacing:"-.02em",textAlign:"center"}}>FONDO DE CAJA</div>
      <div className="serif-it" style={{fontSize:18,color:"rgba(255,255,255,.7)",marginBottom:28,textAlign:"center"}}>Hola {cajero} · ¿Con cuánto abre la caja hoy?</div>

      <div style={{width:"100%",maxWidth:380}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:6,marginBottom:14,background:"rgba(0,0,0,.18)",borderRadius:14,padding:"18px"}}>
          <span className="display" style={{fontSize:36,color:"rgba(255,255,255,.4)"}}>$</span>
          <input type="number" value={monto} onChange={e=>setMonto(e.target.value)} placeholder="0"
            style={{background:"transparent",border:"none",outline:"none",fontFamily:"'Archivo Black',sans-serif",fontSize:48,color:"white",width:"100%",textAlign:"center",padding:0}}
            autoFocus/>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8,marginBottom:18}}>
          {sugeridos.map(s => (
            <button key={s} className="btn" onClick={()=>setMonto(String(s))}
              style={{background:Number(monto)===s?"white":"rgba(255,255,255,.08)",color:Number(monto)===s?COBALT:"white",border:`2px solid ${Number(monto)===s?"white":"rgba(255,255,255,.18)"}`,borderRadius:10,padding:"10px 6px",fontWeight:800,fontSize:14}}>
              ${s}
            </button>
          ))}
        </div>

        <button className="btn" disabled={!valido} onClick={() => valido && onConfirm(Number(monto))}
          style={{width:"100%",background:valido?ORANGE:"rgba(255,255,255,.1)",color:valido?"white":"rgba(255,255,255,.3)",borderRadius:14,padding:16,fontSize:16,fontWeight:900,letterSpacing:".04em",textTransform:"uppercase",cursor:valido?"pointer":"not-allowed"}}>
          Empezar turno →
        </button>

        <button className="btn" onClick={()=>onConfirm(0)}
          style={{width:"100%",background:"none",color:"rgba(255,255,255,.4)",fontSize:13,marginTop:10,padding:8,fontFamily:"'Instrument Serif',serif",fontStyle:"italic"}}>
          Saltar (sin fondo de cambio)
        </button>

        <button className="btn" onClick={onChangeUser}
          style={{width:"100%",background:"none",color:"rgba(255,255,255,.4)",fontSize:13,marginTop:4,padding:8,fontWeight:600}}>
          ← Cambiar cajero
        </button>
      </div>
    </div>
  );
}

// ─── POS TAB ──────────────────────────────────────────────────────────────────
function POSTab({ productos, preciosLibres, ventasLibres, toppingsConfig: toppingsConfigProp2, saboresNat, saboresAgua, agregarPedido, cajeroActivo, btn, numeroPedido, pedidos: pedidosProp, requirePin, showSaved }) {
  const pedidos = pedidosProp || [];
  const toppingsConfig = toppingsConfigProp2 || TOPPINGS_DEFAULT;
  const [items, setItems] = useState(() => load("rr_items_temp", []));
  const [editIdx, setEditIdx] = useState(null);
  const [showVentaLibre, setShowVentaLibre] = useState(false);
  const [stepFinal, setStepFinal] = useState(false);
  const [cliente, setCliente] = useState("");
  const [metodoPago, setMetodoPago] = useState("Efectivo");
  const [confirmado, setConfirmado] = useState(false);
  // Persistir items temporales para no perder pedido en curso si se cierra la app
  useEffect(() => save("rr_items_temp", items), [items]);

  // Calcular top 3 sabores del último mes
  const topSabores = (() => {
    const haceMes = new Date(); haceMes.setMonth(haceMes.getMonth() - 1);
    const recientes = pedidos.filter(p => new Date(p.fecha) >= haceMes);
    const allSabores = recientes.flatMap(p => (p.items||[]).filter(it => it.tipo !== "especial").flatMap(it => it.sabores || []));
    if (allSabores.length < 30) return [];
    const conteo = {};
    allSabores.forEach(s => { conteo[s] = (conteo[s]||0) + 1; });
    return Object.entries(conteo).sort((a,b) => b[1]-a[1]).slice(0,3).map(([s])=>s);
  })();

  const esCortes = metodoPago === "Cortesía";
  const total = calcPedidoTotal(items, esCortes);

  const resetAll = () => { setItems([]); save("rr_items_temp", []); setStepFinal(false); setCliente(""); setMetodoPago("Efectivo"); setEditIdx(null); setShowVentaLibre(false); };

  const confirmarReal = (extra = {}) => {
    btn("success");
    const pagado = metodoPago !== "Transferencia";
    const pedido = {
      id: uid(),
      numero: numeroPedido,
      fecha: new Date().toISOString(),
      cliente: cliente.trim() || "Sin nombre",
      cajero: cajeroActivo,
      items: items.map(it => ({ ...it, hecha: false })),
      metodoPago, total, pagado, entregado: false, esCortes,
      montoRecibido: extra.montoRecibido ?? null,
      cambio: extra.cambio ?? null,
      propina: extra.propina ?? 0,
    };
    agregarPedido(pedido);
    showSaved && showSaved("Pedido en cola");
    setConfirmado(true);
    setTimeout(() => { setConfirmado(false); resetAll(); }, 900);
  };

  const confirmar = (extra = {}) => {
    if (esCortes && requirePin) {
      requirePin("Autorizar cortesía", () => confirmarReal(extra));
    } else {
      confirmarReal(extra);
    }
  };

  if (confirmado) return (
    <div className="pop" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"60vh",gap:14}}>
      <div style={{fontSize:72}}>✅</div>
      <div className="display" style={{fontSize:28,color:"#22C55E"}}>¡EN COLA!</div>
      <div className="serif-it" style={{fontSize:18,color:"rgba(255,255,255,.5)"}}>Pedido #{padNum(numeroPedido)} agregado</div>
    </div>
  );

  return (
    <div className="slide">
      {!stepFinal && <>
        <div style={{display:"flex",alignItems:"flex-end",gap:14,marginBottom:20,justifyContent:"space-between"}}>
          <div style={{display:"flex",alignItems:"flex-end",gap:14}}>
            <div className="display" style={{fontSize:74,color:ORANGE,lineHeight:.85,letterSpacing:"-.04em"}}>#{padNum(numeroPedido)}</div>
            <div style={{paddingBottom:8}}>
              <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"rgba(255,255,255,.5)",textTransform:"uppercase"}}>"Nuevo pedido"</div>
              <div className="serif-it" style={{fontSize:18,color:"rgba(255,255,255,.85)",marginTop:2}}>
                {items.length === 0 ? "Empieza tocando un producto" : `${items.length} producto${items.length!==1?"s":""} · ${fmt(total)}`}
              </div>
            </div>
          </div>

        </div>

        {/* Un solo botón de Raspado — el modal tiene todo lo demás */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:14}}>
          <button className="btn" onClick={() => { btn(); setEditIdx({ kind: "new-prod", prod: null }); }}
            style={{gridColumn:"1 / -1",background:CREMA,border:"none",borderRadius:18,padding:"24px 22px",textAlign:"left",position:"relative",overflow:"hidden",cursor:"pointer",display:"flex",alignItems:"center",gap:18}}>
            <div style={{width:56,height:56,background:ORANGE,borderRadius:14,display:"flex",alignItems:"center",justifyContent:"center",fontSize:30,flexShrink:0}}>🍧</div>
            <div>
              <div className="display" style={{fontSize:26,color:TEXT_DARK,letterSpacing:"-.01em",lineHeight:1}}>RASPADO</div>
              <div className="serif-it" style={{fontSize:15,color:TEXT_MUTED,marginTop:4}}>Natural o agua · todos los sabores</div>
            </div>
            <div style={{position:"absolute",right:20,top:"50%",transform:"translateY(-50%)",fontSize:36,opacity:.15}}>→</div>
          </button>
        </div>

        <button className="btn" onClick={() => { btn(); setShowVentaLibre(true); }}
          style={{width:"100%",background:"transparent",border:`2px dashed rgba(255,255,255,.3)`,borderRadius:14,padding:"14px 18px",textAlign:"left",display:"flex",alignItems:"center",gap:14,marginBottom:18,cursor:"pointer",color:"white"}}>
          <div style={{width:38,height:38,background:ORANGE,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,fontWeight:900,color:"white",flexShrink:0}}>+</div>
          <div>
            <div className="display" style={{fontSize:16,color:"white",letterSpacing:".02em"}}>VENTA LIBRE</div>
            <div className="serif-it" style={{fontSize:14,color:"rgba(255,255,255,.6)",marginTop:1}}>
              {ventasLibres&&ventasLibres.filter(vl=>vl.nombre!=="Venta libre").length>0
                ? ventasLibres.filter(vl=>vl.nombre!=="Venta libre").map(vl=>`${vl.emoji} ${vl.nombre}`).join(" · ")
                : "Cucharón suelto · vaso · hielo · precio a mano"}
            </div>
          </div>
        </button>

        {items.map((it, idx) => (
          <ItemRow key={idx} item={it} idx={idx}
            onEdit={() => { btn(); setEditIdx(idx); }}
            onRemove={() => {
              btn();
              const cant = (it.cantidad || 1) - 1;
              if (cant <= 0) setItems(items.filter((_,i) => i !== idx));
              else setItems(items.map((x,i) => i===idx ? {...x, cantidad:cant} : x));
            }}
            onAdd={() => {
              btn("check");
              setItems(items.map((x,i) => i===idx ? {...x, cantidad:(x.cantidad||1)+1} : x));
            }}
          />
        ))}

        {items.length > 0 && (
          <>
            <div style={{background:"rgba(0,0,0,.22)",borderRadius:16,padding:"18px 20px",marginBottom:12,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div>
                <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"rgba(255,255,255,.5)",textTransform:"uppercase"}}>Total del pedido</div>
                <div className="serif-it" style={{fontSize:14,color:"rgba(255,255,255,.6)",marginTop:2}}>{items.length} ítem{items.length!==1?"s":""}</div>
              </div>
              <div className="display" style={{fontSize:48,color:ORANGE,lineHeight:1}}>{fmt(total)}</div>
            </div>
            <button className="btn" onClick={() => { btn(); setStepFinal(true); }}
              style={{width:"100%",background:ORANGE,color:"white",borderRadius:16,padding:"18px",fontSize:17,fontWeight:900,letterSpacing:".06em",textTransform:"uppercase"}}>
              Cobrar {fmt(total)} →
            </button>
          </>
        )}

        {editIdx !== null && editIdx?.kind !== "new-prod" && typeof editIdx === "number" && items[editIdx]?.tipo !== "especial" && (
          <ItemEditor productos={productos} item={items[editIdx]} topSabores={topSabores} toppingsConfig={toppingsConfig} saboresNat={saboresNat||SABORES_NATURALES} saboresAgua={saboresAgua||SABORES_AGUA}
            onSave={it => { btn("success"); setItems(items.map((x,i) => i === editIdx ? it : x)); setEditIdx(null); }}
            onClose={() => { btn(); setEditIdx(null); }} btn={btn}/>
        )}
        {editIdx !== null && editIdx?.kind === "new-prod" && (
          <ItemEditor productos={productos} initialProd={editIdx.prod} topSabores={topSabores} toppingsConfig={toppingsConfig} saboresNat={saboresNat||SABORES_NATURALES} saboresAgua={saboresAgua||SABORES_AGUA}
            onSave={it => { btn("success"); setItems([...items, it]); setEditIdx(null); }}
            onClose={() => { btn(); setEditIdx(null); }} btn={btn}/>
        )}
        {editIdx !== null && typeof editIdx === "number" && items[editIdx]?.tipo === "especial" && (
          <VentaLibreModal preciosLibres={preciosLibres} ventasLibres={ventasLibres||[]} item={items[editIdx]}
            onSave={(it) => { btn("success"); setItems(items.map((x,i) => i === editIdx ? it : x)); setEditIdx(null); }}
            onClose={() => { btn(); setEditIdx(null); }} btn={btn}/>
        )}
        {showVentaLibre && (
          <VentaLibreModal preciosLibres={preciosLibres} ventasLibres={ventasLibres||[]}
            onSave={(it, cant=1) => {
              btn("success");
              const nuevos = Array.from({length:cant}, () => ({...it}));
              setItems([...items, ...nuevos]);
              setShowVentaLibre(false);
            }}
            onClose={() => { btn(); setShowVentaLibre(false); }} btn={btn}/>
        )}
      </>}

      {stepFinal && (
        <PagoStep
          items={items} total={total} esCortes={esCortes}
          cliente={cliente} setCliente={setCliente}
          metodoPago={metodoPago} setMetodoPago={setMetodoPago}
          numeroPedido={numeroPedido}
          onBack={() => { btn(); setStepFinal(false); }}
          onConfirm={confirmar}
          onCancel={() => { btn(); resetAll(); }}
          btn={btn}
        />
      )}
    </div>
  );
}

// ─── ITEM ROW ─────────────────────────────────────────────────────────────────
function ItemRow({ item, onEdit, onRemove, onAdd }) {
  const isEsp = item.tipo === "especial";
  const cant = item.cantidad || 1;
  return (
    <div style={{background:CREMA,borderRadius:14,padding:"12px 16px",marginBottom:8,display:"flex",justifyContent:"space-between",alignItems:"center",gap:10}}>
      <div style={{flex:1,minWidth:0}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <div style={{width:34,height:34,background:isEsp?COBALT:ORANGE,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
            <span style={{fontSize:16,color:"white"}}>{isEsp ? "✏️" : item.producto?.emoji}</span>
          </div>
          <div style={{minWidth:0}}>
            <div className="display" style={{fontSize:16,color:TEXT_DARK,lineHeight:1.1,letterSpacing:".01em"}}>
              {isEsp ? (item.descripcion || "Venta libre").toUpperCase() : item.producto.nombre.toUpperCase()}
            </div>
            {!isEsp && (
              <div className="serif-it" style={{fontSize:14,color:TEXT_MUTED,marginTop:2}}>
                {(item.sabores||[]).length > 0 ? item.sabores.join(" · ") : "sin sabor"}
                {item.cucharon && <span> · 🥄 cucharón</span>}
                {toppingsLabel(item.toppings) && <span> · {toppingsLabel(item.toppings)}</span>}
              </div>
            )}
            {isEsp && (
              <div style={{display:"inline-block",marginTop:3,fontSize:10,fontWeight:800,letterSpacing:".1em",color:COBALT,background:"rgba(30,63,170,.12)",borderRadius:5,padding:"2px 7px",textTransform:"uppercase"}}>
                Venta libre
              </div>
            )}
            {item.notas && <div className="serif-it" style={{fontSize:15,color:ORANGE,marginTop:3}}>📝 {item.notas}</div>}
          </div>
        </div>
      </div>
      <div style={{display:"flex",alignItems:"center",gap:6}}>
        {/* Controles tipo carrito con cantidad */}
        <div style={{display:"flex",alignItems:"center",background:"white",border:`2px solid ${CREMA_DARK}`,borderRadius:10,overflow:"hidden"}}>
          <button className="btn" onClick={onRemove}
            style={{width:34,height:36,background:"none",color:ORANGE_DARK,fontSize:20,fontWeight:900,display:"flex",alignItems:"center",justifyContent:"center",border:"none"}}>
            −
          </button>
          <span className="display" style={{fontSize:15,color:cant>1?ORANGE:TEXT_DARK,minWidth:cant>1?24:16,textAlign:"center",padding:"0 4px"}}>{cant}</span>
          <button className="btn" onClick={onAdd}
            style={{width:34,height:36,background:"none",color:COBALT,fontSize:20,fontWeight:900,display:"flex",alignItems:"center",justifyContent:"center",border:"none"}}>
            +
          </button>
        </div>
        <div style={{textAlign:"right"}}>
          <div className="display" style={{fontSize:20,color:ORANGE,lineHeight:1}}>{fmt(calcItemTotal(item))}</div>
          {cant > 1 && <div style={{fontSize:10,color:TEXT_MUTED,fontWeight:600}}>{cant}×{fmt(calcItemUnitario(item))}</div>}
        </div>
        <button className="btn" onClick={onEdit} style={{background:CREMA_DARK,color:TEXT_DARK,borderRadius:7,padding:"5px 9px",fontSize:12,fontWeight:700}}>✏️</button>
      </div>
    </div>
  );
}

// ─── PAGO STEP ────────────────────────────────────────────────────────────────
function PagoStep({ items, total, esCortes, cliente, setCliente, metodoPago, setMetodoPago, numeroPedido, onBack, onConfirm, onCancel, btn }) {
  const [paso, setPaso] = useState(1); // 1: nombre+método, 2: cobrar
  const [montoRecibido, setMontoRecibido] = useState("");
  const [propina, setPropina] = useState("");
  const [confirmCancel, setConfirmCancel] = useState(false);
  const cambio = montoRecibido !== "" && Number(montoRecibido) >= total ? Number(montoRecibido) - total : null;

  // Resumen inline — visible en ambos pasos
  const comisionInfo = metodoPago==="Terminal" && !esCortes ? comisionTerminal(total) : null;

  const resumenJSX = (
    <div style={{background:"rgba(0,0,0,.22)",borderRadius:14,padding:14,marginBottom:14}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
        <div className="display" style={{fontSize:36,color:ORANGE,lineHeight:.85}}>#{padNum(numeroPedido)}</div>
        <div className="display" style={{fontSize:36,color:esCortes?"rgba(255,255,255,.5)":ORANGE,lineHeight:.85}}>{esCortes?"Cortesía":fmt(total)}</div>
      </div>
      {items.map((it,i) => (
        <div key={i} style={{display:"flex",justifyContent:"space-between",fontSize:13,marginBottom:5}}>
          <span style={{color:"rgba(255,255,255,.85)",flex:1,minWidth:0,paddingRight:8}}>
            {it.tipo==="especial" ? ("✏️ " + it.descripcion) :
              (it.producto.emoji + " " + it.producto.nombre.split(" ").pop() + ((it.sabores||[]).length>0?" · "+it.sabores.join("/"):"") + (it.cucharon?" 🥄":""))}
          </span>
          <span style={{fontWeight:700,color:esCortes?"rgba(255,255,255,.4)":ORANGE,flexShrink:0}}>{esCortes?"$0":fmt(calcItemTotal(it))}</span>
        </div>
      ))}
      {comisionInfo && (
        <div style={{marginTop:8,padding:"7px 10px",background:"rgba(234,91,29,.14)",borderRadius:8,fontSize:11,color:ORANGE,fontWeight:700}}>
          💳 Comisión -{fmt(comisionInfo.total)} · Recibes {fmt(comisionInfo.neto)}
        </div>
      )}
    </div>
  );

  return (
    <div className="slide" style={{display:"flex",flexDirection:"column",height:"calc(100vh - 130px)",overflow:"hidden"}}>
      <button className="btn" onClick={paso===2?()=>setPaso(1):onBack} style={{background:"none",color:"rgba(255,255,255,.6)",fontSize:13,fontWeight:600,marginBottom:10,padding:0,alignSelf:"flex-start"}}>
        {paso===2?"← Volver":"← Volver al pedido"}
      </button>

      {/* Resumen siempre visible */}
      {resumenJSX}

      {/* Contenido scrollable */}
      <div style={{flex:1,overflowY:"auto",paddingBottom:20}}>

        {paso === 1 && (
          <>
            {/* Nombre del cliente */}
            <div style={{marginBottom:14}}>
              <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"rgba(255,255,255,.5)",marginBottom:6}}>¿A NOMBRE DE QUIÉN?</div>
              <input className="input" placeholder="Toca aquí para escribir el nombre..." value={cliente}
                onChange={e=>setCliente(e.target.value)}
                style={{fontSize:16,padding:"13px 14px"}}/>
            </div>

            {/* Método de pago */}
            <div style={{marginBottom:18}}>
              <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"rgba(255,255,255,.5)",marginBottom:8}}>MÉTODO DE PAGO</div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:8}}>
                {METODOS_PAGO.map(m => (
                  <button key={m} className="btn" onClick={()=>{btn();setMetodoPago(m);}}
                    style={{padding:"14px 8px",borderRadius:14,fontWeight:800,fontSize:13,border:"2px solid",
                      borderColor:metodoPago===m?(m==="Cortesía"?"#A78BFA":ORANGE):"rgba(255,255,255,.18)",
                      background:metodoPago===m?(m==="Cortesía"?"rgba(167,139,250,.18)":"rgba(234,91,29,.18)"):"rgba(255,255,255,.05)",
                      color:metodoPago===m?(m==="Cortesía"?"#A78BFA":ORANGE):"rgba(255,255,255,.7)",textAlign:"center",lineHeight:1.5}}>
                    <div style={{fontSize:22}}>{m==="Efectivo"?"💵":m==="Transferencia"?"📲":m==="Terminal"?"💳":"🎁"}</div>
                    <div className="display" style={{fontSize:13,marginTop:3}}>{m.toUpperCase()}</div>
                    {m==="Transferencia"&&<div className="serif-it" style={{fontSize:12,marginTop:2,opacity:.7}}>pendiente de confirmación</div>}
                    {m==="Cortesía"&&<div className="serif-it" style={{fontSize:12,marginTop:2,opacity:.7}}>sin cobro</div>}
                  </button>
                ))}
              </div>
            </div>

            {/* Botón siguiente */}
            <button className="btn" onClick={()=>{btn();
              if(metodoPago==="Efectivo"&&!esCortes) { setPaso(2); }
              else onConfirm({montoRecibido:null,cambio:null,propina:0});
            }} style={{width:"100%",background:esCortes?"linear-gradient(135deg,#7C3AED,#A78BFA)":ORANGE,color:"white",borderRadius:16,padding:18,fontSize:17,fontWeight:900,letterSpacing:".06em",textTransform:"uppercase",marginBottom:10}}>
              {metodoPago==="Efectivo"&&!esCortes ? "Siguiente →" : esCortes ? "🎁 Registrar cortesía" : `✓ Confirmar — ${fmt(total)}`}
            </button>
          </>
        )}

        {paso === 2 && metodoPago === "Efectivo" && (
          <>
            <div style={{marginBottom:14,background:"rgba(0,0,0,.22)",borderRadius:14,padding:14}}>
              <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"rgba(255,255,255,.5)",marginBottom:8}}>¿CON CUÁNTO PAGÓ?</div>
              <button className="btn" onClick={()=>{btn();setMontoRecibido(String(total));}}
                style={{width:"100%",padding:"14px 16px",borderRadius:12,fontWeight:900,fontSize:16,border:"2px solid",
                  borderColor:Number(montoRecibido)===total?ORANGE:"rgba(230,104,50,.55)",
                  background:Number(montoRecibido)===total?ORANGE:"rgba(230,104,50,.18)",
                  color:"white",fontFamily:"'Archivo Black',sans-serif",letterSpacing:".04em",marginBottom:10,textTransform:"uppercase"}}>
                ✓ Pago exacto — {fmt(total)}
              </button>
              {[50,100,200,500,1000].filter(v=>v>total).length>0&&(
                <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:6,marginBottom:10}}>
                  {[50,100,200,500,1000].filter(v=>v>total).map(v=>(
                    <button key={v} className="btn" onClick={()=>{btn();setMontoRecibido(String(v));}}
                      style={{padding:"10px 4px",borderRadius:10,fontWeight:900,fontSize:13,border:"2px solid",
                        borderColor:Number(montoRecibido)===v?ORANGE:"rgba(255,255,255,.18)",
                        background:Number(montoRecibido)===v?"rgba(230,104,50,.18)":"rgba(255,255,255,.05)",
                        color:Number(montoRecibido)===v?ORANGE:"rgba(255,255,255,.85)",fontFamily:"'Archivo Black',sans-serif"}}>
                      ${v}
                    </button>
                  ))}
                </div>
              )}
              <div style={{display:"flex",alignItems:"center",gap:6,background:"rgba(255,255,255,.05)",borderRadius:12,border:"1.5px solid rgba(255,255,255,.18)",padding:"4px 14px",marginBottom:10}}>
                <span className="display" style={{fontSize:22,color:"rgba(255,255,255,.4)"}}>$</span>
                <input type="number" placeholder="otro monto..." value={montoRecibido} onChange={e=>setMontoRecibido(e.target.value)}
                  style={{flex:1,background:"transparent",border:"none",outline:"none",fontFamily:"'Archivo Black',sans-serif",fontSize:24,color:"white",padding:"8px 0"}}/>
              </div>
              {cambio!==null&&(
                <div style={{padding:"14px 16px",borderRadius:12,background:cambio===0?"rgba(34,197,94,.18)":"rgba(230,104,50,.18)",border:`1px solid ${cambio===0?"#22C55E":ORANGE}`,display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
                  <span className="display" style={{fontSize:13,color:cambio===0?"#4ADE80":ORANGE}}>{cambio===0?"PAGO EXACTO":"CAMBIO"}</span>
                  <span className="display" style={{fontSize:32,color:cambio===0?"#4ADE80":ORANGE,lineHeight:1}}>{fmt(cambio)}</span>
                </div>
              )}
              {montoRecibido!==""&&Number(montoRecibido)<total&&(
                <div style={{padding:"10px 14px",borderRadius:10,background:"rgba(230,104,50,.12)",fontSize:13,color:ORANGE,fontWeight:700,textAlign:"center"}}>⚠️ Falta {fmt(total-Number(montoRecibido))}</div>
              )}
              {cambio!==null&&(
                <div style={{marginTop:10,paddingTop:10,borderTop:"1px solid rgba(255,255,255,.1)"}}>
                  <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"rgba(255,255,255,.5)",marginBottom:6}}>¿DEJÓ PROPINA? (opcional)</div>
                  <div style={{display:"flex",alignItems:"center",gap:6,background:"rgba(255,255,255,.05)",borderRadius:12,border:"1.5px solid rgba(255,255,255,.18)",padding:"4px 14px"}}>
                    <span className="display" style={{fontSize:18,color:"rgba(255,255,255,.4)"}}>$</span>
                    <input type="number" placeholder="0" value={propina} onChange={e=>setPropina(e.target.value)}
                      style={{flex:1,background:"transparent",border:"none",outline:"none",fontFamily:"'Archivo Black',sans-serif",fontSize:20,color:"white",padding:"6px 0"}}/>
                  </div>
                </div>
              )}
            </div>
            {(() => {
              const montoValido = montoRecibido !== "" && Number(montoRecibido) >= total;
              return (
                <button className="btn" disabled={!montoValido} onClick={()=>onConfirm({montoRecibido:montoRecibido===""?null:Number(montoRecibido),cambio,propina:propina===""?0:Number(propina)})}
                  style={{width:"100%",background:montoValido?ORANGE:"rgba(255,255,255,.15)",color:montoValido?"white":"rgba(255,255,255,.4)",borderRadius:16,padding:18,fontSize:17,fontWeight:900,letterSpacing:".06em",textTransform:"uppercase",marginBottom:10}}>
                  {montoValido ? ("✓ Confirmar — " + fmt(total)) : "Ingresa el monto recibido"}
                </button>
              );
            })()}
          </>
        )}

        {!confirmCancel ? (
          <button className="btn" onClick={()=>{ btn(); setConfirmCancel(true); }}
            style={{width:"100%",background:"none",color:"rgba(255,255,255,.4)",fontSize:13,padding:8,fontFamily:"'Instrument Serif',serif",fontStyle:"italic"}}>
            Cancelar todo
          </button>
        ) : (
          <div style={{background:"rgba(230,104,50,.15)",border:`1px solid ${ORANGE}`,borderRadius:14,padding:14,textAlign:"center"}}>
            <div className="display" style={{fontSize:14,color:"white",marginBottom:4}}>¿CANCELAR EL PEDIDO?</div>
            <div className="serif-it" style={{fontSize:13,color:"rgba(255,255,255,.6)",marginBottom:12}}>Se perderán todos los items</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
              <button className="btn" onClick={()=>{ btn(); setConfirmCancel(false); }}
                style={{background:"rgba(255,255,255,.1)",color:"white",borderRadius:10,padding:12,fontWeight:800,fontSize:13}}>
                No, volver
              </button>
              <button className="btn" onClick={()=>{ btn(); onCancel(); }}
                style={{background:ORANGE,color:"white",borderRadius:10,padding:12,fontWeight:900,fontSize:13}}>
                Sí, cancelar
              </button>
            </div>
          </div>
        )}
        {/* Modal de confirmación en la misma pantalla */}
      </div>
    </div>
  );
}

// ITEM EDITOR
function ItemEditor({ productos, item, initialProd, onSave, onClose, btn, topSabores: topSaboresProp, toppingsConfig: toppingsConfigProp, saboresNat: sabNatProp, saboresAgua: sabAguaProp }) {
  const topSabores = topSaboresProp || [];
  const toppingsConfig = toppingsConfigProp || TOPPINGS_DEFAULT;
  const saboresNaturales = sabNatProp || SABORES_NATURALES;
  const saboresDeAgua = sabAguaProp || SABORES_AGUA;
  // Detectar categoría automática según los sabores seleccionados
  const [sabores, setSabores] = useState(item?.sabores || []);
  const [cucharon, setCucharon] = useState(item?.cucharon || false);
  const [notas, setNotas] = useState(item?.notas || "");
  const [toppings, setToppings] = useState(item?.toppings || { chamoy: false, tajin: false, crema: false });
  const togTopping = (k) => { btn("check"); setToppings(prev => ({ ...prev, [k]: !prev[k] })); };

  // Auto-detectar categoría por sabores seleccionados
  const categoriaSabores = sabores.length > 0
    ? (sabores.some(s => saboresDeAgua.some(x=>(x?.nombre||x)===s)) ? "agua" : "natural")
    : null;

  // Filtrar productos compatibles con los sabores elegidos
  const productosFiltrados = categoriaSabores
    ? productos.filter(p => p.categoria === categoriaSabores)
    : productos;

  const defaultProd = item?.producto || initialProd || productosFiltrados[0] || productos[0];
  const [prod, setProd] = useState(defaultProd);

  // Si cambian sabores y el producto actual ya no es compatible, ajustar
  useEffect(() => {
    if (categoriaSabores && prod.categoria !== categoriaSabores) {
      const compat = productos.find(p => p.categoria === categoriaSabores);
      if (compat) setProd(compat);
    }
  }, [categoriaSabores]);

  const toggleSabor = (s) => {
    btn("check");
    const esAgua = saboresDeAgua.some(x => (x?.nombre||x) === s);
    const esNatural = saboresNaturales.some(x => (x?.nombre||x) === s);
    if (sabores.includes(s)) {
      setSabores(sabores.filter(x => x !== s));
    } else {
      const hayAgua = sabores.some(x => saboresDeAgua.some(o=>(o?.nombre||o)===x));
      const hayNatural = sabores.some(x => saboresNaturales.some(o=>(o?.nombre||o)===x));
      if ((esAgua && hayNatural) || (esNatural && hayAgua)) return;
      setSabores([...sabores, s]);
    }
  };

  const precio = calcItemTotal({ tipo:"raspa", producto:prod, sabores, cucharon });
  const extraInfo = sabores.length === 0 ? "elige al menos 1"
    : sabores.length === 1 ? "porción completa"
    : sabores.length === 2 ? "½ porción c/u"
    : `${sabores.length} sabores +$${(sabores.length-2)*(prod.categoria==="agua"?EXTRA_SABOR_AGUA:EXTRA_SABOR_PRECIO)}`;

  return (
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.7)",zIndex:100,display:"flex",alignItems:"flex-end",justifyContent:"center"}}>
      <div style={{background:CREMA,borderRadius:"24px 24px 0 0",width:"100%",padding:"22px 18px 36px",maxHeight:"92vh",overflowY:"auto",maxWidth:700,color:TEXT_DARK}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
          <div className="display" style={{fontSize:18,letterSpacing:".02em"}}>NUEVA RASPA</div>
          <button className="btn" onClick={onClose} style={{background:CREMA_DARK,color:TEXT_DARK,borderRadius:8,padding:"6px 12px",fontWeight:700}}>✕</button>
        </div>

        {/* PASO 1: Sabores PRIMERO */}
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8,marginTop:12}}>
          <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:TEXT_MUTED}}>1. SABORES</div>
          <div className="serif-it" style={{fontSize:14,color:sabores.length>2?"#7C3AED":sabores.length>0?ORANGE:TEXT_MUTED}}>{extraInfo}</div>
        </div>

        {/* Top 3 sabores */}
        {topSabores.length > 0 && (() => {
          const topRel = topSabores.filter(s => !categoriaSabores || (categoriaSabores==="agua" ? saboresDeAgua.some(x=>(x?.nombre||x)===s) : saboresNaturales.some(x=>(x?.nombre||x)===s)));
          if (topRel.length === 0) return null;
          return (
            <>
              <div style={{fontSize:10,fontWeight:700,letterSpacing:".08em",color:ORANGE,marginBottom:5,textTransform:"uppercase"}}>🔥 Más pedidos</div>
              <div style={{display:"grid",gridTemplateColumns:`repeat(${topRel.length},1fr)`,gap:7,marginBottom:10}}>
                {topRel.map(s => (
                  <button key={s} className="btn" onClick={()=>toggleSabor(s)}
                    style={{padding:"12px 6px",borderRadius:11,fontSize:13,fontWeight:800,textAlign:"center",border:"2px solid",
                      borderColor:sabores.includes(s)?ORANGE:CREMA_DARK,background:sabores.includes(s)?"rgba(230,104,50,.18)":"#FFF8E8",
                      color:sabores.includes(s)?ORANGE_DARK:TEXT_DARK}}>
                    {s}
                  </button>
                ))}
              </div>
            </>
          );
        })()}

        {/* Naturales */}
        <div style={{fontSize:10,fontWeight:700,letterSpacing:".08em",color:TEXT_MUTED,marginBottom:5}}>NATURALES</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:6,marginBottom:10}}>
          {saboresNaturales.map(sObj => {
            const s = sObj?.nombre || sObj;
            const emoji = sObj?.emoji || "";
            const disabled = categoriaSabores === "agua";
            return (
              <button key={s} className="btn" onClick={()=>!disabled && toggleSabor(s)}
                style={{padding:"10px 4px",borderRadius:10,fontWeight:700,textAlign:"center",border:"2px solid",
                  borderColor:sabores.includes(s)?ORANGE:CREMA_DARK,
                  background:sabores.includes(s)?"rgba(230,104,50,.12)":disabled?"#F5F5F5":"white",
                  color:sabores.includes(s)?ORANGE_DARK:disabled?"#CCC":TEXT_DARK,
                  opacity:disabled?0.4:1}}>
                {emoji && <div style={{fontSize:18,marginBottom:2}}>{emoji}</div>}
                <div style={{fontSize:11,fontWeight:700}}>{s}</div>
              </button>
            );
          })}
        </div>

        {/* Agua */}
        <div style={{fontSize:10,fontWeight:700,letterSpacing:".08em",color:TEXT_MUTED,marginBottom:5}}>AGUA</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:6,marginBottom:16}}>
          {saboresDeAgua.map(sObj => {
            const s = sObj?.nombre || sObj;
            const emoji = sObj?.emoji || "";
            const disabled = categoriaSabores === "natural";
            return (
              <button key={s} className="btn" onClick={()=>!disabled && toggleSabor(s)}
                style={{padding:"10px 4px",borderRadius:10,fontWeight:700,textAlign:"center",border:"2px solid",
                  borderColor:sabores.includes(s)?ORANGE:CREMA_DARK,
                  background:sabores.includes(s)?"rgba(230,104,50,.12)":disabled?"#F5F5F5":"white",
                  color:sabores.includes(s)?ORANGE_DARK:disabled?"#CCC":TEXT_DARK,
                  opacity:disabled?0.4:1}}>
                {emoji && <div style={{fontSize:18,marginBottom:2}}>{emoji}</div>}
                <div style={{fontSize:11,fontWeight:700}}>{s}</div>
              </button>
            );
          })}
        </div>

        {/* PASO 2: Tamaño */}
        <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:TEXT_MUTED,marginBottom:8}}>2. TAMAÑO</div>
        {sabores.length === 0 ? (
          <div style={{padding:"18px",borderRadius:12,background:"rgba(0,0,0,.08)",textAlign:"center",marginBottom:14}}>
            <div className="serif-it" style={{fontSize:15,color:TEXT_MUTED}}>Primero elige un sabor arriba</div>
          </div>
        ) : (
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:8,marginBottom:14}}>
            {productosFiltrados.map(p => (
              <button key={p.id} className="btn" onClick={()=>{btn();setProd(p);}}
                style={{padding:"18px 12px",borderRadius:12,fontWeight:800,border:"2px solid",
                  borderColor:prod.id===p.id?ORANGE:CREMA_DARK,background:prod.id===p.id?"rgba(230,104,50,.12)":"white",
                  color:TEXT_DARK,textAlign:"center"}}>
                <div className="display" style={{fontSize:24,letterSpacing:"-.01em"}}>{p.nombre.split(" ").pop().toUpperCase()}</div>
                <div className="display" style={{fontSize:30,color:ORANGE,marginTop:4}}>${p.precio}</div>
              </button>
            ))}
          </div>
        )}



        <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:TEXT_MUTED,marginBottom:6}}>TOPPINGS (sin costo)</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:7,marginBottom:14}}>
          {toppingsConfig.map(tc => (
            <button key={tc.id} className="btn" onClick={()=>togTopping(tc.id)}
              style={{padding:"10px 4px",borderRadius:11,fontSize:12,fontWeight:800,textAlign:"center",border:"2px solid",
                borderColor:toppings[tc.id]?ORANGE:CREMA_DARK,background:toppings[tc.id]?"rgba(234,91,29,.12)":"white",color:toppings[tc.id]?ORANGE_DARK:TEXT_DARK}}>
              <div style={{fontSize:18}}>{tc.emoji}</div>{tc.nombre}
            </button>
          ))}
        </div>

        <div style={{marginBottom:14}}>
          <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:TEXT_MUTED,marginBottom:6}}>📝 NOTAS (opcional)</div>
          <textarea className="textarea-light" rows={2} placeholder="Ej: mango abajo, fresa arriba. Sin chile..." value={notas} onChange={e=>setNotas(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();e.target.blur();}}}/>
        </div>

        <button className="btn" disabled={sabores.length===0} onClick={()=>onSave({tipo:"raspa", producto:prod, sabores, cucharon, toppings, notas:notas.trim()})}
          style={{width:"100%",background:sabores.length>0?ORANGE:CREMA_DARK,color:sabores.length>0?"white":TEXT_MUTED,borderRadius:14,padding:15,fontSize:16,fontWeight:900,letterSpacing:".05em",textTransform:"uppercase"}}>
          {sabores.length===0?"Selecciona un sabor":`✓ Agregar — ${fmt(precio)}`}
        </button>
      </div>
    </div>
  );
}

// VENTA LIBRE MODAL
function VentaLibreModal({ preciosLibres, ventasLibres, item, onSave, onClose, btn }) {
  const _ventasLibres = ventasLibres || [];
  const [descripcion, setDescripcion] = useState(item?.descripcion || "");
  const [precio, setPrecio] = useState(item?.precio !== undefined ? String(item.precio) : "");
  const [notas, setNotas] = useState(item?.notas || "");
  const [cantidad, setCantidad] = useState(item?.cantidad || 1);
  const [itemPredefinido, setItemPredefinido] = useState(null); // item predefinido seleccionado
  const valido = descripcion.trim() && precio !== "" && Number(precio) >= 0;

  const seleccionarPredefinido = (vl) => {
    btn("check");
    setItemPredefinido(vl.id);
    setDescripcion(vl.nombre);
    if (vl.precio) setPrecio(String(vl.precio));
  };

  const guardar = () => {
    if (!valido) return;
    // Si cantidad > 1, guardar múltiples items
    const baseItem = { tipo:"especial", descripcion:descripcion.trim(), precio:Number(precio), notas:notas.trim() };
    onSave(baseItem, cantidad);
  };

  return (
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.7)",zIndex:100,display:"flex",alignItems:"flex-end",justifyContent:"center"}}>
      <div style={{background:CREMA,borderRadius:"24px 24px 0 0",width:"100%",padding:"22px 18px 36px",maxHeight:"92vh",overflowY:"auto",maxWidth:700,color:TEXT_DARK}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
          <div className="display" style={{fontSize:18,letterSpacing:".02em"}}>✏️ VENTA LIBRE</div>
          <button className="btn" onClick={onClose} style={{background:CREMA_DARK,color:TEXT_DARK,borderRadius:8,padding:"6px 12px",fontWeight:700}}>✕</button>
        </div>

        {/* Items predefinidos */}
        {_ventasLibres.filter(vl => vl.nombre !== "Venta libre").length > 0 && (
          <div style={{marginBottom:14}}>
            <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:TEXT_MUTED,marginBottom:8,textTransform:"uppercase"}}>Accesos rápidos</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:8}}>
              {_ventasLibres.filter(vl => vl.nombre !== "Venta libre").map(vl => (
                <button key={vl.id} className="btn" onClick={()=>seleccionarPredefinido(vl)}
                  style={{padding:"12px 14px",borderRadius:12,fontWeight:800,border:"2px solid",textAlign:"left",display:"flex",alignItems:"center",gap:10,
                    borderColor:itemPredefinido===vl.id?ORANGE:CREMA_DARK,
                    background:itemPredefinido===vl.id?"rgba(230,104,50,.12)":"white",
                    color:TEXT_DARK}}>
                  <span style={{fontSize:22}}>{vl.emoji}</span>
                  <div>
                    <div className="display" style={{fontSize:13,color:itemPredefinido===vl.id?ORANGE:TEXT_DARK}}>{vl.nombre.toUpperCase()}</div>
                    {vl.precio && <div className="display" style={{fontSize:16,color:ORANGE}}>${vl.precio}</div>}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Descripción */}
        <div style={{marginBottom:12}}>
          <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:TEXT_MUTED,marginBottom:6,textTransform:"uppercase"}}>¿Qué es?</div>
          <input className="input-light" placeholder="Ej: Cucharón extra, vaso de hielo..." value={descripcion} onChange={e=>{setDescripcion(e.target.value);setItemPredefinido(null);}}/>
        </div>

        {/* Precios rápidos */}
        <div style={{marginBottom:12}}>
          <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:TEXT_MUTED,marginBottom:6,textTransform:"uppercase"}}>Precio</div>
          <div style={{display:"grid",gridTemplateColumns:`repeat(${Math.min(preciosLibres.length,5)},1fr)`,gap:6,marginBottom:8}}>
            {preciosLibres.map(p => (
              <button key={p} className="btn" onClick={()=>{btn();setPrecio(String(p));}}
                style={{padding:"10px 4px",borderRadius:10,fontWeight:900,fontSize:15,border:"2px solid",
                  borderColor:Number(precio)===p?ORANGE:CREMA_DARK,
                  background:Number(precio)===p?"rgba(234,91,29,.12)":"white",
                  color:Number(precio)===p?ORANGE:TEXT_DARK,fontFamily:"'Archivo Black',sans-serif"}}>
                ${p}
              </button>
            ))}
          </div>
          <div style={{display:"flex",alignItems:"center",gap:6,background:"white",borderRadius:12,border:`1.5px solid ${CREMA_DARK}`,padding:"4px 14px"}}>
            <span className="display" style={{fontSize:24,color:ORANGE}}>$</span>
            <input type="number" placeholder="otro precio..." value={precio} onChange={e=>setPrecio(e.target.value)}
              style={{flex:1,background:"transparent",border:"none",outline:"none",fontFamily:"'Archivo Black',sans-serif",fontSize:28,color:TEXT_DARK,padding:"8px 0"}}/>
          </div>
        </div>

        {/* Cantidad tipo carrito */}
        <div style={{marginBottom:12}}>
          <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:TEXT_MUTED,marginBottom:8,textTransform:"uppercase"}}>Cantidad</div>
          <div style={{display:"flex",alignItems:"center",gap:14}}>
            <button className="btn" onClick={()=>{btn();setCantidad(Math.max(1,cantidad-1));}}
              style={{width:44,height:44,borderRadius:12,background:CREMA_DARK,color:TEXT_DARK,fontSize:22,fontWeight:900,border:"none",display:"flex",alignItems:"center",justifyContent:"center"}}>−</button>
            <div className="display" style={{fontSize:36,color:ORANGE,flex:1,textAlign:"center",lineHeight:1}}>{cantidad}</div>
            <button className="btn" onClick={()=>{btn();setCantidad(cantidad+1);}}
              style={{width:44,height:44,borderRadius:12,background:ORANGE,color:"white",fontSize:22,fontWeight:900,border:"none",display:"flex",alignItems:"center",justifyContent:"center"}}>+</button>
          </div>
          {cantidad > 1 && precio && (
            <div className="serif-it" style={{fontSize:14,color:TEXT_MUTED,textAlign:"center",marginTop:6}}>
              {cantidad} × {fmt(Number(precio))} = <span style={{color:ORANGE,fontWeight:700}}>{fmt(cantidad*Number(precio))}</span>
            </div>
          )}
        </div>

        <div style={{marginBottom:16}}>
          <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:TEXT_MUTED,marginBottom:6,textTransform:"uppercase"}}>📝 Notas (opcional)</div>
          <textarea className="textarea-light" rows={2} placeholder="Cualquier indicación..." value={notas} onChange={e=>setNotas(e.target.value)}/>
        </div>

        <button className="btn" disabled={!valido} onClick={guardar}
          style={{width:"100%",background:valido?ORANGE:CREMA_DARK,color:valido?"white":TEXT_MUTED,borderRadius:14,padding:15,fontSize:16,fontWeight:900,letterSpacing:".05em",textTransform:"uppercase"}}>
          {valido ? (cantidad>1 ? `✓ Agregar ${cantidad}x — ${fmt(cantidad*Number(precio))}` : `✓ Agregar — ${fmt(Number(precio))}`) : "Completa los campos"}
        </button>
      </div>
    </div>
  );
}

// ─── COLA TAB ─────────────────────────────────────────────────────────────────
function ColaTab({ enCola, actualizarPedido, btn, variant: variantProp, requirePin, showSaved, productos: productosProp }) {
  const variant = variantProp || "dark";
  const productos = productosProp || [];
  const [confirmId, setConfirmId] = useState(null);
  const [editandoId, setEditandoId] = useState(null); // id pedido a editar
  const [editandoItemIdx, setEditandoItemIdx] = useState(null); // índice del item
  const isLight = variant === "light";

  const colors = isLight
    ? { text:TEXT_DARK, muted:TEXT_MUTED, card:"white", cardSig:"white", border:CREMA_DARK, borderSig:ORANGE, sig:ORANGE, divider:CREMA_DARK }
    : { text:"white", muted:"rgba(255,255,255,.6)", card:"rgba(255,255,255,.04)", cardSig:"rgba(234,91,29,.12)", border:"rgba(255,255,255,.14)", borderSig:ORANGE, sig:ORANGE, divider:"rgba(255,255,255,.1)" };

  const toggleHecha = (pedidoId, itemIdx) => {
    btn("check");
    const pedido = enCola.find(p => p.id === pedidoId);
    if (!pedido) return;
    const newItems = pedido.items.map((it,i) => i === itemIdx ? { ...it, hecha:!it.hecha } : it);
    actualizarPedido(pedidoId, { items:newItems });
  };

  if (enCola.length === 0) return (
    <div style={{textAlign:"center",padding:"70px 0",color:colors.muted}}>
      <div style={{fontSize:60,marginBottom:14,opacity:.4}}>✅</div>
      <div className="display" style={{fontSize:22,color:colors.text,letterSpacing:".02em"}}>COLA VACÍA</div>
      <div className="serif-it" style={{fontSize:16,marginTop:6}}>Todos los pedidos entregados</div>
    </div>
  );

  return (
    <div className="slide">
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:18}}>
        <div>
          <div className="display" style={{fontSize:34,color:colors.text,letterSpacing:"-.02em",lineHeight:1}}>COLA VIVA</div>
          <div className="serif-it" style={{fontSize:15,color:colors.muted,marginTop:4}}>Check cada raspa cuando sale de la barra</div>
        </div>
        <div style={{background:ORANGE,color:"white",borderRadius:20,padding:"6px 14px",fontWeight:900,fontSize:13,letterSpacing:".05em"}}>
          ● {enCola.length} ACTIVO{enCola.length!==1?"S":""}
        </div>
      </div>

      {enCola.map((p, idx) => {
        const totalI = p.items.reduce((s, it) => s + (it.cantidad || 1), 0);
        const hechas = p.items.reduce((s, it) => {
          const cant = it.cantidad || 1;
          let n = it.hecha ? 1 : 0;
          for (let ci = 1; ci < cant; ci++) { if (it[`hecha_${ci}`]) n++; }
          return s + n;
        }, 0);
        const todasHechas = hechas === totalI;
        const esPrimero = idx === 0;
        return (
          <div key={p.id} style={{marginBottom:14,borderRadius:16,border:`2px solid ${esPrimero?colors.borderSig:colors.border}`,background:esPrimero?colors.cardSig:colors.card,overflow:"hidden"}}>
            <div style={{padding:"14px 16px 12px",borderBottom:`1px solid ${colors.divider}`}}>
              <div style={{display:"flex",alignItems:"flex-start",gap:14}}>
                <div className="display" style={{fontSize:38,color:esPrimero?colors.sig:colors.text,lineHeight:.85,letterSpacing:"-.03em",flexShrink:0}}>
                  #{padNum(p.numero || 0)}
                </div>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
                    {esPrimero && <span style={{background:ORANGE,color:"white",borderRadius:5,padding:"2px 8px",fontSize:10,fontWeight:900,letterSpacing:".08em"}}>SIGUIENTE</span>}
                    {p.esCortes && <span style={{background:"#7C3AED",color:"white",borderRadius:5,padding:"2px 8px",fontSize:10,fontWeight:900,letterSpacing:".08em"}}>🎁 CORTESÍA</span>}
                    {!p.pagado && !p.esCortes && (
                      <span style={{background:"rgba(234,91,29,.18)",color:ORANGE_DARK,borderRadius:5,padding:"2px 8px",fontSize:10,fontWeight:900,letterSpacing:".08em",border:`1px solid ${ORANGE}`}}>⏳ SIN PAGAR</span>
                    )}
                  </div>
                  <div className="display" style={{fontSize:18,color:colors.text,marginTop:4,letterSpacing:".01em"}}>{(p.cliente||"SIN NOMBRE").toUpperCase()}</div>
                  <div className="serif-it" style={{fontSize:15,color:colors.muted,marginTop:1}}>
                    🕐 {fmtTime(p.fecha)} · {p.cajero||"?"} · {p.metodoPago}
                  </div>
                </div>
                <div className="display" style={{fontSize:24,color:p.esCortes?"#A78BFA":ORANGE,flexShrink:0,lineHeight:1,letterSpacing:"-.01em"}}>
                  {p.esCortes ? "🎁" : fmt(p.total)}
                </div>
              </div>
              <div style={{marginTop:10}}>
                <div style={{height:4,background:isLight?CREMA_DARK:"rgba(255,255,255,.1)",borderRadius:2}}>
                  <div style={{height:"100%",width:`${totalI>0?(hechas/totalI)*100:0}%`,background:todasHechas?"#22C55E":ORANGE,borderRadius:2,transition:"width .3s"}}/>
                </div>
                <div style={{display:"flex",justifyContent:"space-between",fontSize:11,marginTop:5,color:todasHechas?"#22C55E":colors.muted,fontWeight:700,letterSpacing:".04em",textTransform:"uppercase"}}>
                  <span>{todasHechas?"✓ Todas listas":"En preparación"}</span>
                  <span>{hechas}/{totalI}</span>
                </div>
              </div>
            </div>

            <div style={{padding:"6px 16px"}}>
              {p.items.flatMap((it,i) => {
                const isEsp = it.tipo === "especial";
                const cant = it.cantidad || 1;
                // Expandir: si cantidad > 1, mostrar N checkboxes independientes
                return Array.from({length: cant}, (_,ci) => {
                  const subKey = `${i}_${ci}`;
                  const hechaKey = ci === 0 ? "hecha" : `hecha_${ci}`;
                  const estaHecha = ci === 0 ? it.hecha : it[hechaKey];
                  const toggleEsta = () => {
                    btn("check");
                    const pedido = enCola.find(x => x.id === p.id);
                    if (!pedido) return;
                    const newItems = pedido.items.map((x, idx) => {
                      if (idx !== i) return x;
                      if (ci === 0) return { ...x, hecha: !x.hecha };
                      return { ...x, [hechaKey]: !x[hechaKey] };
                    });
                    actualizarPedido(p.id, { items: newItems });
                  };
                  return (
                    <button key={subKey} className="btn" onClick={toggleEsta}
                      style={{width:"100%",display:"flex",alignItems:"flex-start",gap:12,padding:"11px 0",borderBottom:`1px solid ${colors.divider}`,background:"none",textAlign:"left"}}>
                      <div style={{width:26,height:26,borderRadius:8,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",
                        background:estaHecha?"#22C55E":(isLight?"white":"rgba(255,255,255,.06)"),
                        border:`2px solid ${estaHecha?"#22C55E":(isLight?CREMA_DARK:"rgba(255,255,255,.2)")}`,marginTop:1}}>
                        {estaHecha && <span style={{color:"white",fontSize:14,fontWeight:900}}>✓</span>}
                      </div>
                      <div style={{flex:1,opacity:estaHecha?.4:1,minWidth:0}}>
                        {isEsp ? (
                          <>
                            <div className="display" style={{fontSize:16,textDecoration:estaHecha?"line-through":"none",color:colors.text,letterSpacing:".01em"}}>
                              ✏️ {(it.descripcion||"VENTA LIBRE").toUpperCase()}
                              {cant > 1 && <span style={{fontSize:12,color:ORANGE,marginLeft:8}}>({ci+1}/{cant})</span>}
                            </div>
                            <div style={{display:"inline-block",marginTop:2,fontSize:9,fontWeight:800,letterSpacing:".1em",color:isLight?COBALT:"rgba(167,194,255,.9)",background:isLight?"rgba(30,63,170,.1)":"rgba(255,255,255,.06)",borderRadius:4,padding:"1px 6px",textTransform:"uppercase"}}>
                              Especial · {fmt(it.precio||0)}
                            </div>
                          </>
                        ) : (
                          <>
                            <div style={{fontSize:10,fontWeight:800,letterSpacing:".1em",color:colors.muted,textTransform:"uppercase",marginBottom:2}}>
                              {it.producto?.nombre?.split(" ").pop() || ""}
                              {it.cucharon && <span style={{color:ORANGE}}> · 🥄</span>}
                              {cant > 1 && <span style={{color:ORANGE,marginLeft:6}}>({ci+1}/{cant})</span>}
                            </div>
                            <div className="display" style={{fontSize:16,textDecoration:estaHecha?"line-through":"none",color:estaHecha?colors.muted:colors.text,letterSpacing:".01em",lineHeight:1.15}}>
                              {(it.sabores||[]).length > 0 ? it.sabores.join(" · ").toUpperCase() : "SIN SABOR"}
                            </div>
                            {toppingsLabel(it.toppings) && (
                              <div style={{fontSize:13,marginTop:3,fontWeight:700,color:isLight?"#9333EA":"#C084FC",letterSpacing:".02em"}}>{toppingsLabel(it.toppings, null, "full")}</div>
                            )}
                            {it.notas && <div className="serif-it" style={{fontSize:14,color:ORANGE,marginTop:3}}>📝 {it.notas}</div>}
                          </>
                        )}
                      </div>
                    </button>
                  );
                });
              })}
            </div>

            <div style={{padding:"10px 16px 14px",display:"flex",gap:8,flexWrap:"wrap"}}>
              <button className="btn" onClick={()=>{
                btn();
                // Si ya está pagado y es transferencia, pedir PIN para desmarcar (antifraude)
                const desmarcar = p.pagado && p.metodoPago === "Transferencia";
                if (desmarcar && requirePin) {
                  requirePin("Cambiar estado de pago", () => actualizarPedido(p.id,{pagado:!p.pagado}));
                } else {
                  actualizarPedido(p.id,{pagado:!p.pagado});
                  if(!p.pagado) showSaved && showSaved("Marcado como pagado");
                }
              }}
                style={{flex:1,minWidth:120,padding:"11px 6px",borderRadius:11,fontWeight:800,fontSize:12,letterSpacing:".05em",textTransform:"uppercase",border:"2px solid",
                  borderColor:p.pagado||p.esCortes?"#22C55E":ORANGE,
                  background:p.pagado||p.esCortes?"rgba(34,197,94,.12)":"rgba(230,104,50,.12)",
                  color:p.pagado||p.esCortes?"#15803D":ORANGE_DARK}}>
                {p.esCortes?"🎁 Cortesía":p.pagado?"✓ Pagado":"⏳ Marcar pagado"}
              </button>
              <button className="btn" onClick={()=>{btn();setConfirmId(p.id);}} disabled={!todasHechas}
                style={{flex:1,minWidth:120,padding:"11px 6px",borderRadius:11,fontWeight:900,fontSize:12,letterSpacing:".05em",textTransform:"uppercase",
                  background:todasHechas?ORANGE:(isLight?CREMA_DARK:"rgba(255,255,255,.06)"),color:todasHechas?"white":colors.muted,border:"none",opacity:todasHechas?1:.6}}>
                {todasHechas?"✓ Entregar":"Faltan raspas"}
              </button>
              <button className="btn" onClick={()=>{btn();setEditandoId(p.id);setEditandoItemIdx(0);}}
                style={{padding:"11px 12px",borderRadius:11,fontWeight:800,fontSize:11,letterSpacing:".05em",textTransform:"uppercase",
                  background:isLight?CREMA_DARK:"rgba(255,255,255,.08)",color:colors.text,border:`1px solid ${colors.border}`}}>
                ✏️ Editar
              </button>
              <button className="btn" onClick={()=>{
                btn();
                const fecha = new Date(p.fecha).toLocaleString("es-MX",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"});
                const lines = (p.items||[]).map(it => {
                  if (it.tipo === "especial") return `— ${it.descripcion} — ${fmt(it.precio||0)}`;
                  const sab = (it.sabores||[]).length > 0 ? ` (${it.sabores.join(", ")})` : "";
                  const cup = it.cucharon ? " + cucharón" : "";
                  return `— ${it.producto?.nombre}${sab}${cup}`;
                }).join("\n");
                const msg = `🍧 Rosy Raspados\nPedido #${padNum(p.numero||0)}\nCliente: ${p.cliente}\nFecha: ${fecha}\n\n${lines}\n\nTotal: ${fmt(p.total)}\nPagado con: ${p.metodoPago}\n\n¡Gracias por tu compra!`;
                const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                const url = isMobile ? `whatsapp://send?text=${encodeURIComponent(msg)}` : `https://wa.me/?text=${encodeURIComponent(msg)}`;
                window.open(url, "_blank");
              }}
                style={{padding:"11px 12px",borderRadius:11,fontWeight:800,fontSize:11,letterSpacing:".05em",textTransform:"uppercase",
                  background:"rgba(34,197,94,.15)",color:isLight?"#16A34A":"#4ADE80",border:`1px solid ${isLight?"rgba(34,197,94,.4)":"rgba(34,197,94,.35)"}`}}>
                📲 Ticket
              </button>
            </div>
          </div>
        );
      })}

      {/* Modal de edición de pedido en cola */}
      {editandoId && (() => {
        const pedido = enCola.find(x => x.id === editandoId);
        if (!pedido) return null;
        return (
          <EditarPedidoColaModal
            pedido={pedido}
            itemIdx={editandoItemIdx}
            productos={enCola.find(x=>x.id===editandoId)?.items?.map(it=>it.producto).filter(Boolean)||[]}
            onSave={(nuevosItems) => {
              btn("success");
              const nuevoTotal = calcPedidoTotal(nuevosItems, pedido.esCortes);
              actualizarPedido(editandoId, { items: nuevosItems, total: nuevoTotal });
              setEditandoId(null);
              showSaved && showSaved("Pedido actualizado");
            }}
            onClose={() => { btn(); setEditandoId(null); }}
            btn={btn}
          />
        );
      })()}

      {confirmId && (() => {
        const p = enCola.find(x => x.id === confirmId);
        if (!p) return null;
        return (
          <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.85)",zIndex:100,display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
            <div style={{background:CREMA,borderRadius:20,padding:"26px 22px",width:"100%",maxWidth:380,textAlign:"center",color:TEXT_DARK}}>
              <div style={{fontSize:48,marginBottom:10}}>🍧</div>
              <div className="display" style={{fontSize:20,marginBottom:4,letterSpacing:".02em"}}>¿ENTREGAR PEDIDO?</div>
              <div className="serif-it" style={{fontSize:15,color:TEXT_MUTED,marginBottom:18}}>{p.cliente} · {p.items.length} ítem{p.items.length!==1?"s":""}</div>
              {!p.pagado && !p.esCortes && (
                <div style={{background:"rgba(234,91,29,.14)",border:`1px solid ${ORANGE}`,borderRadius:12,padding:"12px",marginBottom:18,fontSize:13,color:ORANGE_DARK,fontWeight:600}}>⚠️ Aún no está pagado</div>
              )}
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
                <button className="btn" onClick={()=>{btn();setConfirmId(null);}} style={{background:CREMA_DARK,color:TEXT_DARK,borderRadius:12,padding:13,fontWeight:800,fontSize:14}}>Cancelar</button>
                <button className="btn" onClick={()=>{btn("success");actualizarPedido(confirmId,{entregado:true});setConfirmId(null);}} style={{background:ORANGE,color:"white",borderRadius:12,padding:13,fontWeight:900,fontSize:14}}>✓ Entregar</button>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}

// ─── VASOS TAB ────────────────────────────────────────────────────────────────
function VasosTab({ vasosExtra, agregarVasos, btn }) {
  const [cantidad, setCantidad] = useState(1);
  const [nota, setNota] = useState("");
  const [guardado, setGuardado] = useState(false);
  const hoy = vasosExtra.filter(v => localDateKey(v.fecha) === todayKey());
  const totalHoy = hoy.reduce((s,v) => s + v.cantidad, 0);
  const totalTotal = vasosExtra.reduce((s,v) => s + v.cantidad, 0);

  const registrar = () => {
    btn("success");
    agregarVasos(cantidad, nota.trim());
    setGuardado(true); setNota(""); setCantidad(1);
    setTimeout(() => setGuardado(false), 900);
  };

  return (
    <div className="slide">
      <div style={{marginBottom:18}}>
        <div className="display" style={{fontSize:34,color:"white",letterSpacing:"-.02em",lineHeight:1}}>VASOS EXTRA</div>
        <div className="serif-it" style={{fontSize:15,color:"rgba(255,255,255,.6)",marginTop:4}}>Vasos que repartes sin cobrar</div>
      </div>

      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:16}}>
        <div style={{background:"rgba(0,0,0,.22)",borderRadius:14,padding:"16px",textAlign:"center"}}>
          <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"rgba(255,255,255,.5)"}}>HOY</div>
          <div className="display" style={{fontSize:34,color:"#4FC3F7",lineHeight:1,marginTop:4}}>{totalHoy}</div>
          <div className="serif-it" style={{fontSize:15,color:"rgba(255,255,255,.5)"}}>vasos</div>
        </div>
        <div style={{background:"rgba(0,0,0,.22)",borderRadius:14,padding:"16px",textAlign:"center"}}>
          <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"rgba(255,255,255,.5)"}}>HISTÓRICO</div>
          <div className="display" style={{fontSize:34,color:"rgba(255,255,255,.7)",lineHeight:1,marginTop:4}}>{totalTotal}</div>
          <div className="serif-it" style={{fontSize:15,color:"rgba(255,255,255,.5)"}}>vasos totales</div>
        </div>
      </div>

      {guardado && <div className="pop" style={{background:"rgba(34,197,94,.18)",border:"1px solid rgba(34,197,94,.4)",borderRadius:14,padding:"12px",textAlign:"center",marginBottom:14,fontSize:14,fontWeight:800,color:"#4ADE80"}}>✓ Registrado</div>}

      <div style={{background:"rgba(0,0,0,.22)",borderRadius:14,padding:"18px",marginBottom:14}}>
        <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"rgba(255,255,255,.5)",marginBottom:12}}>REGISTRAR VASOS</div>
        <div style={{marginBottom:14}}>
          <div style={{fontSize:11,fontWeight:700,color:"rgba(255,255,255,.5)",marginBottom:8}}>CANTIDAD</div>
          <div style={{display:"flex",alignItems:"center",gap:14}}>
            <button className="btn" onClick={()=>{btn();setCantidad(Math.max(1,cantidad-1));}}
              style={{width:48,height:48,borderRadius:12,background:"rgba(255,255,255,.08)",color:"white",fontSize:24,fontWeight:900,border:"2px solid rgba(255,255,255,.18)"}}>−</button>
            <div className="display" style={{fontSize:44,color:"#4FC3F7",flex:1,textAlign:"center",lineHeight:1}}>{cantidad}</div>
            <button className="btn" onClick={()=>{btn();setCantidad(cantidad+1);}}
              style={{width:48,height:48,borderRadius:12,background:"rgba(255,255,255,.08)",color:"white",fontSize:24,fontWeight:900,border:"2px solid rgba(255,255,255,.18)"}}>+</button>
          </div>
        </div>
        <div style={{marginBottom:14}}>
          <div style={{fontSize:11,fontWeight:700,color:"rgba(255,255,255,.5)",marginBottom:6}}>NOTA (opcional)</div>
          <input className="input" placeholder="Ej: vaso roto, cliente lo pidió..." value={nota} onChange={e=>setNota(e.target.value)}/>
        </div>
        <button className="btn" onClick={registrar}
          style={{width:"100%",background:"#0EA5E9",color:"white",borderRadius:12,padding:14,fontSize:15,fontWeight:900,letterSpacing:".05em",textTransform:"uppercase"}}>
          + Registrar {cantidad} vaso{cantidad!==1?"s":""}
        </button>
      </div>

      {vasosExtra.length > 0 && (
        <div style={{background:"rgba(0,0,0,.22)",borderRadius:14,padding:"16px"}}>
          <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"rgba(255,255,255,.5)",marginBottom:12}}>HISTORIAL</div>
          <div style={{maxHeight:280,overflowY:"auto",display:"flex",flexDirection:"column",gap:6}}>
            {vasosExtra.slice(0,40).map(v => (
              <div key={v.id} style={{background:"rgba(255,255,255,.04)",borderRadius:10,padding:"10px 12px"}}>
                <div className="display" style={{fontSize:14,color:"#4FC3F7",letterSpacing:".02em"}}>🥤 {v.cantidad} VASO{v.cantidad!==1?"S":""}</div>
                {v.nota && <div className="serif-it" style={{fontSize:15,color:"rgba(255,255,255,.6)",marginTop:1}}>{v.nota}</div>}
                <div className="serif-it" style={{fontSize:14,color:"rgba(255,255,255,.4)",marginTop:1}}>{fmtDate(v.fecha)} {fmtTime(v.fecha)} · {v.cajero||"?"}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── REPORTES TAB ─────────────────────────────────────────────────────────────
function ReportesTab({ pedidos, actualizarPedido, vasosExtra, gastosCaja: gastosCajaProp, cierresSemana: cierresSemProp, btn, requirePin }) {
  const gastosCaja = gastosCajaProp || [];
  const cierresSemana = cierresSemProp || [];
  const [periodo, setPeriodo] = useState("hoy");
  const [busqueda, setBusqueda] = useState("");
  const [editPagoId, setEditPagoId] = useState(null);

  const filtrar = () => {
    const hoy = todayKey();
    let base = [...pedidos];
    if (periodo === "hoy") base = base.filter(v => v.fecha && localDateKey(v.fecha) === hoy);
    else if (periodo === "semana") {
      const d = new Date(); d.setDate(d.getDate()-7); d.setHours(0,0,0,0);
      base = base.filter(v => v.fecha && new Date(v.fecha) >= d);
    }
    else if (periodo === "mes") base = base.filter(v => v.fecha && v.fecha.startsWith(hoy.slice(0,7)));
    else if (periodo === "anio") base = base.filter(v => v.fecha && v.fecha.startsWith(hoy.slice(0,4)));
    // "todo" no filtra por fecha
    if (busqueda.trim()) {
      const b = busqueda.toLowerCase().trim();
      base = base.filter(v => (v.cliente||"").toLowerCase().includes(b) || (v.cajero||"").toLowerCase().includes(b));
    }
    return base;
  };

  const vf = filtrar();
  const cobrados = vf.filter(p => p.pagado && !p.esCortes);
  const cortes = vf.filter(p => p.esCortes);
  const sinPagar = vf.filter(p => !p.pagado && !p.esCortes);
  const total = cobrados.reduce((s,v) => s + v.total, 0);
  const ticketProm = cobrados.length ? total/cobrados.length : 0;

  const ventasTerminal = cobrados.filter(v => v.metodoPago === "Terminal");
  const totalTerminal = ventasTerminal.reduce((s,v) => s + v.total, 0);
  const comisionTotal = ventasTerminal.reduce((s,v) => s + comisionTerminal(v.total).total, 0);
  const netoTerminal = totalTerminal - comisionTotal;

  const byPago = METODOS_PAGO.filter(m => m !== "Cortesía").map(m => ({
    m, t: cobrados.filter(v => v.metodoPago === m).reduce((s,v) => s + v.total, 0),
    n: cobrados.filter(v => v.metodoPago === m).length
  }));

  const byCajero = {};
  cobrados.forEach(v => { const c = v.cajero||"?"; if (!byCajero[c]) byCajero[c] = {total:0,count:0}; byCajero[c].total += v.total; byCajero[c].count++; });
  const cajeroRank = Object.entries(byCajero).sort((a,b) => b[1].total - a[1].total);

  const allItems = vf.flatMap(v => v.items);
  const allRaspas = allItems.filter(it => it.tipo !== "especial");
  const allEspeciales = allItems.filter(it => it.tipo === "especial");
  const totalEspeciales = allEspeciales.reduce((s,it) => s + (it.precio||0), 0);

  const byProd = {};
  allRaspas.forEach(it => { const k = it.producto.nombre; if (!byProd[k]) byProd[k] = {count:0,total:0,emoji:it.producto.emoji}; byProd[k].count++; byProd[k].total += calcItemTotal(it); });
  const prodRank = Object.entries(byProd).sort((a,b) => b[1].count - a[1].count);

  const porciones = calcPorciones(allRaspas);
  const porcionRank = Object.entries(porciones).sort((a,b) => b[1] - a[1]);
  const maxPorc = porcionRank[0]?.[1] || 1;

  const conteoSabor = {};
  allRaspas.forEach(it => (it.sabores||[]).forEach(s => { conteoSabor[s] = (conteoSabor[s]||0) + 1; }));

  const combos = {};
  allRaspas.forEach(it => { if ((it.sabores||[]).length >= 2) { const k = [...it.sabores].sort().join(" + "); combos[k] = (combos[k]||0) + 1; } });
  const comboRank = Object.entries(combos).sort((a,b) => b[1] - a[1]).slice(0,5);

  const extraSabores = vf.reduce((s,v) => s + v.items.reduce((ss,it) => ss + (it.tipo==="especial"?0:Math.max(0,(it.sabores||[]).length-2)*EXTRA_SABOR_PRECIO), 0), 0);
  const extraCucharones = vf.reduce((s,v) => s + v.items.filter(it => it.cucharon).length * CUCHARON_PRECIO, 0);
  const numCucharones = vf.reduce((s,v) => s + v.items.filter(it => it.cucharon).length, 0);

  const byHora = {};
  vf.forEach(v => { const h = new Date(v.fecha).getHours(); byHora[h] = (byHora[h]||0) + 1; });
  const horaRank = Object.entries(byHora).sort((a,b) => b[1] - a[1]).slice(0,5);

  const vasosFiltro = vasosExtra.filter(v => periodo === "hoy" ? localDateKey(v.fecha) === todayKey() : true).reduce((s,v) => s + v.cantidad, 0);

  const editPedido = editPagoId ? vf.find(p => p.id === editPagoId) : null;

  return (
    <div className="slide">
      <div className="display" style={{fontSize:30,color:"white",letterSpacing:"-.02em",marginBottom:14}}>REPORTES</div>

      <div style={{display:"flex",gap:6,marginBottom:10,overflowX:"auto",paddingBottom:2}}>
        {[["hoy","Hoy"],["semana","7 días"],["mes","Mes"],["anio","Año"],["todo","Todo"]].map(([id,l]) => (
          <button key={id} className="btn" onClick={()=>{btn();setPeriodo(id);}}
            style={{flexShrink:0,padding:"8px 16px",borderRadius:20,fontWeight:800,fontSize:12,letterSpacing:".04em",textTransform:"uppercase",
              background:periodo===id?ORANGE:"rgba(255,255,255,.06)",color:periodo===id?"white":"rgba(255,255,255,.6)",
              border:periodo===id?"none":"1px solid rgba(255,255,255,.14)"}}>{l}</button>
        ))}
      </div>
      <input className="input" placeholder="🔍 Buscar cliente o cajero..." value={busqueda} onChange={e=>setBusqueda(e.target.value)} style={{marginBottom:14}}/>

      {/* Resumen rápido */}
      <div style={{background:ORANGE,borderRadius:14,padding:"18px 16px",marginBottom:10}}>
        <div style={{fontSize:10,fontWeight:800,letterSpacing:".1em",color:"rgba(255,255,255,.7)",textTransform:"uppercase",marginBottom:4}}>Total cobrado</div>
        <div className="display" style={{fontSize:38,color:"white",lineHeight:1,letterSpacing:"-.02em"}}>{fmtFull(total)}</div>
        <div className="serif-it" style={{fontSize:15,color:"rgba(255,255,255,.7)",marginTop:4}}>{cobrados.length} pedidos cobrados</div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:6,marginBottom:14}}>
        {[
          ["Ticket prom.",fmt(ticketProm),ORANGE],
          ["Raspas",allRaspas.length,"white"],
          ["Propinas",fmt(vf.reduce((s,p)=>s+(Number(p.propina)||0),0)),"#4ADE80"],
          ["Cortesías",vf.filter(p=>p.esCortes).length,"#A78BFA"],
        ].map(([l,v,c]) => (
          <div key={l} style={{background:"rgba(0,0,0,.22)",borderRadius:10,padding:"8px 10px",textAlign:"center"}}>
            <div style={{fontSize:9,letterSpacing:".08em",color:"rgba(255,255,255,.5)",fontWeight:700,marginBottom:2,textTransform:"uppercase"}}>{l}</div>
            <div className="display" style={{fontSize:16,color:c,lineHeight:1.1}}>{v}</div>
          </div>
        ))}
      </div>

      {sinPagar.length > 0 && (
        <div style={{background:"rgba(234,91,29,.1)",border:`1px solid ${ORANGE}`,borderRadius:14,padding:"14px",marginBottom:14}}>
          <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:ORANGE,marginBottom:10,textTransform:"uppercase"}}>⏳ PENDIENTES DE PAGO — {sinPagar.length}</div>
          {sinPagar.map(p => (
            <div key={p.id} style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8,padding:"10px 12px",background:"rgba(0,0,0,.22)",borderRadius:10}}>
              <div>
                <div className="display" style={{fontSize:13,letterSpacing:".02em"}}>{(p.cliente||"").toUpperCase()}</div>
                <div className="serif-it" style={{fontSize:15,color:"rgba(255,255,255,.5)"}}>{fmtDate(p.fecha)} {fmtTime(p.fecha)} · {p.metodoPago}</div>
              </div>
              <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:5}}>
                <div className="display" style={{fontSize:18,color:ORANGE}}>{fmt(p.total)}</div>
                <button className="btn" onClick={()=>{btn();setEditPagoId(p.id);}}
                  style={{background:"rgba(34,197,94,.18)",color:"#4ADE80",border:"1px solid rgba(34,197,94,.4)",borderRadius:8,padding:"5px 12px",fontSize:11,fontWeight:800,letterSpacing:".04em",textTransform:"uppercase"}}>
                  Marcar pagado
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cortes.length > 0 && (
        <div style={{background:"rgba(167,139,250,.08)",border:"1px solid rgba(167,139,250,.3)",borderRadius:14,padding:14,marginBottom:14}}>
          <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"#A78BFA",marginBottom:6,textTransform:"uppercase"}}>🎁 CORTESÍAS — {cortes.length} pedidos</div>
          {cortes.slice(0,8).map(p => (
            <div key={p.id} className="serif-it" style={{fontSize:15,color:"rgba(255,255,255,.6)",marginBottom:2}}>🎁 {p.cliente} · {fmtTime(p.fecha)}</div>
          ))}
        </div>
      )}

      {ventasTerminal.length > 0 && (
        <div style={{background:"rgba(234,91,29,.08)",border:`1px solid ${ORANGE}`,borderRadius:14,padding:14,marginBottom:14}}>
          <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:ORANGE,marginBottom:10,textTransform:"uppercase"}}>💳 COMISIÓN MERCADO PAGO</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8}}>
            {[["Ventas terminal",fmtFull(totalTerminal),"white"],["Comisión + IVA",`-${fmtFull(comisionTotal)}`,ORANGE],["Lo que recibes",fmtFull(netoTerminal),"#4ADE80"]].map(([l,v,c]) => (
              <div key={l} style={{textAlign:"center",padding:"10px 6px",background:"rgba(0,0,0,.22)",borderRadius:10}}>
                <div style={{fontSize:9,fontWeight:700,letterSpacing:".1em",color:"rgba(255,255,255,.5)",marginBottom:3}}>{l}</div>
                <div className="display" style={{fontSize:14,color:c,lineHeight:1.2}}>{v}</div>
              </div>
            ))}
          </div>
          <div className="serif-it" style={{fontSize:14,color:"rgba(255,255,255,.4)",marginTop:8,textAlign:"center"}}>{ventasTerminal.length} transacciones · 3.5% + 16% IVA sobre comisión</div>
        </div>
      )}

      <div style={{background:"rgba(0,0,0,.22)",borderRadius:14,padding:14,marginBottom:14}}>
        <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"rgba(255,255,255,.5)",marginBottom:10,textTransform:"uppercase"}}>💳 Por método de pago</div>
        {byPago.map(({m,t,n}) => (
          <div key={m} style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:7,fontSize:13}}>
            <span style={{fontWeight:700,color:"rgba(255,255,255,.85)"}}>{m==="Efectivo"?"💵":m==="Transferencia"?"📲":"💳"} {m}</span>
            <div><span className="display" style={{color:ORANGE,fontSize:16}}>{fmtFull(t)}</span><span className="serif-it" style={{fontSize:14,color:"rgba(255,255,255,.4)",marginLeft:6}}>{n} pedidos</span></div>
          </div>
        ))}
      </div>

      {cajeroRank.length > 0 && (
        <div style={{background:"rgba(0,0,0,.22)",borderRadius:14,padding:14,marginBottom:14}}>
          <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"rgba(255,255,255,.5)",marginBottom:10,textTransform:"uppercase"}}>👤 Ventas por cajero</div>
          {cajeroRank.map(([c,{total:t,count}]) => (
            <div key={c} style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:7,fontSize:13}}>
              <span style={{fontWeight:700}}>👤 {c}</span>
              <div><span className="display" style={{color:"#4FC3F7",fontSize:16}}>{fmtFull(t)}</span><span className="serif-it" style={{fontSize:14,color:"rgba(255,255,255,.4)",marginLeft:6}}>{count} pedidos</span></div>
            </div>
          ))}
        </div>
      )}

      {allEspeciales.length > 0 && (
        <div style={{background:"rgba(30,63,170,.18)",border:"1px solid rgba(30,63,170,.4)",borderRadius:14,padding:14,marginBottom:14}}>
          <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"#93B4FF",marginBottom:8,textTransform:"uppercase"}}>✏️ Ventas libres / especiales</div>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
            <span className="serif-it" style={{fontSize:14,color:"rgba(255,255,255,.7)"}}>{allEspeciales.length} ítems registrados</span>
            <span className="display" style={{fontSize:18,color:"#93B4FF"}}>{fmt(totalEspeciales)}</span>
          </div>
          {allEspeciales.slice(0,5).map((it,i) => (
            <div key={i} className="serif-it" style={{fontSize:14,color:"rgba(255,255,255,.6)",marginBottom:2}}>✏️ {it.descripcion} — {fmt(it.precio)}</div>
          ))}
        </div>
      )}

      <div style={{background:"rgba(0,0,0,.22)",borderRadius:14,padding:14,marginBottom:14}}>
        <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"rgba(255,255,255,.5)",marginBottom:10,textTransform:"uppercase"}}>⭐ Extras</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
          {[["Sabores extra",fmtFull(extraSabores),"#A78BFA"],["🥄 Cucharones",`${fmtFull(extraCucharones)} (${numCucharones} pzas)`,ORANGE]].map(([l,v,c]) => (
            <div key={l} style={{background:"rgba(255,255,255,.04)",borderRadius:10,padding:"10px",textAlign:"center"}}>
              <div style={{fontSize:11,color:c,fontWeight:700,marginBottom:3,letterSpacing:".04em",textTransform:"uppercase"}}>{l}</div>
              <div className="display" style={{fontSize:16,color:c,lineHeight:1}}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      {prodRank.length > 0 && (
        <div style={{background:"rgba(0,0,0,.22)",borderRadius:14,padding:14,marginBottom:14}}>
          <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"rgba(255,255,255,.5)",marginBottom:10,textTransform:"uppercase"}}>🏆 Productos top</div>
          {prodRank.map(([nombre,{count,total:t,emoji}],i) => (
            <div key={nombre} style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:7,fontSize:13}}>
              <span style={{fontWeight:700}}>{i===0?"🥇":i===1?"🥈":i===2?"🥉":`${i+1}.`} {emoji} {nombre}</span>
              <div><span className="display" style={{color:ORANGE,fontSize:16}}>{fmt(t)}</span><span className="serif-it" style={{fontSize:14,color:"rgba(255,255,255,.4)",marginLeft:6}}>{count}x</span></div>
            </div>
          ))}
        </div>
      )}

      {porcionRank.length > 0 && (
        <div style={{background:"rgba(34,197,94,.08)",border:"1px solid rgba(34,197,94,.25)",borderRadius:14,padding:14,marginBottom:14}}>
          <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"#4ADE80",marginBottom:4,textTransform:"uppercase"}}>🧪 Consumo real de mermelada</div>
          <div className="serif-it" style={{fontSize:14,color:"rgba(255,255,255,.5)",marginBottom:10}}>1 sabor=1.0 · 2 sabores=½ c/u · 3=⅓ c/u</div>
          {porcionRank.map(([s,n],i) => (
            <div key={s} style={{marginBottom:9}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:3}}>
                <span style={{fontSize:13,fontWeight:700,color:i<3?"#4ADE80":"rgba(255,255,255,.7)"}}>{i===0?"🥇":i===1?"🥈":i===2?"🥉":`${i+1}.`} {s}</span>
                <span className="display" style={{fontSize:14,color:"#4ADE80"}}>{n.toFixed(1)} porc.</span>
              </div>
              <div style={{height:5,background:"rgba(0,0,0,.3)",borderRadius:3}}>
                <div style={{height:"100%",width:`${(n/maxPorc)*100}%`,background:"#22C55E",borderRadius:3}}/>
              </div>
              <div className="serif-it" style={{fontSize:13,color:"rgba(255,255,255,.4)",marginTop:2}}>pedido {conteoSabor[s]||0}x · real {n.toFixed(2)} porciones</div>
            </div>
          ))}
        </div>
      )}

      {comboRank.length > 0 && (
        <div style={{background:"rgba(0,0,0,.22)",borderRadius:14,padding:14,marginBottom:14}}>
          <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"rgba(255,255,255,.5)",marginBottom:10,textTransform:"uppercase"}}>🔗 Combinaciones favoritas</div>
          {comboRank.map(([combo,n],i) => (
            <div key={combo} style={{display:"flex",justifyContent:"space-between",marginBottom:6,fontSize:13}}>
              <span style={{color:"rgba(255,255,255,.7)"}}>{i+1}. {combo}</span>
              <span style={{fontWeight:800,color:"#A78BFA"}}>{n}x</span>
            </div>
          ))}
        </div>
      )}

      {horaRank.length > 0 && (
        <div style={{background:"rgba(0,0,0,.22)",borderRadius:14,padding:14,marginBottom:14}}>
          <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"rgba(255,255,255,.5)",marginBottom:10,textTransform:"uppercase"}}>⏰ Horas pico</div>
          {horaRank.map(([h,n]) => (
            <div key={h} style={{display:"flex",justifyContent:"space-between",marginBottom:5,fontSize:13}}>
              <span style={{color:"rgba(255,255,255,.6)"}}>{String(h).padStart(2,"0")}:00 — {String(Number(h)+1).padStart(2,"0")}:00</span>
              <span style={{fontWeight:800,color:"#4FC3F7"}}>{n} pedidos</span>
            </div>
          ))}
        </div>
      )}

      {vf.length > 0 && (
        <div style={{background:"rgba(0,0,0,.22)",borderRadius:14,padding:14,marginBottom:14}}>
          <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"rgba(255,255,255,.5)",marginBottom:10,textTransform:"uppercase"}}>📜 Historial</div>
          <div style={{maxHeight:340,overflowY:"auto",display:"flex",flexDirection:"column",gap:6}}>
            {vf.slice(0,80).map(v => (
              <div key={v.id} style={{background:"rgba(255,255,255,.04)",borderRadius:10,padding:"10px 12px",display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:10}}>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{display:"flex",gap:6,alignItems:"center",flexWrap:"wrap"}}>
                    <span className="display" style={{fontSize:13,letterSpacing:".02em"}}>{(v.cliente||"").toUpperCase()}</span>
                    {v.esCortes && <span style={{fontSize:9,background:"rgba(167,139,250,.2)",color:"#A78BFA",borderRadius:5,padding:"1px 6px",fontWeight:800,letterSpacing:".05em"}}>🎁 CORTESÍA</span>}
                    {!v.pagado && !v.esCortes && (
                      <button className="btn" onClick={()=>{btn();setEditPagoId(v.id);}}
                        style={{fontSize:9,background:"rgba(234,91,29,.18)",color:ORANGE,border:`1px solid ${ORANGE}`,borderRadius:5,padding:"1px 6px",fontWeight:800,letterSpacing:".05em"}}>
                        ⏳ SIN PAGAR
                      </button>
                    )}
                  </div>
                  <div className="serif-it" style={{fontSize:14,color:"rgba(255,255,255,.4)",marginTop:1}}>{fmtDate(v.fecha)} {fmtTime(v.fecha)} · {v.metodoPago} · 👤 {v.cajero||"?"}</div>
                  {v.items.map((it,i) => (
                    <div key={i} className="serif-it" style={{fontSize:14,color:"rgba(255,255,255,.5)",marginTop:1}}>
                      {it.tipo === "especial" ? `✏️ ${it.descripcion}` : `${it.producto.emoji} ${it.producto.nombre}${(it.sabores||[]).length>0?` (${it.sabores.join("/")})`:""}`}
                      {it.notas?` 📝${it.notas}`:""}
                    </div>
                  ))}
                </div>
                <div className="display" style={{fontSize:18,color:v.esCortes?"#A78BFA":ORANGE,flexShrink:0}}>{v.esCortes?"🎁":fmt(v.total)}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CIERRES ANTERIORES */}
      {cierresSemana && cierresSemana.length > 0 && (
        <div style={{background:"rgba(0,0,0,.22)",borderRadius:14,padding:14,marginBottom:14}}>
          <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"rgba(255,255,255,.5)",marginBottom:10,textTransform:"uppercase"}}>📅 Resúmenes semanales anteriores</div>
          {cierresSemana.slice(0,5).map(c => (
            <div key={c.id} style={{background:"rgba(255,255,255,.04)",borderRadius:10,padding:"12px 14px",marginBottom:8}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:6}}>
                <div>
                  <div className="display" style={{fontSize:14,letterSpacing:".02em"}}>Semana del {fmtDate(c.fecha)}</div>
                  <div className="serif-it" style={{fontSize:13,color:"rgba(255,255,255,.5)"}}>👤 {c.cajero||"?"}</div>
                </div>
                <div className="display" style={{fontSize:20,color:ORANGE}}>{fmtFull(c.totalSemana||0)}</div>
              </div>
              <div style={{fontSize:12,color:"rgba(255,255,255,.6)",lineHeight:1.6}}>
                {c.pedidos&&<span>📊 {c.pedidos} pedidos · </span>}
                {c.raspas&&<span>🍧 {c.raspas} raspas · </span>}
                {c.mejorDia&&<span>🏆 Mejor: {fmtDate(c.mejorDia[0])} ({fmt(c.mejorDia[1])}) · </span>}
                {c.sabor&&<span>⭐ {c.sabor[0]}</span>}
              </div>
            </div>
          ))}
        </div>
      )}

      <button className="btn" onClick={() => { btn(); exportCSV(vf, vasosExtra.filter(v => periodo==="hoy"?localDateKey(v.fecha) === todayKey():true), periodo); }}
        style={{width:"100%",background:"rgba(34,197,94,.15)",color:"#4ADE80",border:"2px solid rgba(34,197,94,.35)",borderRadius:14,padding:14,fontSize:14,fontWeight:900,marginBottom:6,letterSpacing:".05em",textTransform:"uppercase"}}>
        📥 Exportar CSV — {vf.length} pedidos
      </button>

      {editPedido && (
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.85)",zIndex:100,display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
          <div style={{background:CREMA,borderRadius:18,padding:"22px 20px",width:"100%",maxWidth:380,color:TEXT_DARK}}>
            <div className="display" style={{fontSize:18,marginBottom:4,letterSpacing:".02em"}}>EDITAR PAGO</div>
            <div className="serif-it" style={{fontSize:14,color:TEXT_MUTED,marginBottom:14}}>{editPedido.cliente} · {fmt(editPedido.total)}</div>
            <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:TEXT_MUTED,marginBottom:8}}>MÉTODO DE PAGO</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:14}}>
              {METODOS_PAGO.filter(m => m !== "Cortesía").map(m => (
                <button key={m} className="btn" onClick={()=>{btn();actualizarPedido(editPedido.id,{metodoPago:m});}}
                  style={{padding:"10px 6px",borderRadius:11,fontWeight:800,fontSize:13,border:"2px solid",
                    borderColor:editPedido.metodoPago===m?ORANGE:CREMA_DARK,
                    background:editPedido.metodoPago===m?"rgba(234,91,29,.12)":"white",
                    color:editPedido.metodoPago===m?ORANGE:TEXT_DARK,textAlign:"center"}}>
                  {m==="Efectivo"?"💵":m==="Transferencia"?"📲":"💳"} {m}
                </button>
              ))}
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
              <button className="btn" onClick={()=>{btn();setEditPagoId(null);}} style={{background:CREMA_DARK,color:TEXT_DARK,borderRadius:12,padding:12,fontWeight:800}}>Cancelar</button>
              <button className="btn" onClick={()=>{btn("success");actualizarPedido(editPedido.id,{pagado:true});setEditPagoId(null);}}
                style={{background:"#22C55E",color:"white",borderRadius:12,padding:12,fontWeight:900}}>
                ✓ Marcar pagado
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── CIERRE TAB ───────────────────────────────────────────────────────────────
function CierreTab({ pedidos, fondoCaja, cierres, cierresSemana, gastosCaja: gastosCajaPropC, agregarCierre, agregarCierreSemana, cajeroActivo, btn, showSaved, inventariosGuardados: invGuardadosProp, setInventariosGuardados, pinJefe, saboresNat, saboresAgua, requirePin }) {
  const gastosCaja = gastosCajaPropC || [];
  const inventariosGuardados = invGuardadosProp || {};
  const [efectivoContado, setEfectivoContado] = useState("");
  const [notasTurno, setNotasTurno] = useState("");
  const [comprasFalta, setComprasFalta] = useState("");
  const [justificacionDescuadre, setJustificacionDescuadre] = useState("");
  const inventarioHoyGuardado = inventariosGuardados[todayKey()] || null;
  const [inventarioBotes, setInventarioBotes] = useState(() => inventariosGuardados[todayKey()] || {});
  const [inventarioGuardadoOk, setInventarioGuardadoOk] = useState(!!inventariosGuardados[todayKey()]);
  const [verSeccionJefe, setVerSeccionJefe] = useState(false);
  const [verificaciones, setVerificaciones] = useState(() => {
    const hoy = todayKey();
    return (inventariosGuardados[hoy+"_verificaciones"]) || { transferencias: "", terminal: "", notasJefe: "" };
  });
  const [comprasNecesarias, setComprasNecesarias] = useState({});
  const [errorValidacion, setErrorValidacion] = useState("");
  const [verHistorial, setVerHistorial] = useState(false);
  const COMPRAS_LISTA = ["Servilletas","Popotes","Cucharitas","Tajín","Chamoy","Vasos chicos","Vasos grandes","Limones","Crema dulce"];

  const hoy = pedidos.filter(v => localDateKey(v.fecha) === todayKey());
  const hoyPagados = hoy.filter(p => p.pagado && !p.esCortes);
  const ventasEfectivo = hoyPagados.filter(p => p.metodoPago === "Efectivo").reduce((s,p) => s+p.total, 0);
  const ventasTransfer = hoyPagados.filter(p => p.metodoPago === "Transferencia").reduce((s,p) => s+p.total, 0);
  const ventasTerminal = hoyPagados.filter(p => p.metodoPago === "Terminal").reduce((s,p) => s+p.total, 0);
  const totalDia = ventasEfectivo + ventasTransfer + ventasTerminal;
  const cortesias = hoy.filter(p => p.esCortes).length;
  const sinPagar = hoy.filter(p => !p.pagado && !p.esCortes);
  const numEntregados = hoy.filter(p => p.entregado).length;
  const propinasDia = hoy.reduce((s,p) => s + (Number(p.propina) || 0), 0);

  // Gastos del día
  const gastosHoy = (gastosCaja||[]).filter(g => localDateKey(g.fecha) === todayKey());
  const totalGastosHoy = gastosHoy.reduce((s,g) => s + Number(g.monto||0), 0);

  const fondoMonto = fondoCaja?.monto || 0;
  const debeHaber = fondoMonto + ventasEfectivo - totalGastosHoy;
  const contado = efectivoContado === "" ? null : Number(efectivoContado);
  const diff = contado === null ? null : contado - debeHaber;
  const descuadreFuerte = diff !== null && Math.abs(diff) > UMBRAL_DESCUADRE;

  // Comparación misma día semana pasada
  const haceUnaSemana = new Date(); haceUnaSemana.setDate(haceUnaSemana.getDate() - 7);
  const fechaSemPasada = haceUnaSemana.toISOString().split("T")[0];
  const ventasSemPasada = pedidos.filter(p => p.fecha.startsWith(fechaSemPasada) && p.pagado && !p.esCortes).reduce((s,p) => s+p.total, 0);
  const difVsSemPasada = ventasSemPasada > 0 ? totalDia - ventasSemPasada : null;

  // Inventario crítico (menos de 1 bote)
  const sabsCriticos = Object.entries(inventarioBotes).filter(([_,v]) => v > 0 && v < UMBRAL_INVENTARIO_CRITICO);

  // Reporte semanal automático: solo si hoy es lunes (getDay() === 1)
  const generarResumenSemana = () => {
    // Calcular ventana: jueves anterior hasta hoy (lunes)
    const hoyDate = new Date(); hoyDate.setHours(0,0,0,0);
    const inicio = new Date(hoyDate); inicio.setDate(inicio.getDate() - 4); // jueves anterior
    const semana = pedidos.filter(p => { const d = new Date(p.fecha); return d >= inicio && d <= new Date(); });
    const cobr = semana.filter(p => p.pagado && !p.esCortes);
    const tot = cobr.reduce((s,p) => s+p.total, 0);
    const efe = cobr.filter(p => p.metodoPago==="Efectivo").reduce((s,p)=>s+p.total,0);
    const tra = cobr.filter(p => p.metodoPago==="Transferencia").reduce((s,p)=>s+p.total,0);
    const ter = cobr.filter(p => p.metodoPago==="Terminal").reduce((s,p)=>s+p.total,0);
    const pdays = {};
    cobr.forEach(p => { const k = p.fecha.split("T")[0]; pdays[k] = (pdays[k]||0)+p.total; });
    const days = Object.entries(pdays).sort((a,b)=>b[1]-a[1]);
    const mejor = days[0]; const peor = days[days.length-1];
    const allSab = semana.flatMap(p => (p.items||[]).filter(it => it.tipo!=="especial").flatMap(it => it.sabores||[]));
    const cs = {}; allSab.forEach(s => cs[s] = (cs[s]||0)+1);
    const topSab = Object.entries(cs).sort((a,b)=>b[1]-a[1])[0];
    const raspas = semana.flatMap(p => (p.items||[]).filter(it => it.tipo!=="especial")).length;
    const propTotal = semana.reduce((s,p)=>s+(Number(p.propina)||0),0);
    const cortTotal = semana.filter(p => p.esCortes).length;
    return { totalSemana: tot, efectivo:efe, transfer:tra, terminal:ter, pedidos:cobr.length, mejorDia: mejor, peorDia: peor, sabor: topSab, raspas, propinas: propTotal, cortesias: cortTotal };
  };

  const esLunes = new Date().getDay() === 1;
  const resumenSemana = esLunes ? generarResumenSemana() : null;

  const guardarCierre = () => {
    // Validaciones
    if (efectivoContado === "") { setErrorValidacion("Falta llenar el monto contado en caja."); return; }
    if (descuadreFuerte && !justificacionDescuadre.trim()) { setErrorValidacion("Hay un descuadre mayor a $20. Escribe una justificación antes de guardar."); return; }
    setErrorValidacion("");

    btn("success");
    const cierre = {
      id: uid(),
      fecha: new Date().toISOString(),
      horaCierre: new Date().toLocaleTimeString("es-MX",{hour:"2-digit",minute:"2-digit"}),
      cajero: cajeroActivo,
      fondoInicial: fondoMonto,
      ventasEfectivo, ventasTransfer, ventasTerminal,
      totalDia, totalGastos: totalGastosHoy, propinasDia,
      efectivoContado: contado,
      diferencia: diff,
      justificacionDescuadre: descuadreFuerte ? justificacionDescuadre.trim() : "",
      cortesias,
      pendientesPago: sinPagar.length,
      pendientesPagoMonto: sinPagar.reduce((s,p) => s+p.total, 0),
      notasTurno: notasTurno.trim(),
      comprasFalta: comprasFalta.trim(),
      inventarioBotes,
      comprasNecesarias,
      sabsCriticos: sabsCriticos.map(([k,v])=>({sabor:k,botes:v})),
    };
    agregarCierre(cierre);
    showSaved && showSaved("Cierre guardado");
    // Ir a pantalla de inicio después de 1.5 segundos
    setTimeout(() => {
      save("rr_cajero_hoy", null);
      save("rr_fondo_hoy", null);
      window.location.reload();
    }, 1500);

    // ─── Exportar Excel del día automáticamente ──────────────────────────
    try {
      const fechaLabel = new Date().toLocaleDateString("es-MX",{day:"2-digit",month:"2-digit",year:"numeric"}).replace(/\//g,"-");
      const nombreArchivo = `Rosy_Raspados_${fechaLabel}.csv`;
      const lineas = [];
      // Encabezado general
      lineas.push(["ROSY RASPADOS — CIERRE DEL DÍA"]);
      lineas.push(["Fecha:", new Date().toLocaleDateString("es-MX",{weekday:"long",day:"2-digit",month:"long",year:"numeric"})]);
      lineas.push(["Cajero:", cajeroActivo]);
      lineas.push(["Hora de cierre:", cierre.horaCierre]);
      lineas.push([]);
      // Ventas
      lineas.push(["VENTAS DEL DÍA"]);
      lineas.push(["Método","Total","Pedidos"]);
      lineas.push(["Efectivo", ventasEfectivo, hoyPagados.filter(p=>p.metodoPago==="Efectivo").length]);
      lineas.push(["Transferencia", ventasTransfer, hoyPagados.filter(p=>p.metodoPago==="Transferencia").length]);
      lineas.push(["Terminal", ventasTerminal, hoyPagados.filter(p=>p.metodoPago==="Terminal").length]);
      lineas.push(["TOTAL", totalDia, hoyPagados.length]);
      lineas.push([]);
      lineas.push(["Cortesías:", cortesias]);
      lineas.push(["Propinas:", propinasDia]);
      lineas.push(["Raspas hechas:", hoy.flatMap(p=>(p.items||[]).filter(it=>it.tipo!=="especial")).length]);
      lineas.push([]);
      // Cuadre
      lineas.push(["CUADRE DE CAJA"]);
      lineas.push(["Fondo inicial:", fondoMonto]);
      lineas.push(["Ventas en efectivo:", ventasEfectivo]);
      if (totalGastosHoy > 0) lineas.push(["Salidas de caja:", -totalGastosHoy]);
      lineas.push(["Debería haber:", debeHaber]);
      lineas.push(["Contado:", contado]);
      lineas.push([diff===0?"✓ Cuadra perfecto":diff>0?`Sobra $${diff}`:`Falta $${Math.abs(diff)}`]);
      if (cierre.justificacionDescuadre) lineas.push(["Justificación:", cierre.justificacionDescuadre]);
      lineas.push([]);
      // Gastos
      if (gastosHoy.length > 0) {
        lineas.push(["SALIDAS DE CAJA"]);
        lineas.push(["Descripción","Monto","Cajero"]);
        gastosHoy.forEach(g => lineas.push([g.descripcion, g.monto, g.cajero||""]));
        lineas.push(["TOTAL SALIDAS", totalGastosHoy]);
        lineas.push([]);
      }
      // Inventario
      if (Object.keys(inventarioBotes).length > 0) {
        lineas.push(["INVENTARIO DE BOTES"]);
        lineas.push(["Sabor","Botes restantes"]);
        Object.entries(inventarioBotes).forEach(([s,v]) => lineas.push([s, v]));
        lineas.push([]);
      }
      // Compras
      const comprasList = Object.entries(comprasNecesarias).filter(([_,v])=>v).map(([k])=>k);
      if (comprasList.length > 0) {
        lineas.push(["LISTA DE COMPRAS"]);
        comprasList.forEach(c => lineas.push([c]));
        lineas.push([]);
      }
      // Notas
      if (notasTurno.trim()) {
        lineas.push(["NOTAS DEL TURNO"]);
        lineas.push([notasTurno.trim()]);
        lineas.push([]);
      }
      // Pedidos del día
      lineas.push(["DETALLE DE PEDIDOS"]);
      lineas.push(["#","Cliente","Cajero","Método","Total","Propina","Hora","Items"]);
      hoy.forEach(p => {
        const items = (p.items||[]).map(it => it.tipo==="especial" ? it.descripcion : `${it.producto?.nombre} (${(it.sabores||[]).join("/")||"s/s"})`).join(" | ");
        lineas.push([p.numero||"", p.cliente||"", p.cajero||"", p.metodoPago, p.esCortes?"Cortesía":p.total, p.propina||0, fmtTime(p.fecha), items]);
      });
      // Generar CSV
      const esc = (v) => { const s = String(v == null ? "" : v); return '"' + s.replace(/"/g, '""') + '"'; };
      const csv = lineas.map(r => r.map(esc).join(",")).join("\n");
      const blob = new Blob(["\uFEFF"+csv], {type:"text/csv;charset=utf-8;"});
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = nombreArchivo; a.click();
      URL.revokeObjectURL(url);
    } catch(e) { console.error("Error generando Excel:", e); }

    // Si es lunes, guardar también resumen semanal
    if (esLunes && agregarCierreSemana) {
      const resumen = generarResumenSemana();
      agregarCierreSemana({ id: uid(), fecha: new Date().toISOString(), cajero: cajeroActivo, ...resumen });
    }
  };

  return (
    <div className="slide">
      <div className="display" style={{fontSize:30,color:"white",letterSpacing:"-.02em",marginBottom:6}}>CIERRE DE TURNO</div>
      <div className="serif-it" style={{fontSize:15,color:"rgba(255,255,255,.6)",marginBottom:18}}>Resumen del día y cuadre de caja</div>

      {errorValidacion && (
        <div className="pop" style={{background:"rgba(230,104,50,.18)",border:`1px solid ${ORANGE}`,borderRadius:14,padding:"14px",textAlign:"center",marginBottom:14,color:ORANGE}}>
          <div className="display" style={{fontSize:14,letterSpacing:".05em"}}>⚠️ FALTA INFORMACIÓN</div>
          <div className="serif-it" style={{fontSize:15,marginTop:2}}>{errorValidacion}</div>
        </div>
      )}

      <div style={{background:"rgba(0,0,0,.22)",borderRadius:14,padding:16,marginBottom:14}}>
        <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"rgba(255,255,255,.5)",marginBottom:12,textTransform:"uppercase"}}>📊 Ventas del día</div>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:14,paddingBottom:14,borderBottom:"1px solid rgba(255,255,255,.1)"}}>
          <div className="serif-it" style={{fontSize:14,color:"rgba(255,255,255,.7)"}}>Total cobrado</div>
          <div className="display" style={{fontSize:28,color:ORANGE,lineHeight:1}}>{fmtFull(totalDia)}</div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:8}}>
          <div style={{background:"rgba(255,255,255,.04)",borderRadius:10,padding:"10px 8px",textAlign:"center"}}>
            <div style={{fontSize:10,letterSpacing:".1em",color:"rgba(255,255,255,.5)",fontWeight:700}}>💵 EFECTIVO</div>
            <div className="display" style={{fontSize:16,color:"#4ADE80",marginTop:3,lineHeight:1}}>{fmt(ventasEfectivo)}</div>
          </div>
          <div style={{background:"rgba(255,255,255,.04)",borderRadius:10,padding:"10px 8px",textAlign:"center"}}>
            <div style={{fontSize:10,letterSpacing:".1em",color:"rgba(255,255,255,.5)",fontWeight:700}}>📲 TRANSFER.</div>
            <div className="display" style={{fontSize:16,color:"#93B4FF",marginTop:3,lineHeight:1}}>{fmt(ventasTransfer)}</div>
          </div>
          <div style={{background:"rgba(255,255,255,.04)",borderRadius:10,padding:"10px 8px",textAlign:"center"}}>
            <div style={{fontSize:10,letterSpacing:".1em",color:"rgba(255,255,255,.5)",fontWeight:700}}>💳 TERMINAL</div>
            <div className="display" style={{fontSize:16,color:"#A78BFA",marginTop:3,lineHeight:1}}>{fmt(ventasTerminal)}</div>
          </div>
        </div>
        <div className="serif-it" style={{fontSize:15,color:"rgba(255,255,255,.5)",marginTop:6}}>
          {hoy.length} pedidos · {numEntregados} entregados · {cortesias} cortesía{cortesias!==1?"s":""}
          {propinasDia > 0 && <span> · 💰 propinas {fmt(propinasDia)}</span>}
        </div>
        {difVsSemPasada !== null && (
          <div style={{marginTop:10,padding:"8px 12px",borderRadius:10,background:"rgba(255,255,255,.04)",fontSize:13,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <span className="serif-it" style={{color:"rgba(255,255,255,.6)"}}>El mismo día la semana pasada: {fmt(ventasSemPasada)}</span>
            <span className="display" style={{fontSize:13,color:difVsSemPasada >= 0 ? "#4ADE80" : ORANGE}}>
              {difVsSemPasada >= 0 ? "↑" : "↓"} {fmt(Math.abs(difVsSemPasada))} vs sem pasada
            </span>
          </div>
        )}
      </div>

      {/* Gastos del día */}
      {gastosHoy.length > 0 && (
        <div style={{background:"rgba(230,104,50,.08)",border:`1px solid rgba(230,104,50,.3)`,borderRadius:14,padding:14,marginBottom:14}}>
          <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:ORANGE,marginBottom:8,textTransform:"uppercase"}}>💸 Salidas de caja del día — {fmt(totalGastosHoy)}</div>
          {gastosHoy.map(g => (
            <div key={g.id} className="serif-it" style={{fontSize:14,color:"rgba(255,255,255,.7)",marginBottom:2,display:"flex",justifyContent:"space-between"}}>
              <span>{g.descripcion}</span><span style={{color:ORANGE}}>-{fmt(g.monto)}</span>
            </div>
          ))}
        </div>
      )}

      <div style={{background:"rgba(0,0,0,.22)",borderRadius:14,padding:16,marginBottom:14}}>
        <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"rgba(255,255,255,.5)",marginBottom:12,textTransform:"uppercase"}}>💵 Cuadre de efectivo</div>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:6,fontSize:13}}>
          <span style={{color:"rgba(255,255,255,.6)"}}>Fondo inicial</span>
          <span className="display" style={{color:"white",fontSize:15}}>{fmt(fondoMonto)}</span>
        </div>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:6,fontSize:13}}>
          <span style={{color:"rgba(255,255,255,.6)"}}>+ Ventas en efectivo</span>
          <span className="display" style={{color:"#4ADE80",fontSize:15}}>{fmt(ventasEfectivo)}</span>
        </div>
        {totalGastosHoy > 0 && (
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:6,fontSize:13}}>
            <span style={{color:"rgba(255,255,255,.6)"}}>− Salidas de caja</span>
            <span className="display" style={{color:ORANGE,fontSize:15}}>-{fmt(totalGastosHoy)}</span>
          </div>
        )}
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:14,paddingBottom:12,borderBottom:"1px solid rgba(255,255,255,.1)",fontSize:13}}>
          <span style={{fontWeight:700}}>= Debería haber en caja</span>
          <span className="display" style={{color:ORANGE,fontSize:18}}>{fmt(debeHaber)}</span>
        </div>
        <div style={{marginBottom:10}}>
          <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"rgba(255,255,255,.5)",marginBottom:6}}>¿CUÁNTO CONTASTE EN CAJA?</div>
          <div style={{display:"flex",alignItems:"center",gap:6,background:"rgba(255,255,255,.05)",borderRadius:12,border:"2px solid rgba(255,255,255,.18)",padding:"4px 14px"}}>
            <span className="display" style={{fontSize:24,color:"rgba(255,255,255,.4)"}}>$</span>
            <input type="number" value={efectivoContado} onChange={e=>setEfectivoContado(e.target.value)} placeholder="0"
              style={{flex:1,background:"transparent",border:"none",outline:"none",fontFamily:"'Archivo Black',sans-serif",fontSize:30,color:"white",padding:"10px 0"}}/>
          </div>
        </div>
        {diff !== null && (
          <div style={{padding:"12px 14px",borderRadius:12,textAlign:"center",
            background: diff===0?"rgba(34,197,94,.18)":diff>0?"rgba(34,197,94,.12)":"rgba(230,104,50,.18)",
            border: `1px solid ${diff===0?"#22C55E":diff>0?"rgba(34,197,94,.4)":ORANGE}`}}>
            <div className="display" style={{fontSize:12,letterSpacing:".1em",color:diff===0?"#4ADE80":diff>0?"#4ADE80":ORANGE,marginBottom:3}}>
              {diff===0 ? "✓ CUADRA PERFECTO" : diff>0 ? `↑ SOBRA ${fmt(diff)}` : `↓ FALTA ${fmt(Math.abs(diff))}`}
            </div>
            <div className="serif-it" style={{fontSize:14,color:"rgba(255,255,255,.5)"}}>
              {diff===0 ? "Todo cuadrado" : diff>0 ? "Hay más dinero del esperado" : "Hay menos dinero del esperado"}
            </div>
          </div>
        )}

        {/* Justificación obligatoria si descuadre > $20 */}
        {descuadreFuerte && (
          <div style={{marginTop:12,background:"rgba(230,104,50,.08)",border:`2px solid ${ORANGE}`,borderRadius:12,padding:12}}>
            <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:ORANGE,marginBottom:6,textTransform:"uppercase"}}>⚠️ JUSTIFICA EL DESCUADRE (obligatorio)</div>
            <div className="serif-it" style={{fontSize:14,color:"rgba(255,255,255,.7)",marginBottom:8}}>El descuadre es mayor a ${UMBRAL_DESCUADRE}. Explica qué pasó.</div>
            <textarea className="textarea" rows={2} placeholder="Ej: cliente dejó propina sin avisar, error al dar cambio, etc."
              value={justificacionDescuadre} onChange={e=>setJustificacionDescuadre(e.target.value)}/>
          </div>
        )}
      </div>

      <div style={{background:"rgba(30,63,170,.18)",border:"1px solid rgba(30,63,170,.4)",borderRadius:14,padding:14,marginBottom:14}}>
        <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"#93B4FF",marginBottom:6,textTransform:"uppercase"}}>📲 Para verificar después</div>
        <div className="serif-it" style={{fontSize:15,color:"rgba(255,255,255,.6)",marginBottom:12}}>El jefe revisa estos montos en el banco / Mercado Pago</div>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:6,fontSize:13}}>
          <span style={{color:"rgba(255,255,255,.6)"}}>📲 Total esperado en transferencias</span>
          <span className="display" style={{color:"#93B4FF",fontSize:16}}>{fmt(ventasTransfer)}</span>
        </div>
        <div style={{display:"flex",justifyContent:"space-between",fontSize:13}}>
          <span style={{color:"rgba(255,255,255,.6)"}}>💳 Total esperado en Mercado Pago</span>
          <span className="display" style={{color:"#A78BFA",fontSize:16}}>{fmt(ventasTerminal)}</span>
        </div>
      </div>

      {sinPagar.length > 0 && (
        <div style={{background:"rgba(234,91,29,.1)",border:`1px solid ${ORANGE}`,borderRadius:14,padding:14,marginBottom:14}}>
          <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:ORANGE,marginBottom:8,textTransform:"uppercase"}}>⏳ Pedidos sin pagar — {sinPagar.length}</div>
          {sinPagar.map(p => (
            <div key={p.id} className="serif-it" style={{fontSize:15,color:"rgba(255,255,255,.6)",marginBottom:2}}>
              ⏳ {p.cliente} — {fmt(p.total)} · {p.metodoPago}
            </div>
          ))}
        </div>
      )}

      {/* INVENTARIO DE BOTES DE MERMELADA */}
      <div style={{background:"rgba(0,0,0,.22)",borderRadius:14,padding:14,marginBottom:14}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}>
          <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"rgba(255,255,255,.5)",textTransform:"uppercase"}}>📦 Inventario de botes</div>
          {inventarioGuardadoOk && <div style={{fontSize:11,fontWeight:800,color:"#4ADE80",letterSpacing:".05em"}}>✓ GUARDADO</div>}
        </div>
        <div className="serif-it" style={{fontSize:14,color:"rgba(255,255,255,.6)",marginBottom:12}}>¿Cuántos botes quedan de cada sabor? Acepta decimales (ej: 1.25)</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:12}}>
          {[...(saboresNat||SABORES_NATURALES), ...(saboresAgua||SABORES_AGUA)].map(sObj => {
            const s = sObj?.nombre || sObj;
            const emoji = sObj?.emoji || "";
            return (
              <div key={s} style={{background:"rgba(255,255,255,.04)",borderRadius:10,padding:"8px 10px",display:"flex",alignItems:"center",gap:8}}>
                {emoji && <span style={{fontSize:14}}>{emoji}</span>}
                <span style={{fontSize:12,fontWeight:700,color:"rgba(255,255,255,.85)",flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{s}</span>
                <input type="number" step="0.25" placeholder="0" value={inventarioBotes[s] ?? ""} onChange={e=>{
                  const v = e.target.value;
                  setInventarioBotes(prev => { const next = {...prev}; if (v === "") delete next[s]; else next[s] = Number(v); return next; });
                  setInventarioGuardadoOk(false);
                }}
                  style={{width:60,background:"rgba(255,255,255,.08)",border:"1px solid rgba(255,255,255,.2)",borderRadius:8,padding:"5px 8px",color:"white",fontFamily:"'Archivo Black',sans-serif",fontSize:14,outline:"none",textAlign:"center"}}/>
              </div>
            );
          })}
        </div>
        <button className="btn" onClick={()=>{
          btn("success");
          setInventariosGuardados && setInventariosGuardados(prev => ({...prev, [todayKey()]: inventarioBotes}));
          setInventarioGuardadoOk(true);
          showSaved && showSaved("Inventario guardado");
        }} style={{width:"100%",background:"rgba(34,197,94,.18)",color:"#4ADE80",border:"1px solid rgba(34,197,94,.4)",borderRadius:12,padding:"12px",fontWeight:800,fontSize:14,letterSpacing:".04em",textTransform:"uppercase"}}>
          💾 Guardar inventario
        </button>
      </div>

      {/* LISTA DE COMPRAS (checkboxes) */}
      <div style={{background:"rgba(0,0,0,.22)",borderRadius:14,padding:14,marginBottom:14}}>
        <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"rgba(255,255,255,.5)",marginBottom:4,textTransform:"uppercase"}}>🛒 Lista de compras</div>
        <div className="serif-it" style={{fontSize:14,color:"rgba(255,255,255,.6)",marginBottom:12}}>Marca lo que falta comprar / pedir al jefe</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
          {COMPRAS_LISTA.map(item => {
            const activo = !!comprasNecesarias[item];
            return (
              <button key={item} className="btn" onClick={()=>{btn("check"); setComprasNecesarias(prev => ({...prev, [item]: !prev[item]}));}}
                style={{padding:"10px 12px",borderRadius:10,fontWeight:700,fontSize:13,border:"2px solid",
                  borderColor:activo?ORANGE:"rgba(255,255,255,.18)",
                  background:activo?"rgba(234,91,29,.18)":"rgba(255,255,255,.04)",
                  color:activo?ORANGE:"rgba(255,255,255,.7)",textAlign:"left",display:"flex",alignItems:"center",gap:8}}>
                <span style={{width:18,height:18,borderRadius:5,border:`2px solid ${activo?ORANGE:"rgba(255,255,255,.3)"}`,background:activo?ORANGE:"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                  {activo && <span style={{color:"white",fontSize:11,fontWeight:900}}>✓</span>}
                </span>
                {item}
              </button>
            );
          })}
        </div>
      </div>

      {/* NOTAS LIBRES */}
      <div style={{background:"rgba(0,0,0,.22)",borderRadius:14,padding:14,marginBottom:14}}>
        <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"rgba(255,255,255,.5)",marginBottom:6,textTransform:"uppercase"}}>📝 Notas del turno</div>
        <textarea className="textarea" rows={3} placeholder="Algo pasó hoy? Cliente especial, problema, observación..." value={notasTurno} onChange={e=>setNotasTurno(e.target.value)} style={{marginBottom:12}}/>
        <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"rgba(255,255,255,.5)",marginBottom:6,textTransform:"uppercase"}}>🛒 Otras cosas por comprar / pedir</div>
        <textarea className="textarea" rows={2} placeholder="Otros pendientes que no estén en la lista..." value={comprasFalta} onChange={e=>setComprasFalta(e.target.value)}/>
      </div>

      {/* Alerta de inventario crítico */}
      {sabsCriticos.length > 0 && (
        <div style={{background:"rgba(230,104,50,.12)",border:`2px solid ${ORANGE}`,borderRadius:14,padding:14,marginBottom:14}}>
          <div style={{fontSize:12,fontWeight:800,letterSpacing:".1em",color:ORANGE,marginBottom:6,textTransform:"uppercase"}}>⚠️ Inventario crítico</div>
          {sabsCriticos.map(([s,v]) => (
            <div key={s} className="serif-it" style={{fontSize:14,color:"rgba(255,255,255,.7)",marginBottom:2}}>
              <span style={{color:ORANGE}}>•</span> {s}: <span style={{color:ORANGE,fontWeight:700,fontFamily:"'Inter',sans-serif"}}>{v}</span> botes
            </div>
          ))}
          <div className="serif-it" style={{fontSize:14,color:"rgba(255,255,255,.5)",marginTop:6}}>Conviene reponer pronto.</div>
        </div>
      )}

      {/* Resumen semanal automático si es lunes */}
      {esLunes && resumenSemana && resumenSemana.pedidos > 0 && (
        <div style={{background:"linear-gradient(135deg,rgba(230,104,50,.18),rgba(230,104,50,.05))",border:`2px solid ${ORANGE}`,borderRadius:14,padding:16,marginBottom:14}}>
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
            <span style={{fontSize:24}}>📅</span>
            <div>
              <div className="display" style={{fontSize:16,letterSpacing:".05em",color:"white"}}>RESUMEN DE LA SEMANA</div>
              <div className="serif-it" style={{fontSize:14,color:"rgba(255,255,255,.6)"}}>jueves a lunes · se guarda al cerrar</div>
            </div>
          </div>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:10,paddingBottom:10,borderBottom:"1px solid rgba(255,255,255,.15)"}}>
            <span className="serif-it" style={{fontSize:15}}>Total cobrado</span>
            <span className="display" style={{fontSize:26,color:ORANGE}}>{fmtFull(resumenSemana.totalSemana)}</span>
          </div>
          <div style={{fontSize:13,color:"rgba(255,255,255,.7)",lineHeight:1.7}}>
            💵 Efectivo: <b>{fmt(resumenSemana.efectivo)}</b> · 📲 Transfer.: <b>{fmt(resumenSemana.transfer)}</b> · 💳 Terminal: <b>{fmt(resumenSemana.terminal)}</b><br/>
            📊 {resumenSemana.pedidos} pedidos · 🍧 {resumenSemana.raspas} raspas hechas<br/>
            {resumenSemana.mejorDia && <span>🏆 Mejor día: <b>{fmtDate(resumenSemana.mejorDia[0])}</b> ({fmt(resumenSemana.mejorDia[1])})<br/></span>}
            {resumenSemana.sabor && <span>⭐ Sabor estrella: <b>{resumenSemana.sabor[0]}</b><br/></span>}
          </div>
        </div>
      )}

      <button className="btn" onClick={guardarCierre}
        style={{width:"100%",background:ORANGE,color:"white",borderRadius:16,padding:18,fontSize:16,fontWeight:900,letterSpacing:".05em",textTransform:"uppercase",marginBottom:10}}>
        🔒 Guardar cierre de turno
      </button>

      {/* Compartir resumen por WhatsApp */}
      <button className="btn" onClick={()=>{
        btn();
        const fecha = new Date().toLocaleDateString("es-MX",{day:"2-digit",month:"long",year:"numeric"});
        const sabsLine = sabsCriticos.length > 0 ? sabsCriticos.map(([s,v])=>`- ${s}: ${v} botes`).join("\n") : "Sin alertas";
        const comprLine = Object.entries(comprasNecesarias).filter(([_,v])=>v).map(([k])=>k).join(", ") || "Nada por ahora";
        const gastosLine = gastosHoy.length > 0 ? gastosHoy.map(g=>`-${fmt(g.monto)} ${g.descripcion}`).join(", ") : "Ninguna";
        const msg = `🍧 Rosy Raspados — Cierre del día\n📅 ${fecha}\n👤 Cajero: ${cajeroActivo}\n\nVENTAS DEL DÍA\n💵 Efectivo: ${fmt(ventasEfectivo)}\n📲 Transferencia: ${fmt(ventasTransfer)}\n💳 Terminal: ${fmt(ventasTerminal)}\nTOTAL: ${fmt(totalDia)}\n\n📊 Pedidos: ${hoy.length} (${numEntregados} entregados)\n🎁 Cortesías: ${cortesias}\n💰 Propinas: ${fmt(propinasDia)}\n\n💵 CUADRE DE CAJA\nFondo inicial: ${fmt(fondoMonto)}\nSalidas: ${gastosLine}\nDebería haber: ${fmt(debeHaber)}\nContado: ${contado!==null?fmt(contado):"sin contar"}\n${diff===null?"":diff===0?"✅ Cuadra perfecto":diff>0?`↑ Sobra ${fmt(diff)}`:`↓ Falta ${fmt(Math.abs(diff))}`}\n\n📦 Inventario crítico:\n${sabsLine}\n\n🛒 Falta comprar:\n${comprLine}\n\n📝 Notas: ${notasTurno||"ninguna"}`;
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const url = isMobile ? `whatsapp://send?text=${encodeURIComponent(msg)}` : `https://wa.me/?text=${encodeURIComponent(msg)}`;
        window.open(url, "_blank");
      }}
        style={{width:"100%",background:"#22C55E",color:"white",borderRadius:14,padding:14,fontSize:14,fontWeight:800,letterSpacing:".04em",textTransform:"uppercase",marginBottom:10,display:"flex",alignItems:"center",justifyContent:"center",gap:8}}>
        <span style={{fontSize:18}}>📲</span> Enviar resumen por WhatsApp
      </button>

      {/* ─── SECCIÓN DEL JEFE: verificar transferencias y terminal ─── */}
      <div style={{background:"linear-gradient(135deg,rgba(45,79,184,.4),rgba(45,79,184,.15))",border:"2px solid rgba(147,180,255,.35)",borderRadius:14,padding:14,marginBottom:10,marginTop:10}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:verSeccionJefe?12:0}}>
          <div>
            <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"#93B4FF",textTransform:"uppercase"}}>🔐 Verificación del jefe</div>
            <div className="serif-it" style={{fontSize:13,color:"rgba(255,255,255,.5)",marginTop:2}}>Llena después de revisar banco y Mercado Pago</div>
          </div>
          <button className="btn" onClick={()=>{
            if (!verSeccionJefe) {
              requirePin && requirePin("Verificación del jefe", () => setVerSeccionJefe(true));
            } else {
              setVerSeccionJefe(false);
            }
          }} style={{background:"rgba(147,180,255,.18)",color:"#93B4FF",border:"1px solid rgba(147,180,255,.35)",borderRadius:10,padding:"8px 14px",fontWeight:800,fontSize:12}}>
            {verSeccionJefe?"Cerrar":"Abrir 🔐"}
          </button>
        </div>

        {verSeccionJefe && (
          <div>
            {/* Resumen esperado */}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:14}}>
              <div style={{background:"rgba(0,0,0,.22)",borderRadius:10,padding:"10px 12px"}}>
                <div style={{fontSize:10,fontWeight:700,color:"rgba(255,255,255,.5)",marginBottom:4}}>📲 TRANSFERENCIAS ESPERADAS</div>
                <div className="display" style={{fontSize:20,color:"#93B4FF"}}>{fmt(ventasTransfer)}</div>
                {hoyPagados.filter(p=>p.metodoPago==="Transferencia").length > 0 && (
                  <div style={{marginTop:6}}>
                    {hoyPagados.filter(p=>p.metodoPago==="Transferencia").map(p => (
                      <div key={p.id} className="serif-it" style={{fontSize:12,color:"rgba(255,255,255,.5)",marginBottom:1}}>
                        {fmt(p.total)} · {p.cliente} · {p.cajero}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div style={{background:"rgba(0,0,0,.22)",borderRadius:10,padding:"10px 12px"}}>
                <div style={{fontSize:10,fontWeight:700,color:"rgba(255,255,255,.5)",marginBottom:4}}>💳 TERMINAL ESPERADO</div>
                <div className="display" style={{fontSize:20,color:"#A78BFA"}}>{fmt(ventasTerminal)}</div>
                {hoyPagados.filter(p=>p.metodoPago==="Terminal").length > 0 && (
                  <div style={{marginTop:6}}>
                    {hoyPagados.filter(p=>p.metodoPago==="Terminal").map(p => (
                      <div key={p.id} className="serif-it" style={{fontSize:12,color:"rgba(255,255,255,.5)",marginBottom:1}}>
                        {fmt(p.total)} · {p.cliente} · {p.cajero}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Campos de verificación */}
            <div style={{marginBottom:10}}>
              <div style={{fontSize:11,fontWeight:700,color:"rgba(255,255,255,.5)",marginBottom:6,textTransform:"uppercase"}}>¿Cuánto llegó en transferencias?</div>
              <div style={{display:"flex",alignItems:"center",gap:6,background:"rgba(255,255,255,.05)",borderRadius:12,border:"1.5px solid rgba(147,180,255,.3)",padding:"4px 14px"}}>
                <span className="display" style={{fontSize:18,color:"rgba(255,255,255,.4)"}}>$</span>
                <input type="number" placeholder="0" value={verificaciones.transferencias}
                  onChange={e=>setVerificaciones(v=>({...v,transferencias:e.target.value}))}
                  style={{flex:1,background:"transparent",border:"none",outline:"none",fontFamily:"'Archivo Black',sans-serif",fontSize:22,color:"white",padding:"8px 0"}}/>
              </div>
              {verificaciones.transferencias !== "" && (
                <div className="serif-it" style={{fontSize:13,marginTop:4,color:Number(verificaciones.transferencias)===ventasTransfer?"#4ADE80":ORANGE}}>
                  {Number(verificaciones.transferencias)===ventasTransfer ? "✓ Cuadra perfecto" : Number(verificaciones.transferencias)>ventasTransfer ? `↑ Llegó ${fmt(Number(verificaciones.transferencias)-ventasTransfer)} de más` : `↓ Falta ${fmt(ventasTransfer-Number(verificaciones.transferencias))}`}
                </div>
              )}
            </div>

            <div style={{marginBottom:10}}>
              <div style={{fontSize:11,fontWeight:700,color:"rgba(255,255,255,.5)",marginBottom:6,textTransform:"uppercase"}}>¿Cuánto llegó en terminal? (sin restar comisión)</div>
              <div style={{display:"flex",alignItems:"center",gap:6,background:"rgba(255,255,255,.05)",borderRadius:12,border:"1.5px solid rgba(167,139,250,.3)",padding:"4px 14px"}}>
                <span className="display" style={{fontSize:18,color:"rgba(255,255,255,.4)"}}>$</span>
                <input type="number" placeholder="0" value={verificaciones.terminal}
                  onChange={e=>setVerificaciones(v=>({...v,terminal:e.target.value}))}
                  style={{flex:1,background:"transparent",border:"none",outline:"none",fontFamily:"'Archivo Black',sans-serif",fontSize:22,color:"white",padding:"8px 0"}}/>
              </div>
              {verificaciones.terminal !== "" && (()=>{
                const _br=Number(verificaciones.terminal), _com=_br*COMISION_TERMINAL, _iva=_com*IVA_COMISION, _net=_br-_com-_iva;
                return <div style={{marginTop:8,background:"rgba(167,139,250,.1)",borderRadius:10,padding:"10px 12px"}}>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4,fontSize:12,marginBottom:6}}>
                    <span style={{color:"rgba(255,255,255,.6)"}}>Comisión (3.5%)</span><span style={{color:ORANGE,fontWeight:700,textAlign:"right"}}>-{fmt(_com)}</span>
                    <span style={{color:"rgba(255,255,255,.6)"}}>IVA comisión (16%)</span><span style={{color:ORANGE,fontWeight:700,textAlign:"right"}}>-{fmt(_iva)}</span>
                    <span style={{color:"rgba(255,255,255,.9)",fontWeight:800}}>Lo que realmente recibes</span><span className="display" style={{color:"#4ADE80",fontSize:16,textAlign:"right"}}>{fmt(_net)}</span>
                  </div>
                  <div className="serif-it" style={{fontSize:12,color:_net===ventasTerminal?"#4ADE80":ORANGE}}>
                    {_net===ventasTerminal?"✓ Cuadra con lo esperado":_net>ventasTerminal?("Llegó "+fmt(_net-ventasTerminal)+" de más (neto)"):("Falta "+fmt(ventasTerminal-_net)+" (neto)")}
                  </div>
                </div>;
              })()}
            </div>

            <div style={{marginBottom:12}}>
              <div style={{fontSize:11,fontWeight:700,color:"rgba(255,255,255,.5)",marginBottom:6,textTransform:"uppercase"}}>Notas del jefe</div>
              <textarea className="textarea" rows={2} placeholder="Discrepancias, observaciones, etc." value={verificaciones.notasJefe} onChange={e=>setVerificaciones(v=>({...v,notasJefe:e.target.value}))}/>
            </div>

            <button className="btn" onClick={()=>{
              btn("success");
              setInventariosGuardados && setInventariosGuardados(prev => ({...prev, [todayKey()+"_verificaciones"]: verificaciones}));
              showSaved && showSaved("Verificación guardada");
            }} style={{width:"100%",background:"rgba(147,180,255,.25)",color:"#93B4FF",border:"1px solid rgba(147,180,255,.4)",borderRadius:12,padding:12,fontWeight:800,fontSize:13,textTransform:"uppercase",letterSpacing:".04em"}}>
              💾 Guardar verificación
            </button>
          </div>
        )}
      </div>

      <button className="btn" onClick={()=>{btn();setVerHistorial(!verHistorial);}}
        style={{width:"100%",background:"transparent",border:"1px solid rgba(255,255,255,.18)",color:"rgba(255,255,255,.6)",borderRadius:12,padding:12,fontSize:13,fontWeight:700}}>
        {verHistorial?"Ocultar":"Ver"} historial de cierres ({cierres.length})
      </button>

      {verHistorial && cierres.length > 0 && (
        <div style={{marginTop:12}}>
          {cierres.slice(0,15).map(c => (
            <div key={c.id} style={{background:"rgba(0,0,0,.22)",borderRadius:12,padding:14,marginBottom:8}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:6}}>
                <div>
                  <div className="display" style={{fontSize:14,letterSpacing:".02em"}}>{fmtDate(c.fecha)} · {c.cajero}</div>
                  <div className="serif-it" style={{fontSize:14,color:"rgba(255,255,255,.5)"}}>{fmtTime(c.fecha)}</div>
                </div>
                <div className="display" style={{fontSize:18,color:ORANGE}}>{fmt(c.totalDia)}</div>
              </div>
              {c.diferencia !== null && (
                <div className="serif-it" style={{fontSize:14,color:c.diferencia===0?"#4ADE80":c.diferencia>0?"#4ADE80":ORANGE,marginBottom:4}}>
                  {c.diferencia===0 ? "Cuadró perfecto" : c.diferencia>0 ? `Sobró ${fmt(c.diferencia)}` : `Faltó ${fmt(Math.abs(c.diferencia))}`}
                </div>
              )}
              {c.notasTurno && <div className="serif-it" style={{fontSize:14,color:"rgba(255,255,255,.6)",marginTop:3}}>📝 {c.notasTurno}</div>}
              {c.comprasFalta && <div className="serif-it" style={{fontSize:14,color:"rgba(255,255,255,.6)",marginTop:1}}>🛒 {c.comprasFalta}</div>}
              {c.comprasNecesarias && Object.values(c.comprasNecesarias).some(Boolean) && (
                <div className="serif-it" style={{fontSize:14,color:"rgba(255,255,255,.6)",marginTop:3}}>
                  🛒 Comprar: {Object.entries(c.comprasNecesarias).filter(([_,v])=>v).map(([k])=>k).join(", ")}
                </div>
              )}
              {c.inventarioBotes && Object.keys(c.inventarioBotes).length > 0 && (
                <div className="serif-it" style={{fontSize:14,color:"rgba(255,255,255,.6)",marginTop:3}}>
                  📦 Botes: {Object.entries(c.inventarioBotes).filter(([_,v])=>v>0).map(([k,v])=>`${k} ${v}`).join(", ")}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── CONFIG TAB ───────────────────────────────────────────────────────────────
function ConfigTab({ productos, setProductos, pedidos, setPedidos, cajeros, setCajeros, cajeroActivo, setCajeroActivo, preciosLibres, setPreciosLibres, ventasLibres, setVentasLibres, toppingsConfig, setToppingsConfig, saboresNat, setSaboresNat, saboresAgua, setSaboresAgua, pinJefe, setPinJefe, btn, requirePin, showSaved }) {
  const [editProd, setEditProd] = useState(null);
  const [formProd, setFormProd] = useState({ nombre:"", precio:"", categoria:"natural", emoji:"🍧" });
  const [nuevoCajero, setNuevoCajero] = useState("");
  const [nuevoPrecio, setNuevoPrecio] = useState("");
  const [nuevoVL, setNuevoVL] = useState({ nombre: "", emoji: "✏️" });
  const [editVL, setEditVL] = useState(null);
  const [pinNuevo, setPinNuevo] = useState("");
  const [pinConfirm, setPinConfirm] = useState("");
  const [pinChangeMsg, setPinChangeMsg] = useState("");
  const [borrarTexto, setBorrarTexto] = useState("");
  const [autoBackup, setAutoBackup] = useState(() => load("rr_auto_backup", false));
  const [nuevoSaborNat, setNuevoSaborNat] = useState("");
  const [nuevoSaborNatEmoji, setNuevoSaborNatEmoji] = useState("");
  const [nuevoSaborAgua, setNuevoSaborAgua] = useState("");
  const [nuevoSaborAguaEmoji, setNuevoSaborAguaEmoji] = useState("");
  const [nuevoToppingNombre, setNuevoToppingNombre] = useState("");
  const [nuevoToppingEmoji, setNuevoToppingEmoji] = useState("");
  const _saboresNat = saboresNat || SABORES_NATURALES;
  const _saboresAgua = saboresAgua || SABORES_AGUA;

  useEffect(() => save("rr_auto_backup", autoBackup), [autoBackup]);

  const cambiarPin = () => {
    if (!/^\d{4}$/.test(pinNuevo)) { setPinChangeMsg("El PIN debe ser de 4 dígitos."); return; }
    if (pinNuevo !== pinConfirm) { setPinChangeMsg("Los PIN no coinciden."); return; }
    setPinJefe(pinNuevo);
    setPinNuevo(""); setPinConfirm("");
    setPinChangeMsg("✓ PIN actualizado");
    showSaved && showSaved("PIN cambiado");
    setTimeout(() => setPinChangeMsg(""), 2500);
  };

  const exportarBackup = () => {
    btn();
    const data = {
      version: 1, fecha: new Date().toISOString(),
      pedidos: load("rr_pedidos",[]),
      cajeros: load("rr_cajeros",[]),
      productos: load("rr_prods",[]),
      vasos: load("rr_vasos",[]),
      cierres: load("rr_cierres",[]),
      cierres_semana: load("rr_cierres_semana",[]),
      precios_libres: load("rr_precios_libres",[]),
      ventas_libres_tipos: load("rr_ventas_libres_tipos",[]),
      gastos_caja: load("rr_gastos_caja",[]),
      pin_jefe: load("rr_pin_jefe", PIN_DEFAULT),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {type:"application/json"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = `rosy_raspados_backup_${todayKey()}.json`; a.click();
    URL.revokeObjectURL(url);
    showSaved && showSaved("Backup descargado");
  };

  const restaurarBackup = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        if (!confirm("¿Sobrescribir todos los datos actuales con este backup? Esta acción no se puede deshacer.")) return;
        if (data.pedidos) save("rr_pedidos", data.pedidos);
        if (data.cajeros) save("rr_cajeros", data.cajeros);
        if (data.productos) save("rr_prods", data.productos);
        if (data.vasos) save("rr_vasos", data.vasos);
        if (data.cierres) save("rr_cierres", data.cierres);
        if (data.cierres_semana) save("rr_cierres_semana", data.cierres_semana);
        if (data.precios_libres) save("rr_precios_libres", data.precios_libres);
        if (data.ventas_libres_tipos) save("rr_ventas_libres_tipos", data.ventas_libres_tipos);
        if (data.gastos_caja) save("rr_gastos_caja", data.gastos_caja);
        if (data.pin_jefe) save("rr_pin_jefe", data.pin_jefe);
        showSaved && showSaved("Backup restaurado");
        setTimeout(() => window.location.reload(), 800);
      } catch { alert("Archivo de backup inválido."); }
    };
    reader.readAsText(file);
  };

  const guardarProd = () => {
    if (!formProd.nombre.trim() || !formProd.precio) return;
    const prod = { id: editProd === "new" ? uid() : editProd, nombre: formProd.nombre.trim(), precio: Number(formProd.precio), categoria: formProd.categoria, emoji: formProd.emoji };
    if (editProd === "new") setProductos([...productos, prod]);
    else setProductos(productos.map(p => p.id === editProd ? prod : p));
    setEditProd(null);
  };

  return (
    <div className="slide">
      <div className="display" style={{fontSize:30,color:"white",letterSpacing:"-.02em",marginBottom:18}}>CONFIGURACIÓN</div>

      <div style={{background:"rgba(0,0,0,.22)",borderRadius:14,padding:16,marginBottom:14}}>
        <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"rgba(255,255,255,.5)",marginBottom:4,textTransform:"uppercase"}}>👤 Cajeros y PINs</div>
        <div className="serif-it" style={{fontSize:14,color:"rgba(255,255,255,.5)",marginBottom:10}}>Cada cajero entra con su PIN personal. Compártelo en persona.</div>
        {cajeros.map((c, i) => {
          const nom = c?.nombre || c;
          const pinC = c?.pin || "";
          const esActivo = nom === cajeroActivo;
          return (
            <div key={i} style={{background:"rgba(255,255,255,.04)",borderRadius:10,padding:"10px 12px",marginBottom:8,display:"flex",alignItems:"center",gap:10}}>
              <div style={{width:36,height:36,background:esActivo?ORANGE:"rgba(255,255,255,.12)",borderRadius:9,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Archivo Black',sans-serif",fontSize:16,color:"white",flexShrink:0}}>
                {nom.charAt(0).toUpperCase()}
              </div>
              <div style={{flex:1,minWidth:0}}>
                <div className="display" style={{fontSize:14,color:esActivo?ORANGE:"white"}}>{nom.toUpperCase()}{esActivo?" 👤":""}</div>
              </div>
              <input type="number" placeholder="PIN" value={pinC} maxLength={4}
                onChange={e=>{
                  const newPin = e.target.value.slice(0,4);
                  setCajeros(cajeros.map((x,j) => j===i ? {nombre:nom, pin:newPin} : x));
                }}
                style={{width:72,background:"rgba(255,255,255,.08)",border:"1px solid rgba(255,255,255,.2)",borderRadius:8,padding:"7px 8px",color:"white",fontFamily:"'Archivo Black',sans-serif",fontSize:14,outline:"none",textAlign:"center"}}/>
              <button className="btn" onClick={()=>{btn();if(cajeros.length<=1)return;if(nom===cajeroActivo)setCajeroActivo(null);setCajeros(cajeros.filter((_,j)=>j!==i));}}
                style={{background:"rgba(234,91,29,.18)",color:ORANGE,borderRadius:8,padding:"6px 10px",fontWeight:700,fontSize:12,flexShrink:0}}>✕</button>
            </div>
          );
        })}
        <div style={{display:"grid",gridTemplateColumns:"1fr auto auto",gap:8,marginTop:8}}>
          <input className="input" placeholder="Nombre del cajero" value={nuevoCajero} onChange={e=>setNuevoCajero(e.target.value)}
            onKeyDown={e=>{if(e.key==="Enter"&&nuevoCajero.trim()){btn();setCajeros([...cajeros,{nombre:nuevoCajero.trim(),pin:""}]);setNuevoCajero("");}}}/>
          <button className="btn" onClick={()=>{if(nuevoCajero.trim()){btn();setCajeros([...cajeros,{nombre:nuevoCajero.trim(),pin:""}]);setNuevoCajero("");}}}
            style={{background:ORANGE,color:"white",borderRadius:12,padding:"0 18px",fontWeight:800,fontSize:20,flexShrink:0}}>+</button>
        </div>
        <div className="serif-it" style={{fontSize:13,color:"rgba(255,255,255,.4)",marginTop:8}}>Escribe el PIN directo en el campo de cada cajero. Sin PIN, entra sin contraseña.</div>
      </div>

      {/* SABORES NATURALES */}
      <div style={{background:"rgba(0,0,0,.22)",borderRadius:14,padding:16,marginBottom:14}}>
        <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"rgba(255,255,255,.5)",marginBottom:4,textTransform:"uppercase"}}>🍧 Sabores naturales</div>
        <div className="serif-it" style={{fontSize:14,color:"rgba(255,255,255,.5)",marginBottom:10}}>$65 chico / $80 grande · Cambia el emoji tocando el cuadrito</div>
        <div style={{display:"flex",flexDirection:"column",gap:6,marginBottom:10}}>
          {_saboresNat.map((sObj, i) => {
            const nombre = sObj?.nombre || sObj;
            const emoji = sObj?.emoji || "🍧";
            const moverArriba = () => {
              if (i === 0) return;
              const arr = [..._saboresNat];
              [arr[i-1], arr[i]] = [arr[i], arr[i-1]];
              setSaboresNat && setSaboresNat(arr);
            };
            const moverAbajo = () => {
              if (i === _saboresNat.length - 1) return;
              const arr = [..._saboresNat];
              [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
              setSaboresNat && setSaboresNat(arr);
            };
            return (
              <div key={i} style={{background:"rgba(255,255,255,.06)",borderRadius:10,padding:"8px 10px",display:"flex",alignItems:"center",gap:6}}>
                {/* Botones de orden */}
                <div style={{display:"flex",flexDirection:"column",gap:2,flexShrink:0}}>
                  <button className="btn" onClick={()=>{btn();moverArriba();}} disabled={i===0}
                    style={{background:i===0?"rgba(255,255,255,.04)":"rgba(255,255,255,.12)",color:i===0?"rgba(255,255,255,.2)":"white",borderRadius:5,width:22,height:18,fontSize:10,fontWeight:900,display:"flex",alignItems:"center",justifyContent:"center",border:"none"}}>▲</button>
                  <button className="btn" onClick={()=>{btn();moverAbajo();}} disabled={i===_saboresNat.length-1}
                    style={{background:i===_saboresNat.length-1?"rgba(255,255,255,.04)":"rgba(255,255,255,.12)",color:i===_saboresNat.length-1?"rgba(255,255,255,.2)":"white",borderRadius:5,width:22,height:18,fontSize:10,fontWeight:900,display:"flex",alignItems:"center",justifyContent:"center",border:"none"}}>▼</button>
                </div>
                <input type="text" value={emoji} maxLength={2}
                  onChange={e=>{ const v=e.target.value; setSaboresNat&&setSaboresNat(_saboresNat.map((x,j)=>j===i?{...(x?.nombre?x:{nombre:x}),emoji:v}:x)); }}
                  style={{width:38,background:"rgba(255,255,255,.1)",border:"1px solid rgba(255,255,255,.2)",borderRadius:7,padding:"5px",color:"white",fontSize:18,outline:"none",textAlign:"center",flexShrink:0}}/>
                <input type="text" value={nombre}
                  onChange={e=>{ const v=e.target.value; setSaboresNat&&setSaboresNat(_saboresNat.map((x,j)=>j===i?{...(x?.nombre?x:{nombre:x}),nombre:v}:x)); }}
                  style={{flex:1,background:"transparent",border:"none",borderBottom:"1px solid rgba(255,255,255,.2)",color:"white",fontSize:13,fontWeight:700,outline:"none",padding:"2px 4px",minWidth:0}}/>
                <button className="btn" onClick={()=>{btn();setSaboresNat&&setSaboresNat(_saboresNat.filter((_,j)=>j!==i));}}
                  style={{background:"rgba(234,91,29,.2)",color:ORANGE,borderRadius:7,padding:"4px 8px",fontWeight:700,fontSize:11,flexShrink:0}}>✕</button>
              </div>
            );
          })}
        </div>
        <div style={{display:"flex",gap:8}}>
          <input type="text" placeholder="🍧" value={nuevoSaborNatEmoji||""} onChange={e=>setNuevoSaborNatEmoji(e.target.value)} maxLength={2}
            style={{width:46,background:"rgba(255,255,255,.08)",border:"1px solid rgba(255,255,255,.2)",borderRadius:10,padding:"10px 6px",color:"white",fontSize:18,outline:"none",textAlign:"center",flexShrink:0}}/>
          <input className="input" placeholder="Nombre del sabor..." value={nuevoSaborNat} onChange={e=>setNuevoSaborNat(e.target.value)}
            onKeyDown={e=>{if(e.key==="Enter"&&nuevoSaborNat.trim()){btn();setSaboresNat&&setSaboresNat([..._saboresNat,{id:uid(),nombre:nuevoSaborNat.trim(),emoji:nuevoSaborNatEmoji||"🍧"}]);setNuevoSaborNat("");setNuevoSaborNatEmoji&&setNuevoSaborNatEmoji("");}}}/>
          <button className="btn" onClick={()=>{if(nuevoSaborNat.trim()){btn();setSaboresNat&&setSaboresNat([..._saboresNat,{id:uid(),nombre:nuevoSaborNat.trim(),emoji:nuevoSaborNatEmoji||"🍧"}]);setNuevoSaborNat("");setNuevoSaborNatEmoji&&setNuevoSaborNatEmoji("");}}}
            style={{background:ORANGE,color:"white",borderRadius:10,padding:"0 16px",fontWeight:800,fontSize:18,flexShrink:0}}>+</button>
        </div>
      </div>

      {/* SABORES DE AGUA */}
      <div style={{background:"rgba(0,0,0,.22)",borderRadius:14,padding:16,marginBottom:14}}>
        <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"rgba(255,255,255,.5)",marginBottom:4,textTransform:"uppercase"}}>💧 Sabores de agua</div>
        <div className="serif-it" style={{fontSize:14,color:"rgba(255,255,255,.5)",marginBottom:10}}>$25 chico / $35 grande · Cambia el emoji tocando el cuadrito</div>
        <div style={{display:"flex",flexDirection:"column",gap:6,marginBottom:10}}>
          {_saboresAgua.map((sObj, i) => {
            const nombre = sObj?.nombre || sObj;
            const emoji = sObj?.emoji || "💧";
            const moverArriba = () => {
              if (i === 0) return;
              const arr = [..._saboresAgua];
              [arr[i-1], arr[i]] = [arr[i], arr[i-1]];
              setSaboresAgua && setSaboresAgua(arr);
            };
            const moverAbajo = () => {
              if (i === _saboresAgua.length - 1) return;
              const arr = [..._saboresAgua];
              [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
              setSaboresAgua && setSaboresAgua(arr);
            };
            return (
              <div key={i} style={{background:"rgba(255,255,255,.06)",borderRadius:10,padding:"8px 10px",display:"flex",alignItems:"center",gap:6}}>
                <div style={{display:"flex",flexDirection:"column",gap:2,flexShrink:0}}>
                  <button className="btn" onClick={()=>{btn();moverArriba();}} disabled={i===0}
                    style={{background:i===0?"rgba(255,255,255,.04)":"rgba(255,255,255,.12)",color:i===0?"rgba(255,255,255,.2)":"white",borderRadius:5,width:22,height:18,fontSize:10,fontWeight:900,display:"flex",alignItems:"center",justifyContent:"center",border:"none"}}>▲</button>
                  <button className="btn" onClick={()=>{btn();moverAbajo();}} disabled={i===_saboresAgua.length-1}
                    style={{background:i===_saboresAgua.length-1?"rgba(255,255,255,.04)":"rgba(255,255,255,.12)",color:i===_saboresAgua.length-1?"rgba(255,255,255,.2)":"white",borderRadius:5,width:22,height:18,fontSize:10,fontWeight:900,display:"flex",alignItems:"center",justifyContent:"center",border:"none"}}>▼</button>
                </div>
                <input type="text" value={emoji} maxLength={2}
                  onChange={e=>{ const v=e.target.value; setSaboresAgua&&setSaboresAgua(_saboresAgua.map((x,j)=>j===i?{...(x?.nombre?x:{nombre:x}),emoji:v}:x)); }}
                  style={{width:38,background:"rgba(255,255,255,.1)",border:"1px solid rgba(255,255,255,.2)",borderRadius:7,padding:"5px",color:"white",fontSize:18,outline:"none",textAlign:"center",flexShrink:0}}/>
                <input type="text" value={nombre}
                  onChange={e=>{ const v=e.target.value; setSaboresAgua&&setSaboresAgua(_saboresAgua.map((x,j)=>j===i?{...(x?.nombre?x:{nombre:x}),nombre:v}:x)); }}
                  style={{flex:1,background:"transparent",border:"none",borderBottom:"1px solid rgba(255,255,255,.2)",color:"white",fontSize:13,fontWeight:700,outline:"none",padding:"2px 4px",minWidth:0}}/>
                <button className="btn" onClick={()=>{btn();setSaboresAgua&&setSaboresAgua(_saboresAgua.filter((_,j)=>j!==i));}}
                  style={{background:"rgba(234,91,29,.2)",color:ORANGE,borderRadius:7,padding:"4px 8px",fontWeight:700,fontSize:11,flexShrink:0}}>✕</button>
              </div>
            );
          })}
        </div>
        <div style={{display:"flex",gap:8}}>
          <input type="text" placeholder="💧" value={nuevoSaborAguaEmoji||""} onChange={e=>setNuevoSaborAguaEmoji(e.target.value)} maxLength={2}
            style={{width:46,background:"rgba(255,255,255,.08)",border:"1px solid rgba(255,255,255,.2)",borderRadius:10,padding:"10px 6px",color:"white",fontSize:18,outline:"none",textAlign:"center",flexShrink:0}}/>
          <input className="input" placeholder="Nombre del sabor de agua..." value={nuevoSaborAgua} onChange={e=>setNuevoSaborAgua(e.target.value)}
            onKeyDown={e=>{if(e.key==="Enter"&&nuevoSaborAgua.trim()){btn();setSaboresAgua&&setSaboresAgua([..._saboresAgua,{id:uid(),nombre:nuevoSaborAgua.trim(),emoji:nuevoSaborAguaEmoji||"💧"}]);setNuevoSaborAgua("");setNuevoSaborAguaEmoji&&setNuevoSaborAguaEmoji("");}}}/>
          <button className="btn" onClick={()=>{if(nuevoSaborAgua.trim()){btn();setSaboresAgua&&setSaboresAgua([..._saboresAgua,{id:uid(),nombre:nuevoSaborAgua.trim(),emoji:nuevoSaborAguaEmoji||"💧"}]);setNuevoSaborAgua("");setNuevoSaborAguaEmoji&&setNuevoSaborAguaEmoji("");}}}
            style={{background:COBALT,color:"white",borderRadius:10,padding:"0 16px",fontWeight:800,fontSize:18,flexShrink:0}}>+</button>
        </div>
      </div>

      {/* TOPPINGS */}
      <div style={{background:"rgba(0,0,0,.22)",borderRadius:14,padding:16,marginBottom:14}}>
        <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"rgba(255,255,255,.5)",marginBottom:4,textTransform:"uppercase"}}>🌶️ Toppings</div>
        <div className="serif-it" style={{fontSize:14,color:"rgba(255,255,255,.5)",marginBottom:10}}>Edita emoji, nombre y orden. Agrégalos o quítalos.</div>
        <div style={{display:"flex",flexDirection:"column",gap:6,marginBottom:10}}>
          {(toppingsConfig||TOPPINGS_DEFAULT).map((tc, i) => {
            const cfg = toppingsConfig || TOPPINGS_DEFAULT;
            const moverArriba = () => { if(i===0)return; const a=[...cfg]; [a[i-1],a[i]]=[a[i],a[i-1]]; setToppingsConfig&&setToppingsConfig(a); };
            const moverAbajo  = () => { if(i===cfg.length-1)return; const a=[...cfg]; [a[i],a[i+1]]=[a[i+1],a[i]]; setToppingsConfig&&setToppingsConfig(a); };
            return (
              <div key={tc.id||i} style={{background:"rgba(255,255,255,.04)",borderRadius:10,padding:"8px 10px",display:"flex",alignItems:"center",gap:6}}>
                {/* Orden */}
                <div style={{display:"flex",flexDirection:"column",gap:2,flexShrink:0}}>
                  <button className="btn" onClick={()=>{btn();moverArriba();}} disabled={i===0}
                    style={{background:i===0?"rgba(255,255,255,.04)":"rgba(255,255,255,.12)",color:i===0?"rgba(255,255,255,.2)":"white",borderRadius:5,width:22,height:18,fontSize:10,fontWeight:900,display:"flex",alignItems:"center",justifyContent:"center",border:"none"}}>▲</button>
                  <button className="btn" onClick={()=>{btn();moverAbajo();}} disabled={i===cfg.length-1}
                    style={{background:i===cfg.length-1?"rgba(255,255,255,.04)":"rgba(255,255,255,.12)",color:i===cfg.length-1?"rgba(255,255,255,.2)":"white",borderRadius:5,width:22,height:18,fontSize:10,fontWeight:900,display:"flex",alignItems:"center",justifyContent:"center",border:"none"}}>▼</button>
                </div>
                {/* Emoji */}
                <input type="text" value={tc.emoji} maxLength={2}
                  onChange={e=>setToppingsConfig&&setToppingsConfig(cfg.map((x,j)=>j===i?{...x,emoji:e.target.value}:x))}
                  style={{width:38,background:"rgba(255,255,255,.1)",border:"1px solid rgba(255,255,255,.2)",borderRadius:7,padding:"5px",color:"white",fontSize:18,outline:"none",textAlign:"center",flexShrink:0}}/>
                {/* Nombre */}
                <input type="text" value={tc.nombre}
                  onChange={e=>setToppingsConfig&&setToppingsConfig(cfg.map((x,j)=>j===i?{...x,nombre:e.target.value}:x))}
                  style={{flex:1,background:"transparent",border:"none",borderBottom:"1px solid rgba(255,255,255,.2)",color:"white",fontSize:13,fontWeight:700,outline:"none",padding:"2px 4px",minWidth:0}}/>
                {/* Quitar */}
                <button className="btn" onClick={()=>{btn();setToppingsConfig&&setToppingsConfig(cfg.filter((_,j)=>j!==i));}}
                  style={{background:"rgba(234,91,29,.2)",color:ORANGE,borderRadius:7,padding:"4px 8px",fontWeight:700,fontSize:11,flexShrink:0}}>✕</button>
              </div>
            );
          })}
        </div>
        {/* Agregar nuevo topping */}
        <div style={{display:"flex",gap:8}}>
          <input type="text" placeholder="🫙" value={nuevoToppingEmoji||""} onChange={e=>setNuevoToppingEmoji&&setNuevoToppingEmoji(e.target.value)} maxLength={2}
            style={{width:46,background:"rgba(255,255,255,.08)",border:"1px solid rgba(255,255,255,.2)",borderRadius:10,padding:"10px 6px",color:"white",fontSize:18,outline:"none",textAlign:"center",flexShrink:0}}/>
          <input className="input" placeholder="Nombre del topping..." value={nuevoToppingNombre||""} onChange={e=>setNuevoToppingNombre&&setNuevoToppingNombre(e.target.value)}
            onKeyDown={e=>{if(e.key==="Enter"&&nuevoToppingNombre&&nuevoToppingNombre.trim()){btn();setToppingsConfig&&setToppingsConfig([...(toppingsConfig||TOPPINGS_DEFAULT),{id:uid(),nombre:nuevoToppingNombre.trim(),emoji:nuevoToppingEmoji||"🫙"}]);setNuevoToppingNombre&&setNuevoToppingNombre("");setNuevoToppingEmoji&&setNuevoToppingEmoji("");}}}/>
          <button className="btn" onClick={()=>{if(nuevoToppingNombre&&nuevoToppingNombre.trim()){btn();setToppingsConfig&&setToppingsConfig([...(toppingsConfig||TOPPINGS_DEFAULT),{id:uid(),nombre:nuevoToppingNombre.trim(),emoji:nuevoToppingEmoji||"🫙"}]);setNuevoToppingNombre&&setNuevoToppingNombre("");setNuevoToppingEmoji&&setNuevoToppingEmoji("");}}}
            style={{background:ORANGE,color:"white",borderRadius:10,padding:"0 16px",fontWeight:800,fontSize:18,flexShrink:0}}>+</button>
        </div>
      </div>

      <div style={{background:"rgba(0,0,0,.22)",borderRadius:14,padding:16,marginBottom:14}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
          <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"rgba(255,255,255,.5)",textTransform:"uppercase"}}>🍧 Productos</div>
          <button className="btn" onClick={()=>{btn();setFormProd({nombre:"",precio:"",categoria:"natural",emoji:"🍧"});setEditProd("new");}}
            style={{background:ORANGE,color:"white",borderRadius:10,padding:"7px 14px",fontWeight:800,fontSize:12,letterSpacing:".05em",textTransform:"uppercase"}}>+ Nuevo</button>
        </div>
        {productos.map(p => (
          <div key={p.id} style={{background:"rgba(255,255,255,.04)",borderRadius:12,padding:"12px 14px",marginBottom:8,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div>
              <div className="display" style={{fontSize:14,letterSpacing:".02em"}}>{p.emoji} {p.nombre.toUpperCase()}</div>
              <div className="serif-it" style={{fontSize:15,color:"rgba(255,255,255,.5)",marginTop:1}}>{p.categoria} · {fmtFull(p.precio)}</div>
            </div>
            <div style={{display:"flex",gap:8}}>
              <button className="btn" onClick={()=>{btn();setFormProd({nombre:p.nombre,precio:String(p.precio),categoria:p.categoria,emoji:p.emoji});setEditProd(p.id);}}
                style={{background:"rgba(255,255,255,.08)",color:"white",borderRadius:8,padding:"6px 12px",fontWeight:700,fontSize:12}}>Editar</button>
              <button className="btn" onClick={()=>{btn();if(confirm("¿Eliminar?"))setProductos(productos.filter(x=>x.id!==p.id));}}
                style={{background:"rgba(234,91,29,.18)",color:ORANGE,borderRadius:8,padding:"6px 10px",fontWeight:700,fontSize:12}}>✕</button>
            </div>
          </div>
        ))}
      </div>

      <div style={{background:"rgba(0,0,0,.22)",borderRadius:14,padding:16,marginBottom:14}}>
        <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"rgba(255,255,255,.5)",marginBottom:6,textTransform:"uppercase"}}>✏️ Precios rápidos de venta libre</div>
        <div className="serif-it" style={{fontSize:15,color:"rgba(255,255,255,.5)",marginBottom:10}}>Aparecen como botones rápidos al hacer ventas libres</div>
        <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:10}}>
          {preciosLibres.map(p => (
            <div key={p} style={{display:"flex",alignItems:"center",gap:6,background:"rgba(255,255,255,.05)",borderRadius:10,padding:"6px 12px",border:"1px solid rgba(255,255,255,.14)"}}>
              <span className="display" style={{fontSize:14,color:ORANGE}}>${p}</span>
              <button className="btn" onClick={()=>{btn();setPreciosLibres(preciosLibres.filter(x=>x!==p));}}
                style={{background:"none",color:"rgba(255,255,255,.4)",fontSize:14,fontWeight:700,padding:0}}>✕</button>
            </div>
          ))}
        </div>
        <div style={{display:"flex",gap:8}}>
          <input className="input" type="number" placeholder="Precio (ej. 20)" value={nuevoPrecio} onChange={e=>setNuevoPrecio(e.target.value)}
            onKeyDown={e=>{if(e.key==="Enter"&&nuevoPrecio){btn();const n=Number(nuevoPrecio);if(n>=0&&!preciosLibres.includes(n))setPreciosLibres([...preciosLibres,n].sort((a,b)=>a-b));setNuevoPrecio("");}}}/>
          <button className="btn" onClick={()=>{if(nuevoPrecio){btn();const n=Number(nuevoPrecio);if(n>=0&&!preciosLibres.includes(n))setPreciosLibres([...preciosLibres,n].sort((a,b)=>a-b));setNuevoPrecio("");}}}
            style={{background:ORANGE,color:"white",borderRadius:12,padding:"0 18px",fontWeight:800,fontSize:20,flexShrink:0}}>+</button>
        </div>
      </div>

      {/* TIPOS DE VENTA LIBRE */}
      <div style={{background:"rgba(0,0,0,.22)",borderRadius:14,padding:16,marginBottom:14}}>
        <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"rgba(255,255,255,.5)",marginBottom:6,textTransform:"uppercase"}}>✏️ Tipos de venta libre</div>
        <div className="serif-it" style={{fontSize:14,color:"rgba(255,255,255,.5)",marginBottom:10}}>Aparecen como botones en el POS para cobrar cosas sueltas</div>
        {(ventasLibres||[]).map(vl => (
          <div key={vl.id} style={{background:"rgba(255,255,255,.04)",borderRadius:10,padding:"10px 12px",marginBottom:6,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div style={{display:"flex",alignItems:"center",gap:10}}>
              <span style={{fontSize:18}}>{vl.emoji}</span>
              <span className="display" style={{fontSize:13,letterSpacing:".02em"}}>{vl.nombre.toUpperCase()}</span>
            </div>
            <button className="btn" onClick={()=>{btn(); setVentasLibres(ventasLibres.filter(x=>x.id!==vl.id));}}
              style={{background:"rgba(230,104,50,.18)",color:ORANGE,borderRadius:8,padding:"4px 10px",fontWeight:700,fontSize:11}}>✕</button>
          </div>
        ))}
        <div style={{display:"grid",gridTemplateColumns:"60px 1fr 60px",gap:6,marginTop:8}}>
          <input className="input" placeholder="✏️" value={nuevoVL.emoji} onChange={e=>setNuevoVL({...nuevoVL,emoji:e.target.value})} maxLength={2} style={{textAlign:"center"}}/>
          <input className="input" placeholder="Nombre (ej: Cucharón suelto)" value={nuevoVL.nombre} onChange={e=>setNuevoVL({...nuevoVL,nombre:e.target.value})}/>
          <button className="btn" onClick={()=>{if(nuevoVL.nombre.trim()){btn();setVentasLibres([...(ventasLibres||[]),{id:uid(),nombre:nuevoVL.nombre.trim(),emoji:nuevoVL.emoji||"✏️"}]);setNuevoVL({nombre:"",emoji:"✏️"});}}}
            style={{background:ORANGE,color:"white",borderRadius:12,fontWeight:800,fontSize:18,border:"none"}}>+</button>
        </div>
      </div>

      {/* PIN del jefe */}
      <div style={{background:"rgba(0,0,0,.22)",borderRadius:14,padding:16,marginBottom:14}}>
        <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"rgba(255,255,255,.5)",marginBottom:8,textTransform:"uppercase"}}>🔐 Cambiar PIN del jefe</div>
        <div className="serif-it" style={{fontSize:14,color:"rgba(255,255,255,.5)",marginBottom:10}}>El PIN protege configuración, cortesías y acciones sensibles. PIN actual: ••••</div>
        <input className="input" type="number" placeholder="Nuevo PIN (4 dígitos)" value={pinNuevo} onChange={e=>setPinNuevo(e.target.value.slice(0,4))} maxLength={4} style={{marginBottom:8}}/>
        <input className="input" type="number" placeholder="Confirmar PIN" value={pinConfirm} onChange={e=>setPinConfirm(e.target.value.slice(0,4))} maxLength={4} style={{marginBottom:10}}/>
        <button className="btn" onClick={cambiarPin}
          style={{width:"100%",background:ORANGE,color:"white",borderRadius:10,padding:"10px 14px",fontWeight:800,fontSize:13,letterSpacing:".04em",textTransform:"uppercase"}}>
          Cambiar PIN
        </button>
        {pinChangeMsg && <div className="serif-it" style={{fontSize:14,color:pinChangeMsg.startsWith("✓")?"#4ADE80":ORANGE,marginTop:8,textAlign:"center"}}>{pinChangeMsg}</div>}
      </div>

      {/* BACKUP */}
      <div style={{background:"rgba(0,0,0,.22)",borderRadius:14,padding:16,marginBottom:14}}>
        <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"rgba(255,255,255,.5)",marginBottom:8,textTransform:"uppercase"}}>☁️ Backup</div>
        <div className="serif-it" style={{fontSize:14,color:"rgba(255,255,255,.5)",marginBottom:10}}>Descarga todos los datos en un archivo. Súbelo a Drive o tu correo.</div>
        <button className="btn" onClick={exportarBackup}
          style={{width:"100%",background:"rgba(34,197,94,.18)",color:"#4ADE80",border:"1px solid rgba(34,197,94,.4)",borderRadius:10,padding:"10px 14px",fontWeight:800,fontSize:13,marginBottom:8}}>
          💾 Hacer backup ahora
        </button>
        <label className="btn" style={{width:"100%",background:"rgba(147,180,255,.15)",color:"#93B4FF",border:"1px solid rgba(147,180,255,.35)",borderRadius:10,padding:"10px 14px",fontWeight:800,fontSize:13,display:"block",textAlign:"center",cursor:"pointer",marginBottom:8}}>
          📂 Restaurar desde archivo
          <input type="file" accept=".json" style={{display:"none"}}
            onChange={e=>{ if(e.target.files[0]) restaurarBackup(e.target.files[0]); }}/>
        </label>
        <label style={{display:"flex",alignItems:"center",gap:10,cursor:"pointer",padding:"6px 0"}}>
          <input type="checkbox" checked={autoBackup} onChange={e=>setAutoBackup(e.target.checked)} style={{width:18,height:18}}/>
          <span className="serif-it" style={{fontSize:14,color:"rgba(255,255,255,.7)"}}>Backup automático al cerrar el día</span>
        </label>
      </div>

      {/* SISTEMA / BORRAR HISTORIAL */}
      <div style={{background:"rgba(0,0,0,.22)",borderRadius:14,padding:16}}>
        <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"rgba(255,255,255,.5)",marginBottom:8,textTransform:"uppercase"}}>⚙️ Sistema</div>
        <div className="serif-it" style={{fontSize:15,color:"rgba(255,255,255,.5)",marginBottom:12}}>Pedidos guardados: <span style={{color:ORANGE,fontWeight:700,fontFamily:"'Inter',sans-serif"}}>{pedidos.length}</span></div>
        <input className="input" placeholder='Para borrar el historial, escribe "BORRAR"' value={borrarTexto} onChange={e=>setBorrarTexto(e.target.value)} style={{marginBottom:8}}/>
        <button className="btn" disabled={borrarTexto !== "BORRAR"} onClick={()=>{
          if(borrarTexto !== "BORRAR") return;
          btn();
          // Borrar todo el historial de ventas y movimientos
          setPedidos([]);
          save("rr_pedidos", []);
          save("rr_gastos_caja", []);
          save("rr_fondo_hoy", null);
          save("rr_cierres", []);
          save("rr_cierres_semana", []);
          save("rr_inventarios", {});
          save("rr_cajero_hoy", null);
          setBorrarTexto("");
          // Regresar a pantalla de cajero para empezar desde 0
          setTimeout(() => window.location.reload(), 800);
        }}
          style={{background:borrarTexto==="BORRAR"?"rgba(230,104,50,.4)":"rgba(230,104,50,.1)",color:borrarTexto==="BORRAR"?"white":"rgba(230,104,50,.5)",borderRadius:10,padding:"10px 14px",fontWeight:700,fontSize:13,border:`1px solid ${borrarTexto==="BORRAR"?ORANGE:"rgba(230,104,50,.3)"}`,width:"100%"}}>
          🗑️ Borrar historial completo
        </button>
      </div>

      {editProd && (
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.85)",zIndex:100,display:"flex",alignItems:"flex-end",justifyContent:"center"}}>
          <div style={{background:CREMA,borderRadius:"24px 24px 0 0",width:"100%",padding:"22px 18px 36px",maxWidth:700,color:TEXT_DARK}}>
            <div className="display" style={{fontSize:18,marginBottom:14,letterSpacing:".02em"}}>{editProd==="new"?"NUEVO PRODUCTO":"EDITAR PRODUCTO"}</div>
            {[["emoji","Emoji","text","🍧"],["nombre","Nombre","text","Ej: Natural Chico"],["precio","Precio ($)","number","65"],["categoria","Categoría","text","natural"]].map(([k,l,t,ph]) => (
              <div key={k} style={{marginBottom:10}}>
                <div style={{fontSize:11,fontWeight:800,letterSpacing:".08em",color:TEXT_MUTED,marginBottom:4,textTransform:"uppercase"}}>{l}</div>
                <input className="input-light" type={t} placeholder={ph} value={formProd[k]} onChange={e=>setFormProd({...formProd,[k]:e.target.value})}/>
              </div>
            ))}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginTop:14}}>
              <button className="btn" onClick={()=>{btn();setEditProd(null);}} style={{background:CREMA_DARK,color:TEXT_DARK,borderRadius:14,padding:13,fontWeight:800}}>Cancelar</button>
              <button className="btn" onClick={()=>{btn("success");guardarProd();}} style={{background:ORANGE,color:"white",borderRadius:14,padding:13,fontWeight:800}}>Guardar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── PIN MODAL ────────────────────────────────────────────────────────────────
function PinModal({ label, pinJefe, onSuccess, onCancel, btn }) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  const intentar = () => {
    if (pin === pinJefe) {
      btn("success");
      onSuccess();
    } else {
      btn();
      setError("PIN incorrecto");
      setPin("");
      setTimeout(() => setError(""), 1500);
    }
  };

  return (
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.85)",zIndex:250,display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
      <div style={{background:CREMA,borderRadius:18,padding:"24px 22px",width:"100%",maxWidth:360,color:TEXT_DARK,textAlign:"center"}}>
        <div style={{fontSize:36,marginBottom:8}}>🔐</div>
        <div className="display" style={{fontSize:18,marginBottom:6,letterSpacing:".02em"}}>{(label||"Acceso restringido").toUpperCase()}</div>
        <div className="serif-it" style={{fontSize:14,color:TEXT_MUTED,marginBottom:18}}>Ingresa el PIN del jefe (4 dígitos)</div>
        <input className="input-light" type="number" placeholder="••••" value={pin} maxLength={4}
          onChange={e=>setPin(e.target.value.slice(0,4))}
          onKeyDown={e=>{if(e.key==="Enter") intentar();}}
          style={{textAlign:"center",fontSize:28,letterSpacing:".4em",fontFamily:"'Archivo Black',sans-serif",marginBottom:10}}
          autoFocus/>
        {error && <div className="serif-it" style={{fontSize:14,color:ORANGE,marginBottom:10}}>{error}</div>}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginTop:8}}>
          <button className="btn" onClick={onCancel} style={{background:CREMA_DARK,color:TEXT_DARK,borderRadius:12,padding:13,fontWeight:800,fontSize:14}}>Cancelar</button>
          <button className="btn" onClick={intentar} style={{background:ORANGE,color:"white",borderRadius:12,padding:13,fontWeight:900,fontSize:14}}>Entrar</button>
        </div>
      </div>
    </div>
  );
}

// ─── GASTOS TAB ───────────────────────────────────────────────────────────────
function GastosTab({ gastosCaja: gastosCajaPropG, agregarGasto, requirePin, btn, showSaved }) {
  const gastosCaja = gastosCajaPropG || [];
  const [monto, setMonto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [verHistorial, setVerHistorial] = useState(false);

  const valido = monto !== "" && Number(monto) > 0 && descripcion.trim();
  const hoy = gastosCaja.filter(g => localDateKey(g.fecha) === todayKey());
  const totalHoy = hoy.reduce((s,g) => s + Number(g.monto||0), 0);

  const registrar = () => {
    if (!valido) return;
    const m = Number(monto);
    const guardar = () => {
      agregarGasto({ monto: m, descripcion: descripcion.trim() });
      setMonto(""); setDescripcion("");
      btn("success");
      showSaved && showSaved("Gasto registrado");
    };
    // Si es mayor a UMBRAL_GASTO_PIN, pedir PIN del jefe
    if (m > UMBRAL_GASTO_PIN && requirePin) {
      requirePin(`Autorizar gasto de ${fmt(m)}`, guardar);
    } else {
      guardar();
    }
  };

  return (
    <div className="slide">
      <div style={{marginBottom:18}}>
        <div className="display" style={{fontSize:30,color:"white",letterSpacing:"-.02em",lineHeight:1}}>SALIDAS DE CAJA</div>
        <div className="serif-it" style={{fontSize:15,color:"rgba(255,255,255,.6)",marginTop:4}}>Cuando se saca dinero de la caja para algo (hielo, vasos, etc.)</div>
      </div>

      <div style={{background:"rgba(0,0,0,.22)",borderRadius:14,padding:16,marginBottom:14,textAlign:"center"}}>
        <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"rgba(255,255,255,.5)"}}>SALIDAS DE HOY</div>
        <div className="display" style={{fontSize:36,color:ORANGE,lineHeight:1,marginTop:4}}>-{fmt(totalHoy)}</div>
        <div className="serif-it" style={{fontSize:14,color:"rgba(255,255,255,.5)"}}>{hoy.length} {hoy.length===1?"salida":"salidas"} registradas</div>
      </div>

      <div style={{background:"rgba(0,0,0,.22)",borderRadius:14,padding:16,marginBottom:14}}>
        <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:"rgba(255,255,255,.5)",marginBottom:10,textTransform:"uppercase"}}>Registrar nueva salida</div>
        <div style={{marginBottom:10}}>
          <div style={{fontSize:11,fontWeight:700,color:"rgba(255,255,255,.5)",marginBottom:6}}>MONTO</div>
          <div style={{display:"flex",alignItems:"center",gap:6,background:"rgba(255,255,255,.05)",borderRadius:12,border:"1.5px solid rgba(255,255,255,.18)",padding:"4px 14px"}}>
            <span className="display" style={{fontSize:24,color:"rgba(255,255,255,.4)"}}>$</span>
            <input type="number" placeholder="0" value={monto} onChange={e=>setMonto(e.target.value)}
              style={{flex:1,background:"transparent",border:"none",outline:"none",fontFamily:"'Archivo Black',sans-serif",fontSize:28,color:"white",padding:"8px 0"}}/>
          </div>
          {Number(monto) > UMBRAL_GASTO_PIN && (
            <div className="serif-it" style={{fontSize:13,color:ORANGE,marginTop:6}}>⚠️ Pedirá PIN del jefe (gasto mayor a ${UMBRAL_GASTO_PIN})</div>
          )}
        </div>
        <div style={{marginBottom:14}}>
          <div style={{fontSize:11,fontWeight:700,color:"rgba(255,255,255,.5)",marginBottom:6}}>¿PARA QUÉ FUE?</div>
          <input className="input" placeholder="Ej: compra de hielo, garrafón, propina al de la luz..." value={descripcion} onChange={e=>setDescripcion(e.target.value)}/>
        </div>
        <button className="btn" disabled={!valido} onClick={registrar}
          style={{width:"100%",background:valido?ORANGE:"rgba(255,255,255,.1)",color:valido?"white":"rgba(255,255,255,.3)",borderRadius:12,padding:14,fontSize:15,fontWeight:900,letterSpacing:".05em",textTransform:"uppercase"}}>
          {valido?`💸 Registrar salida — ${fmt(Number(monto))}`:"Llena monto y descripción"}
        </button>
      </div>

      <button className="btn" onClick={()=>{btn();setVerHistorial(!verHistorial);}}
        style={{width:"100%",background:"transparent",border:"1px solid rgba(255,255,255,.18)",color:"rgba(255,255,255,.6)",borderRadius:12,padding:12,fontSize:13,fontWeight:700}}>
        {verHistorial?"Ocultar":"Ver"} historial de salidas ({gastosCaja.length})
      </button>

      {verHistorial && gastosCaja.length > 0 && (
        <div style={{marginTop:12}}>
          {gastosCaja.slice(0,40).map(g => (
            <div key={g.id} style={{background:"rgba(0,0,0,.22)",borderRadius:10,padding:"10px 12px",marginBottom:6,display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:10}}>
              <div style={{flex:1,minWidth:0}}>
                <div className="display" style={{fontSize:13,color:"white",letterSpacing:".02em"}}>{g.descripcion.toUpperCase()}</div>
                <div className="serif-it" style={{fontSize:13,color:"rgba(255,255,255,.5)"}}>{fmtDate(g.fecha)} {fmtTime(g.fecha)} · {g.cajero||"?"}</div>
              </div>
              <div className="display" style={{fontSize:18,color:ORANGE,flexShrink:0}}>-{fmt(g.monto)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── EDITAR PEDIDO EN COLA ────────────────────────────────────────────────────
function EditarPedidoColaModal({ pedido, onSave, onClose, btn, toppingsConfig }) {
  // Expandir items con cantidad en subítems individuales para edición granular
  const expandirItems = (its) => its.flatMap((it, idx) => {
    const cant = it.cantidad || 1;
    return Array.from({length: cant}, (_, ci) => ({
      ...it,
      _parentIdx: idx,
      _subIdx: ci,
      cantidad: 1, // cada subítem es independiente
      toppings: ci === 0 ? (it.toppings || {}) : {}, // toppings solo en el primero por defecto
      hecha: ci === 0 ? it.hecha : (it[`hecha_${ci}`] || false),
    }));
  });

  const [items, setItems] = useState(() => expandirItems(pedido.items));
  const [editIdx, setEditIdx] = useState(null);
  const totalOriginal = pedido.total;
  const totalNuevo = calcPedidoTotal(items, pedido.esCortes);
  const diferencia = totalNuevo - totalOriginal;

  const guardar = () => {
    // Recolapsar subítems en items normales (sin agrupar, cada uno es independiente)
    const finales = items.map(it => {
      const { _parentIdx, _subIdx, ...rest } = it;
      return rest;
    });
    onSave(finales);
  };

  return (
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.85)",zIndex:150,display:"flex",alignItems:"flex-end",justifyContent:"center"}}>
      <div style={{background:CREMA,borderRadius:"24px 24px 0 0",width:"100%",padding:"20px 18px 36px",maxHeight:"90vh",overflowY:"auto",maxWidth:700,color:TEXT_DARK}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
          <div className="display" style={{fontSize:18,letterSpacing:".02em"}}>EDITAR PEDIDO #{padNum(pedido.numero||0)}</div>
          <button className="btn" onClick={onClose} style={{background:CREMA_DARK,color:TEXT_DARK,borderRadius:8,padding:"6px 12px",fontWeight:700}}>✕</button>
        </div>
        <div className="serif-it" style={{fontSize:14,color:TEXT_MUTED,marginBottom:14}}>{pedido.cliente} · {items.length} raspa{items.length!==1?"s":""} · Toca una para editarla</div>

        {items.map((it, idx) => {
          const isEsp = it.tipo === "especial";
          return (
            <div key={idx} style={{background:editIdx===idx?"rgba(230,104,50,.08)":"white",border:`2px solid ${editIdx===idx?ORANGE:CREMA_DARK}`,borderRadius:12,padding:"12px 14px",marginBottom:8,cursor:"pointer"}}
              onClick={()=>{ if(!isEsp){ btn(); setEditIdx(idx===editIdx?null:idx); } }}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:10}}>
                <div style={{flex:1}}>
                  {isEsp ? (
                    <div className="display" style={{fontSize:14}}>✏️ {(it.descripcion||"").toUpperCase()}</div>
                  ) : (
                    <>
                      <div style={{fontSize:10,fontWeight:700,color:TEXT_MUTED,textTransform:"uppercase",marginBottom:2,display:"flex",alignItems:"center",gap:6}}>
                        <span>{it.producto?.nombre?.split(" ").pop()}</span>
                        <span style={{background:CREMA_DARK,borderRadius:4,padding:"1px 6px",fontSize:9}}>#{idx+1}</span>
                      </div>
                      <div className="display" style={{fontSize:15,color:TEXT_DARK}}>
                        {(it.sabores||[]).join(" · ").toUpperCase() || "SIN SABOR"}
                      </div>
                      {toppingsLabel(it.toppings) && <div style={{fontSize:12,color:"#9333EA",marginTop:2,fontWeight:700}}>{toppingsLabel(it.toppings,null,"full")}</div>}
                      {it.notas && <div className="serif-it" style={{fontSize:13,color:ORANGE,marginTop:1}}>📝 {it.notas}</div>}
                    </>
                  )}
                </div>
                <div>
                  <div className="display" style={{fontSize:18,color:ORANGE}}>{fmt(calcItemTotal(it))}</div>
                  {!isEsp && <div className="serif-it" style={{fontSize:11,color:TEXT_MUTED,textAlign:"right",marginTop:2}}>toca para editar</div>}
                </div>
              </div>

              {editIdx === idx && !isEsp && (() => {
                const cat = it.producto?.categoria || "natural";
                const sabsDisp = cat === "agua" ? SABORES_AGUA : SABORES_NATURALES;
                const prodsFiltrados = [
                  {id:"nat_ch",nombre:"Natural Chico",precio:65,categoria:"natural",emoji:"🥛"},
                  {id:"nat_gr",nombre:"Natural Grande",precio:80,categoria:"natural",emoji:"🍧"},
                  {id:"agua_ch",nombre:"Agua Chico",precio:25,categoria:"agua",emoji:"💧"},
                  {id:"agua_gr",nombre:"Agua Grande",precio:35,categoria:"agua",emoji:"🫗"},
                ].filter(p => p.categoria === cat);
                const togS = (s) => {
                  btn("check");
                  const next = (it.sabores||[]).includes(s) ? (it.sabores||[]).filter(x=>x!==s) : [...(it.sabores||[]),s];
                  setItems(items.map((x,i) => i===idx ? {...x, sabores:next} : x));
                };
                const togTop = (k) => {
                  btn("check");
                  setItems(items.map((x,i) => i===idx ? {...x, toppings:{...(x.toppings||{}), [k]:!(x.toppings||{})[k]}} : x));
                };
                return (
                  <div style={{marginTop:12,paddingTop:10,borderTop:`1px solid ${CREMA_DARK}`}}>
                    <div style={{fontSize:10,fontWeight:700,color:TEXT_MUTED,marginBottom:6,textTransform:"uppercase"}}>Sabores</div>
                    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:5,marginBottom:10}}>
                      {sabsDisp.map(s => (
                        <button key={s} className="btn" onClick={()=>togS(s)}
                          style={{padding:"8px 4px",borderRadius:8,fontSize:11,fontWeight:700,textAlign:"center",border:"2px solid",
                            borderColor:(it.sabores||[]).includes(s)?ORANGE:CREMA_DARK,
                            background:(it.sabores||[]).includes(s)?"rgba(230,104,50,.12)":"white",
                            color:(it.sabores||[]).includes(s)?ORANGE_DARK:TEXT_DARK}}>
                          {s}
                        </button>
                      ))}
                    </div>
                    <div style={{fontSize:10,fontWeight:700,color:TEXT_MUTED,marginBottom:6,textTransform:"uppercase"}}>Toppings</div>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:5,marginBottom:10}}>
                      {(toppingsConfig||TOPPINGS_DEFAULT).map(tc => (
                        <button key={tc.id||tc.nombre} className="btn" onClick={()=>togTop(tc.id||tc.nombre)}
                          style={{padding:"8px 4px",borderRadius:8,fontSize:11,fontWeight:700,textAlign:"center",border:"2px solid",
                            borderColor:(it.toppings||{})[tc.id||tc.nombre]?ORANGE:CREMA_DARK,
                            background:(it.toppings||{})[tc.id||tc.nombre]?"rgba(230,104,50,.12)":"white",
                            color:(it.toppings||{})[tc.id||tc.nombre]?ORANGE_DARK:TEXT_DARK}}>
                          <div style={{fontSize:16}}>{tc.emoji}</div>{tc.nombre}
                        </button>
                      ))}
                    </div>
                    <div style={{fontSize:10,fontWeight:700,color:TEXT_MUTED,marginBottom:6,textTransform:"uppercase"}}>Tamaño</div>
                    <div style={{display:"grid",gridTemplateColumns:`repeat(${prodsFiltrados.length},1fr)`,gap:5}}>
                      {prodsFiltrados.map(p => (
                        <button key={p.id} className="btn" onClick={()=>{btn();setItems(items.map((x,i) => i===idx?{...x,producto:p}:x));}}
                          style={{padding:"10px 4px",borderRadius:8,fontWeight:800,border:"2px solid",textAlign:"center",
                            borderColor:it.producto?.id===p.id?ORANGE:CREMA_DARK,
                            background:it.producto?.id===p.id?"rgba(230,104,50,.12)":"white",color:TEXT_DARK}}>
                          <div className="display" style={{fontSize:14}}>{p.nombre.split(" ").pop()}</div>
                          <div className="display" style={{fontSize:16,color:ORANGE}}>${p.precio}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
          );
        })}

        <div style={{padding:"12px 14px",borderRadius:12,marginBottom:14,marginTop:4,
          background:diferencia===0?"rgba(34,197,94,.1)":diferencia>0?"rgba(230,104,50,.1)":"rgba(34,197,94,.1)",
          border:`1px solid ${diferencia===0?"rgba(34,197,94,.4)":diferencia>0?ORANGE:"rgba(34,197,94,.4)"}`}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div>
              <div style={{fontSize:10,fontWeight:700,color:TEXT_MUTED,textTransform:"uppercase"}}>Total original</div>
              <div className="display" style={{fontSize:18,color:TEXT_DARK}}>{fmt(totalOriginal)}</div>
            </div>
            {diferencia !== 0 && (
              <div style={{textAlign:"center"}}>
                <div style={{fontSize:10,fontWeight:700,color:TEXT_MUTED,textTransform:"uppercase"}}>{diferencia>0?"Le cobra":"Le regresa"}</div>
                <div className="display" style={{fontSize:26,color:diferencia>0?ORANGE:"#15803D"}}>
                  {diferencia>0?("+"+fmt(diferencia)):fmt(Math.abs(diferencia))}
                </div>
              </div>
            )}
            <div style={{textAlign:"right"}}>
              <div style={{fontSize:10,fontWeight:700,color:TEXT_MUTED,textTransform:"uppercase"}}>Nuevo total</div>
              <div className="display" style={{fontSize:18,color:diferencia===0?"#15803D":diferencia>0?ORANGE:"#15803D"}}>{fmt(totalNuevo)}</div>
            </div>
          </div>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
          <button className="btn" onClick={onClose} style={{background:CREMA_DARK,color:TEXT_DARK,borderRadius:14,padding:14,fontWeight:800,fontSize:14}}>Cancelar</button>
          <button className="btn" onClick={guardar} style={{background:ORANGE,color:"white",borderRadius:14,padding:14,fontWeight:900,fontSize:14}}>
            ✓ Guardar cambios
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── HISTORIAL TAB ────────────────────────────────────────────────────────────
function HistorialTab({ pedidos, btn, actualizarPedido, toppingsConfig }) {
  const entregados = pedidos.filter(p => p.entregado).sort((a,b) => b.fecha.localeCompare(a.fecha));

  // Agrupar por fecha local del dispositivo
  const porDia = {};
  entregados.forEach(p => {
    const d = new Date(p.fecha);
    const key = d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
    if (!porDia[key]) porDia[key] = [];
    porDia[key].push(p);
  });
  const diasOrdenados = Object.keys(porDia).sort((a,b) => b.localeCompare(a));
  const hoyKey = todayKey();

  if (entregados.length === 0) return (
    <div style={{textAlign:"center",padding:"70px 0",color:TEXT_MUTED}}>
      <div style={{fontSize:60,marginBottom:14,opacity:.3}}>📋</div>
      <div className="display" style={{fontSize:22,color:TEXT_DARK,letterSpacing:".02em"}}>SIN PEDIDOS</div>
      <div className="serif-it" style={{fontSize:16,marginTop:6}}>Los pedidos entregados aparecen aquí</div>
    </div>
  );

  const PedidoCard = ({ p }) => {
    const [editandoPago, setEditandoPago] = useState(false);
    const [editandoItems, setEditandoItems] = useState(false);
    const metodoIcon = (m) => m==="Efectivo"?"💵":m==="Transferencia"?"📲":m==="Terminal"?"💳":"🎁";

    // Expandir items con cantidad para edición
    const [itemsEdit, setItemsEdit] = useState(() => p.items.flatMap((it) => {
      const cant = it.cantidad || 1;
      return Array.from({length: cant}, (_, ci) => ({...it, cantidad:1, toppings: ci===0?(it.toppings||{}):{}}));
    }));
    const [editItemIdx, setEditItemIdx] = useState(null);

    const guardarItems = () => {
      btn("success");
      actualizarPedido(p.id, { items: itemsEdit, total: calcPedidoTotal(itemsEdit, p.esCortes) });
      setEditandoItems(false);
      setEditItemIdx(null);
    };

    return (
      <div style={{background:"white",borderRadius:14,padding:"14px 16px",marginBottom:8,border:`1px solid ${CREMA_DARK}`}}>
        {/* Header */}
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:10,marginBottom:6}}>
          <div style={{flex:1,minWidth:0}}>
            <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
              <span className="display" style={{fontSize:22,color:ORANGE,lineHeight:.85}}>#{padNum(p.numero||0)}</span>
              {p.esCortes && <span style={{background:"rgba(124,58,237,.15)",color:"#7C3AED",borderRadius:5,padding:"2px 7px",fontSize:10,fontWeight:800}}>🎁 CORTESÍA</span>}
            </div>
            <div className="display" style={{fontSize:16,color:TEXT_DARK,marginTop:4}}>{(p.cliente||"SIN NOMBRE").toUpperCase()}</div>
            <div style={{display:"flex",alignItems:"center",gap:8,marginTop:4,flexWrap:"wrap"}}>
              <div className="serif-it" style={{fontSize:13,color:TEXT_MUTED}}>🕐 {fmtTime(p.fecha)} · {p.cajero||"?"}</div>
              <button className="btn" onClick={()=>setEditandoPago(!editandoPago)}
                style={{display:"inline-flex",alignItems:"center",gap:4,background:editandoPago?"rgba(230,104,50,.12)":CREMA_DARK,color:editandoPago?ORANGE:TEXT_MUTED,borderRadius:8,padding:"3px 9px",fontSize:12,fontWeight:700,border:editandoPago?`1px solid ${ORANGE}`:"none"}}>
                {metodoIcon(p.metodoPago)} {p.metodoPago} {editandoPago?"✕":"✏️"}
              </button>
            </div>
          </div>
          <div style={{textAlign:"right"}}>
            <div className="display" style={{fontSize:22,color:p.esCortes?"#7C3AED":ORANGE,lineHeight:1}}>{p.esCortes?"🎁":fmt(p.total)}</div>
            <button className="btn" onClick={()=>setEditandoItems(!editandoItems)}
              style={{marginTop:6,fontSize:11,fontWeight:700,color:editandoItems?ORANGE:TEXT_MUTED,background:editandoItems?"rgba(230,104,50,.1)":CREMA_DARK,borderRadius:7,padding:"3px 9px",border:editandoItems?`1px solid ${ORANGE}`:"none"}}>
              {editandoItems?"✕ cerrar":"✏️ editar pedido"}
            </button>
          </div>
        </div>

        {/* Cambiar método de pago */}
        {editandoPago && (
          <div style={{background:CREMA_DARK,borderRadius:10,padding:10,marginBottom:8}}>
            <div style={{fontSize:11,fontWeight:800,color:TEXT_MUTED,marginBottom:6,letterSpacing:".08em",textTransform:"uppercase"}}>Cambiar método de pago</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:6}}>
              {METODOS_PAGO.map(m => (
                <button key={m} className="btn" onClick={()=>{ btn(); actualizarPedido(p.id, {metodoPago:m, pagado: m!=="Transferencia"}); setEditandoPago(false); }}
                  style={{padding:"8px 4px",borderRadius:9,fontSize:11,fontWeight:800,textAlign:"center",border:"2px solid",
                    borderColor:p.metodoPago===m?ORANGE:CREMA_DARK,background:p.metodoPago===m?"rgba(230,104,50,.12)":"white",
                    color:p.metodoPago===m?ORANGE:TEXT_DARK}}>
                  <div style={{fontSize:14}}>{metodoIcon(m)}</div>{m}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Lista de items — vista normal */}
        {!editandoItems && p.items.map((it,i) => {
          const isEsp = it.tipo === "especial";
          const cant = it.cantidad || 1;
          const tops = toppingsLabel(it.toppings, null, "full");
          return (
            <div key={i} style={{display:"flex",alignItems:"flex-start",gap:8,marginTop:6,paddingTop:i>0?6:0,borderTop:i>0?`1px solid ${CREMA_DARK}`:"none"}}>
              {cant > 1 && (
                <div style={{background:ORANGE,color:"white",borderRadius:6,padding:"2px 7px",fontSize:11,fontWeight:900,flexShrink:0,marginTop:1}}>
                  {cant}×
                </div>
              )}
              <div style={{flex:1,minWidth:0}}>
                {isEsp ? (
                  <div className="serif-it" style={{fontSize:13,color:TEXT_MUTED}}>✏️ {it.descripcion} — {fmt(it.precio)}</div>
                ) : (
                  <>
                    <div className="serif-it" style={{fontSize:13,color:TEXT_MUTED}}>
                      <span style={{fontWeight:700,color:TEXT_DARK}}>{it.producto?.nombre}</span>
                      {" — "}
                      {(it.sabores||[]).join(", ") || "sin sabor"}
                    </div>
                    {tops && <div style={{fontSize:12,color:"#9333EA",fontWeight:700,marginTop:1}}>{tops}</div>}
                    {it.notas && <div className="serif-it" style={{fontSize:12,color:ORANGE,marginTop:1}}>📝 {it.notas}</div>}
                  </>
                )}
              </div>
              <div className="display" style={{fontSize:14,color:ORANGE,flexShrink:0}}>{fmt(calcItemTotal(it))}</div>
            </div>
          );
        })}

        {/* Edición de items */}
        {editandoItems && (
          <div style={{marginTop:8,background:CREMA,borderRadius:12,padding:10}}>
            <div style={{fontSize:11,fontWeight:800,color:TEXT_MUTED,marginBottom:8,textTransform:"uppercase",letterSpacing:".08em"}}>Editar raspas — toca una para modificarla</div>
            {itemsEdit.map((it, idx) => {
              const isEsp = it.tipo === "especial";
              const isOpen = editItemIdx === idx;
              const cat = it.producto?.categoria || "natural";
              const sabsDisp = cat === "agua" ? SABORES_AGUA : SABORES_NATURALES;
              const prodsFilt = [{id:"nat_ch",nombre:"Natural Chico",precio:65,categoria:"natural"},{id:"nat_gr",nombre:"Natural Grande",precio:80,categoria:"natural"},{id:"agua_ch",nombre:"Agua Chico",precio:25,categoria:"agua"},{id:"agua_gr",nombre:"Agua Grande",precio:35,categoria:"agua"}].filter(pr=>pr.categoria===cat);
              return (
                <div key={idx} style={{background:"white",borderRadius:10,padding:"10px 12px",marginBottom:6,border:`2px solid ${isOpen?ORANGE:CREMA_DARK}`,cursor:isEsp?"default":"pointer"}}
                  onClick={()=>{ if(!isEsp) setEditItemIdx(isOpen?null:idx); }}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:8}}>
                    <div style={{flex:1,minWidth:0}}>
                      {isEsp ? (
                        <div style={{fontSize:13,color:TEXT_MUTED}}>✏️ {it.descripcion}</div>
                      ) : (
                        <>
                          <div style={{fontSize:12,fontWeight:800,color:TEXT_MUTED,textTransform:"uppercase"}}>{it.producto?.nombre?.split(" ").pop()} <span style={{color:TEXT_MUTED,fontWeight:400}}>#{idx+1}</span></div>
                          <div style={{fontSize:14,fontWeight:700,color:TEXT_DARK}}>{(it.sabores||[]).join(" · ")||"sin sabor"}</div>
                          {toppingsLabel(it.toppings,null,"full") && <div style={{fontSize:12,color:"#9333EA",fontWeight:700}}>{toppingsLabel(it.toppings,null,"full")}</div>}
                        </>
                      )}
                    </div>
                    <div className="display" style={{fontSize:16,color:ORANGE,flexShrink:0}}>{fmt(calcItemTotal(it))}</div>
                  </div>
                  {isOpen && !isEsp && (
                    <div style={{marginTop:10,paddingTop:8,borderTop:`1px solid ${CREMA_DARK}`}} onClick={e=>e.stopPropagation()}>
                      <div style={{fontSize:10,fontWeight:700,color:TEXT_MUTED,marginBottom:5,textTransform:"uppercase"}}>Sabores</div>
                      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:4,marginBottom:8}}>
                        {sabsDisp.map(s => (
                          <button key={s} className="btn" onClick={()=>{ btn("check"); const cur=it.sabores||[]; const next=cur.includes(s)?cur.filter(x=>x!==s):[...cur,s]; setItemsEdit(itemsEdit.map((x,j)=>j===idx?{...x,sabores:next}:x)); }}
                            style={{padding:"7px 3px",borderRadius:8,fontSize:11,fontWeight:700,textAlign:"center",border:"2px solid",
                              borderColor:(it.sabores||[]).includes(s)?ORANGE:CREMA_DARK,
                              background:(it.sabores||[]).includes(s)?"rgba(230,104,50,.12)":"white",
                              color:(it.sabores||[]).includes(s)?ORANGE_DARK:TEXT_DARK}}>
                            {s}
                          </button>
                        ))}
                      </div>
                      <div style={{fontSize:10,fontWeight:700,color:TEXT_MUTED,marginBottom:5,textTransform:"uppercase"}}>Toppings</div>
                      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:4,marginBottom:8}}>
                        {(toppingsConfig||TOPPINGS_DEFAULT).map(tc => {
                          const k = tc.id||tc.nombre;
                          return (
                            <button key={k} className="btn" onClick={()=>{ btn("check"); setItemsEdit(itemsEdit.map((x,j)=>j===idx?{...x,toppings:{...(x.toppings||{}),[k]:!(x.toppings||{})[k]}}:x)); }}
                              style={{padding:"7px 3px",borderRadius:8,fontSize:11,fontWeight:700,textAlign:"center",border:"2px solid",
                                borderColor:(it.toppings||{})[k]?ORANGE:CREMA_DARK,
                                background:(it.toppings||{})[k]?"rgba(230,104,50,.12)":"white",
                                color:(it.toppings||{})[k]?ORANGE_DARK:TEXT_DARK}}>
                              <div style={{fontSize:14}}>{tc.emoji}</div>{tc.nombre}
                            </button>
                          );
                        })}
                      </div>
                      <div style={{fontSize:10,fontWeight:700,color:TEXT_MUTED,marginBottom:5,textTransform:"uppercase"}}>Tamaño</div>
                      <div style={{display:"grid",gridTemplateColumns:`repeat(${prodsFilt.length},1fr)`,gap:4}}>
                        {prodsFilt.map(pr => (
                          <button key={pr.id} className="btn" onClick={()=>{ btn(); setItemsEdit(itemsEdit.map((x,j)=>j===idx?{...x,producto:pr}:x)); }}
                            style={{padding:"8px 4px",borderRadius:8,fontWeight:800,border:"2px solid",textAlign:"center",
                              borderColor:it.producto?.id===pr.id?ORANGE:CREMA_DARK,
                              background:it.producto?.id===pr.id?"rgba(230,104,50,.12)":"white",color:TEXT_DARK}}>
                            <div className="display" style={{fontSize:13}}>{pr.nombre.split(" ").pop()}</div>
                            <div className="display" style={{fontSize:15,color:ORANGE}}>${pr.precio}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            <button className="btn" onClick={guardarItems}
              style={{width:"100%",background:ORANGE,color:"white",borderRadius:10,padding:"11px",fontWeight:900,fontSize:13,marginTop:4,letterSpacing:".04em",textTransform:"uppercase"}}>
              ✓ Guardar cambios
            </button>
          </div>
        )}
      </div>
    );
  };

  const labelDia = (key) => {
    if (key === hoyKey) return "HOY";
    const d = new Date(key + "T12:00:00");
    return d.toLocaleDateString("es-MX", {weekday:"long", day:"2-digit", month:"long"}).toUpperCase();
  };

  return (
    <div className="slide">
      <div className="display" style={{fontSize:30,color:TEXT_DARK,letterSpacing:"-.02em",marginBottom:6}}>HISTORIAL</div>
      <div className="serif-it" style={{fontSize:15,color:TEXT_MUTED,marginBottom:18}}>Pedidos por día</div>

      {diasOrdenados.map(dia => {
        const pedidosDia = porDia[dia];
        const totalDia = pedidosDia.filter(p=>!p.esCortes).reduce((s,p)=>s+p.total,0);
        return (
          <div key={dia} style={{marginBottom:20}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10,paddingBottom:6,borderBottom:`2px solid ${CREMA_DARK}`}}>
              <div style={{fontSize:11,fontWeight:800,letterSpacing:".1em",color:dia===hoyKey?ORANGE:TEXT_MUTED,textTransform:"uppercase"}}>
                {labelDia(dia)}
              </div>
              <div style={{fontSize:12,fontWeight:700,color:TEXT_MUTED}}>
                {pedidosDia.length} pedidos · {fmt(totalDia)}
              </div>
            </div>
            {pedidosDia.map(p => <PedidoCard key={p.id} p={p}/>)}
          </div>
        );
      })}
    </div>
  );
}
