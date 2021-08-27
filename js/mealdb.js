document.getElementById('error-massage').style.display = 'none';
const searchFood = () => {
    const searchId = document.getElementById('search-field')
    const searchValue = searchId.value;
    searchId.value = '';
    document.getElementById('error-massage').style.display = 'none';
    if (searchValue == '') {
        document.getElementById('error-massage').style.display = 'block';
    }


    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeal(data.meals))
        .catch(error => displayError(error))


}

const displayError = error => {
    document.getElementById('error-massage').innerText = 'Something went wrone please try again later';
}

const displayMeal = mealSData => {
    console.log(mealSData);
    const mealDiv = document.getElementById('meal')

    mealSData.forEach(meal => {
        const createDiv = document.createElement('div')
        createDiv.classList.add('col')
        createDiv.innerHTML = `
            <div class="col">
                <div class="card h-100" onclick='loadMealDetail(${meal.idMeal})'>
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                     <div class="card-body">
                         <h5 class="card-title">${meal.strMeal}</h5>
                         <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                     </div>
                 </div>
            </div>
        `;
        mealDiv.appendChild(createDiv);
    })

}

const loadMealDetail = mealId => {
    // console.log(mealId.meals[0]);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
}

const displayMealDetails = details => {
    console.log(details);
    const mealDetailsDiv = document.getElementById('meal-Details')
    mealDetailsDiv.innerHTML = `
    <div class="col my-4">
        <img src="${details.strMealThumb}" class="card-img-top" alt="...">
         <div class="card-body">
             <h5 class="card-title">${details.strMeal}</h5>
             <p class="card-text">${details.strInstructions.slice(0, 300)}</p>
             <a class="btn btn-primary text-white" href='${details.strYoutube}'>Go to Youtube</a>
         </div>
     </div>
    </div>  
    `
}
