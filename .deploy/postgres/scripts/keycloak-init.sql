-- Keycloak table creation
-- Keycloak database Creation

-- Create access role for keycloak
CREATE ROLE keycloak WITH PASSWORD 'keycloak123' NOSUPERUSER LOGIN;

-- Create database for keycloak
CREATE DATABASE keycloak;

-- Grant all permissions to user keycloak
GRANT ALL ON  DATABASE keycloak TO keycloak;
