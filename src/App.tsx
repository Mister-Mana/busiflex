import React from 'react';
import { Layout } from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Quick Stats */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium">Total Customers</h3>
          <p className="text-2xl font-semibold mt-2">1,234</p>
          <div className="text-green-600 text-sm mt-2">↑ 12% from last month</div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium">Total Sales</h3>
          <p className="text-2xl font-semibold mt-2">$45,678</p>
          <div className="text-green-600 text-sm mt-2">↑ 8% from last month</div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium">Active Products</h3>
          <p className="text-2xl font-semibold mt-2">567</p>
          <div className="text-red-600 text-sm mt-2">↓ 3% from last month</div>
        </div>
      </div>
      
      {/* Recent Activity Section */}
      <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {/* Activity items would go here */}
          <div className="flex items-center justify-between py-3 border-b">
            <div className="flex items-center">
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">New order received</p>
                <p className="text-sm text-gray-500">Order #12345 from Customer XYZ</p>
              </div>
            </div>
            <span className="text-sm text-gray-500">2 hours ago</span>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;