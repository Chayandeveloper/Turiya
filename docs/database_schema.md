# Turiya Football - Laravel & MySQL Backend Architecture Guide

This document defines the schema, table migrations, relationships, and REST endpoints for the Turiya Football backend system.

## 1. Core Database Entities (MySQL 8.0+)

### `users`
- `id` (bigint unsigned, PK)
- `name` (varchar 255)
- `email` (varchar 255, unique)
- `phone` (varchar 20, unique)
- `role` (enum: 'admin', 'player', 'coach', 'club_admin', 'academy_admin', 'organiser', 'referee', 'physio', 'supporter')
- `email_verified_at` (timestamp, nullable)
- `password` (varchar 255)
- `avatar_url` (varchar 500, nullable)
- `created_at`, `updated_at`

### `locations`
- `id` (bigint unsigned, PK)
- `district` (varchar 100)
- `state` (varchar 100)
- `pincode` (varchar 10)
- `latitude` (decimal 10,7, nullable)
- `longitude` (decimal 10,7, nullable)

### `clubs`
- `id` (bigint unsigned, PK)
- `user_id` (FK -> users.id)
- `location_id` (FK -> locations.id)
- `name` (varchar 255)
- `slug` (varchar 255, unique)
- `short_name` (varchar 50)
- `logo_url` (varchar 500)
- `cover_url` (varchar 500)
- `founded_year` (smallint)
- `home_ground` (varchar 255)
- `coach_name` (varchar 150)
- `coach_title` (varchar 100)
- `about` (text)
- `is_verified` (boolean, default false)

### `players`
- `id` (bigint unsigned, PK)
- `user_id` (FK -> users.id, nullable)
- `club_id` (FK -> clubs.id, nullable)
- `location_id` (FK -> locations.id)
- `slug` (varchar 255, unique)
- `first_name` (varchar 100)
- `last_name` (varchar 100)
- `position` (enum: 'Forward', 'Midfielder', 'Defender', 'Goalkeeper', 'Winger')
- `date_of_birth` (date)
- `jersey_number` (smallint)
- `preferred_foot` (enum: 'Right', 'Left', 'Both')
- `height_cm` (smallint)
- `weight_kg` (smallint)
- `photo_url` (varchar 500)
- `biography` (text)
- `pace` (tinyint), `finishing` (tinyint), `passing` (tinyint), `dribbling` (tinyint), `physical` (tinyint)
- `total_matches` (int, default 0)
- `total_goals` (int, default 0)
- `total_assists` (int, default 0)
- `clean_sheets` (int, default 0)

### `academies`
- `id` (bigint unsigned, PK)
- `user_id` (FK -> users.id)
- `location_id` (FK -> locations.id)
- `name` (varchar 255)
- `slug` (varchar 255, unique)
- `head_coach` (varchar 150)
- `coach_license` (varchar 50)
- `training_days` (varchar 255)
- `phone` (varchar 20)
- `email` (varchar 150)
- `ground_address` (text)
- `about` (text)
- `image_url` (varchar 500)

### `tournaments`
- `id` (bigint unsigned, PK)
- `organiser_user_id` (FK -> users.id)
- `location_id` (FK -> locations.id)
- `name` (varchar 255)
- `slug` (varchar 255, unique)
- `venue` (varchar 255)
- `dates_label` (varchar 100)
- `start_date` (date)
- `end_date` (date)
- `teams_count` (int)
- `prize_pool` (varchar 100)
- `entry_fee` (varchar 100)
- `registration_deadline` (date)
- `status` (enum: 'Registration Open', 'Upcoming', 'Ongoing', 'Completed')
- `category` (enum: 'U-17', 'U-19', 'Open Category', 'Grassroots Cup')
- `image_url` (varchar 500)
- `rules_json` (json)
- `description` (text)

### `leagues`
- `id` (bigint unsigned, PK)
- `name` (varchar 255)
- `slug` (varchar 255, unique)
- `tagline` (varchar 255)
- `current_season` (varchar 50)
- `status` (enum: 'Active', 'Upcoming', 'Completed')
- `image_url` (varchar 500)
- `description` (text)

### `league_teams` (Pivot)
- `id` (bigint unsigned, PK)
- `league_id` (FK -> leagues.id)
- `club_id` (FK -> clubs.id)
- `played` (int, default 0)
- `won` (int, default 0)
- `drawn` (int, default 0)
- `lost` (int, default 0)
- `goals_for` (int, default 0)
- `goals_against` (int, default 0)
- `points` (int, default 0)

### `matches`
- `id` (bigint unsigned, PK)
- `league_id` (FK -> leagues.id, nullable)
- `tournament_id` (FK -> tournaments.id, nullable)
- `home_club_id` (FK -> clubs.id)
- `away_club_id` (FK -> clubs.id)
- `home_score` (tinyint, nullable)
- `away_score` (tinyint, nullable)
- `match_date` (datetime)
- `venue` (varchar 255)
- `status` (enum: 'Scheduled', 'Live', 'Finished', 'Postponed')
- `round` (varchar 50)

### `opportunities`
- `id` (bigint unsigned, PK)
- `slug` (varchar 255, unique)
- `category` (enum: 'Player', 'Coach', 'Referee', 'Physiotherapist', 'Organiser')
- `title` (varchar 255)
- `organization` (varchar 255)
- `location` (varchar 255)
- `date_label` (varchar 100)
- `deadline` (varchar 100)
- `eligibility` (varchar 255)
- `compensation` (varchar 255, nullable)
- `status` (enum: 'Active', 'Closing Soon', 'Completed')
- `description` (text)
- `responsibilities_json` (json)
- `requirements_json` (json)
- `contact_email` (varchar 150)

### `applications`
- `id` (bigint unsigned, PK)
- `opportunity_id` (FK -> opportunities.id)
- `applicant_name` (varchar 150)
- `applicant_email` (varchar 150)
- `applicant_phone` (varchar 20)
- `applicant_age` (smallint)
- `experience_summary` (text)
- `status` (enum: 'Submitted', 'Under Review', 'Shortlisted', 'Rejected')

### `stories` & `news`
- `id` (bigint unsigned, PK)
- `slug` (varchar 255, unique)
- `title` (varchar 255)
- `subtitle` (varchar 255, nullable)
- `category` (varchar 50)
- `author` (varchar 100)
- `image_url` (varchar 500)
- `excerpt` (text)
- `content_json` (json)
- `quote_json` (json, nullable)

## 2. Laravel REST API Endpoints
- `GET /api/v1/stats/impact`
- `GET /api/v1/leagues` & `GET /api/v1/leagues/{slug}`
- `GET /api/v1/tournaments` & `GET /api/v1/tournaments/{slug}`
- `POST /api/v1/tournaments/{slug}/register`
- `GET /api/v1/players` & `GET /api/v1/players/{slug}`
- `GET /api/v1/clubs` & `GET /api/v1/clubs/{slug}`
- `GET /api/v1/academies` & `GET /api/v1/academies/{slug}`
- `GET /api/v1/opportunities` & `GET /api/v1/opportunities/{slug}`
- `POST /api/v1/opportunities/{slug}/apply`
- `GET /api/v1/stories` & `GET /api/v1/stories/{slug}`
- `GET /api/v1/news`
