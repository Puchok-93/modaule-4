document.addEventListener("DOMContentLoaded", function(event) {
    const resultFirst = document.querySelector('#result-1');
    const resultSecond = document.querySelector('#result-2');
    const quation = document.querySelector('.quation');
    const resultBtn = document.querySelector('.result-btn');
    const checkbox = document.querySelectorAll('.quation-options__option input');

    checkbox.forEach(item => {
        item.addEventListener('click', (e) => {
            item.classList.toggle('is-active');
        });
    })

    resultBtn.addEventListener('click', () => {
        let counter = [];
        for(let i = 0; i <= checkbox.length - 1; i++) {
            if(checkbox[i].classList.contains('is-active')) {
                    counter.push(checkbox[i]);
            }
        }

        if(counter.length ==  1) {
            resultFirst.style.display = 'block';
            console.log(counter.length);
        } else {
            resultSecond.style.display = 'block';
        }

        quation.style.display = 'none';
    })
});