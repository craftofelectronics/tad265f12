---
layout: default
title: "Admin"
---

# Admin

<ul>
	
{% for s in site.sections %}
	<li> <a href="{{ site.pages_root}}{{ site.repos }}/{{ s[0] }}/"> {{ s[1] }} </a> </li>
{% endfor %}

</ul>