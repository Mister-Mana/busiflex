// Common types used across the application
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'employee';
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
}

export interface Sale {
  id: string;
  customerId: string;
  products: Array<{ productId: string; quantity: number }>;
  total: number;
  status: 'pending' | 'completed' | 'cancelled';
  date: string;
}