# Berea/TAD Course Template

This is a template for a Github Pages hosted course website, based on the work of Github user [Erjjones](https://github.com/erjjones/). I had three reasons for putting together these pages:

* **Collaboration.** I want to be able to collaborate with colleagues and students on the evolution of webpages over the course of a semester.
* **Reuse.** I'm tired of recreating a course website every term. I want to *clone n' go*.
* **Sharing.** My content is Creative Commons licensed... but it is hard for others to use. This makes it easier for others to get at the content, as most of it is Markdownified.

## Resources

I've used a number of resources in putting these tools together.

* [Eric Jones](http://erjjones.github.com/blog/How-I-built-my-blog-in-one-day/)'s original pages leverage both Twitter [Bootstrap](http://jekyllbootstrap.com/) and [Jekyll](https://github.com/mojombo/jekyll/wiki).
* Bootstrap uses many open source tools for compiling [Less](http://lesscss.org/) into CSS.
* [Glyphicons Free.](http://glyphicons.com/)

## Setup

* Install npm
* Install jshint (broken for me right now)

*... find alternative ...*

* Install [Simpless](http://wearekiss.com/simpless) (failed on compile... not new enough?)
* Install [Crunch](https://github.com/matthewdl/Crunch/), which worked.

## Running the Site

```
jekyll --server 8080 --base-url /tad265f12
```