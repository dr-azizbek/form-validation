function getInputValue() {
    let fruit = document.getElementsByClassName("fruit")[0].value;
    let result = document.getElementById("result");
    let fruits = fruit.toLowerCase()
    switch (fruits) {
        case "anjir":
        case "zaytun":
        case "banan":
        case "olma":
        case "anor":
        case "behi":
            result.innerHTML = "Ha ajoyib meva!"
            break;
        default: result.innerHTML = "Bunday mevani eshitmaganman."
            break;

    }
}