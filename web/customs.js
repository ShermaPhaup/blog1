function createButton(containerId, url) {
    var button = document.createElement("p");
    button.innerText = "🔴 CLICK HERE 🌐==►► Download Now";
    button.className = "btn";
    
    button.addEventListener("click", function() {
      window.open(url, "_blank");
    });
    
    document.getElementById(containerId).appendChild(button);
  }

  createButton("btncnt", "https://url.mview.online/p/sub.html?=VideoHD");
  createButton("btncnt1", "https://url.mview.online/p/sub.html?=VideoHD");
