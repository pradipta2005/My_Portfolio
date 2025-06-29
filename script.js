// Add animation classes to elements
document.addEventListener('DOMContentLoaded', () => {
    // Add animate-on-scroll class to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('animate-on-scroll');
    });

    // Add animate-on-scroll class to cards
    const cards = document.querySelectorAll('.vistara-card');
    cards.forEach(card => {
        card.classList.add('animate-on-scroll');
    });

    // Handle scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your form submission logic here
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }

    // Certificate modal functionality
    const modal = document.getElementById('certificateModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');

    // Close modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    }

    // Close modal with escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
});

// Certificate data
const certificateData = {
    'effective-writing-cert': {
        title: 'Effective Writing Certificate',
        message: 'Certificate of completion for Effective Writing course issued by IIT Roorkee. This course enhanced my written communication skills and technical writing abilities.',
        details: 'Issued by: IIT Roorkee\nDuration: Self-paced\nSkills: Technical Writing, Communication',
        file: 'Effective Writing.jpg',
        type: 'image'
    },
    'problem-solving-cert': {
        title: 'Problem Solving Through Programming In C',
        message: 'Certificate of completion for Problem Solving Through Programming In C course issued by IIT Kharagpur. This course strengthened my programming fundamentals and problem-solving skills.',
        details: 'Issued by: IIT Kharagpur\nDuration: Self-paced\nSkills: C Programming, Problem Solving, Algorithms',
        file: 'Certificate.pdf',
        type: 'pdf'
    },
    'nasa-space-app-cert': {
        title: 'NASA International Space App Challenge Participant',
        message: 'Participant Certificate in NASA International Space App Challenge. This prestigious global hackathon brings together innovators from around the world to solve real-world problems using NASA\'s open data.',
        details: 'Issued by: NASA\nEvent: International Space App Challenge\nCategory: Global Innovation\nSkills: Problem Solving, Innovation, Space Technology, Open Data',
        file: 'NASA Space Apps Challenge.pdf',
        type: 'pdf'
    },
    'zidio-internship-cert': {
        title: 'Data Science Virtual Internship',
        message: 'Certificate of completion for Data Science Virtual Internship at Zidio DEVELOPMENT. This 3-month program provided hands-on experience in data analysis, machine learning, and data visualization.',
        details: 'Issued by: Zidio DEVELOPMENT\nDuration: 3 months\nSkills: Python, Pandas, NumPy, Scikit-learn, Data Visualization',
        file: 'Certificate.pdf',
        type: 'pdf'
    },
    'zidio-training-cert': {
        title: 'Data Science Training Program',
        message: 'Certificate of completion for Data Science Training Program at Zidio DEVELOPMENT. This comprehensive training covered advanced data science techniques, deep learning, and industry best practices.',
        details: 'Issued by: Zidio DEVELOPMENT\nDuration: 3 months\nSkills: Deep Learning, NLP, Big Data Analytics, Feature Engineering, Model Deployment',
        file: 'Tranning Certificate.pdf',
        type: 'pdf'
    },
    'next24tech-internship-cert': {
        title: 'Data Science Virtual Internship',
        message: 'Certificate of completion for Data Science Virtual Internship at Next24Tech. Developed a real-time road lane line detection model using OpenCV and deep learning.',
        details: 'Issued by: Next24Tech\nDuration: March 2024 - May 2024\nSkills: OpenCV, Deep Learning, Computer Vision, Python',
        file: 'PRADIPTA KHAN  Internship Certificate Next24tech.jpg',
        type: 'image'
    },
    'codesonbytes-internship-cert': {
        title: 'Data Science Virtual Internship',
        message: 'Certificate of completion for Data Science Virtual Internship at CodesOnBytes. Received Completion Certificate and Letter of Recommendation for outstanding performance.',
        details: 'Issued by: CodesOnBytes\nDuration: September 2023 - October 2023\nSkills: Data Science, Machine Learning, Data Analysis',
        file: '1684762207262.jpg',
        type: 'image'
    },
    'tata-simulation-cert': {
        title: 'Tata Data Visualisation Job Simulation',
        message: 'Certificate of completion for Tata Data Visualisation Job Simulation. Created visualizations for TCS, prepared questions for client leadership, and built visuals for executive decision-making.',
        details: 'Issued by: Tata Consultancy Services\nDuration: August 2024\nSkills: Data Visualization, Business Intelligence, Executive Communication',
        file: 'MyXvBcppsW2FkNYCX_Tata Group_bmZckotbY3b4E4hBj_1723303264150_completion_certificate (1).pdf',
        type: 'pdf'
    }
};

// Function to view certificate
function viewCertificate(certId) {
    const cert = certificateData[certId];
    if (cert) {
        document.getElementById('modalTitle').textContent = cert.title;
        let fileContent = '';
        if (cert.type === 'image') {
            fileContent = `<img src="${cert.file}" alt="${cert.title}" style="max-width:100%;border-radius:10px;margin:20px 0;">`;
        } else if (cert.type === 'pdf') {
            fileContent = `<a href="${cert.file}" target="_blank" class="btn" style="margin:20px 0;">Open Certificate PDF</a>`;
        }
        document.getElementById('modalMessage').innerHTML = `
            <strong>${cert.message}</strong><br><br>
            <strong>Details:</strong><br>
            ${cert.details.replace(/\n/g, '<br>')}<br><br>
            ${fileContent}
        `;
        document.getElementById('certificateModal').style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Function to close modal
function closeModal() {
    document.getElementById('certificateModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}