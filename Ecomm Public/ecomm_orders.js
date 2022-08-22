window.addEventListener("DOMContentLoaded", () => {
        axios.get('http://localhost:6999/orderDet').then((response) => {
            document.getElementById('odrid').value = response.data.orderid;
        }).catch(err => {
            console.log(err);
            console.log('Error in grand total of axios');
        });

        axios.get('http://localhost:6999/domloaded').then((data) => {
            for (let i = 0; i < data.data.length; i++) {
                console.log('293');
                console.log(data);
                printOnOrderPage(data.data[i]);
            }
        }).catch(err => {
            console.log(err);
        });

        axios.get('http://localhost:6999/grandTotal').then((data) => {
            console.log(data.data[data.data.length - 1].grandTotal);
            console.log(data);
            console.log('Hi then grandTotal');
            if (document.getElementById('odrtext').value !== "") {
                let totval = (document.getElementById('odrtext').value).slice(3);
                let totdec = parseFloat(totval.slice(0, totval.length - 2));
                let itemPrice = (data.data[data.data.length - 1].grandTotal).slice(3);
                let itemPriceDec = parseFloat(itemPrice.slice(0, itemPrice.length - 2));
                let totdecNew = totdec + itemPriceDec;
                document.getElementById('odrtext').value = 'Rs.' + `${totdecNew}` + '/-';
            } else {
                document.getElementById('odrtext').value = data.data[data.data.length - 1].grandTotal;
            }
        }).catch(err => {
            console.log(err);
        });
});

document.getElementById('orderdetails').addEventListener('click', () => {
    axios.get('http://localhost:6999/orderDet').then((response) => {
        console.log(response);
        const cont = document.getElementById('container');
        const dev = document.createElement('p');
        dev.classList.add('toas');
        dev.innerHTML = `<b><p>Order sucessfully placed with <u style="color:red;">order id = ${response.data.orderid}</u></p></b>`;
        document.getElementById('odrid').value = response.data.orderid;
        cont.appendChild(dev);
        setTimeout(() => {
            dev.remove();
        }, 3000);
    }).catch(err => {
        console.log(err);
        console.log('Error in grand total of axios');
    });

    axios.get('http://localhost:6999/domloaded').then((data) => {
        for (let i = 0; i < data.data.length; i++) {
            console.log('293');
            console.log(data);
            printOnOrderPage(data.data[i]);
        }
    }).catch(err => {
        console.log(err);
    });

    axios.get('http://localhost:6999/grandTotal').then((data) => {
        console.log(data.data[data.data.length - 1].grandTotal);
        console.log(data);
        console.log('Hi then grandTotal');
        if (document.getElementById('odrtext').value !== "") {
            let totval = (document.getElementById('odrtext').value).slice(3);
            let totdec = parseFloat(totval.slice(0, totval.length - 2));
            let itemPrice = (data.data[data.data.length - 1].grandTotal).slice(3);
            let itemPriceDec = parseFloat(itemPrice.slice(0, itemPrice.length - 2));
            let totdecNew = totdec + itemPriceDec;
            document.getElementById('odrtext').value = 'Rs.' + `${totdecNew}` + '/-';
        } else {
            document.getElementById('odrtext').value = data.data[data.data.length - 1].grandTotal;
        }
    }).catch(err => {
        console.log(err);
    });
});

function printOnOrderPage(dat) {
    const parentElement2 = document.getElementById('orderItem');
    parentElement2.innerHTML = parentElement2.innerHTML + `<li class="licl"><p><pre style="border-bottom:1px black dotted"><b>${dat.productName}</b>                    <b>${dat.productPrice}</b>                    <b>${dat.count}</b></pre></p></li>`;
}

document.getElementById('clrall').addEventListener('click', () => {
    const parentEle = document.getElementById('odrprnt');
    const childele = document.getElementById('orderItem');
    parentEle.removeChild(childele);
    document.getElementById('odrtext').value = "";
    document.getElementById('odrid').value = "";
});
