arr=["black","white","green","red","black"]
i=0
function BgC(){

    // for (let i=0;i<arr.length;i++){
        document.body.style.backgroundColor=arr[i++%5]; 
        // console.log(i);
    // }

}
setInterval(BgC,5000);