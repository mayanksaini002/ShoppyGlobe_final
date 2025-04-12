 ShoppyGlobe

ShoppyGlobe is a modern and fully functional e-commerce platform built with React. It provides a seamless shopping experience with features like product listing, filtering, cart management, and a smooth checkout process.

## Features

- **Product Listing**: Displays all available products dynamically.
- **Product Filtering & Search**: Users can filter products by category and search by name.
- **Shopping Cart**: Add, update, and remove items from the cart.
- **Checkout Process**: A streamlined process for reviewing cart and placing orders.
- **Responsive Design**: Optimized for mobile and desktop users.

## Tech Stack

- **Frontend**: React, React Router
- **State Management**: Redux Toolkit
- **Styling**: CSS with animations and effects
- **API Integration**: Fetching product data from an external API

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/shoppyglobe.git
   cd shoppyglobe
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
   The application will be running on `http://localhost:3000`

## Project Structure

```
shoppyglobe/
│-- src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Main page components
│   ├── redux/           # Redux state management
│   ├── hooks/           # Custom React hooks
│   ├── assets/          # Static files like images and styles
│   ├── App.js           # Main application component
│   ├── index.js         # Entry point of the application
│-- public/              # Static public files
│-- package.json         # Project dependencies and scripts
│-- README.md            # Project documentation
```

## How It Works

1. **Home Page**: Displays product categories and trending products.
2. **Product Page**: Shows product details, including price and description.
3. **Cart Page**: Users can review, update, or remove items.
4. **Checkout Page**: Finalize purchases and confirm orders.

