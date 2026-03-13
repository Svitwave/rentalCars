# RentalCar 🚗

A modern web application for renting cars, built with Next.js and TypeScript.

## 🌐 Live Demo

[View on Vercel](https://rental-cars-gamma-six.vercel.app/) ← замінити після деплою

## 📋 Description

RentalCar is a frontend web application for a car rental company. Users can browse available vehicles, filter by brand, price, and mileage, save favorites, and book a car directly on the site.

## ✨ Features

- 🏠 **Home page** — hero banner with call-to-action button
- 🔍 **Catalog** — browse all available cars with filtering
- ❤️ **Favorites** — save cars to favorites (persists on page reload)
- 🔎 **Filters** — filter by brand, price, and mileage (backend filtering)
- 📄 **Pagination** — load more cars with "Load more" button
- 🚗 **Car details** — detailed info, specifications, accessories
- 📅 **Booking form** — rent a car with a simple form
- ⚡ **Loading state** — animated car loader during data fetching

## 🛠️ Tech Stack

- [Next.js 15](https://nextjs.org/) — React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) — type safety
- [Zustand](https://zustand-demo.pmnd.rs/) — global state management
- [Axios](https://axios-http.com/) — HTTP requests
- [CSS Modules](https://nextjs.org/docs/app/building-your-application/styling/css-modules) — component styles

## 📁 Project Structure
```
src/
  app/
    page.tsx              # Home page
    catalog/
      page.tsx            # Catalog page
      [id]/
        page.tsx          # Car details page
  components/
    layout/               # Header
    home/                 # Banner
    catalog/              # CarCard, Filters, CarList, BookingForm
    icons/                # SVG Icon component
    ui/                   # Loader
  store/
    carStore.ts           # Zustand store
  lib/
    api.ts                # Axios API client
  types/
    car.ts                # TypeScript types
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Svitwave/rentalCars.git
cd rental-car
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production
```bash
npm run build
npm start
```

## 🔌 API

The app uses a ready-made backend API:
- Documentation: [https://car-rental-api.goit.global/api-docs/](https://car-rental-api.goit.global/api-docs/)
- Base URL: `https://car-rental-api.goit.global`

**Endpoints:**
- `GET /cars` — get list of cars with filters and pagination
- `GET /cars/:id` — get car by ID
- `GET /brands` — get list of car brands

## 👤 Author

**Your Name**
- GitHub: [@Svitwave](https://github.com/your-username)
- LinkedIn: [Svitwave](https://linkedin.com/in/your-linkedin)

## 📄 License

This project is for educational purposes.
