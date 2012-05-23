---
layout: default
title: TAD 265
---

# Testing 1 2 3

This is some body text.

* This is a list.
* And another element.
* And one more.

{% for post in site.posts %}
<hr>
<h1> {{ post.title }} (<a href="http://localhost:8080{{ post.url }}">*</a>)</h1>
  <small>{{ post.date | date_to_xmlschema }}</small>
<p>
	{{ post.content }}
</p>
{% endfor %}