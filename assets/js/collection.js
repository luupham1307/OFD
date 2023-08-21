// const tabs = document.querySelectorAll('.tab');
// const tabContents = document.querySelectorAll('.tab-content');

// tabs.forEach(tab => {
//     tab.addEventListener('click', () => {
//         // Remove active class from all tabs
//         tabs.forEach(t => t.classList.remove('active'));
//         // Add active class to the clicked tab
//         tab.classList.add('active');

//         // Hide all tab contents
//         tabContents.forEach(content => content.classList.remove('active'));
//         // Show the corresponding tab content
//         const contentId = tab.getAttribute('id').replace('tab', 'content');
//         document.getElementById(contentId).classList.add('active');
//     });
// });


function changeTab(tabIndex) {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    tabs[tabIndex].classList.add('active');
    tabContents[tabIndex].classList.add('active');
}