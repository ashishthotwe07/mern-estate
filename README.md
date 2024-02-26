
---

# MERN Real Estate Application

Welcome to the MERN Real Estate Application! This application allows users to list, sell, or rent properties, search for properties based on keywords, and contact sellers. Owners can also edit their listings. The application is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) along with Redux Toolkit for state management.

## Features

- **User Authentication**: Users can sign up, log in, and log out securely.
- **Property Listings**: Users can list properties for sale or rent.
- **Search Functionality**: Users can search for properties based on keywords.
- **Contact Sellers**: Users can contact sellers for more information about a property.
- **Owner Privileges**: Owners can edit their property listings.

## Technologies Used

- **Frontend**:
  - React.js: Frontend library for building user interfaces.
  - Redux: State management library for managing application state.
  - React Router: Library for handling routing in React applications.
  - Tailwind css:for styling

- **Backend**:
  - Node.js: JavaScript runtime environment for building scalable server-side applications.
  - Express.js: Web application framework for Node.js.
  - MongoDB: NoSQL database for storing application data.
  - Mongoose: MongoDB object modeling tool for Node.js.
  - JSON Web Tokens (JWT): Secure authentication mechanism for user authentication.

## Setup Instructions

1. **Clone the Repository**:
   ```
   git clone 
   cd mern-estate
   ```

2. **Install Dependencies**:
   - Navigate to the `client` directory and install frontend dependencies:
     ```
     cd client
     npm install
     ```

   - Navigate to the `server` directory and install backend dependencies:
     ```
     npm install
     ```

3. **Set Environment Variables**:
   - Create a `.env` file in the `server` directory and add the following environment variables:
     ```
     PORT=5000
     MONGO=your_mongodb_uri
     JWT_SECRET=your_jwt_secret
     ```

4. **Start the Development Servers**:
   - Start the backend server:
     ```
     npm run dev
     ```

   - Start the frontend development server:
     ```
     cd client
     npm start
     ```


