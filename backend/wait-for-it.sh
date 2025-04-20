#!/usr/bin/env bash
# wait-for-it.sh

set -e

# Split host:port
HOST_PORT=$1
shift
CMD="$@"

HOST=$(echo "$HOST_PORT" | cut -d: -f1)
PORT=$(echo "$HOST_PORT" | cut -d: -f2)

until nc -z "$HOST" "$PORT"; do
  >&2 echo "Waiting for $HOST:$PORT to be available..."
  sleep 1
done

>&2 echo "$HOST:$PORT is up - executing command"
exec $CMD

