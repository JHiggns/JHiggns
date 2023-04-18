const roadIconLink = document.getElementById('road-icon-link');
const racetrackIconLink = document.getElementById('racetrack-icon-link');
const sightsSoundsLink = document.getElementById('sights-sounds-link');

const roadIconSection = document.getElementById('road-icon-section');
const racetrackIconSection = document.getElementById('racetrack-icon-section');
const sightsSoundsSection = document.getElementById('sights-sounds-section');

function setActiveSection(section, link) {
  // Remove active class from all links
  const links = document.querySelectorAll('.section-link');
  links.forEach(link => link.classList.remove('active-link'));

  // Add active class to selected link
  link.classList.add('active-link');

  // Hide all sections
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.remove('active-section'));

  // Show selected section
  section.classList.add('active-section');
}

// Add click event listeners to links
roadIconLink.addEventListener('click', function() {
  setActiveSection(roadIconSection, roadIconLink);
});

racetrackIconLink.addEventListener('click', function() {
  setActiveSection(racetrackIconSection, racetrackIconLink);
});

sightsSoundsLink.addEventListener('click', function() {
  setActiveSection(sightsSoundsSection, sightsSoundsLink);
});
