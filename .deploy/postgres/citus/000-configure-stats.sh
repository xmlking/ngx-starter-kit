#!/usr/bin/env bash

# make bash behave
set -euo pipefail
IFS=$'\n\t'

if [ -n "${DISABLE_STATS_COLLECTION+set}" ]; then
  echo "Anonymous statistics collection disabled" >&2

  echo 'citus.enable_statistics_collection=off' >> "${PGDATA}/postgresql.conf"
  pg_ctl -D "${PGDATA}" reload -s
fi
