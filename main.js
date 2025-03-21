const typed = new Typed (".skill",{
    strings: [' Fullstack Web Developer','Graphics Designer', 'UI/UX Designer'],
    typeSpeed:50,
    backSpeed:50,
    while:true
})

let footer = document.createElement('footer');
footer.classList.add('footer');

let footerContent = `
    <div class="footer-container">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
        <ul class="footer-links">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Service</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </div>
`;

footer.innerHTML = footerContent;
document.body.appendChild(footer);