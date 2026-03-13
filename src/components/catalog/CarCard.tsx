"use client";

import Image from "next/image";
import Link from "next/link";
import { Car } from "@/types/car";
import { useCarStore } from "@/store/carStore";
import css from "./CarCard.module.css";
import Icon from "@/components/icons/Icon";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const { toggleFavorite, isFavorite } = useCarStore();
  const favorite = isFavorite(car.id);

  const formatMileage = (mileage: number) =>
    new Intl.NumberFormat().format(mileage);

  return (
    <div className={css.card}>
      {/* Фото */}
      <div className={css.imageWrapper}>
        <Image
          src={car.img}
          alt={`${car.brand} ${car.model}`}
          fill
          className={css.image}
          sizes="(max-width: 1440px) 25vw, 360px"
        />

        <button
          className={css.favoriteBtn}
          onClick={() => toggleFavorite(car)}
          aria-label="Toggle favorite"
        >
          <Icon id={favorite ? "like2" : "like"} width={18} height={18} />
        </button>
      </div>

      {/* Інфо */}
      <div className={css.body}>
        <div className={css.titleRow}>
          <h3 className={css.title}>
            {car.brand} <span className={css.accent}>{car.model}</span>,{" "}
            {car.year}
          </h3>
          <span className={css.price}>${car.rentalPrice}</span>
        </div>

        {/* Теги */}
        <div className={css.tags}>
          <span className={css.tag}>{car.address.split(",")[1]?.trim()}</span>
          <span className={css.tag}>{car.address.split(",")[2]?.trim()}</span>
          <span className={css.tag}>{car.rentalCompany}</span>
          <span className={css.tag}>{car.type}</span>
          <span className={css.tag}>{formatMileage(car.mileage)} km</span>
          <span className={css.tag}>{car.fuelConsumption}</span>
        </div>

        <Link href={`/catalog/${car.id}`} className={css.readMoreBtn}>
          Read more
        </Link>
      </div>
    </div>
  );
}
