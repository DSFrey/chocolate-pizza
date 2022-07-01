const ingredients = document.getElementsByClassName("ingredients");

for (let i = 0; i < ingredients.length; i++) {
  for (let ii = 0; ii < ingredients[i].children.length; ii++) {
    ingredients[i].children[ii].addEventListener('change',function() {
      if (ingredients[i].children[ii].children[0].checked) {
        ingredients[i].children[ii].style.textDecoration = "line-through"
      } else {
        ingredients[i].children[ii].style.textDecoration = "none"
      }
    })
  }  
}
