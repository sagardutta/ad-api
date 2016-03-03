---
layout: post
title:  "TechStack"
date:   2016-03-02 16:15:49 +0700
categories: techstack
---

For the initial context please refer to [ad search context][ad-search-context]

Problem is to upload images with some metadata and being able to search the images using the tags from metadata.
This would require the images be stored along side the metadata to benefit from the indexing of mongoDB.
For this the binary data of images are converted into base64 and stored along side the metadata.

Built on top of

* NodeJS
* Express
* MongoDB


Hosted on

* [Heroku][ad-search-api]


[ad-search-api]:https://pacific-shore-18608.herokuapp.com/api
[ad-search-context]:http://sagardutta.github.io/luffy-ui/intro/welcome
