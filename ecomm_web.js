let count = 0;
let min; let tempname; let productPrice; let a;
let b = 0; let newProduct;
function addToastNotification(e) {
    let repsame = false;
    let repunique = false;
    const addid = e.target.id;
    if (count != 0) {
        if (addid === min) {
            console.log("repeated");
            repsame = true;
            const remo = document.getElementById(`${tempname}`);
            document.getElementById('cartItem').removeChild(remo);
        }
        else {
            repunique = true;
            console.log("not repeated");
            count = 0;
        }
    }
    min = addid;
    const detarr = addid.split(" ");
    count = count + 1;
    if (repsame == true) {
        a = parseFloat((detarr[detarr.length - 1]).slice(3));
        console.log(a)
        b = b + a;
        newProduct = a * count;
        productPrice = 'Rs.' + `${newProduct}`;
        console.log(productPrice);
        document.getElementById('tottext').value = 'Rs.' + `${b}` + '/-';
    } else if (repunique == true) {
        a = parseFloat((detarr[detarr.length - 1]).slice(3));
        b = b + a;
        productPrice = detarr[detarr.length - 1];
        document.getElementById('tottext').value = 'Rs.' + `${b}` + '/-';
    } else if (repsame == false && repunique == false) {
        a = parseFloat((detarr[detarr.length - 1]).slice(3));
        console.log(a)
        b = a * count;
        productPrice = 'Rs.' + `${b}`;
        console.log(productPrice);
        document.getElementById('tottext').value = `${productPrice}` + '/-';
    }
    detarr.pop();
    const productName = detarr.join(" ");
    tempname = productName;
    console.log(count);
    console.log(productName);
    console.log(productPrice);
    let obj = {
        productName,
        productPrice,
        count
    }
    const cont = document.getElementById('container');
    const dev = document.createElement('p');
    dev.classList.add('toas');
    dev.innerHTML = `<b>Your product:<u><p style="color:red;">${productName}</p></u>is added to the cart !</b>`;
    cont.appendChild(dev);
    setTimeout(() => {
        dev.remove();
    }, 3000);
    printOnCart(obj);
}
function printOnCart(dat) {
    const parentElement = document.getElementById('cartItem');
    parentElement.innerHTML = parentElement.innerHTML + `<li class="licl" id="${dat.productName}"><p><pre style="border-bottom:1px black dotted"><b>${dat.productName}</b>                    <b>${dat.productPrice}</b>                    <b>${dat.count}</b></pre></p><button  id="${dat.productName} ${dat.productPrice}" class="btn-danger">Delete</button></li>`;
    var removeCartItemButtons = document.getElementsByClassName('btn-danger');
    var parentNode=document.getElementById('cartItem');
    console.log(removeCartItemButtons);
    for (let i = 0; i < removeCartItemButtons.length; i++) {
        let buttontobeclicked = removeCartItemButtons[i];
        buttontobeclicked.addEventListener('click', (e) => {
            console.log(`clicked ${i+1}`);
            let idStr=e.target.id;
            let idArray=idStr.split(" ");
            let itemPrice=idArray.pop();
            let itemChildId=idArray.join(" ");
            console.log(itemChildId);
            let childNode=document.getElementById(`${itemChildId}`);
            parentNode.removeChild(childNode);
            console.log(itemPrice);
            console.log(childNode);
            let totval=(document.getElementById('tottext').value).slice(3);
            let totdec=parseFloat(totval.slice(0, totval.length-2));
            let itemPriceDec=parseFloat(itemPrice.slice(3));
            let totdecNew=totdec-itemPriceDec;
            b=totdecNew;
            document.getElementById('tottext').value='Rs.'+`${totdecNew}`+'/-';
            // console.log(`${dat.productPrice}`);

            // parentNode.removeChild(itemChildDel);
        });
    }
}

const cartOpen = document.getElementById('cart');
const popupcont = document.getElementById('popup-id-container');
cartOpen.addEventListener('click', () => {
    popupcont.classList.toggle('active');
});






