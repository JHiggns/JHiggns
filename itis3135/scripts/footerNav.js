class FooterNav {
  constructor(links, spacer) {
    this.links = links;
    this.spacer = spacer;
  }

  generate() {
    const nav = document.createElement('nav');
    nav.style.textAlign = 'center';
    nav.style.marginTop = '20px';
    
    for (let i = 0; i < this.links.length; i++) {
      const link = document.createElement('a');
      link.href = this.links[i].url;
      link.textContent = this.links[i].text;
      nav.appendChild(link);
      
      if (i < this.links.length - 1) {
        const spacer = document.createElement('span');
        spacer.textContent = this.spacer;
        nav.appendChild(spacer);
      }
    }
    
    return nav;
  }
}

const links = [
  { url: '/private_html/index.html', text: 'clt home' },
  { url: 'https://github.com', text: 'github.com' },
  { url: 'https://jhiggi22.github.io', text: 'github.io' },
  { url: 'https://freeecodecamp.org', text: 'freeecodecamp' },
  { url: 'https://www.codecademy.com/', text: 'Code Academy' },
  { url: 'https://www.linkedin.com/', text: 'LinkedIn' },
];

const spacer = ' | ';
const footerNav = new FooterNav(links, spacer);
const footer = document.querySelector('footer');
footer.appendChild(footerNav.generate());
