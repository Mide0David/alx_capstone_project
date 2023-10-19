const envCategory = document.querySelector('.environment-category');
const sciCategory = document.querySelector('.science-category');
const bussCategory = document.querySelector('.business-category');
const aniCategory = document.querySelector('.animal-category');
const sportCategory = document.querySelector('.sports-category');
const popCategory = document.querySelector('.pop-category');
const musicCategory = document.querySelector('.music-category');
const movieCategory = document.querySelector('.movie-category');
const spaceCategory = document.querySelector('.physics-category');
let scrollContainer = document.querySelector(".wrapper");
const NUM_DOODLES = 35;
const doodleContainer = document.querySelector('.doodle-container');

for (let i = 0; i < NUM_DOODLES; i++) {
    createDoodle();
}

function createDoodle() {
    const svgs = [
    `<svg xmlns="http://www.w3.org/2000/svg" width="135" height="50" viewBox="0 0 135 50" fill="none">
    <path d="M131.826 25.0497C131.826 25.0497 119.602 11.6797 109.065 8.91515C95.0648 5.24233 85.1175 26.0071 86.0686 36.3155C87.0197 46.6239 96.4998 47.6299 102.587 46.7019C108.674 45.774 113.261 37.8539 111.076 28.8929C108.89 19.9318 94.4654 3.03608 74.4681 4.64001C54.4708 6.24394 44.8678 17.7772 52.7229 29.7164C55.5996 34.0889 59.3299 36.3205 63.2211 37.603C67.1123 38.8854 75.1411 36.6469 74.4455 27.9741C73.7498 19.3013 56.9343 4.68971 42.6292 7.19373C29.8172 9.43639 17.8283 19.7568 18.6845 30.4316C19.5407 41.1065 29.0296 40.3454 31.0686 40.1818C33.1075 40.0183 38.6084 38.7372 39.0776 30.8108C39.5468 22.8844 33.6842 -1.99277 3.0357 4.57832" stroke="#A5DC60" stroke-width="6" stroke-linecap="round"/>
  </svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" width="52" height="48" viewBox="0 0 52 48" fill="none">
    <path d="M48.4382 12.5C39.5672 13.6424 18.0602 19.6483 2.99991 34.532" stroke="#A5DC60" stroke-width="6" stroke-linecap="round"/>
    <path d="M45.3122 32.0413C36.1158 29.3174 17.2412 19.9595 15.3146 4.3197" stroke="#A5DC60" stroke-width="6" stroke-linecap="round"/>
  </svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" width="68" height="60" viewBox="0 0 68 60" fill="none">
  <path d="M7.46691 48.3693C4.84545 37.3462 0.620269 15.1139 4.69125 14.3687C9.77997 13.4372 19.9574 34.3964 20.42 39.9856C20.8826 45.5747 21.3452 9.71098 27.8218 3.65608C34.2984 -2.39882 33.8357 35.328 31.9853 39.9856C30.1349 44.6431 54.6534 18.0945 63.443 19.4918C72.2326 20.8891 41.7005 60.4788 24.5837 56.7527" stroke="#A5DC60" stroke-width="6" stroke-linecap="round"/>
</svg>`,
`<svg xmlns="http://www.w3.org/2000/svg" width="68" height="60" viewBox="0 0 68 60" fill="none">
<path d="M7.46691 48.3693C4.84545 37.3462 0.620269 15.1139 4.69125 14.3687C9.77997 13.4372 19.9574 34.3964 20.42 39.9856C20.8826 45.5747 21.3452 9.71098 27.8218 3.65608C34.2984 -2.39882 33.8357 35.328 31.9853 39.9856C30.1349 44.6431 54.6534 18.0945 63.443 19.4918C72.2326 20.8891 41.7005 60.4788 24.5837 56.7527" stroke="#A5DC60" stroke-width="6" stroke-linecap="round"/>
</svg>`
];
    const svgText = svgs[Math.floor(Math.random() * svgs.length)];
    const doodle = new DOMParser().parseFromString(svgText, 'image/svg+xml').documentElement;
    doodle.className = 'doodle';

    // Randomize position
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    doodle.style.position = 'absolute';
    doodle.style.left = `${x}px`;
    doodle.style.top = `${y}px`;
    doodle.style.width = `30px`;
    doodle.style.height = `30px`;

    doodleContainer.appendChild(doodle);
}


scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto"
});

envCategory.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = '#7BEACC';
});

envCategory.addEventListener('mouseout', () => {
    document.body.style.backgroundColor = '#7BF2C5';
});

spaceCategory.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = '#DA6859';
});

spaceCategory.addEventListener('mouseout', () => {
    document.body.style.backgroundColor = '#E0746B';
});

sciCategory.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = '#D099C0';
});

sciCategory.addEventListener('mouseout', () => {
    document.body.style.backgroundColor = '#7A5AA9';
});

bussCategory.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = '#FAECA0';
});

bussCategory.addEventListener('mouseout', () => {
    document.body.style.backgroundColor = '#1D889B';
});

aniCategory.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = '#7FFFD4';
});

aniCategory.addEventListener('mouseout', () => {
    document.body.style.backgroundColor = '#fff';
});

sportCategory.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = '#f54514';
});

sportCategory.addEventListener('mouseout', () => {
    document.body.style.backgroundColor = '#FC4A19';
});

popCategory.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = '#E4896F';
});

popCategory.addEventListener('mouseout', () => {
    document.body.style.backgroundColor = '#DC647A';
});

musicCategory.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = '#D007F8';
});

musicCategory.addEventListener('mouseout', () => {
    document.body.style.backgroundColor = '#BC1FFF';
});

movieCategory.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = '#EF7F17';
});

movieCategory.addEventListener('mouseout', () => {
    document.body.style.backgroundColor = '#FFAE43';
});

