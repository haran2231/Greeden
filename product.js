// //  search

// //product container
// var products = document.getElementById("product_search")
// // search input
// var search = document.getElementById("search")
// // product list 
// var productlist = document.querySelectorAll("div")

// search.addEventListener("keyup", function(event) {
    
//     var enteredvalue = event.target.value.toUpperCase()

//     for(count = 0; count<productlist.length; count=count+1){
//         var productName = productlist[count].querySelector("h1").textContent.toUpperCase()
//         console.log(productName);
//         if (productName.indexOf(enteredvalue)<0){
//             productlist[count].style.display="none"
//         }else{
//             productlist[count].style.display="block"
//         }
//     }
// })


// Search

// Product container
var products = document.getElementById("product_search");
// Search input
var search = document.getElementById("search");
// Product list 
var productlist = document.querySelectorAll("#product_search > div");

search.addEventListener("keyup", function(event) {
    // console.log(event);
    var enteredValue = event.target.value.toUpperCase();
    // console.log(enteredValue.indexOf("a"));

    for (var count = 0; count < productlist.length; count++) {
        // console.log(productlist);
        var productName = productlist[count].querySelector("h1").textContent.toUpperCase();
        // console.log(productName);
        // console.log(productName.indexOf(enteredValue));
        if (productName.indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none";
        } else {
            productlist[count].style.display = "block";
        }
    }
});

