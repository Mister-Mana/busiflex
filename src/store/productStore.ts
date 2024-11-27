import { create } from 'zustand';
import { Product, ProductFormData } from '../types/product';

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
  addProduct: (data: ProductFormData) => Promise<void>;
  updateProduct: (id: string, data: ProductFormData) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  fetchProducts: () => Promise<void>;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  loading: false,
  error: null,

  addProduct: async (data: ProductFormData) => {
    set({ loading: true, error: null });
    try {
      const newProduct: Product = {
        id: Date.now().toString(),
        ...data,
        status: 'in_stock',
        createdAt: new Date().toISOString(),
      };
      set((state) => ({
        products: [...state.products, newProduct],
        loading: false,
      }));
    } catch (error) {
      set({ error: 'Failed to add product', loading: false });
    }
  },

  updateProduct: async (id: string, data: ProductFormData) => {
    set({ loading: true, error: null });
    try {
      set((state) => ({
        products: state.products.map((product) =>
          product.id === id
            ? { ...product, ...data }
            : product
        ),
        loading: false,
      }));
    } catch (error) {
      set({ error: 'Failed to update product', loading: false });
    }
  },

  deleteProduct: async (id: string) => {
    set({ loading: true, error: null });
    try {
      set((state) => ({
        products: state.products.filter((product) => product.id !== id),
        loading: false,
      }));
    } catch (error) {
      set({ error: 'Failed to delete product', loading: false });
    }
  },

  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      // Mock data for demonstration
      const mockProducts: Product[] = [
        {
          id: '1',
          name: 'Product A',
          description: 'Description for Product A',
          sku: 'SKU001',
          price: 99.99,
          stock: 100,
          category: 'Electronics',
          status: 'in_stock',
          createdAt: new Date().toISOString(),
        },
        // Add more mock products as needed
      ];
      set({ products: mockProducts, loading: false });
    } catch (error) {
      set({ error: 'Failed to fetch products', loading: false });
    }
  },
}));