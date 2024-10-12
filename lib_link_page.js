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
let nine = document.getElementsByClassName("nine");
let ten = document.getElementsByClassName("ten");
let eleven = document.getElementsByClassName("eleven");
let twelve = document.getElementsByClassName("twelve");
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
lamda_link('<img src="hs_server.png" style="width:35%;height:35%;"/>','8','https://github.com/hartmanm/hs_server',three);
lamda_link('<p>hartmanm/d3_clock</p>','3','https://github.com/hartmanm/d3_clock?tab=License-1-ov-file',four);
lamda_link('<p>hartmanm/oros_nv</p>','4','https://github.com/hartmanm/oros_nv?tab=License-1-ov-file',five);
lamda_link('<p>hartmanm/overlord_nv</p>','5','https://github.com/hartmanm/overlord_nv?tab=License-1-ov-file',six);
lamda_link('<p>hartmanm/methods</p>','6','https://github.com/hartmanm/methods?tab=License-1-ov-file',seven);
lamda_link('<p>hartmanm/ticker</p>','7','https://github.com/hartmanm/ticker?tab=License-1-ov-file',eight);
lamda_link('<p>hartmanm/mining_electric_cost_calculator</p>','9','https://github.com/hartmanm/mining_electric_cost_calculator',nine);
lamda_link('<p>hartmanm/pavo_td</p>','10','https://github.com/hartmanm/pavo_td?tab=License-1-ov-file',ten);
lamda_link('<p>hartmanm/simpleB</p>','12','https://github.com/hartmanm/simpleB?tab=License-1-ov-file',eleven);
lamda_link('<img src="hartmanm_avatar.png" style="width:15%;height:15%;"/>','11','https://github.com/hartmanm',twelve);
