import React from 'react';
import { Bell, User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6">
      <div className="flex items-center">
        <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Bell className="h-5 w-5 text-gray-600" />
        </button>
        <button className="flex items-center space-x-2 hover:bg-gray-100 rounded-full p-2">
          <User className="h-5 w-5 text-gray-600" />
          <span className="text-sm text-gray-700">John Doe</span>
        </button>
      </div>
    </header>
  );
}