let activeDifff = 'all'

async function generateRecipes(diff) {
    const grid = document.getElementById('recipeGrid');

    grid.innerHTML = `<p class="loadingMsg">generating recipes.... :3</p>`

    const difLine = diff === 'all' ? 'a mix of easy, medium and hard dishes' : `only ${diff}`
}