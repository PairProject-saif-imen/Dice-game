console.log("check")

dice = [
    { val: 1, image: "" },
    { val: 2, image: "" },
    { val: 3, image: "" },
    { val: 4, image: "" },
    { val: 5, image: "" },
    { val: 6, image: "" }

]
$("#image1").append(dice[Math.floor(Math.random() * 6)],function () {
    $("#bnt1").click()
})
$("#image2").append(dice[Math.floor(Math.random() * 6)], function () {
    $("#bnt2").click()
})
function compar(){
    if(
}

src = dice[0].image