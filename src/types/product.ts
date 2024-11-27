export interface Product {
  id: string;
  name: string;
  description: string;
  sku: string;
  price: number;
  stock: number;
  category: string;
  status: 'in_stock' | 'low_stock' | 'out_of_stock';
  createdAt: string;
}

export interface ProductFormData {
  name: string;
  description: string;
  sku: string;
  price: number;
  stock: number;
  category: string;
}