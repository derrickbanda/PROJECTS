document.getElementById("change-query-button").addEventListener("click", function() {
  var searchQuery = document.getElementById("search-query").value;
  var searchQueryInput = document.getElementById("search-query");

  if (searchQuery.includes("pdf") || searchQuery.includes("book")) {
    searchQueryInput.value = `${searchQuery} filetype:pdf`; 
  } else if (searchQuery.includes("mp4") || searchQuery.includes("movie") || searchQuery.includes("video")) {
    searchQueryInput.value = `intitle:index.of? mkv ${searchQuery} .mp4`; 
  } if (searchQuery.includes("mp3") || searchQuery.includes("song") || searchQuery.includes("music")) {
    searchQueryInput.value = `intitle:index.of? mp3 ${searchQuery}`;
  } else if (searchQuery.includes("doc") || searchQuery.includes("docx") || searchQuery.includes("word") || searchQuery.includes("word document")) {
    searchQueryInput.value = `${searchQuery} filetype:doc`; 
  } else if (searchQuery.includes("ppt") || searchQuery.includes("pptx") || searchQuery.sincludes("powerpoint") || searchQuery.includes("power point") || searchQuery.includes("presentation")) {
    searchQueryInput.value = `${searchQuery} filetype:ppt`; 
  } else if (searchQuery.includes("dwg")) {
    searchQueryInput.value = `${searchQuery} filetype:dwg`; 
  } else if (searchQuery.includes("jpg") || searchQuery.includes("picture")) {
    searchQueryInput.value = `${searchQuery}`; 
  } else if (searchQuery.includes("jpeg") || searchQuery.includes("photos")) {
    searchQueryInput.value = `${searchQuery} .jpeg`; 
  } else if (searchQuery.includes("gif")) {
    searchQueryInput.value = `${searchQuery} .gif`; 
  } else if (searchQuery.includes("svg") || searchQuery.includes("scalable vector graphics")) {
    searchQueryInput.value = `${searchQuery} .svg`; 
  } else if (searchQuery.includes("png")) {
    searchQueryInput.value = `${searchQuery} .png`; 
  } else if (searchQuery.includes("html")) {
    searchQueryInput.value = `${searchQuery} filetype:html`; 
  } else if (searchQuery.includes("xls")) {
    searchQueryInput.value = `${searchQuery} filetype:xls`; 
  } else if (searchQuery.includes("txt") || searchQuery.includes("text")) {
    searchQueryInput.value = `${searchQuery} filetype:txt`; 
  } else if (searchQuery.includes("zip")) {
    searchQueryInput.value = `${searchQuery} filetype:zip`; 
  }
});


document.getElementById("submitted").addEventListener("click", function() {
  var searchQuery_value = document.getElementById("search-query").value;
  var searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(searchQuery_value);

  window.open(searchUrl, "_blank");
});

  function pdf(){
    var searchQuery = document.getElementById("search-query").value;
    var searchQueryInput = document.getElementById("search-query");

  if (searchQuery.includes("pdf") || searchQuery.includes("book")) {
    searchQueryInput.value = `${searchQuery} filetype:pdf`; 
  }

  // Add this line to set the value of the "searchQueryInput" element to the modified search query
  searchQueryInput.value = `${searchQuery} filetype:pdf`;
    document.getElementById('body').style.backgroundImage='url(https://c1.wallpaperflare.com/preview/127/366/443/library-book-bookshelf-read.jpg)'
  }
  function mp4(){
    var searchQuery = document.getElementById("search-query").value;
    var searchQueryInput = document.getElementById("search-query");

    if (searchQuery.includes("mp4") || searchQuery.includes("movie") || searchQuery.includes("video")) {
      searchQueryInput.value = `intitle:index.of? mkv ${searchQuery} .mp4`; 
    } 
    searchQueryInput.value = `intitle:index.of? mkv ${searchQuery} .mp4`;
    document.getElementById('body').style.backgroundImage='url(https://c0.wallpaperflare.com/preview/803/607/675/monstro-video-video-camera-videography.jpg)'
  }
  function mp3(){
    var searchQuery = document.getElementById("search-query").value;
    var searchQueryInput = document.getElementById("search-query");

    if (searchQuery.includes("mp3") || searchQuery.includes("song") || searchQuery.includes("music")) {
      searchQueryInput.value = `intitle:index.of? mp3 ${searchQuery}`;
    } 
    searchQueryInput.value = `intitle:index.of? mp3 ${searchQuery}`;
    document.getElementById('body').style.backgroundImage='url(https://c4.wallpaperflare.com/wallpaper/859/695/600/music-cassette-blender-mp3-3d-render-3d-1280x960-entertainment-music-hd-art-wallpaper-preview.jpg)'
  }
  function doc(){
    var searchQuery = document.getElementById("search-query").value;
    var searchQueryInput = document.getElementById("search-query");

    if (searchQuery.includes("doc") || searchQuery.includes("docx") || searchQuery.includes("word") || searchQuery.includes("word document")) {
      searchQueryInput.value = `${searchQuery} filetype:doc`; 
    } 
    searchQueryInput.value = `${searchQuery} filetype:doc`; 
    document.getElementById('body').style.backgroundImage='url(https://c4.wallpaperflare.com/wallpaper/56/424/884/microsoft-logo-text-words-wallpaper-preview.jpg)'
  }
  function ppt(){
    var searchQuery = document.getElementById("search-query").value;
    var searchQueryInput = document.getElementById("search-query");

    if (searchQuery.includes("ppt") || searchQuery.includes("pptx") || searchQuery.includes("powerpoint") || searchQuery.includes("power point") || searchQuery.includes("presentation")) {
      searchQueryInput.value = `${searchQuery} filetype:ppt`; 
    }
    searchQueryInput.value = `${searchQuery} filetype:ppt`; 
    document.getElementById('body').style.backgroundImage='url(https://c1.wallpaperflare.com/preview/692/617/225/people-display-presentation-watching.jpg)'
  }
  function dwg(){
    var searchQuery = document.getElementById("search-query").value;
    var searchQueryInput = document.getElementById("search-query");

    if (searchQuery.includes("dwg")) {
      searchQueryInput.value = `${searchQuery} filetype:dwg`; 
    }
    searchQueryInput.value = `${searchQuery} filetype:dwg`;
    document.getElementById('body').style.backgroundImage='url(https://c1.wallpaperflare.com/preview/202/519/739/office-work-business-workspace.jpg)'
  }
  function jpg(){
    var searchQuery = document.getElementById("search-query").value;
    var searchQueryInput = document.getElementById("search-query");

    if (searchQuery.includes("jpg") || searchQuery.includes("picture")) {
      searchQueryInput.value = `${searchQuery}`; 
    }
    searchQueryInput.value = `${searchQuery}`;
    document.getElementById('body').style.backgroundImage='url(https://c1.wallpaperflare.com/preview/605/910/561/still-items-things-photographs.jpg)'
  }
  function jpeg(){
    var searchQuery = document.getElementById("search-query").value;
    var searchQueryInput = document.getElementById("search-query");

    if (searchQuery.includes("jpeg") || searchQuery.includes("photos")) {
      searchQueryInput.value = `${searchQuery} .jpeg`; 
    } 
    searchQueryInput.value = `${searchQuery} .jpeg`;
    document.getElementById('body').style.backgroundImage='url(https://c1.wallpaperflare.com/preview/761/756/1015/snap-click-frame-compose.jpg)'
  }
  function gif(){
    var searchQuery = document.getElementById("search-query").value;
    var searchQueryInput = document.getElementById("search-query");

    if (searchQuery.includes("gif")) {
      searchQueryInput.value = `${searchQuery} .gif`; 
    } 
    searchQueryInput.value = `${searchQuery} .gif`; 
    document.getElementById('body').style.backgroundImage='url(https://c4.wallpaperflare.com/wallpaper/521/956/60/usagyuuun-bunny-gif-humor-hd-wallpaper-preview.jpg)'
  }
  function svg(){
    var searchQuery = document.getElementById("search-query").value;
    var searchQueryInput = document.getElementById("search-query");

    if (searchQuery.includes("svg") || searchQuery.includes("scalable vector graphics")) {
      searchQueryInput.value = `${searchQuery} .svg`; 
    } 
    searchQueryInput.value = `${searchQuery} .svg`; 
    document.getElementById('body').style.backgroundImage='url(https://c0.wallpaperflare.com/preview/494/964/922/clean-cleaner-cleaning-service.jpg)'
  }
  function png(){
    var searchQuery = document.getElementById("search-query").value;
    var searchQueryInput = document.getElementById("search-query");

    if (searchQuery.includes("png")) {
      searchQueryInput.value = `${searchQuery} .png`; 
    } 
    searchQueryInput.value = `${searchQuery} .png`; 
    document.getElementById('body').style.backgroundImage='url(https://c4.wallpaperflare.com/wallpaper/764/431/702/river-trees-forest-clouds-wallpaper-preview.jpg)'
  }
  function html(){
    var searchQuery = document.getElementById("search-query").value;
    var searchQueryInput = document.getElementById("search-query");

    if (searchQuery.includes("html")) {
      searchQueryInput.value = `${searchQuery} filetype:html`; 
    } 
    searchQueryInput.value = `${searchQuery} filetype:html`; 
    document.getElementById('body').style.backgroundImage='url(https://c4.wallpaperflare.com/wallpaper/159/884/45/lorem-ipsum-text-minimalism-typography-wallpaper-preview.jpg)'
  }
  function xls(){
    var searchQuery = document.getElementById("search-query").value;
    var searchQueryInput = document.getElementById("search-query");

    if (searchQuery.includes("xls")) {
      searchQueryInput.value = `${searchQuery} filetype:xls`; 
    } 
    searchQueryInput.value = `${searchQuery} filetype:xls`; 
    document.getElementById('body').style.backgroundImage='url(https://c0.wallpaperflare.com/preview/359/949/70/accounting-finance-money-spreadsheet.jpg)'
  }
  function txt(){
    var searchQuery = document.getElementById("search-query").value;
    var searchQueryInput = document.getElementById("search-query");

    if (searchQuery.includes("txt") || searchQuery.includes("text")) {
      searchQueryInput.value = `${searchQuery} filetype:txt`; 
    }
    searchQueryInput.value = `${searchQuery} filetype:txt`;
    document.getElementById('body').style.backgroundImage='url(https://c4.wallpaperflare.com/wallpaper/752/506/504/artistic-typography-latin-lorem-ipsum-wallpaper-preview.jpg)'
  }
  function zip(){
    var searchQuery = document.getElementById("search-query").value;
    var searchQueryInput = document.getElementById("search-query");

    if (searchQuery.includes("zip")) {
      searchQueryInput.value = `${searchQuery} filetype:zip`; 
    }
    searchQueryInput.value = `${searchQuery} filetype:zip`; 
    document.getElementById('body').style.backgroundImage='url(https://c4.wallpaperflare.com/wallpaper/331/433/189/books-minimalism-windows-programa-wallpaper-preview.jpg)'
  }


  