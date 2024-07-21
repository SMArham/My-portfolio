

document.addEventListener('DOMContentLoaded', () => {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('nav ul li a');
  
    window.onscroll = () => {
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  
        sections.forEach(section => {
            let sectionTop = section.offsetTop - 150;
            let sectionHeight = section.offsetHeight;
            let sectionId = section.getAttribute('id');
  
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };
  });
  