let userunit = +prompt("Enter your units !")

let userbill= 0;
let perunit = 0;


if (userunit >= 0 && userunit  <= 100) {
    userbill = userunit * 10
    perunit = 10;
} else if (userunit >= 101 && userunit <= 200) {
    userbill = userunit * 15
    perunit = 15;

}  else if (userunit >= 201 && userunit <= 300) {
    userbill = userunit * 20
    perunit = 20;

} else {
    userbill = userunit * 25
    perunit = 25;
}


console.log(
    UNITS : ${userunits}
    PERUNIT : ${perunit}
    TOTAL BILL : ${userbill}
);
