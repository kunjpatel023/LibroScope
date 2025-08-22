# 📚 LibroScope - AI-Powered Digital Library Platform

A modern, full-stack digital library application that combines traditional book management with cutting-edge AI features including PDF summarization, translation, and text-to-speech capabilities.

![LibroScope](https://img.shields.io/badge/Version-1.0.0-blue)
![Django](https://img.shields.io/badge/Django-5.2.5-green)
![React](https://img.shields.io/badge/React-19.1.1-blue)
![AI](https://img.shields.io/badge/AI-Powered-orange)

## 🚀 Features

### 📖 Core Library Features
- **Digital Book Management**: Upload, organize, and manage PDF books with metadata
- **Category System**: Organize books by genres and categories
- **Advanced Search**: Search books by title, author, or category
- **Reading Progress Tracking**: Save and resume reading progress across devices
- **Bookmarking System**: Save favorite books for quick access
- **Reading History**: Track completed books and reading statistics

### 🤖 AI-Powered Features
- **PDF Summarization**: Generate intelligent summaries of uploaded PDF documents
- **Multi-language Translation**: Translate summaries and content to multiple languages
- **Text-to-Speech**: Convert text content to audio for accessibility
- **Smart Recommendations**: AI-powered book recommendations based on reading history

### 🎨 Modern UI/UX
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between themes for comfortable reading
- **Smooth Animations**: Framer Motion powered page transitions and interactions
- **Modern Components**: Built with React and Tailwind CSS for a polished look

### 🔐 User Management
- **Authentication System**: Secure JWT-based authentication
- **User Profiles**: Personalized user profiles with reading statistics
- **Subscription Management**: Premium features with Stripe integration
- **Contact System**: Built-in contact form for user support

## 🛠️ Technology Stack

### Backend (Django)
- **Framework**: Django 5.2.5 with Django REST Framework
- **Database**: SQLite (development) / PostgreSQL (production ready)
- **Authentication**: JWT tokens with djangorestframework-simplejwt
- **AI/ML**: Transformers, PyTorch, scikit-learn for recommendations
- **File Processing**: PyMuPDF for PDF handling
- **Translation**: Google Translate API integration
- **Payment**: Stripe integration for subscriptions

### Frontend (React)
- **Framework**: React 19.1.1 with Vite
- **Styling**: Tailwind CSS with custom animations
- **State Management**: React Context API
- **Routing**: React Router DOM v7
- **Animations**: Framer Motion
- **PDF Viewer**: React-PDF with PDF.js
- **HTTP Client**: Axios for API communication
- **Icons**: Lucide React and React Icons

### Development Tools
- **Package Manager**: npm (frontend), pip (backend)
- **Build Tool**: Vite for fast development and optimized builds
- **Linting**: ESLint with React-specific rules
- **Version Control**: Git

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- **Python 3.8+**
- **Node.js 18+**
- **npm or yarn**
- **Git**

## 🚀 Installation & Setup

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd LibroScope
```

### Step 2: Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv env

# Activate virtual environment
# On Windows:
env\Scripts\activate
# On macOS/Linux:
source env/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run database migrations
python manage.py makemigrations
python manage.py migrate

# Create superuser (optional)
python manage.py createsuperuser

# Run the development server
python manage.py runserver
```

The backend will be available at `http://127.0.0.1:8000`

### Step 3: Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Step 4: Environment Configuration

Create a `.env` file in the backend directory with the following variables:

```env
# Django Settings
SECRET_KEY=your-secret-key-here
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1

# Database (for production)
DATABASE_URL=your-database-url

# Stripe (for payments)
STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
STRIPE_SECRET_KEY=your-stripe-secret-key

# AI Services (optional)
GOOGLE_TRANSLATE_API_KEY=your-google-translate-key
```

## 📁 Project Structure

```
LibroScope/
├── backend/                 # Django backend
│   ├── accounts/           # User management app
│   ├── books/             # Book management app
│   ├── summary/           # AI summarization app
│   ├── backend/           # Django settings
│   ├── manage.py          # Django management script
│   └── requirements.txt   # Python dependencies
├── frontend/              # React frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React context providers
│   │   ├── hooks/         # Custom React hooks
│   │   ├── layouts/       # Layout components
│   │   └── utils/         # Utility functions
│   ├── public/            # Static assets
│   └── package.json       # Node.js dependencies
└── README.md              # This file
```

## 🎯 Key Features Explained

### 1. Book Management System

The application allows users to:
- Upload PDF books with metadata (title, author, category)
- Organize books into categories
- Search and filter books
- View book details and cover images

### 2. AI-Powered Summarization

Using advanced NLP models:
- Upload PDF documents
- Generate intelligent summaries
- Store summaries for future reference
- Support for various document types

### 3. Translation & TTS

- Translate summaries to multiple languages
- Text-to-speech conversion for accessibility
- Support for various languages and voices

### 4. Reading Progress Tracking

- Save reading progress automatically
- Resume reading from where you left off
- Track reading statistics and completion rates
- Cross-device synchronization

### 5. Recommendation System

- AI-powered book recommendations
- Based on user reading history and preferences
- Collaborative filtering algorithms

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/login/` - User login
- `POST /api/auth/register/` - User registration
- `POST /api/auth/refresh/` - Refresh JWT token

### Books
- `GET /api/book/books/` - List all books
- `POST /api/book/books/` - Add new book
- `GET /api/book/books/{id}/` - Get book details
- `GET /api/book/recommend/knn/` - Get AI recommendations

### User Profile
- `GET /api/profile/` - Get user profile
- `POST /api/bookmark/{id}/` - Bookmark/unbookmark book
- `GET /api/progress/{id}/get/` - Get reading progress
- `POST /api/complete/{id}/` - Mark book as completed

### AI Features
- `POST /api/summary/summarize/` - Generate PDF summary
- `POST /api/summary/translate/` - Translate text
- `POST /api/summary/tts/` - Convert text to speech

## 🎨 UI Components

### Core Components
- **Navbar**: Navigation with theme toggle and user menu
- **Sidebar**: Category navigation and quick actions
- **BookCard**: Display book information with actions
- **BookReader**: PDF viewer with progress tracking
- **ThemeToggle**: Dark/light mode switcher

### Pages
- **LandingPage**: Welcome page with feature highlights
- **Dashboard**: Main user interface with recommendations
- **Categories**: Browse books by category
- **BookReader**: PDF reading interface
- **SummaryTranslation**: AI features interface
- **Profile**: User profile and statistics
- **Subscription**: Payment and subscription management

## 🔒 Security Features

- JWT-based authentication
- CORS configuration for frontend-backend communication
- File upload validation and sanitization
- SQL injection protection
- XSS protection
- CSRF protection

## 🚀 Deployment

### Backend Deployment (Django)

1. **Set up production database**:
   ```bash
   # Use PostgreSQL for production
   pip install psycopg2-binary
   ```

2. **Configure environment variables**:
   ```env
   DEBUG=False
   ALLOWED_HOSTS=your-domain.com
   DATABASE_URL=postgresql://user:password@host:port/dbname
   ```

3. **Collect static files**:
   ```bash
   python manage.py collectstatic
   ```

4. **Deploy with Gunicorn**:
   ```bash
   gunicorn backend.wsgi:application
   ```

### Frontend Deployment (React)

1. **Build for production**:
   ```bash
   npm run build
   ```

2. **Deploy to hosting service**:
   - Vercel
   - Netlify
   - AWS S3 + CloudFront
   - Heroku

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Django and React communities for excellent documentation
- Framer Motion for smooth animations
- Tailwind CSS for utility-first styling
- Transformers library for AI capabilities
- Stripe for payment processing

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact through the built-in contact form
- Email: support@LibroScope.com

## 🔮 Future Enhancements

- [ ] Mobile app development
- [ ] Advanced analytics dashboard
- [ ] Social features (reviews, ratings)
- [ ] Offline reading capability
- [ ] Advanced AI features (question answering, note-taking)
- [ ] Integration with external book APIs
- [ ] Multi-language interface support

---

**Made with ❤️ by the LibroScope Team**