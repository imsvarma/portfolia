document.addEventListener('DOMContentLoaded', () => {
    // Fetch content (make sure your file is named content.json)
    fetch('content.json')
      .then(response => response.json())
      .then(data => {
        if (!data.hero || !data.about || !data.projects || !data.contact) {
          throw new Error('Invalid content structure');
        }
        const heroTitle = document.getElementById('hero-title');
        if (heroTitle) heroTitle.textContent = data.hero.title;
  
        const heroSubtitle = document.getElementById('hero-subtitle');
        if (heroSubtitle) heroSubtitle.textContent = data.hero.subtitle;
  
        const aboutContent = document.getElementById('about-content');
        if (aboutContent) aboutContent.textContent = data.about.content;
  
        const projectsList = document.getElementById('projects-list');
        if (projectsList) {
          data.projects.forEach(project => {
            const projectDiv = document.createElement('div');
            projectDiv.className = 'project';
            projectDiv.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
            projectsList.appendChild(projectDiv);
          });
        }
  
        const contactContent = document.getElementById('contact-content');
        if (contactContent) contactContent.textContent = data.contact.content;
      })
      .catch(error => console.error('Error loading content:', error));
  
    // Pixel text rotation for fade in/out effect
    const pixelText = document.getElementById('pixel-text');
    if (pixelText) {
      const messages = ["A Tech Enthusiast", "A Data Engineer","A CS Grad", "Seeking Full-Time Opportunities"];
      let index = 0;
      // Set initial text
      pixelText.setAttribute('data-text', messages[index]);
      // Optionally, also update the inner text if needed:
      pixelText.textContent = messages[index];
      // Rotate text every 4000 milliseconds (4 seconds)
      setInterval(() => {
        index = (index + 1) % messages.length;
        pixelText.setAttribute('data-text', messages[index]);
        // Update fallback inner text as well
        pixelText.textContent = messages[index];
      }, 4000);
    }

    setTimeout(() => {
        const rocket = document.querySelector('.rocket-3d');
        rocket.style.zIndex = 3;  // or rocket.classList.add('front');
      }, 2000); // 2 seconds
   
  });
  