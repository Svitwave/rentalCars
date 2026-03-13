'use client';

import { useCarStore } from '@/store/carStore';
import CarCard from './CarCard';
import Loader from '@/components/ui/Loader';
import css from './CarList.module.css';

export default function CarList() {
  const { cars, isLoading, totalPages, currentPage, loadMore } = useCarStore();

  return (
    <>
      {isLoading && <Loader />}

      <div className={css.grid}>
        {cars.length === 0 && !isLoading && (
          <p className={css.empty}>No cars found. Try different filters.</p>
        )}
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

    
      {currentPage < totalPages && !isLoading && (
        <div className={css.loadMoreWrapper}>
          <button className={css.loadMoreBtn} onClick={loadMore}>
            Load more
          </button>
        </div>
      )}
    </>
  );
}