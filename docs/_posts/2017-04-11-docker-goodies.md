---
layout: post
title:  "Docker Goodies"
date:   2017-04-11 22:50:00 +0100
categories: docker
author: dreamcaster
cover: "https://c1.staticflickr.com/8/7336/14098888813_1047e39f08.jpg"
location: Porto Alegre, Brazil
description: some useful Docker commands
tail: Tail(1) Linux is your friend
---
---
# Useful Docker Commands

## Remove all containers
Under the prompt:

```
#!/bin/bash
docker rm $(docker ps -a -q)

```

The nice command **docker ps -a -q** lists only ids of all containers


## Remove all images
Under the prompt:

```
#!/bin/bash
docker rmi $(docker images -q)

```

Similarly, **docker images -q** lists only image ids


