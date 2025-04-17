# Insights Hub: Professional Knowledge Sharing Platform

Insights Hub is a feature-rich blogging and knowledge-sharing platform designed to help professionals share their expertise across various industries. This full-stack application enables users to create, publish, and discover high-quality articles and insights.

## 🚀 Technology Stack

### Frontend
- **React** with **TypeScript** - Modern, type-safe UI development
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **Framer Motion** - Elegant animations and transitions
- **Zustand** - Lightweight state management
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests
- **React Dropzone** - File upload functionality

### Backend
- **Node.js** with **Express** - Fast, unopinionated web framework
- **MongoDB** with **Mongoose** - Flexible NoSQL database
- **JWT Authentication** - Secure user authentication
- **Helmet** - Security middleware
- **Cloudinary** - Cloud storage for media files
- **Express Validator** - Request validation

## ✨ Features

- **User Authentication**: Secure signup/signin with JWT
- **Responsive Design**: Mobile-first approach with responsive UI
- **Rich Content Creation**: User-friendly article editor
- **Media Support**: Image uploads via Cloudinary integration
- **Category Organization**: Articles organized by topic/category
- **User Profiles**: Customizable user profiles
- **Modern UI**: Clean, professional interface with animations

## 🏗️ Architecture

The application follows a modern client-server architecture:

1. **Frontend**: React SPA with component-based UI
2. **Backend**: RESTful API with Express
3. **Database**: MongoDB for data persistence
4. **Authentication**: JWT-based auth flow
5. **Cloud Storage**: Cloudinary for media storage

## 🔧 Development Setup

### Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)
- Cloudinary account

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/insights-hub.git
   cd insights-hub
   ```

2. Install frontend dependencies
   ```bash
   cd frontend
   npm install
   ```

3. Install backend dependencies
   ```bash
   cd backend
   npm install
   ```

4. Set up environment variables
   - Create `.env` in the backend directory
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
   - Create `.env` in the frontend directory
   ```
   VITE_API_URL=http://localhost:5000/api
   VITE_CLOUD_NAME=your_cloudinary_cloud_name
   VITE_UPLOAD_PRESET=your_cloudinary_upload_preset
   ```

5. Run the development servers
   - For backend:
   ```bash
   cd backend
   npm run dev
   ```
   - For frontend:
   ```bash
   cd frontend
   npm run dev
   ```

## 📱 Deployment

The application is deployed with:
- Frontend: Netlify for static hosting
- Backend: Vercel serverless functions

## 🔒 Security Implementation

- JWT-based authentication
- Password hashing with bcrypt
- HTTP security headers with Helmet
- CORS protection
- Request validation

## 📊 Future Enhancements

- Advanced search functionality
- Comment and discussion system
- User analytics dashboard
- Newsletter integration
- Rich text editor

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Developed with ❤️ as a demonstration of full-stack development capabilities. 