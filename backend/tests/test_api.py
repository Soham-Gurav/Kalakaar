"""
Unit tests for API endpoints.
"""

import pytest
import json
from app import create_app
from config import TestingConfig

@pytest.fixture
def app():
    """Create application for testing."""
    app = create_app(TestingConfig)
    return app

@pytest.fixture
def client(app):
    """Create test client."""
    return app.test_client()

def test_health_check(client):
    """Test health check endpoint."""
    response = client.get('/api/v1/health')
    assert response.status_code == 200
    
    data = json.loads(response.data)
    assert data['status'] == 'healthy'
    assert data['service'] == 'kalakaar-artisan-platform'
    assert 'timestamp' in data

def test_supported_languages(client):
    """Test supported languages endpoint."""
    response = client.get('/api/v1/supported-languages')
    assert response.status_code == 200
    
    data = json.loads(response.data)
    assert 'languages' in data
    assert len(data['languages']) > 0
    
    # Check that English is included
    language_codes = [lang['code'] for lang in data['languages']]
    assert 'en' in language_codes

def test_404_error_handling(client):
    """Test 404 error handling."""
    response = client.get('/api/v1/nonexistent')
    assert response.status_code == 404
    
    data = json.loads(response.data)
    assert data['error']['code'] == 'NOT_FOUND'
    assert 'request_id' in data
    assert 'timestamp' in data