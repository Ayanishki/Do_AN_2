var list = JSON.parse(localStorage.getItem('cart'));
function LoadData(id) {
    var str = "";
    for (x of list) {
        if(x.id == id) {
            str += `<label for="qty">Số lượng:</label>
            <div class="product-view-quantity-box-block" style="flex-basis:18%">
                <a class="btn-subtract-qty" onclick="Giam(`+x.id+`)">
                    <img
                        style="width: 12px; height: auto;vertical-align: middle;"
                        src="https://cdn0.fahasa.com/skin//frontend/ma_vanese/fahasa/images/ico_minus2x.png">
                </a>
                <input type="text" class="qty-carts" id="`+x.id+`" value="`+x.quantity+`">
                <a class="btn-add-qty" onclick="Tang(`+x.id+`)">
                    <img style="width: 12px; height: auto;vertical-align: middle;" src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_plus2x.png">
                </a>
            </div>`;
        }
    }
    document.getElementById("shop").innerHTML = str;
}
LoadData(id);
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
    if (index >= 0 && list[index].quantity >= 1) {
        list[index].quantity -= 1;
    }
    localStorage.setItem('cart', JSON.stringify(list));
    LoadData();
} 