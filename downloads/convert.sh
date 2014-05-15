#! /bin/bash

# feed a valid youtube URL into the youtube-dl tool to create a .mp3 conversion

youtube-dl $1 --id --extract-audio --audio-format "mp3"

