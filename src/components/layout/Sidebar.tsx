import React from 'react';
import { 
  Users, 
  ShoppingCart, 
  Package, 
  DollarSign, 
  FileText, 
  BarChart3,
  Settings
} from 'lucide-react';

const menuItems = [
  { icon: Users, label: 'Customers', path: '/customers' },
  { icon: Package, label: 'Products', path: '/products' },
  { icon: ShoppingCart, label: 'Sales', path: '/sales' },
  { icon: DollarSign, label: 'Purchases', path: '/purchases' },
  { icon: FileText, label: 'HR', path: '/hr' },
  { icon: BarChart3, label: 'Dashboard', path: '/dashboard' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 min-h-screen p-4">
      <div className="text-white text-xl font-bold mb-8 px-4">ERP System</div>
      <nav>
        {menuItems.map((item) => (
          <a
            key={item.path}
            href={item.path}
            className="flex items-center text-gray-300 hover:text-white hover:bg-gray-800 px-4 py-3 rounded-lg mb-1 transition-colors"
          >
            <item.icon className="h-5 w-5 mr-3" />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}