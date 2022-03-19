function onClickButtonTwo() {
    alert('Приветствую вас, ' + document.getElementById('inp').value)
}

function onClickButton(el) {
    document.getElementById(el).innerHTML = '<button onclick="onClickButtonTwo()">Оправить</button><input id="inp" value="Как Ваше имя?"></input>'
}
