
console.log("hello")

dice = [
    { val: 1, image: "/images/dice 1.jpg" },
    { val: 2, image: "/images/dice 2.jpg" },
    { val: 3, image: "/images/dice 3.jpg" },
    { val: 4, image: "/images/dice 4.jpg" },
    { val: 5, image: "/images/dice 5.jpg" },
    { val: 6, image: "/images/dice 6.jpg" }
]
$("#btn1").click(function(){
    $("#image1").append(dice[Math.floor(Math.random() * 6)])
    
})
$("#btn 2").click(function(){
    $("#image2").append(dice[Math.floor(Math.random() * 6)])

})


function compar(){
    if()
}
src = dice[0].image