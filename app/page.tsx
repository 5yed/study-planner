import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-10 text-center">
        <h1 className="text-3xl font-bold mb-4">Study Planner</h1>
        <p className="text-gray-500 mb-6">
          Plan your study sessions efficiently
        </p>

        <Link
          href="/dashboard"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  )
}