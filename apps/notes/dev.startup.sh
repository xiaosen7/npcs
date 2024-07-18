#!/bin/sh

MIGRATION_STATUS=$(prisma migrate status)

if echo "$MIGRATION_STATUS" | grep -q "Database schema is up to date"; then
    echo "No migrations needed."
else
    echo "Running migrations..."
    prisma migrate deploy
fi

prisma generate

next dev