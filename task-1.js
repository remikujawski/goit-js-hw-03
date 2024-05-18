"use strict";
function slugify(title){
    return title.split(" ").join("-").toLowerCase();
}