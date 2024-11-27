import { create } from 'zustand';
import { Customer, CustomerFormData } from '../types/customer';

interface CustomerState {
  customers: Customer[];
  loading: boolean;
  error: string | null;
  addCustomer: (data: CustomerFormData) => Promise<void>;
  updateCustomer: (id: string, data: CustomerFormData) => Promise<void>;
  deleteCustomer: (id: string) => Promise<void>;
  fetchCustomers: () => Promise<void>;
}

export const useCustomerStore = create<CustomerState>((set, get) => ({
  customers: [],
  loading: false,
  error: null,

  addCustomer: async (data: CustomerFormData) => {
    set({ loading: true, error: null });
    try {
      // In a real app, this would be an API call
      const newCustomer: Customer = {
        id: Date.now().toString(),
        ...data,
        createdAt: new Date().toISOString(),
        status: 'active',
      };
      set((state) => ({
        customers: [...state.customers, newCustomer],
        loading: false,
      }));
    } catch (error) {
      set({ error: 'Failed to add customer', loading: false });
    }
  },

  updateCustomer: async (id: string, data: CustomerFormData) => {
    set({ loading: true, error: null });
    try {
      set((state) => ({
        customers: state.customers.map((customer) =>
          customer.id === id
            ? { ...customer, ...data }
            : customer
        ),
        loading: false,
      }));
    } catch (error) {
      set({ error: 'Failed to update customer', loading: false });
    }
  },

  deleteCustomer: async (id: string) => {
    set({ loading: true, error: null });
    try {
      set((state) => ({
        customers: state.customers.filter((customer) => customer.id !== id),
        loading: false,
      }));
    } catch (error) {
      set({ error: 'Failed to delete customer', loading: false });
    }
  },

  fetchCustomers: async () => {
    set({ loading: true, error: null });
    try {
      // In a real app, this would be an API call
      // For now, we'll use mock data
      const mockCustomers: Customer[] = [
        {
          id: '1',
          name: 'Acme Corp',
          email: 'contact@acme.com',
          phone: '123-456-7890',
          address: '123 Business St',
          createdAt: new Date().toISOString(),
          status: 'active',
        },
        // Add more mock customers as needed
      ];
      set({ customers: mockCustomers, loading: false });
    } catch (error) {
      set({ error: 'Failed to fetch customers', loading: false });
    }
  },
}));