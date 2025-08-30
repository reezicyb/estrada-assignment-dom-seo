document.getElementById("changeTextBtn").addEventListener("click", function() {
  let textPara = document.getElementById("myParagraph");
    if (textPara.textContent === "I love reading manhwa, especially those in the PTJ Universe!") {
      textPara.textContent = "Reading manhwa is exciting because of its amazing art styles and thrilling stories!!";
    } else {
      textPara.textContent = "I love reading manhwa, especially those in the PTJ Universe!";
    }
});

document.getElementById("addItemBtn").addEventListener("click", function() {
  let newItem = document.createElement("li");
  newItem.textContent = "New favorite manhwa";
  newItem.classList.add("fade-in", "removable"); 
  document.getElementById("myList").appendChild(newItem);
});

document.getElementById("removeElementBtn").addEventListener("click", function() {
  let list = document.getElementById("myList");
  let addedItems = list.querySelectorAll(".removable");
  
  if (addedItems.length > 0) {
    addedItems[addedItems.length - 1].remove(); 
  } else {
    alert("No added manhwa to remove!");
  }
});
