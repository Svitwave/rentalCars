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

  const [, city, country] = car.address.split(",").map((part) => part.trim());
  const handleFavorite = () => toggleFavorite(car);

  return (
    <div className={css.card}>
      {/* Фото */}
      <div className={css.imageWrapper}>
        <Image
          src={car.img}
          alt={`${car.brand} ${car.model}  ${car.year}`}
          fill
          className={css.image}
          sizes="(max-width: 1440px) 25vw, 360px"
        />

        <button
          className={css.favoriteBtn}
          onClick={handleFavorite}
          aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
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
        <ul className={css.tags}>
          <li className={css.tag}>{city}</li>
          <li className={css.tag}>{country}</li>
          <li className={css.tag}>{car.rentalCompany}</li>
          <li className={css.tag}>{car.type}</li>
          <li className={css.tag}>{car.mileage.toLocaleString("uk-UA")} km</li>
        </ul>
      </div>
      <Link href={`/catalog/${car.id}`} className={css.readMoreBtn}>
        Read more
      </Link>
    </div>
  );
}
