"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h2 className="text-6xl font-black text-error mb-4">Oops!</h2>
      <p className="text-xl text-base-content/70 mb-8">Something went wrong.</p>
      <button 
        onClick={() => reset()}
        className="btn btn-primary px-8"
      >
        Try Again
      </button>
    </div>
  );
}