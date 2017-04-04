---
layout: post
title:  "Flows"
date:   2017-04-03 22:50:00 +0100
categories: jekyll theme
author: dreamcaster
cover: "https://upload.wikimedia.org/wikipedia/commons/4/4b/VenturiTubeScheme.png"
location: Porto Alegre, Brazil
description: a quick overview of the publishing flow
tail: Tail(1) Linux is your friend
---
---
# Simple Local Flow

Just gulp your way without worries:

```
$ gulp

#
# create posts, modify layouts, use Jekyll at will
#
# restart only when changing main *_config.yml*
#

```

The default task:
* lets Jekyll regenerate **/docs/_site**
* browser_sync serves to [http://localhost:3000](http://localhost:3000/)
* changes are pushed to all clients connected to page
* file system changes are watched

## Pre-Reqs

Of course, NPM and Gulp must be properly installed for your local environment (won't go into that).

```
$ npm install

```

Folder **/node_modules** is created locally, it should be ignored from the repo


## Gulp Tasks

Available from */gulpfiles.js*

```
$ gulp --tasks

[22:25:43] Tasks for D:\pub\jekyll-crazymentat\gulpfile.js
[22:25:43] ├─┬ browser-sync
[22:25:43] │ ├── styles
[22:25:43] │ └── jekyll
[22:25:43] ├─┬ default
[22:25:43] │ ├── styles
[22:25:43] │ ├── jekyll
[22:25:43] │ └─┬ browser-sync
[22:25:43] │   ├── styles
[22:25:43] │   └── jekyll
[22:25:43] ├── jekyll
[22:25:43] ├─┬ reload
[22:25:43] │ └── jekyll
[22:25:43] ├── styles
[22:25:43] └── watch

```

## browser-sync
This [lovely plugin](https://www.browsersync.io/) brings back some joy to HTML/CSS development (seriously)

Serves files under **/docs/_site**:
* contents of the folder are omitted from the repo. 
* folder is mounted on volume /srv/jekyll within the Docker container 

## watch

Because [file tree watchers](https://github.com/mikeal/watch) are used everywhere.

Styles watch:
* **./docs/_src/css/**/*.css**

triggers CSS regeneration

Other watches:
* **./docs/index.html** (and other generation files, don't be shy, consult the script)

All watches reload clients of browser-sync.

## styles

Uses the huge [postcss plugin](https://github.com/postcss/postcss).

Includes declared at **/_src/css/main.css**.

Colors and global variables at **/_src/css/_global.css**
