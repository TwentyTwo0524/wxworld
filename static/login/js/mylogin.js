$(function () {
    $('img').each(function () {
        var imgPath = $(this).attr('src')

        imgPath = "{% static '"+'login' + imgPath + "'%}"

        $(this).attr('src',imgPath)
    })

    console.log($('body').html())
})