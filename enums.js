"use strict";
exports.__esModule = true;
var SIZES;
(function (SIZES) {
    // by default S = 0, M = 1....
    SIZES[SIZES["S"] = 0] = "S";
    SIZES[SIZES["M"] = 1] = "M";
    SIZES[SIZES["L"] = 2] = "L";
    SIZES[SIZES["XL"] = 3] = "XL";
    SIZES[SIZES["XXL"] = 4] = "XXL";
    SIZES[SIZES["XXXL"] = 5] = "XXXL";
})(SIZES || (SIZES = {}));
var skirtSize = SIZES.M;
var BASE;
(function (BASE) {
    BASE[BASE["MIXED"] = 10] = "MIXED";
    // 11 , 12 & so on 
    BASE[BASE["WHEAT"] = 11] = "WHEAT";
    BASE[BASE["RICE"] = 12] = "RICE";
})(BASE || (BASE = {}));
var tortilla = BASE.RICE;
var account = 34 /* STATUS.BLOCKED */;
var CRUST;
(function (CRUST) {
    CRUST["THIN"] = "thin";
    // enum member must have an initializer
    CRUST["THICK"] = "thick";
})(CRUST || (CRUST = {}));
var HOUSES;
(function (HOUSES) {
    HOUSES["TROJAN"] = "trojan";
    HOUSES[HOUSES["MAURYAN"] = 1] = "MAURYAN";
    HOUSES[HOUSES["ARYAN"] = 2] = "ARYAN";
})(HOUSES || (HOUSES = {}));
