"""
API routes for the Artisan Profile Platform.
"""

from flask import Blueprint, jsonify, request
from datetime import datetime
import uuid

api_bp = Blueprint('api', __name__)

@api_bp.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint."""
    return jsonify({
        'status': 'healthy',
        'service': 'kalakaar-artisan-platform',
        'version': '1.0.0',
        'timestamp': datetime.utcnow().isoformat()
    })

@api_bp.route('/supported-languages', methods=['GET'])
def supported_languages():
    """Get list of supported languages for profile generation."""
    return jsonify({
        'languages': [
            {'code': 'en', 'name': 'English'},
            {'code': 'es', 'name': 'Spanish'},
            {'code': 'fr', 'name': 'French'},
            {'code': 'de', 'name': 'German'},
            {'code': 'it', 'name': 'Italian'},
            {'code': 'pt', 'name': 'Portuguese'},
            {'code': 'hi', 'name': 'Hindi'},
            {'code': 'zh', 'name': 'Chinese'},
            {'code': 'ja', 'name': 'Japanese'},
            {'code': 'ar', 'name': 'Arabic'},
            {'code': 'ru', 'name': 'Russian'},
            {'code': 'ko', 'name': 'Korean'}
        ]
    })

@api_bp.errorhandler(404)
def not_found(error):
    """Handle 404 errors."""
    return jsonify({
        'error': {
            'code': 'NOT_FOUND',
            'message': 'The requested resource was not found',
            'details': {}
        },
        'request_id': str(uuid.uuid4()),
        'timestamp': datetime.utcnow().isoformat()
    }), 404

@api_bp.errorhandler(500)
def internal_error(error):
    """Handle 500 errors."""
    return jsonify({
        'error': {
            'code': 'INTERNAL_ERROR',
            'message': 'An internal server error occurred',
            'details': {}
        },
        'request_id': str(uuid.uuid4()),
        'timestamp': datetime.utcnow().isoformat()
    }), 500