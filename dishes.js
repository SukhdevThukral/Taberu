const dishes = [
    {name: 'ramen', cat: 'noodles', desc: 'alkaline wheat noodles served in a hot broth and topped with meats, eggs, and vegetables', region: 'nationwide'},
    {name: 'soba', cat: 'noodles', desc: 'thin Japanese noodles made from buckwheat flour mixed with water and a binding agent', region: 'nagano'},
    {name: 'udon', cat: 'noodles', desc: 'thick, chewy Japanese noodle made from wheat flour, salt, and water', region: 'kagawa'},
    {name: 'onigiri', cat: 'rice', desc: 'rice ball made from compressed short-grain white rice, usually shaped into a triangle or cylinder and wrapped in a crisp sheet of dried seaweed (nori)', region: 'nationwide'},
    {name: 'katsu curry', cat: 'street', desc: 'crispy, golden, deep-fried breaded cutlet (tonkatsu for pork or chicken katsu for chicken) sliced into strips, laid over a bed of fluffy short-grain rice, and smothered in a rich, thick, and mildly sweet Japanese curry sauce', region: 'kanto'},
    {name: 'takoyaki', cat: 'street', desc:'popular ball-shaped, made from a wheat flour and dashi-infused batter, cooked in a special molded pan, and typically filled with diced octopus', region: 'kansai'},
    {name: 'yakitori', cat: 'street', desc:'skewered chicken pieces grilled over charcoal and basted with savory tare sauce or salt.', region: 'nationwide'},
    {name: 'miso soup', cat: 'soup', desc:'traditional, comforting broth made of dashi stock mixed with fermented soybean paste (miso), typically containing tofu and seaweed', region: 'nationwide'},
    {name: 'tempura', cat: 'street', desc:'seafood and vegetables dipped in a light, airy batter and deep-fried to crisp perfection', region: 'kanto'},
    {name: 'gyoza', cat: 'street', desc:'pan-fried dumplings filled with minced pork, cabbage, garlic, and ginger, featuring a crispy bottom and tender steamed top.', region: 'hamamastu'},
];

let active = 'all';

function renderingDishes(cat){
    const grid = document.getElementById('dishGrid');
    const filterd = cat === 'all' ? dishes : dishes.filter(d=> d.cat === cat);
    grid.innerHTML = filterd.map(d=> `
            <div class="dishCard">
                <div class="dishEmoji">${d.emoji}</div>
                <h3> ${d.name}</h3>
                <p class="dishDesc"> ${d.desc}</p>
                <span class="dishRegion">${d.region}</div>
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