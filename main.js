// Skills Data
const skills = [
    {
        name: 'Data Analysis',
        description: 'Statistical analysis, hypothesis testing, and data interpretation',
        icon: '📊'
    },
    {
        name: 'Python',
        description: 'Pandas, NumPy, Scikit-learn for data manipulation and analysis',
        icon: '🐍'
    },
    {
        name: 'SQL',
        description: 'Database querying, data extraction, and management',
        icon: '💾'
    },
    {
        name: 'Data Visualization',
        description: 'Tableau, Power BI, and Python visualization libraries',
        icon: '📈'
    },
    {
        name: 'Machine Learning',
        description: 'Predictive modeling, classification, and regression analysis',
        icon: '🤖'
    },
    {
        name: 'Excel',
        description: 'Advanced Excel functions, pivot tables, and VBA',
        icon: '📑'
    }
];

// Projects Data
const projects = [
    {
        title: 'Sales Forecast Analysis',
        description: 'Developed predictive models to forecast sales trends using historical data',
        tools: ['Python', 'Scikit-learn', 'Pandas'],
        image: 'https://placehold.co/600x400'
    },
    {
        title: 'Customer Segmentation',
        description: 'Implemented clustering algorithms to identify customer segments',
        tools: ['Python', 'K-means', 'Tableau'],
        image: 'https://placehold.co/600x400'
    },
    {
        title: 'Market Basket Analysis',
        description: 'Analyzed purchase patterns to identify product associations',
        tools: ['SQL', 'R', 'Power BI'],
        image: 'https://placehold.co/600x400'
    }
];

// Populate Skills Section
function populateSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.innerHTML = `
            <h3>${skill.icon} ${skill.name}</h3>
            <p>${skill.description}</p>
        `;
        skillsGrid.appendChild(skillCard);
    });
}

// Populate Projects Section
function populateProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 200px; object-fit: cover;">
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tools">
                    ${project.tools.map(tool => `<span class="tool">${tool}</span>`).join(' ')}
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Handle Contact Form
function setupContactForm() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        console.log('Form submitted:', formData);
        // Here you would typically send the data to a server
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateSkills();
    populateProjects();
    setupContactForm();
});