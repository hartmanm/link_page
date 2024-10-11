const link_page_copyright=`
Copyright (c) 2021 Michael Neill Hartman. All rights reserved.
mnh_license@proton.me
https://github.com/hartmanm
`
let one = document.getElementsByClassName("one");
let two = document.getElementsByClassName("two");
let three = document.getElementsByClassName("three");
let four = document.getElementsByClassName("four");
let five = document.getElementsByClassName("five");
let six = document.getElementsByClassName("six");
let seven = document.getElementsByClassName("seven");
let eight = document.getElementsByClassName("eight");
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
lamda_link('<p>license</p>','1','https://hartmanm.github.io/mnh_license/mnh_license.html',one);
lamda_link('<p>hartmanm/mnh_license</p>','1b','https://github.com/hartmanm/mnh_license/tree/main?tab=License-1-ov-file',one);
lamda_link('<p>hartmanm/typed</p>','2','https://github.com/hartmanm/typed?tab=License-1-ov-file',two);
lamda_link('<p>hartmanm/hs_server</p>','8','https://github.com/hartmanm/hs_server',three);
lamda_link('<p>hartmanm/d3_clock</p>','3','https://github.com/hartmanm/d3_clock?tab=License-1-ov-file',four);
lamda_link('<p>hartmanm/oros_nv</p>','4','https://github.com/hartmanm/oros_nv?tab=License-1-ov-file',five);
lamda_link('<p>hartmanm/overlord_nv</p>','5','https://github.com/hartmanm/overlord_nv?tab=License-1-ov-file',six);
lamda_link('<p>hartmanm/methods</p>','6','https://github.com/hartmanm/methods?tab=License-1-ov-file',seven);
lamda_link('<p>hartmanm/22mines</p>','7','https://github.com/hartmanm/22mines?tab=License-1-ov-file',eight);
lamda_link('<img src="hartmanm_avatar.png" style="width:15%;height:15%;"/>','zzzz','https://github.com/hartmanm',footer);
