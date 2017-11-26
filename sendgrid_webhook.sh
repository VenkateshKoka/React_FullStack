#!/usr/bin/env bash
function localtunnel {
  lt -p 5000 -s venkateshkoka
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done