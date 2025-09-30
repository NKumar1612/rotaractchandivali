import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-[#b9d9eb]">
      <h1 className="text-6xl font-bold text-[#D41367] mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-md shadow-md bg-[#F7A81B] text-[#17458F] hover:bg-[#F8B53D]"
      >
        Go Back Home
      </Link>
    </div>
  );
}
