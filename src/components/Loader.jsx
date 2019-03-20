import React from 'react'
import './Loader.scss'

export default function Loader() {
    return (
      <div className="loading">
          <svg
            version="1.2"
            height="300"
            width="600"
            xmlns="http://www.w3.org/2000/svg"
            viewport="0 0 60 60"
          >
            <path
              id="pulsar"
              stroke="rgba(0,155,155,1)"
              fill="none"
              strokeWidth="1"
              strokeLinejoin="round"
              d="M0,90L250,90Q257,60 262,87T267,95 270,88 273,92t6,35 7,-60T290,127 297,107s2,-11 10,-10 1,1 8,-10T319,95c6,4 8,-6 10,-17s2,10 9,11h210"
            />
          </svg>
      </div>
  )
}