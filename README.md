# Bus Ticket Booking System (FRONTEND)

This is the frontend for the **Bus Ticket Booking System**, built using **Next.js**. It provides an intuitive and user-friendly interface for users to search, book, and manage bus tickets.

## 🚀 Features

- **User Authentication** (Sign up, Login, Logout)
- **Book Bus Tickets** with real-time availability
- **View Booking History**
- **Search for Buses** by route
- **Email Notifications** for booking confirmations
- **Responsive UI** for all devices

## 🛠️ Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS
- **State Management:** Context API / Redux (if needed)
- **API Communication:** Axios
- **Authentication:** JWT (JSON Web Tokens)

## 📂 Project Structure

```
frontend/
│── components/       # Reusable UI components
│── pages/            # Next.js pages
│── public/           # Static assets (e.g., images, icons)
│── styles/           # Global styles
│── utils/            # Helper functions
│── services/         # API calls
│── context/          # Context API setup (if used)
│── package.json      # Project dependencies
│── README.md         # Documentation
```

## 📦 Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/bus-ticket-booking-frontend.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd bus-ticket-booking-frontend
   ```
3. **Install dependencies:**
   ```sh
   npm install  # or yarn install
   ```
4. **Create a `.env.local` file and add your API base URL:**
   ```sh
   NEXT_PUBLIC_API_BASE_URL=https://your-backend-url.com/api
   ```
5. **Run the development server:**
   ```sh
   npm run dev  # or yarn dev
   ```
6. **Open the app in your browser:**
   ```sh
   http://localhost:3000
   ```

## 🔗 API Integration

The frontend communicates with the backend via RESTful APIs. Ensure the backend is running and update the API base URL in `.env.local`.

## 🚀 Deployment

To deploy on Vercel:

1. **Login to Vercel:**
   ```sh
   vercel login
   ```
2. **Deploy the project:**
   ```sh
   vercel
   ```

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or create pull requests.

## 📜 License

This project is licensed under the MIT License.
