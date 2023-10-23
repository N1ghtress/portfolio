function renderheaderfooter(prefix = '') {
    fetch(prefix + 'templates/header.html')
    .then((response) => response.text())
    .then((template) => {
        const rendered = Mustache.render(template, {
            home: 'Home'
        });
        document.getElementById('header-target').innerHTML = rendered;
    })
    fetch(prefix + 'templates/footer.html')
    .then((response) => response.text())
    .then((template) => {
        const rendered = Mustache.render(template, {
            github: 'https://github.com/N1ghtress'
        });
        document.getElementById('footer-target').innerHTML = rendered;
    })
}
