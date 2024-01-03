$(document).ready(function() {
    $("#themsanpham").click(function(){
        var masach = $("#masach").val();
        var maloai = $("#maloai").val();
        var tensach = $("#tensach").val();
        var gia = $("#gia").val();
        var soluong = $("#soluong").val();
        var tacgia = $("#tacgia").val();
        var bookcover = $("#bookcover").val();
        var row = `<tr>
        <td class="le"><input type="checkbox" name="check" id="check"></td>
        <td class="le">${masach}</td>              
        <td class="le">${maloai}</td>
        <td class="le">${tensach}</td>
        <td class="le">${gia}</td>
        <td class="le">${soluong}</td>
        <td class="le">${tacgia}</td>
        <td class="le">${bookcover}</td>
        <td class="le">
            <!-- <i class="fa-solid fa-magnifying-glass"></i> -->
            <i class="fa-regular fa-pen-to-square"></i>
            <i class="fa-regular fa-trash-can"></i>
        </td>
    </tr>`;
    // Append the row to your table (replace "yourTableId" with the actual ID of your table)
    $("#tb_sach").append(row);
    })
})