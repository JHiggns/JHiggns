// Define the navigation links as an array of objects
const navLinks = [
    { href: "home.html", text: "Home" },
    { href: "categories.html", text: "Categories" },
    { href: "products.html", text: "Products" },
    { href: "orders.html", text: "Orders" },
    { href: "contact.html", text: "Contact Us" }
  ];
  
  // Get the current HTML file name
  const currentPage = location.pathname.split("/").pop();
  
  // Generate the navigation menu HTML dynamically
  const navMenu = document.createElement("nav");
  const navList = document.createElement("ul");
  const navLogo = document.createElement("img");
  
//   navMenu.style.display = "flex";
//   navMenu.style.alignItems = "center";
//   navMenu.style.padding = "10px 20px";
  
//   navList.style.display = "flex";
//   navList.style.flexDirection = "row";
//   navList.style.justifyContent = "flex-start";
//   navList.style.padding = 0;
//   navList.style.margin = 0;
  navList.style.listStyleType = "none"; // Add this line to remove the dots
  
  navLinks.forEach(link => {
    const navItem = document.createElement("li");
    const navLink = document.createElement("a");
    
    navLink.href = link.href;
    navLink.textContent = link.text;
    // navLink.style.padding = "10px 20px";
    // navLink.style.marginRight = "20px";
    
    if (currentPage === link.href) {
      navLink.classList.add("active");
    }
    
    navItem.style.margin = 0;
    navItem.appendChild(navLink);
    navList.appendChild(navItem);
  });
  
  navLogo.src = "imgs/keystoneInnovationLogo.jpg";
  navLogo.style.width = "50px";
  navLogo.style.marginRight = "10px";
  
  navMenu.appendChild(navLogo);
  navMenu.appendChild(navList);
  document.body.prepend(navMenu);
  