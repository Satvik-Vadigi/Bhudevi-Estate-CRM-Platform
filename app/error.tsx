"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold">Something went wrong</h1>
      <p className="mt-3 text-gray-500">{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-6 bg-green-700 text-white px-5 py-2 rounded-lg"
      >
        Try Again
      </button>
    </div>
  );
}