import { CookieUtil } from "./cookieUtils.js";
const theme = document.querySelector("#theme");
const check_cookie = document.cookie;
let bg = check_cookie.length == 0 ? "bg-white" : CookieUtil.getCookie("bg");
let color_header =
  check_cookie.length == 0 ? "text-dark" : CookieUtil.getCookie("color_header");

function change_theme() {
  if (bg == "bg-white") {
    bg = "bg-dark";
    color_header = "text-white";
    document.querySelector("#body").setAttribute("class", bg);
    document.querySelector("#header").setAttribute("class", color_header);
    CookieUtil.setCookie("bg", bg, 1);
    CookieUtil.setCookie("color_header", color_header, 1);
  } else {
    bg = "bg-white";
    color_header = "text-dark";
    document.querySelector("#body").setAttribute("class", bg);
    document.querySelector("#header").setAttribute("class", color_header);
    CookieUtil.setCookie("bg", bg, 1);
    CookieUtil.setCookie("color_header", color_header, 1);
  }
}
theme.addEventListener("click", change_theme);
document.querySelector("#body").setAttribute("class", bg);
document.querySelector("#header").setAttribute("class", color_header);
