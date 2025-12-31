// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
const htmlElement = document.documentElement;

darkModeToggle.addEventListener("click", () => {
  htmlElement.classList.toggle("dark");
  
  if (htmlElement.classList.contains("dark")) {
    darkModeToggle.textContent = "Toggle Light Mode";
  } else {
    darkModeToggle.textContent = "Toggle Dark Mode";
  }
});

// Features Data
const features = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-500"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
    title: "Real-Time Messaging",
    description: "Stay connected with lightning-fast chat and instant notifications."
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-500"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,
    title: "Share Your Story",
    description: "Post photos, videos, and updates to keep your friends in the loop."
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-500"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
    title: "Stories & Highlights",
    description: "Share fleeting moments or save your favorite memories forever."
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-500"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
    title: "Discover New Friends",
    description: "Find people with similar interests and grow your network."
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-500"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>`,
    title: "Customize Your Profile",
    description: "Make your profile uniquely yours with themes and personalization."
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
    title: "Privacy First",
    description: "Your data is safe with end-to-end encryption and privacy controls."
  }
];

// Populate Features
const featureContainer = document.getElementById("feature-container");
features.forEach(feature => {
  const featureCard = document.createElement("div");
  featureCard.className = "flex flex-col items-center p-8 text-center transition-all duration-300 bg-white shadow-md cursor-pointer rounded-2xl hover:shadow-2xl hover:-translate-y-2 max-lg:p-6 lg:p-10 2xl:p-12";
  featureCard.innerHTML = `
    <div class="flex items-center justify-center mb-6 shrink-0 max-lg:mb-4">
      ${feature.icon}
    </div>
    <h3 class="mb-3 text-xl font-bold text-black max-lg:text-lg lg:text-2xl 2xl:text-2xl">${feature.title}</h3>
    <p class="text-sm leading-relaxed text-gray-600 max-lg:text-sm lg:text-base 2xl:text-base">${feature.description}</p>
  `;
  featureContainer.appendChild(featureCard);
});

// Testimonials Data
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Content Creator",
    image: "./assets/images/avatar-1.svg",
    text: "MyBindle has completely changed how I connect with my audience. The interface is intuitive and the features are exactly what I needed!"
  },
  {
    name: "Michael Chen",
    role: "Entrepreneur",
    image: "./assets/images/avatar-2.svg",
    text: "I've tried many social platforms, but MyBindle stands out. The privacy features and customization options are top-notch."
  },
  {
    name: "Emily Rodriguez",
    role: "Digital Artist",
    image: "./assets/images/avatar-3.svg",
    text: "As an artist, I love how easy it is to share my work and connect with other creatives. The community here is amazing!"
  },
  {
    name: "David Thompson",
    role: "Photographer",
    image: "./assets/images/avatar-4.svg",
    text: "The image quality and sharing features are perfect for my photography portfolio. Highly recommend!"
  },
  {
    name: "Lisa Anderson",
    role: "Blogger",
    image: "./assets/images/avatar-5.svg",
    text: "MyBindle makes it so easy to engage with my readers. The real-time messaging is a game-changer."
  },
  {
    name: "James Wilson",
    role: "Fitness Coach",
    image: "./assets/images/avatar-6.svg",
    text: "I use MyBindle to motivate my clients and share workout tips. The community features are fantastic!"
  },
  {
    name: "Maria Garcia",
    role: "Travel Enthusiast",
    image: "./assets/images/avatar-7.svg",
    text: "Sharing my travel stories has never been easier. The stories feature is my favorite!"
  },
  {
    name: "Robert Lee",
    role: "Tech Reviewer",
    image: "./assets/images/avatar-8.svg",
    text: "The privacy controls are impressive. I feel safe sharing my content here."
  },
  {
    name: "Jennifer Brown",
    role: "Food Blogger",
    image: "./assets/images/avatar-9.svg",
    text: "MyBindle's interface is clean and modern. It makes sharing my recipes a joy!"
  }
];

// Populate Testimonials
const testimonialGrid = document.getElementById("testimonial-grid");
testimonials.forEach(testimonial => {
  const testimonialCard = document.createElement("div");
  testimonialCard.className = "testimonial-card flex flex-col items-center p-8 text-center transition-all duration-300 bg-white shadow-md rounded-2xl hover:shadow-xl max-lg:p-6 lg:p-8 2xl:p-10";
  testimonialCard.innerHTML = `
    <img src="${testimonial.image}" alt="${testimonial.name}" class="w-20 h-20 mb-4 rounded-full max-lg:w-16 max-lg:h-16 lg:w-20 lg:h-20 2xl:w-24 2xl:h-24">
    <h4 class="mb-1 text-lg font-bold text-black max-lg:text-base lg:text-xl 2xl:text-xl">${testimonial.name}</h4>
    <p class="mb-4 text-sm text-gray-500 max-lg:text-xs lg:text-sm 2xl:text-base">${testimonial.role}</p>
    <p class="text-sm leading-relaxed text-gray-600 max-lg:text-xs lg:text-sm 2xl:text-base">"${testimonial.text}"</p>
  `;
  testimonialGrid.appendChild(testimonialCard);
});

// See More Button Functionality
const seeMoreBtn = document.getElementById("see-more-btn");
const fadeOverlay = document.getElementById("fade-overlay");
let isExpanded = false;

seeMoreBtn.addEventListener("click", () => {
  isExpanded = !isExpanded;
  
  if (isExpanded) {
    testimonialGrid.style.maxHeight = "none";
    fadeOverlay.style.display = "none";
    seeMoreBtn.textContent = "Show Less";
  } else {
    testimonialGrid.style.maxHeight = "600px";
    fadeOverlay.style.display = "flex";
    seeMoreBtn.textContent = "See More";
    // Scroll back to testimonials section
    document.querySelector("#testimonial-grid").scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

// Simple smooth scrolling (fallback for blocked CDN)
// CSS smooth scrolling is already enabled in styles.css
// This is just a backup implementation
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for all internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

// Initialize Lucide Icons (if available)
if (typeof lucide !== 'undefined') {
  lucide.createIcons();
}

console.log("MyBindle app initialized successfully!");
