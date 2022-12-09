// function functionSearch() {
//     let text = document.getElementById("text")
//     let search = document.getElementById("search")
//     let result = document.getElementById("result")
//     search.addEventListener('input', () => {
//         let results = text.innerHTML.includes(search.value)
//         if (results === true) {
//             search.classList.add("bor")
//             result.innerHTML = "Ushbu so'z matnda mavjud"
//         }
//         else {
//             search.classList.add("yo'q")
//             result.innerHTML = "Ushbu so'z matnda mavjud emas"
//         }
//     })
// }
function searchFunction() {
      let text = document.getElementById('text');
      let search = document.getElementById('search');
      let result = document.getElementById('result');

      search.addEventListener('input', () => {
            let results = text.innerText.includes(search.value);
            if (results === true) {
                  result.style.color = 'green'
                  result.innerHTML = "Ushbu so'z matnda mavjud.";
            }
            else {
                  result.style.color = 'red';
                  result.innerHTML = "Ushbu so'z matnda mavjud emas.";
            }
      })
}