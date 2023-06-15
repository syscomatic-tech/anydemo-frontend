import React from 'react'

const Loading = ({ width, height }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{ margin: 'auto', display: 'block' }}
        width={width || "150px"}
        height={height || "150px"}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <defs>
          <filter id="ldio-z5ws1xav2e-filter" x="-100%" y="-100%" width="300%" height="300%" colorInterpolationFilters="sRGB">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur>
            <feComponentTransfer result="cutoff">
              <feFuncA type="table" tableValues="0 0 0 0 0 0 1 1 1 1 1"></feFuncA>
            </feComponentTransfer>
          </filter>
        </defs>
        <g filter="url(#ldio-z5ws1xav2e-filter)">
          <g transform="translate(50 50)">
            <g>
              <circle cx="20" cy="0" r="5" fill="#b843b7">
                <animate attributeName="r" keyTimes="0;0.5;1" values="3;7;3" dur="4s" repeatCount="indefinite" begin="-0.25s"></animate>
              </circle>
              <animateTransform attributeName="transform" type="rotate" keyTimes="0;1" values="0;360" dur="4s" repeatCount="indefinite" begin="0s"></animateTransform>
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="20" cy="0" r="5" fill="#f47e60">
                <animate attributeName="r" keyTimes="0;0.5;1" values="3;7;3" dur="2s" repeatCount="indefinite" begin="-0.2s"></animate>
              </circle>
              <animateTransform attributeName="transform" type="rotate" keyTimes="0;1" values="0;360" dur="2s" repeatCount="indefinite" begin="-0.05s"></animateTransform>
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="20" cy="0" r="5" fill="#28cdd6">
                <animate attributeName="r" keyTimes="0;0.5;1" values="3;7;3" dur="1.3333333333333333s" repeatCount="indefinite" begin="-0.15s"></animate>
              </circle>
              <animateTransform attributeName="transform" type="rotate" keyTimes="0;1" values="0;360" dur="1.3333333333333333s" repeatCount="indefinite" begin="-0.1s"></animateTransform>
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="20" cy="0" r="5" fill="#abbd81">
                <animate attributeName="r" keyTimes="0;0.5;1" values="3;7;3" dur="1s" repeatCount="indefinite" begin="-0.1s"></animate>
              </circle>
              <animateTransform attributeName="transform" type="rotate" keyTimes="0;1" values="0;360" dur="1s" repeatCount="indefinite" begin="-0.15s"></animateTransform>
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="20" cy="0" r="5" fill="#ffffff">
                <animate attributeName="r" keyTimes="0;0.5;1" values="3;7;3" dur="0.8s" repeatCount="indefinite" begin="-0.05s"></animate>
              </circle>
              <animateTransform attributeName="transform" type="rotate" keyTimes="0;1" values="0;360" dur="0.8s" repeatCount="indefinite" begin="-0.2s"></animateTransform>
            </g>
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Loading