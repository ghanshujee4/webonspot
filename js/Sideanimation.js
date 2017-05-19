$("#navigation li a").on("click", function (e) {
    debugger;
    e.preventDefault();
    var hrefval = $(this).attr("href");

    if (hrefval == "#about") {
        var distance = $('#mainpage').css('left');

        if (distance == "auto" || distance == "0px") {
            $(this).addClass("open");
            openSidepage();
        } else {
            closeSidepage();
        }
    }
});
function openSidepage() {
    debugger;
    $('#mainpage').animate({
        left: '350px'
    }, 400, 'easeOutBack');
}

function closeSidepage() {
    $("#navigation li a").removeClass("open");
    $('#mainpage').animate({
        left: '0px'
    }, 400, 'easeOutQuint');
}
$("#navigation li a").on("hover", function () {
    var classval = $(this).hasClass("hovertrigger");

    if (classval == true) {
        var distance = $('#mainpage').css('left');

        if (distance == "auto" || distance == "0px") {
            $(this).addClass("open");
            openSidepage();
        }
    }
});
$("#closebtn").on("click", function (e) {
    e.preventDefault();
    closeSidepage();
});