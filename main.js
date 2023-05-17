// navbar
var elem = document.getElementById("rmv-this");

function dlt_hover() {
  elem.classList.remove("active-nav");
}

function bck_hover() {
  elem.classList.add("active-nav");
}

var ele = document.getElementById("remov-this");
var nav1 = document.getElementById("nav1");
var nav2 = document.getElementById("nav2");

function vw_btn1() {
  ele.classList.remove("active-nav-mbl");
  nav2.classList.remove("active-nav-mbl");
  nav1.classList.add("active-nav-mbl");
}

function vw_btn2() {
  ele.classList.remove("active-nav-mbl");
  nav1.classList.remove("active-nav-mbl");
  nav2.classList.add("active-nav-mbl");
}

hps = document.getElementById("nbl");
function hps() {
  hps.style.display = "none";
}

var menu = document.getElementById("nbl");
function nav() {
  // sheet.insertRule(".nav-mobile {display: block !important;}", 1);
  sheet.insertRule("@media only screen and (max-width : 600px) { .nav-mobile { display: block !important; } }");
}
