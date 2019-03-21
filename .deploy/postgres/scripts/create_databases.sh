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

if [ -n "$KEYCLOAK_DB" ]; then
		create_user_and_database $KEYCLOAK_DB $KEYCLOAK_DB_USER $KEYCLOAK_DB_PASSWORD
fi

