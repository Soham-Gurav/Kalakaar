// This is a server component by default in Next.js App Router
// You can add logic here later to fetch user-specific data

export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-4xl p-8 space-y-6 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-serif font-bold text-gray-800">
          Welcome to your Dashboard!
        </h1>
        <p className="text-lg text-gray-600">
          This is your creative hub. From here, you will be able to manage your products,
          view your AI-generated content, and track your market insights.
        </p>
        <div className="w-32 h-1 bg-amber-600 mx-auto my-4"></div>
        <p className="text-md text-gray-500">
          More features are coming soon.
        </p>
      </div>
    </div>
  );
}
