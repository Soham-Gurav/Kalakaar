"""
Profile data models without database persistence.
"""

from dataclasses import dataclass, field
from typing import List, Optional, Dict, Any
from datetime import datetime
import uuid

@dataclass
class ArtisanInfo:
    """Artisan information data model."""
    name: str
    craft_type: str
    location: str
    experience_years: int
    specialties: List[str]
    language: str
    bio: Optional[str] = None

@dataclass
class GenerationOptions:
    """Profile generation options."""
    length: str = "standard"  # brief, standard, detailed
    focus: str = "balanced"   # technical, personal, artistic
    tone: str = "professional"  # professional, casual, artistic
    output_language: str = "en"
    include_cultural_context: bool = True

@dataclass
class GeneratedProfile:
    """Generated profile content."""
    title: str
    background_story: str
    specialties: str
    artistic_philosophy: str
    notable_works: str
    cultural_context: Optional[str] = None

@dataclass
class ProfileData:
    """Complete profile data structure."""
    profile_id: str = field(default_factory=lambda: str(uuid.uuid4()))
    generated_profile: Optional[GeneratedProfile] = None
    artisan_info: Optional[ArtisanInfo] = None
    generation_options: Optional[GenerationOptions] = None
    metadata: Dict[str, Any] = field(default_factory=dict)
    created_at: datetime = field(default_factory=datetime.utcnow)
    updated_at: datetime = field(default_factory=datetime.utcnow)

    def to_dict(self) -> Dict[str, Any]:
        """Convert profile data to dictionary for JSON serialization."""
        return {
            'profile_id': self.profile_id,
            'generated_profile': {
                'title': self.generated_profile.title if self.generated_profile else '',
                'background_story': self.generated_profile.background_story if self.generated_profile else '',
                'specialties': self.generated_profile.specialties if self.generated_profile else '',
                'artistic_philosophy': self.generated_profile.artistic_philosophy if self.generated_profile else '',
                'notable_works': self.generated_profile.notable_works if self.generated_profile else '',
                'cultural_context': self.generated_profile.cultural_context if self.generated_profile else None
            },
            'artisan_info': {
                'name': self.artisan_info.name if self.artisan_info else '',
                'craft_type': self.artisan_info.craft_type if self.artisan_info else '',
                'location': self.artisan_info.location if self.artisan_info else '',
                'experience_years': self.artisan_info.experience_years if self.artisan_info else 0,
                'specialties': self.artisan_info.specialties if self.artisan_info else [],
                'language': self.artisan_info.language if self.artisan_info else 'en',
                'bio': self.artisan_info.bio if self.artisan_info else None
            },
            'generation_options': {
                'length': self.generation_options.length if self.generation_options else 'standard',
                'focus': self.generation_options.focus if self.generation_options else 'balanced',
                'tone': self.generation_options.tone if self.generation_options else 'professional',
                'output_language': self.generation_options.output_language if self.generation_options else 'en',
                'include_cultural_context': self.generation_options.include_cultural_context if self.generation_options else True
            },
            'metadata': self.metadata,
            'created_at': self.created_at.isoformat(),
            'updated_at': self.updated_at.isoformat()
        }