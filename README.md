
# 🚍 Swift-Track

A full-stack, dynamic, and responsive bus booking platform that allows users to seamlessly manage bus bookings and administrators to handle buses, users, and bookings efficiently.

## 📂 Project Structure

```
Swift-Track/
│
├── client/             # React Frontend
├── config/             # Configuration files
├── middlewares/        # Express.js Middlewares
├── models/             # MongoDB Schemas and Models
├── node_modules/       # Node.js Modules
├── nodemailer/         # Emailing functionality for booking confirmation
├── routes/             # API routes for backend operations
│
├── .env                # Environment variables
├── .gitignore          # Ignored files for Git
├── package.json        # Project dependencies
├── package-lock.json   # Lockfile for project dependencies
├── server.js           # Node.js Express server entry point
├── vercel.json         # Vercel deployment configuration
```

## 🌟 Features

- **Full-stack development**: Built with React on the frontend and Node.js with Express on the backend.
- **CRUD Operations**: Users can create, read, update, and delete bookings. Administrators can manage buses, users, and bookings.
- **Responsive Design**: Ensures a smooth experience across devices.
- **Race Condition Prevention**: Implements a restriction feature to prevent multiple users from booking the same bus simultaneously.
- **Admin Dashboard**: Allows administrators to manage buses, block/unblock users, and assign admin privileges.
- **Polished UI**: Uses Ant Design for an intuitive and user-friendly interface.
  
## 🔧 Tools and Technologies

- **Frontend**: JavaScript, React, Redux, CSS, HTML, Ant Design
- **Backend**: Node.js, Express.js, MongoDB, JWT
- **Deployment**: Vercel
- **Other**: Nodemailer, REST APIs

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Shashwat7012/swift-track.git
   ```
   
2. **Navigate to the project directory**:
   ```bash
   cd swift-track
   ```

3. **Install the dependencies**:
   ```bash
   npm install
   cd client
   npm install
   ```

4. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following variables:
   ```bash
    MONGODB_URI=mongodb+srv://username:password@cluster0.mongodb.net/
    JWT_SECRET=YourSecretKey
    PORT=5000
    STRIPE_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    EMAIL=your_email@example.com
    MAIL_PASSWORD=your_mail_password
    NODE_ENV=production
   ```

5. **Start the development server**:
   - For the backend:
     ```bash
     npm run server
     ```
   - For the frontend:
     ```bash
     cd client
     npm start
     ```

6. **Open the app**:
   The frontend will run on [http://localhost:3000](http://localhost:3000), and the backend will run on [http://localhost:5000](http://localhost:5000).

## ✨ Demo

You can check out the deployed version of the app [here](https://swift-track.vercel.app/).

## 📑 Features in Detail

- **Booking System**: Users can browse buses and book their tickets in real-time.
- **Admin Dashboard**: Admins can add new buses, edit existing buses, and manage users and bookings efficiently.
- **Security**: JWT-based authentication and authorization.
- **Data Integrity**: Ensures race conditions are avoided with booking restrictions, ensuring data consistency.


## 📝 Conclusion
**Swift Track** is designed to provide an efficient and user-friendly experience for both users and administrators in managing bus bookings. With its responsive design, real-time booking capabilities, and robust security features, Swift Track stands out as a reliable platform in the bus booking industry. Whether you're a user looking to book your next journey or an admin managing bookings, Swift Track offers the tools you need to ensure a seamless experience. Thank you for checking out **Swift Track.**
