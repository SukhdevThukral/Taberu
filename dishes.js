let active = 'all';

function renderingDishes(cat){
    const grid = document.getElementById('dishGrid');
    const filterd = cat === 'all' ? dishes : dishes.filter(d=> d.cat === cat);
    grid.innerHTML = filterd.map(d=> `
            <div class="dishCard">
                <div class="dishEmoji">${d.emoji}</div>
                <h3> ${d.name}</h3>
                <p class="dishDesc"> ${d.desc}</p>
                <span class="dishRegion">${d.region}</span>
            </div>`).join('');
}   

document.querySelectorAll('.filterBtn').forEach(btn=> {
    btn.addEventListener('click',()=> {
        document.querySelectorAll('.filterBtn').forEach(b=> b.classList.remove('active'));
        btn.classList.add('active');
        active=btn.dataset.cat;
        renderingDishes(active);
    });
})

renderingDishes('all');