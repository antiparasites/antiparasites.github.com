try {
    siteProduct;
} catch (error) {
    alert('Нет Объекта siteProduct')
}
if (siteProduct) {
    var xhr = new XMLHttpRequest(),
            currentProdCountries = [],
            rusPrice,
            response,
            _data,
            inputMask;

    xhr.open('GET', 'https://click.lucky.online/click/ip-location.html', false);
    xhr.send();

    if (xhr.status === 200) {
        response = JSON.parse(xhr.responseText);
    }

    if (siteProduct.demonPopup) {
        var demonPopupTitle = '¿Eres de España? ¡Esperar!';

        if (response.city !== null) {
            demonPopupTitle = '¿Eres de España? ¡Esperar!';
        }
        $('head').append('<link rel="stylesheet" href="css/generator.css">');
        $('body').append('<div class="demon_popup">\n' +
                '        <div class="demon_overflow"></div>\n' +
                '        <div class="demon_popup_body">\n' +
                '            <span class="demon_close"></span>\n' +
                '            <h4 class="demon_popup_title">' + demonPopupTitle + '</h4>\n' +
                '            <img src="img/product.png" alt="" style="width:28%">\n' +
                '            <p>Todavía hay una oferta especial limitada para ti.</p>\n' +
                '            <p>¡Date prisa para participar en el programa y llévate "' + siteProduct.name + '" en la promoción de <span class="new_price_val"></span> <span class="new_price_cur"></span><span style="color:#fff !important">!</span></p>\n' +
                '            <a href="#form" class="popup_btn">aprende más</a>\n' +
                '        </div>\n' +
                '    </div>');
        var closeElems = document.querySelectorAll('.demon_overflow, .demon_close'),
                demonPopup = document.getElementsByClassName('demon_popup')[0];
        for (let i = 0; i < closeElems.length; i++) {
            closeElems[i].onclick = function () {
            }
        }

        var flag = true;

        $(window).mouseout(function (e) {
            if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
                demonPopup.classList.add('active');
            }
        });

        $(".demon_close,.popup_btn").on("click", function () {
            demonPopup.classList.remove('active');
        });
        $(document).mouseup(function (e) { // событие клика по веб-документу
            var div = $(".demon_popup_body"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                    && div.has(e.target).length === 0) { // и не по его дочерним элементам
                demonPopup.classList.remove('active'); // скрываем его
            }
        });
    }
}





