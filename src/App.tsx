import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-2xl mx-auto text-center p-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to React Template
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Start building your application here with Tailwind CSS!
        </p>
        <div className="space-x-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200">
            Get Started
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold py-2 px-6 rounded-lg transition duration-200">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
