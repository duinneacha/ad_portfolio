console.log('adjs.js loaded');

// function setupTimelineDetails() {
//     document.querySelectorAll('#timeline details').forEach((elem) => {
//         elem.addEventListener('click', function() {
//             document.querySelectorAll('#timeline details').forEach((el) => {
//                 if (el !== elem) el.removeAttribute('open');
//             });
//         });
//     });
// }



function setupTimelineDetails() {
    document.querySelectorAll('#timeline details').forEach((elem) => {
        const summary = elem.querySelector('summary');
        const circle = elem.querySelector('.circle');
        const content = elem.querySelector('p');
        
        [summary, circle].forEach((el) => {
            el.addEventListener('click', function() {
                const isOpen = elem.getAttribute('open');
                
                // Close all details elements
                document.querySelectorAll('#timeline details').forEach((el) => {
                    el.removeAttribute('open');
                });
                
                // Open the clicked details element
                if (!isOpen) {
                    elem.setAttribute('open', '');
                }
            });
        });
    });
    
}

document.addEventListener('DOMContentLoaded', (event) => {
    setupTimelineDetails();
  });