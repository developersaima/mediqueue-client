import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-9xl font-black text-base-300">404</h1>
      <h2 className="text-3xl font-bold mt-4 mb-2">Page Not Found</h2>
      <p className="text-base-content/60 mb-8">
        The page you are looking for does not exist.
      </p>
      <Link href="/" className="btn btn-neutral px-8">
        Back to Home
      </Link>
    </div>
  );
}