import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-[#b9d9eb]">
      <h1 className="text-4xl md:text-5xl font-bold text-[#D41367] mb-6">
        🚧 Under Maintenance
      </h1>
      <p className="text-lg text-[#17458F] mb-6">
        Our About page is currently being updated. Please check back soon!
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
