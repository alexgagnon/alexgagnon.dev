#!/bin/bash

FONTS_DIR="public/fonts"
mkdir -p $FONTS_DIR
glyphhanger --subset=fonts/Playfair_Display/static/PlayfairDisplay-Italic.ttf --formats=woff2 --US_ASCII --whitelist==éÉ --output=$FONTS_DIR
glyphhanger --subset=fonts/Bricolage_Grotesque/static/BricolageGrotesque-Regular.ttf --formats=woff2 --US_ASCII --whitelist==éÉ --output=$FONTS_DIR
glyphhanger --subset=fonts/Handjet/static/Handjet-Regular.ttf --formats=woff2 --whitelist=AaLlEeXxGgNnOo --output=$FONTS_DIR