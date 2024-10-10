const link_page_copyright=`
Copyright (c) 2021 Michael Neill Hartman. All rights reserved.
mnh_license@proton.me
https://github.com/hartmanm
`

var intro = document.getElementsByClassName("intro");
var zero = document.getElementsByClassName("zero");
var zero_one = document.getElementsByClassName("zero_one");
var one = document.getElementsByClassName("one");
var two = document.getElementsByClassName("two");
var three = document.getElementsByClassName("three");
var footer = document.getElementsByClassName("footer");
function lamda_link(innerhtml,id,url,base_element)
{
var ddiv = document.createElement("lamda_link");
ddiv.innerHTML = innerhtml;
ddiv.id = id;
var first=base_element[0];
first.appendChild(ddiv);
function execute_z(element,url){window.open(url);}
var lamdalink = document.getElementById(id);
lamdalink.addEventListener("click", function(e){var target = e.target || e.srcElement; execute_z(target,url)}, false);
}
// div intro
lamda_link('<p>hartmanm/mnh_license</p>','bsdfgg','https://github.com/hartmanm/mnh_license/tree/main',intro);
// div zero
lamda_link('<p>hartmanm/typed</p>','1ert','https://github.com/hartmanm/typed',zero);
//lamda_link('<img src="xyz.png" style="width:50%;height:50%;"/>','1dfg','title_url',zero);
// div zero_one
lamda_link('<p>hartmanm/overlord_nv</p>','1esdfgrt','https://github.com/hartmanm/overlord_nv',zero_one);
//lamda_link('<img src="xyz.png" style="width:50%;height:50%;"/>','1dsdffg','title_url',zero_one);
// div one
lamda_link('<p>hartmanm/oros_nv</p>','1','https://github.com/hartmanm/oros_nv',one);
//lamda_link('<img src="xyz.png"/>','1','title_url',one);
//lamda_link('<img src="xyz.png" style="width:50%;height:50%;"/>','2','title_url',one);
// div two
lamda_link('<p>hartmanm/22mines</p>','22','https://github.com/hartmanm/22mines',two);
//lamda_link('<img src="xyz.png"/>','3','title_url',two);
// div three
lamda_link('<p>hartmanm/hs_server</p>','44','https://github.com/hartmanm/hs_server',three);
//lamda_link('<img src="xyz.png" style="width:50%;height:50%;"/>','4','title_url',three);
//lamda_link('<img src="xyz.png" style="width:50%;height:50%;"/>','4asdf44','title_url',three);
//lamda_link('<img src="xyz.png" style="width:50%;height:50%;"/>','444','title_url',three);
// div footer
lamda_link('<img src="hartmanm_avatar.png"/>','12345','https://github.com/hartmanm',footer);
