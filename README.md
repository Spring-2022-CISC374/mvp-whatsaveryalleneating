# What's Avery Allen Eating
Repo with files and directions for porting Phaser games to GitHub Pages deployment

## Overview
This game is about teaching healthy eating without stigmatizing food. It stars Avery Allen, Roswell the Friendly Alien, and Cal 9000.
It is a collection of minigames hosted in a fun elementary school hubworld. Games include Vitamin-Tetris, Food Picker, and Tour de
Digestive System

## Directions
Getting this game to redeploy is such a pain in the neck because you have to do a special redeploy every time and technically it may not be
within Github's ToS for how we have it set up. But for now, it works

### How to redeploy if Noah H. is ever incapacitated and you need to redeploy.
  git checkout master # you can avoid this line if you are in master...
  git subtree split --prefix dist -b gh-pages # create a local gh-pages branch containing the splitted output folder
  git push -f origin gh-pages:gh-pages # force the push of the gh-pages branch to the remote gh-pages branch at origin
  git branch -D gh-pages # delete the local gh-pages because you will need it: ref
  
  Then you need to go on gh-pages branch and modify the index.html file to match the main and vendor files with the hex
  code in them. This should redeploy, but it may take a few minutes.
