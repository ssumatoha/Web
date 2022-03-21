let count = 0
let countTwo = 0
let countThree = 0

function onClickButtonFont(el) {
    if (count % 2 == 0) {
        document.getElementById(el).innerHTML = '<p style="font-family:fantasy;">Тут лес и закат</p>'
    } else {
        document.getElementById(el).innerHTML = '<p style="font-family:none">Тут лес и закат</p>'
    }
    count += 1
}

function onClickButtonBackground(el) {
    if (countTwo % 2 == 0) {
        document.getElementById(el).background = "горизонтальный-фон-мал-2.jpg"
    } else {
        document.getElementById(el).background = "пустой-серый-фон-для-сайтов-и-макетов-фото-с-гладкой-бетонной-161913233.jpg"
    }
    countTwo += 1
}

function onClickButtonSize(el) {
    if (countThree % 2 == 0) {
        document.getElementById(el).style.width = "400px"
    } else {
        document.getElementById(el).style.width = "100px"
    }
    countThree += 1
}
