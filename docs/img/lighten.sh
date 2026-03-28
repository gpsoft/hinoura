#!/bin/bash

for img in *.{jpg,JPG,jpeg,JPEG,png,PNG}; do
    [ -e "$img" ] || continue

    name="${img%.*}"
    lowres_file="${name}_lo.webp"

    if [ -f "$lowres_file" ]; then
        echo "*Skip: $lowres_file"
        continue
    fi

    read width height < <(magick identify -format "%w %h" "$img")

    if [ "$width" -ge "$height" ]; then
        # landscape
        magick  "$img" -resize 600x -quality 75 -strip "$lowres_file"
    else
        # portrait
        magick "$img" -resize x400 -quality 75 -strip "$lowres_file"
    fi

    echo " Done: $lowres_file"
done
