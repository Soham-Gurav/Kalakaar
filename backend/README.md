# Kalakaar Artisan Profile Platform - Backend

A Flask backend API for the Kalakaar platform that generates AI-powered artisan profiles using Google's Gemini AI.

## Features

- AI-powered artisan profile generation using Gemini AI
- Multi-language support for profile content
- Cultural context integration
- RESTful API with comprehensive error handling
- SQLite database for development (PostgreSQL-ready for production)
- CORS support for Next.js frontend integration

## Setup

### Prerequisites

- Python 3.8 or higher
- pip (Python package installer)

### Installation

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env and add your Gemini API key and other configuration
```

4. Initialize the database:
```bash
python -c "from app import create_app, db; app = create_app(); app.app_context().push(); db.create_all()"
```

5. Run the application:
```bash
python app.py
```

The API will be available at `http://localhost:5000`

## API Endpoints

### Health and Utility
- `GET /api/v1/health` - Health check
- `GET /api/v1/supported-languages` - List supported languages

### Profiles (Coming in next tasks)
- `POST /api/v1/profiles/generate` - Generate artisan profile
- `GET /api/v1/profiles/{profile_id}` - Retrieve profile
- `PUT /api/v1/profiles/{profile_id}` - Update profile
- `DELETE /api/v1/profiles/{profile_id}` - Delete profile
- `GET /api/v1/profiles/search` - Search profiles

## Configuration

The application uses environment variables for configuration. See `.env.example` for all available options.

### Required Environment Variables

- `GEMINI_API_KEY` - Your Google Gemini API key

### Optional Environment Variables

- `FLASK_ENV` - Environment (development/production)
- `DATABASE_URL` - Database connection string
- `CORS_ORIGINS` - Allowed CORS origins (comma-separated)
- `SECRET_KEY` - Flask secret key

## Testing

Run tests with:
```bash
pytest
```

Run tests with coverage:
```bash
pytest --cov=. --cov-report=html
```

## Project Structure

```
backend/
├── app.py                 # Flask application factory
├── config.py             # Configuration management
├── requirements.txt      # Python dependencies
├── models/
│   ├── __init__.py
│   ├── profile.py        # Profile data models (coming next)
│   └── database.py       # Database utilities
├── services/
│   ├── __init__.py
│   ├── ai_generator.py   # Gemini AI integration (coming next)
│   ├── profile_service.py # Business logic (coming next)
│   └── language_service.py # Language processing (coming next)
├── api/
│   ├── __init__.py
│   ├── routes.py         # API endpoints
│   └── validators.py     # Request validation
└── tests/
    ├── __init__.py
    ├── test_api.py       # API tests
    └── test_services.py  # Service tests (coming next)
```

## Development

### Adding New Endpoints

1. Add route handlers to `api/routes.py`
2. Add validation logic to `api/validators.py`
3. Add corresponding tests to `tests/test_api.py`

### Adding New Services

1. Create service class in `services/`
2. Add service to `services/__init__.py`
3. Add tests in `tests/test_services.py`

## Deployment

The application is ready for deployment to platforms like Heroku, Railway, or any cloud provider that supports Python applications.

For production deployment:
1. Set `FLASK_ENV=production`
2. Use a production database (PostgreSQL recommended)
3. Set a secure `SECRET_KEY`
4. Configure proper CORS origins