window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab__link');
    const tabContent = document.querySelectorAll('.content__tab');
    const tabParent = document.querySelector('.tabs');
    console.log(tabParent);

    function hideTabContent() {
        tabContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });
        tabs.forEach(item => {
            item.classList.remove('active');
        });
    }

    function showTabContent(i = 0) {
        tabContent[i].classList.remove('hide');
        tabContent[i].classList.add('show');
        tabs[i].classList.add('active');
    };

    hideTabContent();
    showTabContent();

    tabParent.addEventListener('click', (event) => {
        const target = event.target; // обьект события, контекст вызова 
        tabs.forEach((item, i) => {
            if (target == item) {
                hideTabContent();
                showTabContent(i);
            }
        });
    });


});