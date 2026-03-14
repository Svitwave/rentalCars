"use client";

import { useEffect } from "react";
import { useCarStore } from "@/store/carStore";
import Filters from "@/components/catalog/Filters";
import CarList from "@/components/catalog/CarList";

export default function CatalogPage() {
  const { fetchCars, filters } = useCarStore();

  useEffect(() => {
    fetchCars(filters, 1);
  }, [fetchCars, filters]);

  return (
    <div className="container">
      <Filters />
      <CarList />
    </div>
  );
}
