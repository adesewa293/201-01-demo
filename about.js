function displayRating() {
  let output = "";
  let rating = prompt("On a scale of 1 - 5, how much do you rate chris's haircut?");
  for (let i = 0; i < rating; i++) {
    output += "<img class='star-img' src='images/star.png' alt='star rating'>";
  }
  return document.write(output);
}