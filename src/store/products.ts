import { create } from "zustand";
import { ProductStore } from "@products-interface";
import { products } from "@service";
import { toast } from "react-toastify";

const useProductsStore = create<ProductStore>((set, get) => ({
  data: [],
  isLoading: false,
  totalCount: 1,

  create: async (reqdata) => {
    set({ isLoading: true });
    try {
      const response: any = await products.create(reqdata);
      if (response.status === 201) {
        toast.success("product created successfully");
        console.log(response);
        const currentData = get().data;
        console.log(currentData);
        set({ data: [...currentData, response.data.data] });
      }
      return response.status;
    } catch (error) {
      console.error("Create product error:", error);
      toast.error("Failed to create product");
      return null;
    } finally {
      set({ isLoading: false });
    }
  },

  update: async (data) => {
    set({ isLoading: true });
    try {
      const response: any = await products.update(data);
      if (response.status === 200) {
        toast.success("product updated successfully");
        const currentData = get().data;
        const updatedData = currentData.map((item) =>
          item.id === data.id ? response.data.product : item
        );
        set({ data: updatedData });
      }
      return response.status;
    } catch (error) {
      console.error("Update product error:", error);
      toast.error("Failed to update product");
      return null;
    } finally {
      set({ isLoading: false });
    }
  },

  get: async (id) => {
    set({ isLoading: true });
    try {
      const response: any = await products.get(id);
      if (response.status === 200) {
        return response.data.data;
      }
    } catch (error) {
      console.error("Get product error:", error);
      toast.error("Failed to fetch product");
    } finally {
      set({ isLoading: false });
    }
    return null;
  },

  getAll: async (params) => {
    set({ isLoading: true });
    try {
      const response: any = await products.getAll(params);
      if (response.status === 200) {
        set({
          data: response.data.data.products,
          totalCount: Math.ceil(response.data.data.count / params.limit),
        });
      }
      return response.status;
    } catch (error) {
      console.error("Fetch products error:", error);
      toast.error("Failed to fetch products");
    } finally {
      set({ isLoading: false });
    }
  },

  deleteProduct: async (id) => {
    set({ isLoading: true });
    try {
      const response: any = await products.deleteProduct(id);
      if (response.status === 200) {
        toast.success("product deleted successfully");
        const currentData = get().data;
        const updatedData = currentData.filter((item) => item.id !== id);
        set({ data: updatedData });
      }
      return response.status;
    } catch (error) {
      console.error("Delete product error:", error);
      toast.error("Failed to delete product");
      return null;
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useProductsStore;
