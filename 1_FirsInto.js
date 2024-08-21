const Box1 = document.querySelector(".ban1");
const Box2 = document.querySelector(".ban2");
const Box3 = document.querySelector(".ban3");
const Banner1 = document.querySelector(".banner1");
const Banner2 = document.querySelector(".banner2");
const Banner3 = document.querySelector(".banner3");
Box1.addEventListener("click", () => {
    Box1.style.borderLeft = "10px solid rgba(46, 133, 255, 0.901)";
    Box1.style.boxShadow = "0px 5px 10px rgba(0, 0, 0, 0.604)"; 
    Box1.style.backgroundColor = "rgba(255, 255, 255, 0.850)";
    Banner3.style.display = "none";
    Banner2.style.display = "none";
    Banner1.style.display = "flex";
    Box3.style.borderLeft = "";
    Box3.style.boxShadow = ""; 
    Box3.style.backgroundColor = "";
    Box2.style.borderLeft = "";
    Box2.style.backgroundColor = "";
    Box2.style.boxShadow = ""; 
});
Box2.addEventListener("click", () => {
    Box2.style.borderLeft = "10px solid rgba(46, 133, 255, 0.901)";
    Box2.style.boxShadow = "0px 5px 10px rgba(0, 0, 0, 0.604)"; 
    Box2.style.backgroundColor = "rgba(255, 255, 255, 0.850)";
    Banner2.style.display = "flex";
    Banner3.style.display = "none";
    Banner1.style.display = "none";
    Box1.style.borderLeft = "";
    Box1.style.boxShadow = "";
    Box1.style.backgroundColor = "";
    Box3.style.borderLeft = "";
    Box3.style.boxShadow = ""; 
    Box3.style.backgroundColor = "";
});

Box3.addEventListener("click", () => {
    Box3.style.borderLeft = "10px solid rgba(46, 133, 255, 0.901)";
    Box3.style.boxShadow = "0px 5px 10px rgba(0, 0, 0, 0.604)"; 
    Box3.style.backgroundColor = "rgba(255, 255, 255, 0.850)";
    Banner2.style.display = "none";
    Banner3.style.display = "flex";
    Banner1.style.display = "none";
    Box1.style.borderLeft = "";
    Box1.style.boxShadow = "";
    Box1.style.backgroundColor = "";
    Box2.style.borderLeft = "";
    Box2.style.boxShadow = ""; 
    Box2.style.backgroundColor = "";
});

const Menu1 = document.querySelector("#menu1");
const Menu2 = document.querySelector("#menu2");
const Menu3 = document.querySelector("#menu3");
const Menu4 = document.querySelector("#menu4");
const Menu5 = document.querySelector("#menu5");
const Menu6 = document.querySelector("#menu6");
const Car = document.querySelector(".CarAnimation");

Menu1.addEventListener("mouseenter", () =>{
    Car.style.right = "65%";
})
Menu1.addEventListener("mouseleave", () =>{
    Car.style.right = "170%";
})
Menu2.addEventListener("mouseenter", () =>{
    Car.style.right = "56%";
})
Menu2.addEventListener("mouseleave", () =>{
    Car.style.right = "-70%";
})

Menu3.addEventListener("mouseenter", () =>{
    Car.style.right = "46%";
})
Menu3.addEventListener("mouseleave", () =>{
    Car.style.right = "-70%";
})

Menu4.addEventListener("mouseenter", () =>{
    Car.style.right = "39%";
})
Menu4.addEventListener("mouseleave", () =>{
    Car.style.right = "-70%";
})

Menu5.addEventListener("mouseenter", () =>{
    Car.style.right = "33%";
})
Menu5.addEventListener("mouseleave", () =>{
    Car.style.right = "-70%";
})

Menu6.addEventListener("mouseenter", () =>{
    Car.style.right = "26%";
})
Menu6.addEventListener("mouseleave", () =>{
    Car.style.right = "-70%";
})

Menu1.addEventListener("mouseenter", () =>{
    Car.style.right = "65%";
})
Menu1.addEventListener("mouseleave", () =>{
    Car.style.right = "-70%";
})


// Cursor Controller
const cursorTracer = document.querySelector('.cursor-tracer');
let mouseX = 0, mouseY = 0, currentX = 0, currentY = 0;
const speed = 0.4; // Adjust for smoothness; closer to 1 is faster

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate() {
    currentX += (mouseX - currentX) * speed;
    currentY += (mouseY - currentY) * speed;

    cursorTracer.style.transform = `translate3d(${currentX - cursorTracer.clientWidth / 2}px, ${currentY - cursorTracer.clientHeight / 2}px, 0)`;

    requestAnimationFrame(animate);
}

// Click effect
document.addEventListener('mousedown', () => {
    cursorTracer.classList.add('click-effect');
});

document.addEventListener('mouseup', () => {
    cursorTracer.classList.remove('click-effect');
});

// Start the animation loop
animate();


