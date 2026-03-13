import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.overlay}>
      <div className={css.road}>
        <div className={css.carWrapper}>
          <span className={css.car}>🚗</span>
        </div>
        <div className={css.roadLine} />
      </div>
      <div className={css.dots}>
        <div className={css.dot} />
        <div className={css.dot} />
        <div className={css.dot} />
      </div>
    </div>
  );
}