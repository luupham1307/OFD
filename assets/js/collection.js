

function changeTab(tabIndex) {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    tabs[tabIndex].classList.add('active');
    tabContents[tabIndex].classList.add('active');
}