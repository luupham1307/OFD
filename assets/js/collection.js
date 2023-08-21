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


document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    // Initial display of the first tab content
    tabContents[0].classList.add('active');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to the clicked tab
            tab.classList.add('active');

            // Hide all tab contents
            tabContents.forEach(content => content.classList.remove('active'));
            // Show the corresponding tab content
            const contentId = tab.getAttribute('id').replace('tab', 'content');
            document.getElementById(contentId).classList.add('active');
        });
    });
});

