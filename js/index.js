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

getData()