// ==UserScript==
// @name        Chaturbate Restyle
// @namespace   https://clownonymous.com/
// @author      Clown
// @description Restyle and ad removal for Chaturbate.
// @include     https://chaturbate.com/*
// @include     https://*.chaturbate.com/*
// @exclude     https://chaturbate.com/emoticons/*
// @exclude     https://chaturbate.com/accounts/*
// @exclude     https://chaturbate.com/apps/*
// @exclude     https://chaturbate.com/photo_videos/*
// @version     1.1
// @run-at       document-end
// ==/UserScript==


if (window.location.protocol != 'https:') {
    window.location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
}

function clownStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

clownStyle(

// ----------BODY/TOP MENU/OTHER----------
  
// GLOBAL
'p {color:#fff;}' +
'#header .ad {display:none!important;}' +

// HTML & BODY
'html body div#header div.section{background-image: linear-gradient(to bottom, rgb(0, 0, 0), rgb(3, 3, 3), rgb(6, 6, 6), rgb(8, 9, 9), rgb(11, 12, 12), rgb(14, 15, 15), rgb(17, 17, 18), rgb(20, 20, 21), rgb(23, 23, 24), rgb(25, 26, 27), rgb(28, 29, 30), rgb(31, 32, 33)) !important;}' +
'html > body {background-image: linear-gradient(to bottom, rgb(33, 33, 33), rgb(33, 33, 33), rgb(33, 33, 33), rgb(32, 33, 33), rgb(32, 33, 33), rgb(32, 33, 33), rgb(32, 32, 33), rgb(32, 32, 33), rgb(32, 32, 33), rgb(31, 32, 33), rgb(31, 32, 33), rgb(31, 32, 33)) !important;}' +

// LOGO
'strong {color:#fff !important;}' +
//'.logo-zone {cursor:default !important; pointer-events:none !important; background-image: url(https://github.com/Clownonymous/ChaturbateRestyleDark/blob/main/Chaturbate_white.png) no-repeat !important;}' +

// USER ACCOUNT PANEL
'#header #user_information {background:#222 !important; border:0 !important;}' +
'#user_information .user_information_header {background:transparent !important;}' +
'#user_information .bottom {background:transparent !important;}' +
'#user_information table td, tr {color:#fff !important;}' +
'#user_information a {color:#0d7e9f !important;}' +

// NAVIGATION
'.creat {background:transparent !important;}' +
'#header {background-color:#404040 !important;}' +
'#nav {background:transparent !important; line-height:20px !important; height:40px !important;}' +
'.nav-bar {background:transparent !important; border:0 !important; padding:10px !important; font-size:13px; font-family: Consolas, Baskerville, Segoe UI, sans-serif;}' +
'div.nav-bar ul#nav li a.login-link {visibility:visible !important;}' +
  
// TAB MENU
'.top-section {background: transparent !important; border:0px !important; margin-top:20px !important;}' +
'.top-section .advanced_search_button_shell .advanced_search_button {visibility:hidden !important;}' +
'.top-section .search_svg {left:30px !important;}' +

// SUB NAVIGATION
'.sub-nav {display: inline-block; font: 0.8666em/16px,Arial,Helvetica,sans-serif; height: 1%; list-style: none outside none; margin-left:55px !important; min-width: 690px; overflow: hidden; padding: 0px; position: relative; top: 3px;}' +
'.sub-nav a, .active a  {background: #000 !important; color: #888;}' +
'.sub-nav a:hover {background: #000 !important; color: #bababa !important;}' +
'.sub-nav a {background: #000000 !important; box-shadow: 1px 3px 4px 1px #C4A507; font-family: Century Gothic, sans-serif !important; font-size: 12px; padding: 5px 11px 4px;}' +
'.sub-nav li {float: left; margin: 0 12px 0 0 !important;}' +
'.sub_navigation {color: #FFF;}' +

// ---------------------------------------

// ----------ADVANCED SEARCH BOX----------
'.advanced_search_button {float:left !important; color:#fff !important; right:0 !important;}' +
'div.content h2 {color:#fff !important;}' +
'.gender-tab a, .sub-nav li>a {color:#fff !important; border:0 !important;}' +
'div.content div.advanced_search_options {background-color:#000; width:95% !important; height: 175px !important; margin:auto !important; padding: 5px 2.5px 1.5px !important; border: none !important; color: #9F9F9F !important;}' +
'div.content div.advanced_search_options form .button {background: #E5E2E2 !important; border: 1px solid #E5E2E2 ;box-shadow: 0px 0px 5px 2px rgba(119, 119, 119, 0.3);-moz-box-shadow: 0px 0px 5px 2px rgba(119, 119, 119, 0.3);-webkit-box-shadow: 0px 0px 5px 2px rgba(119, 119, 119, 0.3);}' +
'div.advanced_search_options table tbody tr td.search form input[type="text"] {background: none repeat scroll 0 0 #E456D5 !important; border: 1px solid #B1B1B1;height: 20px; line-height: 25px; margin-top: 4px; padding: 2px 4px; width: 150px !important; box-shadow: inset 2px 2px 2px 1px #8E0C81 !important; border-radius: 25px !important;}' +
'#advanced_search_options label {color:#0d7e9f; font-size:13px; font-family: Consolas, Baskerville, Segoe UI, sans-serif;}' +
// ---------------------------------------
  
// ----------MAIN CONTENT DIV----------

// MAIN CONTENT DIV STYLE
'.content .c-1 {margin: 20px 15px 100px !important;}' +

// CARD DIV
'.list {margin:auto !important;}' +
'li.room_list_room {background-color:#000 !important; margin: 7px 7px 10px 7px !important; border:0px !important; box-shadow: 0 -2px 10px rgba(0, 0, 0, 1) !important; min-height:375px !important; min-width:300px !important;}' +
'.list .png {min-height:200px !important; min-width:300px !important;}' +
'li.room_list_room:hover {box-shadow: -2px -2px 10px 2px purple, 2px 2px 10px 2px blue !important;}' +

// CARD IMAGE
'.list .thumbnail_label {background-color:transparent !important; font-size:14px !important; font-weight:bold !important; text-shadow:0.07em 0 black,0 0.07em black,-0.07em 0 black,0 -0.07em black !important; margin:0 !important; left:0 !important; right:0 !important; top:0 !important; padding:2px !important; min-width:100% !important;}' +

// CARD DETAILS
'.list .title a {color: #fff !important; float:left; width:200px !important; font-size:18px !important;}' +
'.list .title a:hover {color: #fff; text-shadow: -1px 1px 5px #FF8900, 1px -1px 5px #FF8900;}' +
'.list .details {padding:15px !important;}' +
'.list .subject {margin-top:5px !important; color:#fff !important; width:100% !important; height:75px !important;}' +
'.list .subject a {color:#c9c9c9 !important; width:100% !important;}' +
'.list .sub-info {color:#fff !important;}' +
'.list .cams {margin-top:5px !important; font-size:16px !important; left:0 !important;}' +
// ------------------------------------
  
// ---------PAGINATION---------
'.paging {border:0px !important; padding:15px !important;}' +
'.paging a {border:0px !important; padding:2px !important; font-size:15px !important;}' +
// ----------------------------
  
//--------PROFILE PAGE---------
'.gender-tab {background:transparent !important; color:#fff !important; border:0 !important;}' +
'.genderTabs a {color:#fff !important;}' +
'.genderTabs a:hover {color:#ccc !important;}' +
'.nextCamBgColor {background-color:#000 !important; border:0 !important;}' +
//-----------------------------

// ----------CHAT CONTAINER----------
//'#ChatTabContents {background-image: linear-gradient(to right top, #646464, #535353, #434343, #343434, #252525) !important;}' +
//'.chat_room {background-image: linear-gradient(to right top, #646464, #535353, #434343, #343434, #252525) !important;}' +
//'#tab-row {background-image: linear-gradient(to right top, #646464, #535353, #434343, #343434, #252525) !important;}' +
//'.BaseTabsContainer {background-image: linear-gradient(to right top, #646464, #535353, #434343, #343434, #252525) !important;}' +
// ----------------------------------

// ----------BIO CONTENTS----------
//'.genderTabs {background: transparent;}' +
//'#roomTabs {background-image: linear-gradient(to right top, #000000, #150a12, #1c1321, #1a1d34, #002846) !important;;}' +
//'.BioContents {color:#fff; background-image: linear-gradient(to right top, #000000, #150a12, #1c1321, #1a1d34, #002846) !important;}' +
//'h1.defaultColor {color:#fff !important;}' +
//'.label span {color:#fff !important;;}' +
//'td.contentText {color:#fff !important;}' +
// --------------------------------

// ----------FOOTER AND REMOVE ADS----------
'div.featured_blog_posts {display:none !important;}' +
'.ad, .remove_ads, #botright, .banner {display: none !important;}' +
'.content {overflow: hidden; padding: 0 !important; margin: 0 !important;}' +
'.footer-labels {visibility:hidden;}' +
'.footercon {background: #000; color:#fff;}' +
'.footercon a {display: inline-block; color:#fff !important;}' +
'.footer-holder .nav li a {color: #fff !important; font-family: Century Gothic, sans-serif !important; font-size: 11px !important;}' +
'#footer-holder {background: #000 !important; color:#fff; font-family: Gill Sans / Gill Sans MT, sans-serif !important; font-size: 12px !important; overflow: hidden; padding: 20px 0 15px; text-align: center !important; width: 100% !important; height: 100% !important; box-shadow: 0px 0px 3px 2px rgba(118, 115, 115, 0.16);}'
// ------------------------------------------
);
