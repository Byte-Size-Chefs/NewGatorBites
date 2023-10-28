#!/bin/bash
venv=".venv"
sflag=false

while [[ $# -gt 0 ]]; do
  case "$1" in
    -i)
      virtualenv "$venv"
      source "$venv"/bin/activate
      pip install -r requirements.txt
      shift
      ;;
    -s)
      sflag=true
      shift
      ;;
    -env)
      touch .env
      shift
      ;;
    *)
      echo "Invalid option: $1"
      exit 1
      ;;
  esac
done

source "$venv"/bin/activate
cd src/
chmod +x runServer.sh

# Move the -s case to the end
if $sflag; then
  ./runServer.sh -s
else
  ./runServer.sh
fi
