"""
Request validation utilities for API endpoints.
"""

from flask import request, jsonify
from functools import wraps
import uuid
from datetime import datetime

def validate_json(required_fields=None):
    """Decorator to validate JSON request data."""
    def decorator(f):
        @wraps(f)
        def decorated_function(*args, **kwargs):
            if not request.is_json:
                return jsonify({
                    'error': {
                        'code': 'INVALID_CONTENT_TYPE',
                        'message': 'Request must be JSON',
                        'details': {'expected': 'application/json', 'received': request.content_type}
                    },
                    'request_id': str(uuid.uuid4()),
                    'timestamp': datetime.utcnow().isoformat()
                }), 400
            
            data = request.get_json()
            if not data:
                return jsonify({
                    'error': {
                        'code': 'EMPTY_REQUEST_BODY',
                        'message': 'Request body cannot be empty',
                        'details': {}
                    },
                    'request_id': str(uuid.uuid4()),
                    'timestamp': datetime.utcnow().isoformat()
                }), 400
            
            # Check required fields
            if required_fields:
                missing_fields = []
                for field in required_fields:
                    if field not in data:
                        missing_fields.append(field)
                
                if missing_fields:
                    return jsonify({
                        'error': {
                            'code': 'MISSING_REQUIRED_FIELDS',
                            'message': f'Missing required fields: {", ".join(missing_fields)}',
                            'details': {'missing_fields': missing_fields}
                        },
                        'request_id': str(uuid.uuid4()),
                        'timestamp': datetime.utcnow().isoformat()
                    }), 400
            
            return f(*args, **kwargs)
        return decorated_function
    return decorator

def validate_artisan_info(artisan_info):
    """Validate artisan information data."""
    required_fields = ['name', 'craft_type', 'location', 'experience_years', 'specialties', 'language']
    errors = []
    
    for field in required_fields:
        if field not in artisan_info:
            errors.append(f'Missing required field: {field}')
        elif not artisan_info[field]:
            errors.append(f'Field {field} cannot be empty')
    
    # Validate specific field types
    if 'experience_years' in artisan_info:
        try:
            years = int(artisan_info['experience_years'])
            if years < 0 or years > 100:
                errors.append('experience_years must be between 0 and 100')
        except (ValueError, TypeError):
            errors.append('experience_years must be a valid integer')
    
    if 'specialties' in artisan_info:
        if not isinstance(artisan_info['specialties'], list):
            errors.append('specialties must be a list')
        elif len(artisan_info['specialties']) == 0:
            errors.append('specialties list cannot be empty')
    
    return errors

def validate_generation_options(generation_options):
    """Validate generation options data."""
    errors = []
    
    valid_lengths = ['brief', 'standard', 'detailed']
    valid_focuses = ['technical', 'personal', 'artistic']
    valid_tones = ['professional', 'casual', 'artistic']
    
    if 'length' in generation_options and generation_options['length'] not in valid_lengths:
        errors.append(f'length must be one of: {", ".join(valid_lengths)}')
    
    if 'focus' in generation_options and generation_options['focus'] not in valid_focuses:
        errors.append(f'focus must be one of: {", ".join(valid_focuses)}')
    
    if 'tone' in generation_options and generation_options['tone'] not in valid_tones:
        errors.append(f'tone must be one of: {", ".join(valid_tones)}')
    
    return errors