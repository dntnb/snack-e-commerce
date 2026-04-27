<img src="https://cdn-icons-png.flaticon.com/512/10486/10486481.png" width="40" height="40" filter="brightness(0) invert(1)"/> SnackStop
A simple and clean snack ordering web app built with React. Browse a catalog of snacks, add them to your cart, adjust quantities, and place your order — all in one page.

---

## 📸 Features

- **Product Catalog** — 12 snack items displayed in a responsive grid with images, names, and prices
- **Add to Cart** — Click to add items; the button updates to show the item has been added
- **Cart Sidebar** — A slide-in panel showing all selected items with quantity controls and subtotals
- **Live Order Summary** — Real-time item count badge on the cart button and running total in the sidebar
- **Order Confirmation** — A receipt-style summary screen shown after placing an order
- **Order Again** — Reset the entire app back to the catalog with one click

---

## 🛠️ Built With

- [React](https://reactjs.org/) — UI and state management via `useState`
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) — Custom styling with Google Fonts (Figtree)
- No external libraries or UI frameworks — built from scratch

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/snackstop.git

# Navigate into the project folder
cd snackstop

# Install dependencies
npm install

# Start the development server
npm start
```

The app will open at `http://localhost:3000`.

---

## 📁 Project Structure

```
snackstop/
├── src/
│   ├── App.js       # Main component — catalog, cart logic, order flow
│   └── App.css      # All styles for the app
├── public/
│   └── index.html
└── package.json
```

---

## 🧠 How It Works

- Product data (names, prices, images) is stored as arrays at the top of `App.js`
- Cart state is a number array (one slot per product) tracking quantity per item
- `pricecounter()` calculates the total by multiplying each item's quantity by its price
- `showCart` and `isDone` booleans control which view is rendered

---

## 🎨 Design Highlights

- Dark navy (`#00072D`) brand color throughout
- Sticky top navigation bar with a live cart badge
- Slide-in cart sidebar with smooth animation
- Hover effects on product cards (lift + shadow)
- Fully responsive — stacks to 2 columns on smaller screens

---
