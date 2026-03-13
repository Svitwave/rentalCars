import Link from "next/link";
import css from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={css.page}>
      <h1 className={css.code}>404</h1>
      <p className={css.message}>Page not found</p>
      <Link href="/" className={css.link}>
        Go home
      </Link>
    </div>
  );
}
