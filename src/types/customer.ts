export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  createdAt: string;
  status: 'active' | 'inactive';
}

export interface CustomerFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
}