# jekyll-search-bar
A plug-in tool for any jekyll blog website to allow user to search posts and tags.

## Install Locally

### Step 1:

Copy `search` folder and `_includes` folder in your jekyll root

Copy `search.json` file into your jekyll root

### Step 2:

Using `{% include search.html %}` in your layouts. 

## Install via GithubPage

*If you use these mode, please check CORE issue. Currently all assets are available in https://riino.site/jekyll-search-bar

A typical request url could be https://riino.site/jekyll-search-bar/search/js/search.js, if you desire same domain request, **fork** this repo and host it in your server or GithubPage.

### Step 1:

Create a `search.json` in your root:

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

Copy these code into your jekyll html page (if use riino.site source)

```
<link rel="stylesheet" href="https://riino.site/jekyll-search-bar/search/css/search.css">
<script type="text/javascript" src='https://riino.site/jekyll-search-bar/search/js/typeahead.bundle.js'></script>
<script type="text/javascript" src='https://riino.site/jekyll-search-bar/search/js/fuzzyset.js'></script>
<script type="text/javascript" src='https://riino.site/jekyll-search-bar/search/js/search.js'></script>
<script>$(document).ready(function () {$('.document').append(searchBarHtml('https://riino.site'));})</script>
```

or if you fork/download this repo and upload it into your server:

```
<link rel="stylesheet" href="<your-domain>/jekyll-search-bar/search/css/search.css">
<script type="text/javascript" src='<your-domain>/jekyll-search-bar/search/js/typeahead.bundle.js'></script>
<script type="text/javascript" src='<your-domain>/jekyll-search-bar/search/js/fuzzyset.js'></script>
<script type="text/javascript" src='<your-domain>/jekyll-search-bar/search/js/search.js'></script>
<script>$(document).ready(function () {$('.document').append(searchBarHtml());})</script>
```