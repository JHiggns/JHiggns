// const createNav = () => {
//   // Create the primary navigation bar
//   const primaryNav = document.createElement("nav");
//   const primaryUl = document.createElement("ul");

//   // Create an array of primary navigation links
//   const primaryLinks = [
//     { href: "index.html", text: "Home" },
//     { href: "introduction.html", text: "Introduction" },
//     { href: "contract.html", text: "Contract" },
//     { href: "tables.html", text: "Tables" },
//     { href: "forms.html", text: "Form" },
//     { href: "website_evaluations.html", text: "Website Evaluations" },
//   ];

//   // Loop through the primary navigation links array and create list items and links
//   primaryLinks.forEach((link) => {
//     const li = document.createElement("li");
//     const a = document.createElement("a");

//     a.setAttribute("href", link.href);
//     a.textContent = link.text;

//     li.appendChild(a);
//     primaryUl.appendChild(li);
//   });

//   primaryNav.appendChild(primaryUl);

//   // Create the secondary navigation bar
//   const secondaryNav = document.createElement("nav");
//   const secondaryUl = document.createElement("ul");

//   // Create an array of secondary navigation links
//   const secondaryLinks = [
//     { href: "Stuff/gudWEBSITE 4 u.htm", text: "CRAPPY Website" },
//     { href: "hobbyPage/index.html", text: "Hobby Page" },
//     { href: "mtc.html", text: "More to come..." },
//   ];

//   // Loop through the secondary navigation links array and create list items and links
//   secondaryLinks.forEach((link) => {
//     const li = document.createElement("li");
//     const a = document.createElement("a");

//     a.setAttribute("href", link.href);
//     a.textContent = link.text;

//     li.appendChild(a);
//     secondaryUl.appendChild(li);
//   });

//   secondaryUl.classList.add("secondary-nav");
//   secondaryNav.appendChild(secondaryUl);

//   // Add the navigation bars to the page
//   document.body.insertBefore(secondaryNav, document.body.firstChild);
//   document.body.insertBefore(primaryNav, secondaryNav);
// };

// // Call the function to generate the navigation bars
// createNav();
const createNav = () => {

  // Create the primary navigation bar
  const primaryNav = document.createElement("nav");
  const primaryUl = document.createElement("ul");
  primaryUl.style.display = "flex";
  primaryUl.style.justifyContent = "center"; // Center the links horizontally

  const primaryLinks = [
    { href: "index.html", text: "Home" },
    { href: "introduction.html", text: "Introduction" },
    { href: "contract.html", text: "Contract" },
    { href: "tables.html", text: "Tables" },
    { href: "forms.html", text: "Form" },
    { href: "website_evaluations.html", text: "Website Evaluations" },
    { href: "polygons.html", text: "Polygon Program" },
    { href: "project_1.html", text: "Project Design" },
    { href: "calculator.html", text: "Calculator" },
  ];

  primaryLinks.forEach((link, index) => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.setAttribute("href", link.href);
    a.textContent = link.text;

    li.appendChild(a);
    primaryUl.appendChild(li);

    // Add "|" after each link except for the last one
    if (index < primaryLinks.length - 1) {
      const separator = document.createTextNode(" | ");
      li.appendChild(separator);
    }
  });

  primaryNav.appendChild(primaryUl);

  const secondaryNav = document.createElement("nav");
  const secondaryUl = document.createElement("ul");
  secondaryUl.style.display = "flex";
  secondaryUl.style.justifyContent = "center"; 

  const secondaryLinks = [
    { href: "Stuff/gudWEBSITE 4 u.htm", text: "CRAPPY Website" }, 
    { href: "hobbyPage/index.html", text: "Hobby Page" },
    { href: "clientProject/home.html", text: "Client Project" },
    { href: "mtc.html", text: "More to come..." },
  ];

  secondaryLinks.forEach((link, index) => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.setAttribute("href", link.href);
    a.textContent = link.text;

    li.appendChild(a);
    secondaryUl.appendChild(li);

    // Add "|" after each link except for the last one
    if (index < secondaryLinks.length - 1) {
      const separator = document.createTextNode(" |");
      li.appendChild(separator);
    }
  });

  secondaryUl.classList.add("secondary-nav");
  secondaryNav.appendChild(secondaryUl);

  document.body.insertBefore(secondaryNav, document.body.firstChild);
  document.body.insertBefore(primaryNav, secondaryNav);
};

createNav();
