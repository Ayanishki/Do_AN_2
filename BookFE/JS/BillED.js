$(document).ready(function() {
    $("#AddSanPham").click(function(){
        var mahd = $("#mahd").val();
        var khachhang = $("#khachhang").val();
        var sdt = $("#sdtkh").val();
        var email = $("#emailkh").val();
        var diachi = $("#diachikh").val();
        var tongsanpham = $("#tongsanpham").val();
        var tongtien = $("#tongtien").val();
        
        // Use backticks for multiline strings and ${} for variable interpolation
        var row = `<tr>
            <td class="le"><input type="checkbox" name="check" id="check"></td>
            <td class="le">${mahd}</td>              
            <td class="le">${khachhang}</td>
            <td class="le">${sdt}</td>
            <td class="le">${email}</td>
            <td class="le">${diachi}</td>
            <td class="le">${tongsanpham}</td>
            <td class="le">${tongtien}</td>
            <td class="le">
                <!-- <i class="fa-solid fa-magnifying-glass"></i> -->
                <i class="fa-regular fa-pen-to-square"></i>
                <i class="fa-regular fa-trash-can"></i>
            </td>
        </tr>`;
        
        // Append the row to your table (replace "yourTableId" with the actual ID of your table)
        $("#").append(row);
    });
});
