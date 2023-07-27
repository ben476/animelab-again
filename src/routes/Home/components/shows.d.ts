
interface ShowsResponse {
    total: number;
    items: Show[];
    __class__: string;
    __href__: string;
    __resource_key__: string;
    __links__: Links2;
    __actions__: ExtendedMaturityRating;
  }
  
  interface Links2 {
    continuation: Resource;
  }
  
  interface Show {
    external_id: string;
    promo_description: string;
    new: boolean;
    images: Images;
    series_metadata: SeriesMetadata;
    description: string;
    id: string;
    title: string;
    __actions__: ExtendedMaturityRating;
    __class__: string;
    __href__: string;
    last_public: string;
    new_content: boolean;
    channel_id: string;
    promo_title: string;
    slug_title: string;
    slug: string;
    linked_resource_key: string;
    __links__: Links;
    type: string;
  }
  
  interface Links {
    resource: Resource;
    'resource/channel': Resource;
  }
  
  interface Resource {
    href: string;
  }
  
  interface SeriesMetadata {
    audio_locales: string[];
    availability_notes: string;
    episode_count: number;
    extended_description: string;
    extended_maturity_rating: ExtendedMaturityRating;
    is_dubbed: boolean;
    is_mature: boolean;
    is_simulcast: boolean;
    is_subbed: boolean;
    mature_blocked: boolean;
    maturity_ratings: string[];
    season_count: number;
    series_launch_year: number;
    subtitle_locales: string[];
    tenant_categories?: string[];
  }
  
  interface ExtendedMaturityRating {
  }
  
  interface Images {
    poster_tall: Poster[][];
    poster_wide: Poster[][];
  }
  
  interface Poster {
    height: number;
    source: string;
    type: string;
    width: number;
  }