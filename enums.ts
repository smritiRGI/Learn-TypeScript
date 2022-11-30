enum SIZES {
    // by default S = 0, M = 1....
    S,
    M,
    L,
    XL,
    XXL,
    XXXL
}

const skirtSize = SIZES.M;

enum BASE {
    MIXED = 10,
    // 11 , 12 & so on 
    WHEAT,
    RICE
}

const tortilla = BASE.RICE;
// use const to avoid IIFE in js
const enum STATUS {
    ACTIVE = 11,
    EXPIRED = 33,
    BLOCKED
}

const account = STATUS.BLOCKED;

enum CRUST {
    THIN = "thin",
    // enum member must have an initializer
    THICK = "thick"
}

enum HOUSES {
   TROJAN = "trojan",
   MAURYAN = 1,
   ARYAN
}

export {}