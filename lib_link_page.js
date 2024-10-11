const link_page_copyright=`
Copyright (c) 2021 Michael Neill Hartman. All rights reserved.
mnh_license@proton.me
https://github.com/hartmanm
`

let intro = document.getElementsByClassName("intro");
let zero = document.getElementsByClassName("zero");
let zero_one = document.getElementsByClassName("zero_one");
let one = document.getElementsByClassName("one");
let two = document.getElementsByClassName("two");
let three = document.getElementsByClassName("three");
let four = document.getElementsByClassName("four");
let footer = document.getElementsByClassName("footer");
function lamda_link(innerhtml,id,url,base_element)
{
let ddiv = document.createElement("lamda_link");
ddiv.innerHTML = innerhtml;
ddiv.id = id;
let first=base_element[0];
first.appendChild(ddiv);
function execute_z(element,url){window.open(url);}
let lamdalink = document.getElementById(id);
lamdalink.addEventListener("click", function(e){let target = e.target || e.srcElement; execute_z(target,url)}, false);
}
lamda_link('<p>hartmanm/mnh_license</p>','ai','https://github.com/hartmanm/mnh_license/tree/main?tab=License-1-ov-file',intro);
lamda_link('<p>hartmanm/typed</p>','a0','https://github.com/hartmanm/typed?tab=License-1-ov-file',zero);
//lamda_link('<img src="xyz.png" style="width:50%;height:50%;"/>','1dfg','title_url',zero);
lamda_link('<p>hartmanm/d3_clock</p>','a01','https://github.com/hartmanm/d3_clock?tab=License-1-ov-file',zero_one);
lamda_link('<p>hartmanm/overlord_nv</p>','1esdfgrt','https://github.com/hartmanm/overlord_nv?tab=License-1-ov-file',one);
lamda_link('<p>hartmanm/oros_nv</p>','a2','https://github.com/hartmanm/oros_nv?tab=License-1-ov-file',two);
lamda_link('<p>hartmanm/22mines</p>','a3','https://github.com/hartmanm/22mines?tab=License-1-ov-file',three);
//lamda_link('<img src="xyz.png" style="width:50%;height:50%;"/>','4','title_url',three);
//lamda_link('<img src="xyz.png" style="width:50%;height:50%;"/>','4asdf44','title_url',three);
//lamda_link('<img src="xyz.png" style="width:50%;height:50%;"/>','444','title_url',three);
lamda_link('<p>hartmanm/hs_server</p>','a4','https://github.com/hartmanm/hs_server',four);
lamda_link('<img src="hartmanm_avatar.png"/>','afzzz','https://github.com/hartmanm',footer);
