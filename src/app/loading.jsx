export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-100">
      <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-6 text-xl font-bold text-base-content animate-pulse">
        Loading...
      </p>
    </div>
  );
}