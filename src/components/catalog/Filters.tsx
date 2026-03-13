'use client';

import { useState, useEffect } from 'react';
import { getBrands } from '@/lib/api';
import { useCarStore } from '@/store/carStore';
import { CarFilters } from '@/types/car';
import Icon from '@/components/icons/Icon';
import css from './Filters.module.css';

const PRICES = ['30', '40', '50', '60', '70', '80'];

export default function Filters() {
  const { fetchCars, setFilters } = useCarStore();
  const [brands, setBrands] = useState<string[]>([]);
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [minMileage, setMinMileage] = useState('');
  const [maxMileage, setMaxMileage] = useState('');
  const [brandOpen, setBrandOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);

  useEffect(() => {
    getBrands().then(setBrands);
  }, []);

  const handleSearch = () => {
    const filters: CarFilters = {};
    if (brand) filters.brand = brand;
    if (price) filters.rentalPrice = price;
    if (minMileage) filters.minMileage = minMileage;
    if (maxMileage) filters.maxMileage = maxMileage;
    setFilters(filters);
    fetchCars(filters, 1);
  };

  return (
    <div className={css.filters}>
      {/* Бренд */}
      <div className={css.field}>
        <label className={css.label}>Car brand</label>
        <div className={css.selectWrapper}>
          <button
            className={css.selectBtn}
            onClick={() => { setBrandOpen(!brandOpen); setPriceOpen(false); }}
          >
            <span className={brand ? css.selectValue : css.selectPlaceholder}>
              {brand || 'Choose a brand'}
            </span>
            <Icon id={brandOpen ? 'up' : 'chevron-down'} width={16} height={16} />
          </button>
          {brandOpen && (
            <ul className={css.dropdown}>
              {brands.map((b) => (
                <li
                  key={b}
                  className={`${css.dropdownItem} ${brand === b ? css.dropdownItemActive : ''}`}
                  onClick={() => { setBrand(b); setBrandOpen(false); }}
                >
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Ціна */}
      <div className={css.field}>
        <label className={css.label}>Price/ 1 hour</label>
        <div className={css.selectWrapper}>
          <button
            className={css.selectBtn}
            onClick={() => { setPriceOpen(!priceOpen); setBrandOpen(false); }}
          >
            <span className={price ? css.selectValue : css.selectPlaceholder}>
              {price ? `To $${price}` : 'Choose a price'}
            </span>
            <Icon id={priceOpen ? 'up' : 'chevron-down'} width={16} height={16} />
          </button>
          {priceOpen && (
            <ul className={css.dropdown}>
              {PRICES.map((p) => (
                <li
                  key={p}
                  className={`${css.dropdownItem} ${price === p ? css.dropdownItemActive : ''}`}
                  onClick={() => { setPrice(p); setPriceOpen(false); }}
                >
                  {p}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

     
<div className={css.field}>
  <label className={css.label}>Car mileage / km</label>
 <div className={css.mileageWrapper}>
  <div className={css.mileageField}>
    <span className={css.mileagePrefix}>From</span>
    <input
      className={css.mileageInput}
      type="number"
      value={minMileage}
      onChange={(e) => setMinMileage(e.target.value)}
    />
  </div>
  <div className={css.mileageField}>
    <span className={css.mileagePrefix}>To</span>
    <input
      className={css.mileageInput}
      type="number"
      value={maxMileage}
      onChange={(e) => setMaxMileage(e.target.value)}
    />
  </div>
</div>
</div>

      {/* Кнопка пошуку */}
      <button className={css.searchBtn} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}