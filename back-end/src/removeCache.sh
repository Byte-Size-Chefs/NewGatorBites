#!/bin/bash

find . -type d -name "__pycache__" -exec rm -r {} \;
find . -type d -name "migrations" -exec rm -r {} \;
