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
// @exclude     https://chaturbate.com/discover/
// @version     1.2
// @license     MIT
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
