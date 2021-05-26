var randomNumber1 = Math.floor(Math.random()*6) + 1;


if (randomNumber1 == 1) {
  var randomImageSource = "https://1.bp.blogspot.com/-63hEb6Lyhaw/XaWZVHd34tI/AAAAAAAAAAU/MM7jcVrFqKQyiHLH9eLz8mXJigfsrTmDACLcBGAsYHQ/s200/dice1.png"
  }
else if (randomNumber1 == 2) {
  var randomImageSource = "https://1.bp.blogspot.com/-zrKBnWexOQE/XaWZVH5dT9I/AAAAAAAAAAc/jPKUSonBYzYa594OytHtn-qqxKOKbB-jwCLcBGAsYHQ/s200/dice2.png"
  }
else if (randomNumber1 == 3) {
  var randomImageSource = "https://1.bp.blogspot.com/-SQMZs824_-s/XaWZVBnW-lI/AAAAAAAAAAY/qLrD2aT80M8ygz5XzA7Pg9K7DWLWh1_EwCLcBGAsYHQ/s200/dice3.png"
  }
else if (randomNumber1 == 4) {
  var randomImageSource = "https://1.bp.blogspot.com/-uWMUqhSsMbk/XaWZVpIw0iI/AAAAAAAAAAg/oFYqxpwQfgcLy_672aK470jb8pXOmV9ZQCLcBGAsYHQ/s200/dice4.png"
  }
else if (randomNumber1 == 5) {
  var randomImageSource = "https://1.bp.blogspot.com/-cy_jEDZzfMg/XaWZWHpO4_I/AAAAAAAAAAk/WZe1CNAu1qIxxTQSkcojRr9SQG-Pa-hUwCLcBGAsYHQ/s200/dice5.png"
  }
else {
  var randomImageSource = "https://1.bp.blogspot.com/-ymc_L0veUIY/XaWYdWKLh0I/AAAAAAAAAAM/d_1ihPU8H7US8HRWcOlkdf2M7xQgJqIagCLcBGAsYHQ/s200/dice6.png"
  }

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);





var randomNumber2 = Math.floor(Math.random()*6) + 1;


if (randomNumber2 == 1) {
  var randomImageSource2 = "https://1.bp.blogspot.com/-63hEb6Lyhaw/XaWZVHd34tI/AAAAAAAAAAU/MM7jcVrFqKQyiHLH9eLz8mXJigfsrTmDACLcBGAsYHQ/s200/dice1.png"
  }
else if (randomNumber2 == 2) {
  var randomImageSource2 = "https://1.bp.blogspot.com/-zrKBnWexOQE/XaWZVH5dT9I/AAAAAAAAAAc/jPKUSonBYzYa594OytHtn-qqxKOKbB-jwCLcBGAsYHQ/s200/dice2.png"
  }
else if (randomNumber2 == 3) {
  var randomImageSource2 = "https://1.bp.blogspot.com/-SQMZs824_-s/XaWZVBnW-lI/AAAAAAAAAAY/qLrD2aT80M8ygz5XzA7Pg9K7DWLWh1_EwCLcBGAsYHQ/s200/dice3.png"
  }
else if (randomNumber2 == 4) {
  var randomImageSource2 = "https://1.bp.blogspot.com/-uWMUqhSsMbk/XaWZVpIw0iI/AAAAAAAAAAg/oFYqxpwQfgcLy_672aK470jb8pXOmV9ZQCLcBGAsYHQ/s200/dice4.png"
  }
else if (randomNumber2 == 5) {
  var randomImageSource2 = "https://1.bp.blogspot.com/-cy_jEDZzfMg/XaWZWHpO4_I/AAAAAAAAAAk/WZe1CNAu1qIxxTQSkcojRr9SQG-Pa-hUwCLcBGAsYHQ/s200/dice5.png"
  }
else {
  var randomImageSource2 = "https://1.bp.blogspot.com/-ymc_L0veUIY/XaWYdWKLh0I/AAAAAAAAAAM/d_1ihPU8H7US8HRWcOlkdf2M7xQgJqIagCLcBGAsYHQ/s200/dice6.png"
  }

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1>randomNumber2) {
  document.querySelector("h2").innerHTML = "🚩Computer Wins!";
}
else if (randomNumber2>randomNumber1) {
  document.querySelector("h2").innerHTML = "You Win!🚩";
}
else {
  document.querySelector("h2").innerHTML = "😃Draw!😃";
}

