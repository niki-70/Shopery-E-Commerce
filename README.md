# Shopery E-Commerce

Shopery E-Commerce is a frontend ecommerce storefront built with React and Vite. It includes a homepage, shop flow, product views, blog pages, account-style screens, and a cart experience powered by React context.

Live URL: add your deployed Vercel URL here

## What You Can Do

- Browse the storefront homepage, featured sections, banners, and promotional content
- Explore the shop page with product filters and product listings
- View product details and shopping-related modal components
- Open blog, about, contact, and FAQs pages
- Navigate account-style pages such as dashboard, order history, wishlist, settings, and shopping cart
- Add and remove products from the cart using shared React context state
- Use legacy account URLs that automatically redirect to the current route structure

## Features

- React 19 single-page application powered by Vite
- Tailwind CSS v4 styling
- Shared cart state with `CartContext`
- Client-side routing with `react-router-dom`
- Public marketing pages and account-style dashboard pages
- Reusable UI components for cards, buttons, breadcrumbs, testimonials, and modals
- Static product, blog, category, testimonial, and feedback data stored inside `src/Data`
- Centralized route constants with support for legacy redirects

## Tech Stack

- Frontend: React 19, JavaScript, Vite 6
- Routing: `react-router-dom`
- Styling: Tailwind CSS 4
- State Management: React Context API
- Linting: ESLint 9
- Package Manager: npm
- Deployment: Vercel

## How It Works

1. `src/main.jsx` mounts the app inside `BrowserRouter` and wraps it with `CartProvider`.
2. `src/App.jsx` defines the main route tree and renders the global `Navbar` and `Footer`.
3. Public pages such as home, shop, blog, contact, about, FAQs, login, and create account are served through React Router.
4. Account-style routes live under `/account/...` and include dashboard, order history, wishlist, settings, and cart screens.
5. Product and content sections read from static data files inside `src/Data`.
6. Cart actions are managed in `src/context/CartContext.jsx`, where products can be added, toggled, or removed across the app.

## Route Overview

- `/` home page
- `/shop` shop listing with filters and vegetable/product sections
- `/product` product page route
- `/blog` blog page
- `/about` about page
- `/contact` contact page
- `/faqs` FAQs page
- `/login` login page UI
- `/create` create account page UI
- `/trackorder` order tracking/details page
- `/account/dashboard` dashboard page
- `/account/order-history` order history page
- `/account/settings` settings page
- `/account/wishlist` wishlist page
- `/account/shopping-cart` shopping cart page

## Project Structure

```text
src/
  components/      Reusable UI pieces, cards, lists, filters, and modals
  context/         Shared React context, including cart state
  layout/          Navbar and footer layout sections
  pages/           Public pages, account pages, and route wrappers
  Data/            Static content and product datasets
  assets/          Images, icons, fonts, and other static assets
  constants/       Route constants
```

## Installation

### 1. Clone

```bash
git clone https://github.com/pawanshekhawat/Shopery-E-Commerce.git
cd Shopery-E-Commerce
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Default local URL:

```text
http://localhost:5173
```

### 4. Create a production build

```bash
npm run build
```

### 5. Preview the production build locally

```bash
npm run preview
```

## Available Scripts

- `npm run dev` starts the Vite development server
- `npm run build` creates the production build
- `npm run preview` serves the production build locally
- `npm run lint` runs ESLint

## Deployment Notes

- This project is ready to deploy on Vercel as a static frontend app.
- Because Vercel builds on Linux, asset import paths must match file names exactly, including uppercase and lowercase letters.
- Prefer importing images like `import logo from "../assets/Images/...";` and then using `<img src={logo} />` instead of hardcoded string paths.
- The current Vite setup does not define a `src` alias, so relative imports like `../` and `../../` are the correct approach unless an alias is added later in `vite.config.js`.

## What To Improve Next

- Persist cart state to `localStorage` so items survive refreshes
- Add product quantity increment and decrement behavior in the cart
- Connect login and create account screens to a real authentication backend
- Add search, sorting, and real filtering logic for the shop page
- Replace static datasets with API-driven product and blog content
- Add responsive QA and accessibility improvements across forms and navigation

## Contribution

Contributions are welcome. Open an issue or start a discussion before major changes so the implementation direction stays aligned.

## License

MIT License | Open Source Initiative
