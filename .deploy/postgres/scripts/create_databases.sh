#!/bin/bash

set -e
set -u

function create_user_and_database() {
	local database=$1
	local username=$2
	local password=$3
	echo "  Creating user '$username' and database '$database'"
	psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
	    CREATE ROLE $username WITH PASSWORD '$password' NOSUPERUSER LOGIN;
	    CREATE DATABASE $database;
	    GRANT ALL PRIVILEGES ON DATABASE $database TO $username;
EOSQL
}

if [ -n "$COCKPIT_POSTGRES_DB" ]; then
		create_user_and_database $COCKPIT_POSTGRES_DB $COCKPIT_POSTGRES_USER $COCKPIT_POSTGRES_PASSWORD
fi
if [ -n "$KEYCLOAK_POSTGRES_DB" ]; then
		create_user_and_database $KEYCLOAK_POSTGRES_DB $KEYCLOAK_POSTGRES_USER $KEYCLOAK_POSTGRES_PASSWORD
fi
