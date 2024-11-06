function createButton(containerId, url) {
    var button = document.createElement("p");
    button.innerText = "🔴 CLICK HERE 🌐==►► Download Now";
    button.className = "btn";
    
    button.addEventListener("click", function() {
      window.open(url, "_blank");
    });
    
    document.getElementById(containerId).appendChild(button);
  }

  createButton("btncnt", "https://www.profitablecpmrate.com/zv0v12vpz?key=30f372ab2c851abf52a9473f938c9ed6");
  createButton("btncnt1", "https://www.profitablecpmrate.com/hpieypqbx?key=373d091e1136e5d4f1a21736a886f087");
