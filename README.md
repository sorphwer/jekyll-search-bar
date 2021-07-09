# jekyll-search-bar
A plug-in tool for any jekyll blog website to allow user to search posts and tags.

## Install Locally

### Step 1:

Copy `search` folder and `_includes` folder in your jekyll root

Copy `search.json` file into your jekyll root

### Step 2:

Using `{% include search.html %}` in your layouts. 

## Install via riino.site

### Step 1:

Create `search.json` in your root:

```
{%raw%}
---
layout: null
---
{
	"code" : 0 ,
	"data" : [
	 {% for post in site.posts %}
	{
		"title" : "{{ post.title }}",
		"url" : "{{ post.url }}",
		"tags":"{% for tag in post.tags %}{% if forloop.rindex != 1 %}{{ tag }}_{% else %}{{ tag }}{% endif %}{% endfor %}"
	}
	{% if forloop.rindex != 1  %}
	,
	{% endif %}
    {% endfor %}
	]
}
{%endraw%}
```

### Step 2:
```
<script type="text/javascript" src='https://riino.site/jekyll-search-bar/search/js/jekyll-search-bar.js'></script>
```