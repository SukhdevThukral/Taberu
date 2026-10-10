function getKey(){
    return localStorage.getItem('taberu_api_key');
}

function promptKey(){
    return new Promise((resolve) => {
        const modal  = document.getElementById('keyModal');
        const input = document.getElementById('keyInput');
        const btn = document.getElementById('keySaveBtn');

        modal.style.display = 'flex';

        btn.addEventListener('click', () => {
            const key = input.value.trim();
            if (key.startsWith('sk-ant-')) {
                localStorage.setItem('taberu_api_key', key);
                modal.style.display = 'none';
                resolve(key);
            }else{
                input.style.borderColor = 'red';
            }
        });
    });
}



const params = new URLSearchParams(window.location.search);
const dish = params.get('dish');
const output = document.getElementById('recipeOutput');

if (!dish) {
    output.innerHTML = `
    <p class="loadingMsg">
        no dish selected :( <a href="recipes.html">go back</a>
    </p>`;
} else {
    document.title = `Taberu - ${dish}`;
    createRecipe(dish);
}

async function createRecipe(dish){

    let key = getKey();
    if(!key) {
        key = await promptKey();
    }

    const prompt = `
    You are japanese cooking helper for a site called Taberu.

    you have to generate a recipe for ${dish}.

    respon ONLY with a json object, no markdown, no explanation, and shape should be:
    {
        "name": "dish name",
        "emoji": "single emoji",
        "difficulty" : "easy" | "medium" | "hard",
        "time": "e.g. 30 mins",
        "desc": "one sentence about the dish",
        "ingredients": ["ingredient 1", "ingredient 2", ....],
        "steps" : ["step 1", "step 2", ....]
    }

    keep tone casual and not too directive, steps should have 5-8 items, ingredients 6-10 items.
    `;

    try{
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST', 
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${key}`
            },
            body: JSON.stringify({
                model: 'claude-haiku-5-5',
                max_tokens: 1000,
                messages: [{role:'user', content:prompt}]
            })
        });

        const data = await response.json();
        console.log('raw response:', data)

        if(data.error){
            localStorage.removeItem('taberu_api_key');
            output.innerHTML = `
            <p class="loadingMsg">
                bad api key ;(
                <a href="recipe.html?dish=${encodeURIComponent(dish)}">try again</a>
            </p> 
            `;
            return;
        }

        const r = JSON.parse(data.content[0].text.trim());
        renderRecipe(r);

    } catch (err){
        console.error('parse error:', err);
        console.log('raw response: ', data);
        output.innerHTML=`
        <p class="loadingMsg">
            something went wrong :(
            <a href="recipes.html">go back</a>
        </p>
        `;
    }
}

function renderRecipe(r){
    output.innerHTML = `
    <div class="recipeHero">
        <div class="recipeHeroEmoji">${r.emoji}</div>
        <h1 class="recipeHeroTitle">${r.name}</h1>
        <p class="recipeHeroDesc">${r.desc}</p>
        <div class="recipeHeroMeta">
            <span>${r.time}</span>
            <span class="difficultyBadge">${r.difficulty}</span>
        </div>
    </div>

    <div class="recipeBody">
        <div class="recipeSection">
            <h2>ingredients</h2>
            <ul class="ingredientList">
                ${r.ingredients.map(i=> `<li>${i}</li>`).join('')}
            </ul>
        </div>

        <div class="recipeSection">
            <h2>steps</h2>
            <ol class="recipeSteps">
                ${r.steps.map(s=> `<li>${s}</li>`).join('')}
            </ol>
        </div>
    </div>

    <div class="recipeBack">
        <a href="recipes.html" class="backBtn">pick another instead</a>
    </div>
    `;
}