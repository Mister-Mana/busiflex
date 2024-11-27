export interface SaleItem {
  productId: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface Sale {
  id: string;
  customerId: string;
  items: SaleItem[];
  subtotal: number;
  tax: number;
  total: number;
  status: 'pending' | 'completed' | 'cancelled';
  createdAt: string;
}

export interface SaleFormData {
  customerId: string;
  items: Omit<SaleItem, 'total'>[];
}