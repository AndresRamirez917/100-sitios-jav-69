async function getData() {
    const result = await fetch('https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
    const coctail = await result.json();
    console.log(coctail);
    const randomDrinks = coctail.drinks.sort(() => 0.5 - Math.random()).slice(0, 3)
    randomDrinks.forEach(element => {
        const box = document.createRange().createContextualFragment(`
            
                <div class="work-flex">
                    <img src="${element.strDrinkThumb}" alt="">
                    <h3>${element.strDrink}</h3>
                    <p></p>
                </div>
            
            `)
            const work_row = document.querySelector('.work-row');
            work_row.append(box)
    });
}

const btn_validar = document.getElementById('btn-validar').onclick = (e) => {
    e.preventDefault();
    const inputArr = [
        {id : "nombre", value : "Nombre"},
        {id : "email", value : "Email"},
        {id : "fecha", value : "Fecha"},
        {id : "hora", value : "Hora"},
        {id : "mensaje", value : "Mensaje"},
    ]
    for(let {id, value} of inputArr){
        const element = document.getElementById(id);
        if(element.value.trim() === ""){
            return swal({
                title: `El campo ${value} no puede estar vacío`,
                icon: "error",
                 })
        }
        if(id === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(element.value)){
            return swal({
                title: `El campo ${value} no tiene el formato correcto`,
                icon: "error",
                 })
        }
    }
    swal({
        title: `Datos enviados satisfactoriamente`,
        icon: "success",
         })
         inputArr.forEach(({id}) => document.getElementById(id).value = "");
}

getData()