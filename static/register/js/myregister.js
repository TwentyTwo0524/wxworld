$(function () {
    $('img').each(function () {
        var imgPath = $(this).attr('src')

        imgPath = "{% static '"+'register' + imgPath + "'%}"

        $(this).attr('src',imgPath)
    })

    console.log($('body').html())
})