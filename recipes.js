const grid = document.getElementById('recipeGrid');
let activeDiff = 'all';

function renderRecipes(diff) {
    const filtered = diff === 'all' ? dishes : dishes.filter(d=> d.diff === diff);
    grid.innerHTML = filtered.map(d => `
            <a class="dishCard dishCardLink" href="recipe.html?dish=${encodeURIComponent(d.name)}">
                <div class="dishEmoji">${d.emoji}</div>
                <h3>${d.name}</h3>
                <p class="dishDesc">${d.desc}</p>
                <span class="dishRegion">${d.region}</span> 
                <span class="difficultyBadge">${d.diff}
            </a>`).join('');
}

document.querySelectorAll('.filterBtn').forEach(btn=> {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filterBtn').forEach(b=> b.classList.remove('active'));
        btn.classList.add('active');
        activeDiff = btn.dataset.diff;
        renderRecipes(activeDiff);
    });
});

renderRecipes('all')

