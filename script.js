const productList = document.getElementById("product-list");
const searchinput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const categoryBtns= document.querySelectorAll(".category-btn");


function filterProduct()
{
    console.log("hai bhai")
  const searchValue=searchinput.value.toLowerCase();
  const prodeuctItems= document.querySelectorAll(".product-item");

  prodeuctItems.forEach(item=>
    {
        const title= item.querySelector("h3").innerText.toLowerCase();
        const category= item.dataset.category;

        if(title.includes(searchValue ) || searchValue=="")
        {
            //console.log(item);
        }
    })
}
filterProduct();
searchBtn.addEventListener("click",filterProduct);
searchinput.addEventListener("keyup",filterProduct);
categoryBtns.forEach(btn=>
    {
    btn.addEventListener("click",setcategory);
    })