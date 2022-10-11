// retorna um array dos elemento HTML que foram encontrados:
let teacherForms = document.getElementsByClassName("teacher-contract")
// For of imprime cada valor contido dentro da array, percorrendo cada valor a cada repetição:
for (let teacherForm of teacherForms) {
    teacherForm.addEventListener("submit", function(event) {
        event.preventDefault()

        let price = teacherForm.price.value
        let hours = teacherForm.hours.value
        let total = price * hours           
    })
}
        