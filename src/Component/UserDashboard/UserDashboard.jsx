// src/components/Dashboard.jsx
import React from 'react';

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Add your content here */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left Sidebar */}
          <div className="col-span-1 bg-white shadow rounded-lg p-4">
            <h2 className="text-xl font-bold">RESUME</h2>
            <select className="mt-2 block w-full bg-gray-100 border border-gray-300 rounded p-2">
              <option>Rishi_Kashyap_Resume</option>
            </select>
            <div className="mt-4">
              <img src="https://masterbundles.com/wp-content/uploads/2024/01/602-398.jpg" alt="Resume" className="w-full h-auto rounded" />
              {/* <img src={template.image} alt="Resume" className="w-full h-auto rounded" /> */}
              <div className="flex justify-between mt-2">
                <button className="text-blue-500">Edit</button>
                <button className="text-blue-500">Download</button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-2 bg-white shadow rounded-lg p-4">
            <h2 className="text-xl font-bold">Your Recommended Next Steps</h2>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold">Fix Resume</h3>
              <p className="text-sm text-gray-600">We found 4 errors in your resume. Use our Resume Check tool to fix them.</p>
              <button className="mt-2 bg-blue-500 text-white rounded p-2">Improve Resume</button>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Claim your personalized URL</h3>
              <p className="text-sm text-gray-600">Join the fastest growing career network, Bold.pro. Publish your profile and claim your link -</p>
              <button className="mt-2 bg-gray-100 text-blue-500 rounded p-2">Create my Profile</button>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Share & show off your resume</h3>
              <p className="text-sm text-gray-600">Share your resume with friends and family to receive their feedback and improve it together.</p>
              <button className="mt-2 bg-gray-100 text-blue-500 rounded p-2">Share my resume</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
