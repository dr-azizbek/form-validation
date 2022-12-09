let btn = document.getElementById('btn')
btn.addEventListener('click', function (e) {
    e.preventDefault();

    let frstname = document.getElementById('firstname').value
    let lastname = document.getElementById('lastname').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value;
    let errors = document.querySelector('.error')
    let correct = document.querySelector(".correct")


    if (frstname === "" || lastname === "" || email === "" || password === "") {
        errors.innerHTML = ("Xatolik bor, ma'lumotlarni to'g'iri kiriting.")
    }
    else {
        correct.innerHTML = ("Ma'lumotlarni to'gri kiritdinggiz.")
    }
})

// let form = document.getElementById('form');

// form.onsubmit = function (event) {
//     event.prevenDefault();
//     console.log(event[0])
// }