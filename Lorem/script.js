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
function searchFunction(){
let text = document.getElementById('text');
let search = document.getElementById('search');
let result = document.getElementById('result');

search.addEventListener('input', ()=> {
      let natija = text.innerText.includes(search.value);
      if (natija === true){
            search.classList.add('bor');
            result.innerHTML = "Ushbu so'z matnda mavjud.";
      }
      else{
            search.classList.add('yoq');
            result.innerHTML = "Ushbu so'z matnda mavjud emas.";
      }
})
}