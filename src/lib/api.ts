import axios from "axios";
import { Car, CarsResponse, CarFilters } from "@/types/car";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getCars = async (filters: CarFilters): Promise<CarsResponse> => {
  const { data } = await apiClient.get("/cars", { params: filters });
  return data;
};

export const getCarById = async (id: string): Promise<Car> => {
  const { data } = await apiClient.get(`/cars/${id}`);
  return data;
};

export const getBrands = async (): Promise<string[]> => {
  const { data } = await apiClient.get("/brands");
  return data;
};
