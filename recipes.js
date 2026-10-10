const grid = document.getElementById('dishGrid');

grid.innerHTML = dishes.map(d => `
        <a class="dishCard dishCardLink" href="recipe.html?dish=${encodeURIComponent(d.name)}">
            <div class="dishEmoji">${d.emoji}</div>
            <h3>${d.name}</h3>
            <p class="dishDesc">${d.desc}</p>
            <span class="dishRegion">${d.region}</span> 
        </a>`).join('');