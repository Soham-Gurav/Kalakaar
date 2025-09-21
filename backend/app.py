"""
Flask application factory for the Kalakaar Artisan Profile Platform.
"""

from flask import Flask
from flask_cors import CORS
from config import Config

def create_app(config_class=Config):
    """Create and configure the Flask application."""
    app = Flask(__name__)
    app.config.from_object(config_class)
    
    # Configure CORS for Next.js frontend
    CORS(app, origins=app.config['CORS_ORIGINS'])
    
    # Register blueprints
    from api.routes import api_bp
    app.register_blueprint(api_bp, url_prefix='/api/v1')
    
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, host='0.0.0.0', port=5000)