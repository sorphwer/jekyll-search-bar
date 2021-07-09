function searchBarHtml() {
    return `<div class="cb-search-tool" style="position: fixed; top: 0px ; bottom: 0px; left: 0px; right:  0px;
    opacity: 0.95; background-color: #111111; z-index: 9999; display: none;">
  <div id="searchbar" style="height: 60px;" class="d-flex justify-content-center">
      <div id="scrollable-dropdown-menu">
          <input class="typeahead tt-input" type="text" id="cb-search-content" placeholder="Enter search text"
              autocomplete="on" spellcheck="on" dir="auto">
      </div>
  </div>

  <div style="position: fixed; top: 16px; right: 16px;">
      <img src="https://riino.site/jekyll-search-bar/search/img/cb-close.png" id="cb-close-btn" />
  </div>
</div>

<div style="position: fixed; right: 16px; bottom: 20px;">
  <img src="https://riino.site/jekyll-search-bar/search/img/cb-search.png" id="cb-search-btn" title="Try Double Click Ctrl" />
</div>

<link rel="stylesheet" href="https://riino.site/jekyll-search-bar/search/css/search.css">
<script type="text/javascript" src='https://riino.site/jekyll-search-bar/search/js/typeahead.bundle.js'></script>
<script type="text/javascript" src='https://riino.site/jekyll-search-bar/search/js/fuzzyset.js'></script>
<script type="text/javascript" src='https://riino.site/jekyll-search-bar/search/js/bloodhound.js'></script>
<script type="text/javascript" src='https://riino.site/jekyll-search-bar/search/js/search.js'></script>
    `
}
$(document).ready(function () {
    $('.document').append(searchBarHtml());
})

