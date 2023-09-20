const boxes = document.querySelectorAll('.box');

// addEventListener to see when the user scrolls
window.addEventListener('scroll', checkBoxes);

checkBoxes();

const checkBoxes = () => {
    // you want to trigger the animation when the user scrolls to the bottom of the page
    // window.innerHeight is the height of the window
    // triggerBottom is 80% of the window height
    const triggerBottom = window.innerHeight * 0.8;

    boxes.forEach(box => {
        // getBoundingClientRect() returns the size of an element and its position relative to the viewport
        // rect is an object that contains the size of the element and its position relative to the viewport
        // top is the distance from the top of the viewport to the top of the box
        const boxTop = box.getBoundingClientRect().top;
        // you want to see if the top of the box is less than the triggerBottom
        if(boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}