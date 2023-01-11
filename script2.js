let name = prompt(`Введіть ім'я`)
if ( name.toLowerCase() == "ім'я") {
    let password = prompt("Введіть пароль")
    if (password == "ЛОГОС") {
        alert("Ласкаво просимо");
    } else if (password == null) {
        alert('Вхід скасовано')
    } else {
        alert("Пароль невірний");
    }

} else if (name == "") {
    alert("Ви нічого не ввели");
} else if (name == null) {
    alert('Вхід скасовано')
} else {
    alert("Я вас не знаю");
}