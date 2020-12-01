
const reviews = [
    {
        id: 1,
        name: "Susa Smithy",
        job: "Web Developer",
        img:"./person-2.jpg",
        review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a rhoncus turpis. Suspendisse et augue vulputate, consectetur sem sit amet, accumsan nisl. Ut felis mi, porttitor et nisl sed, semper placerat augue.",
    },
    {
        id: 2,
        name: "Anna Johncena",
        job: "Web Designer",
        img:"./person-3.jpg",
        review:"Nulla ut faucibus nisi, non venenatis nisl. Nulla facilisis a nisi et lacinia. Praesent mattis sapien et leo suscipit, quis aliquam nibh faucibus. In fermentum odio a volutpat tincidunt.",
    },
    {
        id: 3,
        name: "Peter Jack",
        job: "Intern",
        img:"./person-4.jpg",
        review:"Vestibulum consectetur enim purus, nec dictum purus finibus ac. Vivamus pulvinar ex non euismod cursus. Nam at efficitur nisi. Cras porta aliquet lectus, vitae volutpat ligula mattis sed. In hac habitasse platea dictumst.",
    },
    {
        id: 4,
        name: "Billo Andercena",
        job: "The CEO",
        img:"./person-5.jpg",
        review:"Vestibulum efficitur, elit at sollicitudin blandit, felis libero semper lacus, eu interdum diam sem at tellus. Nam semper in tortor maximus cursus. Nullam dignissim at justo efficitur placerat. ",
    },
];

let currentItem = 0;

const personImg = document.getElementById('person-img');
const authorName = document.getElementById('author-name');
const jobTitle = document.getElementById('job-title');
const reviewContent = document.getElementById('review-content');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');



window.addEventListener('DOMContentLoaded', function(){
    showPerson();
})

function showPerson(){
    const item = reviews[currentItem];
    personImg.src = item.img;
    authorName.textContent = item.name;
    jobTitle.textContent = item.job;
    reviewContent.textContent = item.review;
}

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson();
});

prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson();
});

randomBtn.addEventListener('click', function(){
    newRandomItem = getRandomNumber();
    while(currentItem == newRandomItem){
        newRandomItem = getRandomNumber();
    }
    currentItem = newRandomItem;
    showPerson();
});

function getRandomNumber() {
    return Math.floor(Math.random() * reviews.length);
}