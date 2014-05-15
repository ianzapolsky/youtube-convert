#! /bin/bash

# feed a valid youtube URL into the youtube-dl tool to create a .mp3 conversion

ffmpeg -i $1 -metadata title="$2" -metadata artist="$3" -metadata album="$4" -metadata genre="$5" "$2".mp3
