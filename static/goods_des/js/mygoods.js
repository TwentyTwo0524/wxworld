$(function () {
    $('img').each(function () {
        var imgPath = $(this).attr('src')

        imgPath = "{% static '"+'home/' + imgPath + "'%}"

        $(this).attr('src',imgPath)
    })

    console.log($('body').html())
})