function yomikomu() {
    $(function () {
        $.ajax({
            beforeSend: function (xhr) {
                xhr.overrideMimeType('text/html;charset=UTF-8');
            },
            type: "GET",
            url: "globalhead.html",
            timeout: 10000
        })
        .done(function (response, textStatus, jqXHR) {
            console.log("�����[��")
            $("#g_header").html(response)
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("�����ς�")
        });
    });
}

function yomikomu2() {
    $(function () {
        $.ajax({
            beforeSend: function (xhr) {
                xhr.overrideMimeType('text/html;charset=UTF-8');
            },
            type: "GET",
            url: "globalmenu.html",
            timeout: 10000
        })
        .done(function (response, textStatus, jqXHR) {
            console.log("�����[��")
            $("#g_menu").html(response)
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("�����ς�")
        });
    });
}

yomikomu();
yomikomu2();