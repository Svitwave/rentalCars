
"use client";

import { useCarStore } from "@/store/carStore";
import CarCard from "./CarCard";
import Loader from "@/components/ui/Loader";
import css from "./CarList.module.css";

export default function CarList() {
  const { cars, isLoading, totalPages, currentPage, loadMore } = useCarStore();

  if (isLoading && cars.length === 0) return <Loader />;

  if (cars.length === 0)
    return <p className={css.empty}>No cars found. Try different filters.</p>;

  return (
    <div className={css.section}>
      <div className={css.grid}>
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      {isLoading && <Loader />}

      {currentPage < totalPages && !isLoading && (
        <div className={css.loadMoreWrapper}>
          <button className={css.loadMoreBtn} onClick={loadMore}>
            Load more
          </button>
        </div>
      )}
    </div>
  );
}



