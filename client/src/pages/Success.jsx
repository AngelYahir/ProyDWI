import React from 'react'
import { Link } from "react-router-dom";

export function Success() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
            <path fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
            </path>
          </svg>
          <h1 className="text-5xl font-bold">Payment Success</h1>
          <p className="py-6">Thank you for completing your secure online payment.</p>
          <Link to="/">
            <button className="btn btn-primary">Done!</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
