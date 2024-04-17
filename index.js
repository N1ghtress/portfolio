const mystery = document.querySelector('#mystery')
const sections = document.querySelector('.sections')
let mystery_counter = 10

mystery.addEventListener('click', e => {
    mystery_counter -= 1
    if (mystery_counter == 0) {
        console.log("When you gaze into the kindness, the kindness gazes back...")
        sections.innerHTML = `<div class="mystery">
        <h1>k N1Ghtress</h1>
        <p class="quote"><span style="color:#e74848">NEVER GIVE UP</span> ON THE <span style="color:#e74848">ONE</span> YOU <span style="color:#e74848">LOVE</span> USING <span style="color:#e74848">KINDNESS</span></p>
        </div>`
        mystery_counter = -1
    }
})
