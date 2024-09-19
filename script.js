$(document).ready(function(){
  $(".bar").click(function(){
    $(".list").toggle();
  });
});

function barFunction(x) {
  x.classList.toggle("change");
}

var index = 1;
showSlides(index);

function moveFunction(n) {
  showSlides(index += n);
}

function dotFunction(n) {
  showSlides(index = n);
}

function showSlides(n) {
  var i;
  var items = document.getElementsByClassName("myItem");
  var dots = document.getElementsByClassName("dot");
  if (n > items.length) {index = 1}
  if (n < 1) {index = items.length}
  for (i = 0 ; i < items.length; i++) {
    items[i].style.display = "none";
  }
  for (i = 0 ; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dynamic","");
  }
  items[index-1].style.display = "block";
  dots[index-1].className += " dynamic";
}










var indexx = 1;
showSlidess(indexx);

function mymoveFunction(n) {
  showSlidess(indexx += n);
}

function mydotFunction(n) {
  showSlidess(indexx = n);
}

function showSlidess(n) {
  var i;
  var mydots = document.getElementsByClassName("myDot");
  var myitems = document.getElementsByClassName("myIts");
  if (n > myitems.length) {indexx = 1}
  if (n < 1) {indexx = myitems.length}
  for (i = 0 ; i < myitems.length ; i++) {
    myitems[i].style.display = "none";
  }
  for (i = 0 ; i < mydots.length; i++) {
    mydots[i].className = mydots[i].className.replace(" ready","");
  }
  mydots[indexx-1].className += " ready";
  myitems[indexx-1].style.display = "block";
}
