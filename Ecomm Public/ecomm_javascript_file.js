let count = 0;
let min; let tempname; let productPrice; let a;
let b = 0; let newProduct;
let obj;
let prodcount = 0;
let alpha; let repfg = false; let grandTotal;
window.addEventListener("DOMContentLoaded", () => {
    axios.get('http://localhost:6999/showData').then((data) => {
        console.log(data.data);
        if (data.request.status === 200) {
            const products = data.data.products1;
            const products2 = data.data.products2;
            const parentSection = document.getElementById('stonesinweb');
            const parentSection2 = document.getElementById('crystalsinweb');
            products.forEach((product) => {
                const productHtml =
                    `<div id=${product.id}>
            <h5><small>${product.productName}</small></h5>
            <img src=${product.imageUrl} class="imi">
            <button id='${product.btn_id}' onclick=addToastNotification(event)
                class="addcartbtn">Add to cart</button>
            <h6>${product.productPrice}</h6>
        </div>`
                parentSection.innerHTML += productHtml;
                console.log(`${product.price}`);
                console.log(`${product.btn_id}`);
            });
            products2.forEach((product) => {
                const productHtml2 =
                    `<div id=${product.id}>
            <h5><small>${product.productName}</small></h5>
            <img src=${product.imageUrl} class="imi">
            <button id='${product.btn_id}' onclick=addToastNotification(event)
                class="addcartbtn">Add to cart</button>
            <h6>${product.productPrice}</h6>
        </div>`
                parentSection2.innerHTML += productHtml2;
                console.log(`${product.price}`);
                console.log(`${product.btn_id}`);
            });

        }
    }).catch((err) => console.log(err));

    axios.get('http://localhost:6999/domloaded').then((data) => {
        for (let i = 0; i < data.data.length; i++) {
            printOnCart(data.data[i]);
        }
    }).catch(err => {
        console.log(err);
    });

    axios.get('http://localhost:6999/grandTotal').then((data) => {
        console.log(data.data[data.data.length - 1].grandTotal);
        document.getElementById('tottext').value = data.data[data.data.length - 1].grandTotal;
    }).catch(err => {
        console.log(err);
    });
    // const loadTotal = document.getElementById('tottext').value;
    // //document.getElementById('tottext').value=loadTotal;
    // console.log(grandTotal);
    // console.log('Hi loaded');
});



function addToastNotification(e) {
    let repsame = false;
    let repunique = false;
    let addid = e.target.id;
    if (count != 0) {
        if (addid === min) {
            console.log("repeated");
            repsame = true;
            // const remo = document.getElementById(`${tempname}`);
            // document.getElementById('cartItem').removeChild(remo);
        }
        else {
            repunique = true;
            repfg = false;
            console.log("not repeated");
            count = 0;
        }
    }
    min = addid;
    const detarr = addid.split(" ");
    const detprice = detarr[detarr.length - 1];
    detarr.pop();
    const productName = detarr.join(" ");
    count = count + 1;
    if (repsame == true) {
        const cont = document.getElementById('container');
        const dev = document.createElement('p');
        dev.classList.add('toas');
        dev.innerHTML = `<b><u>This product is already present!</u></b>`;
        cont.appendChild(dev);
        setTimeout(() => {
            dev.remove();
        }, 3000);
        repfg = true;
        // a = parseFloat(detprice.slice(3));
        // console.log(a)
        // b = b + a;
        // newProduct = a * count;
        // productPrice = 'Rs.' + `${newProduct}`;
        // console.log(productPrice);
        // axios.delete(`http://localhost:6999/delFromDatabase/${obj.productName}`).then((response) => {
        //     console.log('Successful axios delete');
        //     obj = {
        //         productName,
        //         productPrice,
        //         count
        //     };
        //     axios.post('http://localhost:6999/addProdDetailsInDatabase', obj)
        //     .then((response) => {
        //         console.log('Hi then');
        //     }).catch((err)=>{
        //         console.log('Hi post catch');
        //     });
        // }).catch((err) => {
        //     document.body.innerHTML = document.body.innerHTML + "<h4>Something went wrong.</h4>";
        //     console.log(err)
        // });
        // console.log('between delete and post');
        // console.log(count);
        // document.getElementById('tottext').value = 'Rs.' + `${b}` + '/-';
    }
    else if (repunique == true) {
        a = parseFloat(detprice.slice(3));
        b = b + a;
        productPrice = detprice;
        grandTotal = 'Rs.' + `${b}` + '/-';
        obj = {
            productName,
            productPrice,
            count,
            grandTotal
        };
        axios.post('http://localhost:6999/addProdDetailsInDatabase', obj).then((response) => {
            console.log(response);
            console.log('Success');
        })
        document.getElementById('tottext').value = grandTotal;
    } else if (repsame == false && repunique == false) {
        a = parseFloat(detprice.slice(3));
        console.log(a)
        b = a * count;
        productPrice = 'Rs.' + `${b}`;
        grandTotal = `${productPrice}` + '/-';
        console.log(productPrice);
        obj = {
            productName,
            productPrice,
            count,
            grandTotal
        };
        axios.post('http://localhost:6999/addProdDetailsInDatabase', obj).then((response) => {
            console.log(response);
            console.log('Success');
        });
        document.getElementById('tottext').value = grandTotal;
    }
    tempname = productName;
    console.log(count);
    console.log(productName);
    console.log(productPrice);

    if (repfg == false) {
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
}
function printOnCart(dat) {
    const parentElement = document.getElementById('cartItem');
    parentElement.innerHTML = parentElement.innerHTML + `<li class="licl" id="${dat.productName}"><p><pre style="border-bottom:1px black dotted"><b>${dat.productName}</b>                    <b>${dat.productPrice}</b>                    <b>${dat.count}</b></pre></p><button  id="${dat.productName} ${dat.productPrice}" class="btn-danger">Delete</button></li>`;
    var removeCartItemButtons = document.getElementsByClassName('btn-danger');
    var parentNode = document.getElementById('cartItem');
    console.log(removeCartItemButtons);
    for (let i = 0; i < removeCartItemButtons.length; i++) {
        let buttontobeclicked = removeCartItemButtons[i];
        buttontobeclicked.addEventListener('click', (e) => {
            console.log(`clicked ${i + 1}`);
            let idStr = e.target.id;
            let idArray = idStr.split(" ");
            let itemPrice = idArray.pop();
            let itemChildId = idArray.join(" ");
            console.log(`${itemChildId} button id`);
            let childNode = document.getElementById(`${itemChildId}`);
            parentNode.removeChild(childNode);
            console.log(itemPrice);
            console.log(childNode);
            let totval = (document.getElementById('tottext').value).slice(3);
            let totdec = parseFloat(totval.slice(0, totval.length - 2));
            let itemPriceDec = parseFloat(itemPrice.slice(3));
            let totdecNew = totdec - itemPriceDec;
            b = totdecNew;
            grandTotal = 'Rs.' + `${totdecNew}` + '/-';
            document.getElementById('tottext').value = grandTotal;
            let obj2 = {
                grandTotal: grandTotal
            };
            if (grandTotal === 'Rs.0/-') {
                axios.delete('http://localhost:6999/delFromGrandTotal').then((response) => {
                    console.log('Successful axios delete');
                }).catch((err) => {
                    document.body.innerHTML = document.body.innerHTML + "<h4>Something went wrong.</h4>";
                    console.log(err);
                });
            }
            axios.post('http://localhost:6999/grandTotal/grand', obj2).then((response) => {
                console.log(response);
                console.log('Success');
            }).catch(err => {
                console.log(err);
                console.log('Error in grand total of axios');
            });
            let delitqt = parseFloat(`${dat.count}`);
            prodcount = prodcount - delitqt;
            document.getElementById('prodcount').innerText = prodcount;
            axios.delete(`http://localhost:6999/delFromDatabase/${itemChildId}`).then((response) => {
                console.log('Successful axios delete');
            }).catch((err) => {
                document.body.innerHTML = document.body.innerHTML + "<h4>Something went wrong.</h4>";
                console.log(err);
            });
        });
    }
    prodcount += 1;
    document.getElementById('prodcount').innerText = prodcount;
}

const cartOpen = document.getElementById('cart');
const popupcont = document.getElementById('popup-id-container');
cartOpen.addEventListener('click', () => {
    popupcont.classList.toggle('active');
});






