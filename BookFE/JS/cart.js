function addToCart(item) {
    // debugger;
    item.quantity = 1;
    console.log(item.quantity);
    var list;
    if (localStorage.getItem('cart') == null) {
        list = [item];
    } else {
        list = JSON.parse(localStorage.getItem('cart')) || [];
        let ok = true;
        for (let x of list) {
            if (x.id == item.id) {
                x.quantity += 1;
                ok = false;
                break;
            }
        }
        if (ok) {
            list.push(item);
        }
    }
    localStorage.setItem('cart', JSON.stringify(list));
    alert("Đã thêm giỏ hàng thành công!");
}
var list = JSON.parse(localStorage.getItem('cart'));
function LoadData() {
    var str =`<div class="header-cart-item" style="display: flex;">
    <div class="checkbox-all-product ">
        <input class="checkbox-add-cart" type="checkbox"
            id="checkbox-all-products"
            onclick="" checked>
    </div>
    <div><span>Chọn tất cả (<span
                class="num-items-checkbox">1</span> sản
            phẩm)</span></div>
    <div>Số lượng</div>
    <div>Thành tiền</div>
    <div></div>
</div>
    
    `;
    var t = 0;

    for (x of list) {
        // str = `<div class="header-cart-item" style="display: flex;">
        //     <div class="checkbox-all-product ">
        //         <input class="checkbox-add-cart" type="checkbox"
        //             id="checkbox-all-products"
        //             onclick="" checked>
        //     </div>
        //     <div><span>Chọn tất cả (<span
        //                 class="num-items-checkbox">1</span> sản
        //             phẩm)</span></div>
        //     <div>Số lượng</div>
        //     <div>Thành tiền</div>
        //     <div></div>
        // </div>
            
        //     `
        if (list != "") {
            t += x.price * x.quantity;
            str += `<div class="product-cart-left" >    
            <div class="item-product-cart" id="items">
            <div class="checked-product-cart"><input type="checkbox"
                    id="checkbox-product-412755"
                    name="checkbox_product_412755"
                    class="checkbox-add-cart" checked>
            </div>
            <div class="img-product-cart"><a class="product-image"
                    href="https://www.fahasa.com/chao-mung-den-lop-hoc-de-cao-thuc-luc-tap-4-ban-dac-biet-tang-kem-camera-card.html"><img
                        src="`+ x.image + `"
                        width="120" height="120"
                        alt="Chào Mừng Đến Lớp Học Đề Cao Thực Lực - Tập 4 - Bản Đặc Biệt - Tặng Kèm Camera Card"></a>
            </div>
            <div class="group-product-info">
                <div class="info-product-cart" >
                    <div>
                        <h2 class="product-name-full-text">
                            <a
                                href="https://www.fahasa.com/chao-mung-den-lop-hoc-de-cao-thuc-luc-tap-4-ban-dac-biet-tang-kem-camera-card.html">`+ x.name + `
                            </a>
                        </h2>
                        <p class="item-msg notice">`+ "" + `</p>
                    </div>
                    <div class="price-original">
                        <div class="cart-price">
                            <div class="cart-fhsItem-price">
                                <div><span class="price">`+ x.price + `
                                        đ</span></div>
                                <div class="fhsItem-price-old"><span
                                        class="price">`+ x.price + `
                                        đ</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="number-product-cart">
                    <div class="product-view-quantity-box">
                        <div class="product-view-quantity-box-block ">
                            <a class="btn-subtract-qty" onclick="Giam(`+ x.id + `)">
                                <img
                                    style="width: 12px; height: auto;vertical-align: middle;"
                                    src="https://cdn0.fahasa.com/skin//frontend/ma_vanese/fahasa/images/ico_minus2x.png">
                            </a>
                            <input type="text" class="qty-carts" onchange="updateQuantity(` + x.id + `)" value="` + x.quantity + `">
                            <a class="btn-add-qty" onclick="Tang(`+ x.id + `)">
                                <img style="width: 12px; height: auto;vertical-align: middle;" src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_plus2x.png">
                            </a>
                        </div>
                    </div>
                    <div class="cart-price-total"><span
                            class="cart-price"><span
                                class="price" >`+ x.price + `
                                đ</span></span></div>
                </div>
            </div>
            <div class="div-of-btn-remove-cart"><a
                    onclick="Xoa(`+ x.id + `)"
                    title="Remove Item"
                    class="btn-remove-desktop-cart">
                    <i class="fi fi-bs-trash"
                        style="font-style: 22px;"></i>
                </a>
            </div>
        </div>
        <div class="border-product"></div>
        </div>
                     `;
        }
        else {
            str = `
            <div style="box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);padding: 20px;background-color: #fff;flex: 1; border-radius: 8px;">
                <div class="cart-empty body-mh-300" style="justify-content: center;display: flex;align-items: center;">
                    <div style="text-align: center">
                        <div class="icon-empty-cart">\
                            <img src="https://cdn0.fahasa.com/skin//frontend/ma_vanese/fahasa/images/checkout_cart/ico_emptycart.svg" class="center">
                        </div>
                        <p style="font-size:14px;margin: 20px 0;">Chưa có sản phẩm trong giỏ hàng của bạn.</p>
                        <a style="color: white;text-transform: uppercase;" href="/flashsale?fhs_campaign=cta_emptycart">
                            <button
                                class="button-shopping" type="button" title="Mua sắm ngay" style="margin:auto">Mua sắm ngay
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            `;
        }
    }

    document.getElementById("shop").innerHTML = str;
    $("#tongTien").text(t + " đ");
    $("#thanhTien").text(t + " đ");
}

function Xoa(id) {
    if (confirm("Bạn muốn xóa sản phẩm này khỏi giỏ hàng!")) {
        var index = list.findIndex(x => x.id == id);
        if (index >= 0) {
            list.splice(index, 1);
        }
        localStorage.setItem('cart', JSON.stringify(list));
        LoadData();
    }
}
function updateCart() {
    localStorage.setItem('cart', JSON.stringify(list));
    alert("Đã cập nhật thông tin giỏ hàng thành công!");
}
function Tang(id) {
    var index = list.findIndex(x => x.id == id);
    if (index >= 0) {
        list[index].quantity += 1;
    }
    localStorage.setItem('cart', JSON.stringify(list));
    LoadData();
}
function Giam(id) {
    var index = list.findIndex(x => x.id == id);
    if (index >= 0 && list[index].quantity > 1) {
        list[index].quantity -= 1;
    }
    localStorage.setItem('cart', JSON.stringify(list));
    LoadData();
}
function updateQuantity(id) {
    var quantity = Number($('#q_' + id).val());
    var index = list.findIndex(x => x.id == id);
    if (index >= 0 && list[index].quantity >= 1) {
        list[index].quantity = quantity;
    }
    LoadData();
}
function ThanhToan() {
    window.location.href = "./thanhtoan.html";
}
LoadData();