// Header part

let header = document.querySelector('.header');
let scrollUp = document.querySelector('.scroll-up');
let scrollUpBtn = document.getElementById('scrollUp');


scrollUpBtn.addEventListener('click',()=>{
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
})

const headerEffect = () =>{
    if(window.scrollY >= 10){
        header.style.boxShadow = '0px 0px 2px rgba(0,0,0,0.2)';
        scrollUp.style.display = 'flex';
    }else{
        header.style.boxShadow = 'none';
        scrollUp.style.display = 'none';
    }
}


document.addEventListener('scroll', headerEffect);

// dark and light mode

let theme = document.getElementById('theme');
let root = document.querySelector(':root');

const clickedTheme = () => {
    theme.classList.toggle('fa-moon');
    theme.classList.toggle('fa-sun');
    if (theme.classList.contains('fa-moon')) {
        root.style.setProperty('--c-primary', '#0b1726');
        root.style.setProperty('--c-background', '#ffffff');
        root.style.setProperty('--c-filter', 'brightness(0) saturate(100%) invert(9%) sepia(18%) saturate(1423%) hue-rotate(172deg) brightness(99%) contrast(91%)');
    } else if (theme.classList.contains('fa-sun')) {
        root.style.setProperty('--c-primary', '#f1f0f2');
        root.style.setProperty('--c-background', '#0b1726');
        root.style.setProperty('--c-filter', 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(4594%) hue-rotate(183deg) brightness(93%) contrast(102%)');
    }

}

theme.addEventListener('click', clickedTheme);

// skill data

const skillData = [
    {
        name: 'HTML',
        img: 'image/html.png',
        description: 'I learned HTML, the fundamental language for building web pages. It structures content with elements like headings, paragraphs, links, and images, enabling the creation and design of websites effectively.',
    },
    {
        name: 'CSS',
        img: 'image/css.png',
        description: 'I learned CSS, or Cascading Style Sheets, which styles and layouts web pages. It controls the look of HTML elements, including colors, fonts, spacing, and positioning, enhancing visual presentation and design.',
    },
    {
        name: 'JavaScript',
        img: 'image/js.png',
        description: 'I learned JavaScript, a versatile programming language for web development. It enables dynamic content, interactive features, and complex functionality on websites, enhancing user experiences through responsive elements and real-time updates.',
    },
    {
        name: 'Bootstrap',
        img: 'image/bootstrap.png',
        description: 'I learned Bootstrap, a popular front-end framework for developing responsive, mobile-first websites. It provides pre-designed components and a flexible grid system, simplifying layout design and ensuring consistency across different devices.',
    },
    {
        name: 'React',
        img: 'image/react.png',
        description: 'I learned React, a JavaScript library for building user interfaces. It enables efficient, component-based development, allowing dynamic and interactive web applications with reusable components and a virtual DOM for optimal performance.',
    },
];

const skillDataElements = skillData.map((curElem) => {
    return `<div class="skill-item-box d-flex">
                    <div class="skill-image">
                        <img src="${curElem.img}" alt="html">
                    </div>
                    <div class="skill-content">
                        <h3>${curElem.name}</h3>
                        <p>${curElem.description}</p>
                    </div>
                </div>`
});

let skillBoxElem = document.getElementById('skillBox');
skillBoxElem.innerHTML = skillDataElements.join('');


// Qualification start

const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification-active');
        })
        target.classList.add('qualification-active');

        tabs.forEach(tab =>{
            tab.classList.remove('qualification-active');
        })
        tab.classList.add('qualification-active');
    })
})

// Project start



const projectData = [
    {
        projectName: "E-commerce Template",
        projectImg: "image/project1.png",
        projectDataLink:"https://codeswithuttam.github.io/template-one/",
        projectDescription: "Developed e-commerce templates with HTML and CSS, featuring visually appealing layouts, product listings, and intuitive user interfaces.",
    },
    {
        projectName: "Financial Website Template",
        projectImg: "image/project2.png",
        projectDataLink:"https://codeswithuttam.github.io/template-two/",
        projectDescription: "Designed and developed responsive financial website templates using HTML and CSS, ensuring optimal user experience across various devices and screen sizes.",
    },
    {
        projectName: "E-commerce Template",
        projectImg: "image/project3.png",
        projectDataLink:"https://codeswithuttam.github.io/template-three/",
        projectDescription: "Designed and developed responsive e-commerce templates using HTML and CSS, ensuring optimal user experience across various devices and screen sizes.",
    },
    {
        projectName: "CSS Gradient Generator",
        projectImg: "image/project4.png",
        projectDataLink:"https://codeswithuttam.github.io/JavaScript-project-one/",
        projectDescription: "Developed responsive gradient changers using HTML, CSS and js, enabling dynamic background transitions adaptable to various screen sizes.",
    },
    {
        projectName: "ToDo Notes App",
        projectImg: "image/project5.png",
        projectDataLink:"https://codeswithuttam.github.io/JavaScript-project-two/",
        projectDescription: "Developed responsive to-do notes application using HTML, CSS, and JavaScript, with persistent data storage via LocalStorage for seamless user experience.",
    },
    {
        projectName: "Analog Clock",
        projectImg: "image/project6.png",
        projectDataLink:"https://codeswithuttam.github.io/JavaScript-project-three/",
        projectDescription: "Developed responsive analog clocks using HTML, CSS, and JavaScript, showcasing dynamic time display with smooth, real-time animations.",
    },
    {
        projectName: "Weather Application",
        projectImg: "image/project7.png",
        projectDataLink:"https://codeswithuttam.github.io/JavaScript-project-four/",
        projectDescription: "Developed responsive weather apps using HTML, CSS, and JavaScript, integrating APIs for real-time weather data and user-friendly interfaces.",
    },
];

let projectDataNew = projectData.map((elem)=>{
    return `<div class="project-items">
                    <div class="projects-img">
                        <img src="${elem.projectImg}" alt="project-image">
                    </div>
                    <div class="projects-content">
                        <div>
                            <h4 class="projects-name">${elem.projectName}</h4>
                            <div class="projects-button">
                                <a class="btn" target="_blank" href="${elem.projectDataLink}">Live Demo</a>
                            </div>
                        </div>
                        <p class="projects-description">${elem.projectDescription}</p>
                    </div>
                </div>`
});

document.getElementById('projectsBox').innerHTML = projectDataNew.join('');

let menuEffect = document.getElementById('menuEffect');
let menuButton = document.querySelector('.menu-button');

const menuButtonEffect = () => {
    menuEffect.classList.toggle('fa-bars');
    menuEffect.classList.toggle('fa-xmark');
    if (theme.classList.contains('fa-bars')) {
        console.log("bars");
    } else if (theme.classList.contains('fa-xmark')) {
        console.log("cross");
    }
}

menuButton.addEventListener('click',menuButtonEffect);
