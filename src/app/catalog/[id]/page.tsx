import Image from "next/image";
import { getCarById } from "@/lib/api";
import BookingForm from "@/components/catalog/BookingForm";
import Icon from "@/components/icons/Icon";
import css from "./page.module.css";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function CarDetailsPage({ params }: Props) {
  const { id } = await params;
  const car = await getCarById(id);

  const formatMileage = (mileage: number) =>
    new Intl.NumberFormat().format(mileage);

  return (
    <div className={css.page}>
      <div className="container">
        <div className={css.content}>
          {/* Ліва колонка — фото + форма */}
          <div className={css.left}>
            <div className={css.imageWrapper}>
              <Image
                src={car.img}
                alt={`${car.brand} ${car.model}`}
                fill
                className={css.image}
                priority
                sizes="(max-width: 1440px) 50vw, 720px"
              />
            </div>
            <BookingForm />
          </div>

          {/* Права колонка — інфо */}
          <div className={css.info}>
            {/* Блок 1: заголовок + мета */}
            <div className={css.header}>
              <div className={css.titleRow}>
                <h1 className={css.title}>
                  {car.brand} {car.model}, {car.year}
                </h1>
                <span className={css.id}>id: {car.id.slice(0, 8)}...</span>
              </div>
              <div className={css.meta}>
                <span className={css.metaItem}>
                  <Icon id="location" width={12} height={15} />
                  {car.address.split(",")[1]?.trim()},{" "}
                  {car.address.split(",")[2]?.trim()}
                </span>
                <span className={css.metaItem}>
                  Mileage: {formatMileage(car.mileage)} km
                </span>
              </div>
            </div>

            {/* Блок 2: ціна */}
            <p className={css.price}>${car.rentalPrice}</p>

            {/* Блок 3: опис */}
            <p className={css.description}>{car.description}</p>

            <div className={css.sectionsContainer}>
              {/* Блок 4: умови оренди */}
              <div className={css.section}>
                <h2 className={css.sectionTitle}>Rental Conditions:</h2>
                <ul className={css.list}>
                  {car.rentalConditions.map((condition, i) => (
                    <li key={i} className={css.listItem}>
                      <Icon id="check-circle" width={16} height={16} />
                      {condition}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Блок 5: характеристики */}
              <div className={css.section}>
                <h2 className={css.sectionTitle}>Car Specifications:</h2>
                <div className={css.specs}>
                  <div className={css.specItem}>
                    <Icon id="Brandcalendar" width={16} height={16} />
                    Year: {car.year}
                  </div>
                  <div className={css.specItem}>
                    <Icon id="car" width={16} height={16} />
                    Type: {car.type}
                  </div>
                  <div className={css.specItem}>
                    <Icon id="fuel" width={16} height={16} />
                    Fuel Consumption: {car.fuelConsumption}
                  </div>
                  <div className={css.specItem}>
                    <Icon id="engine" width={16} height={16} />
                    Engine Size: {car.engineSize}
                  </div>
                </div>
              </div>

              {/* Блок 6: аксесуари */}
              <div className={css.section}>
                <h2 className={css.sectionTitle}>
                  Accessories and functionalities:
                </h2>
                <ul className={css.list}>
                  {[...car.accessories, ...car.functionalities].map(
                    (item, i) => (
                      <li key={i} className={css.listItem}>
                        <Icon id="check-circle" width={16} height={16} />
                        {item}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
