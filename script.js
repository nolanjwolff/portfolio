/* ══════════════════════════════════════
   ENGINEERING PORTFOLIO — script.js
══════════════════════════════════════ */

// ── Navbar scroll effect ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Active nav link on scroll ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
});

// ── Hamburger menu ──
const hamburger = document.getElementById('hamburger');
const navLinksList = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinksList.classList.toggle('mobile-open');
});
// Close on link click (mobile)
navLinksList.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinksList.classList.remove('mobile-open'));
});

// ── Mobile dropdown toggle ──
document.querySelectorAll('.dropdown').forEach(dd => {
  dd.querySelector('.dropdown-toggle').addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      dd.classList.toggle('open');
    }
  });
});

// ── Tabs ──
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(tab).classList.add('active');
  });
});

// ── Modal data ──
const modalData = {
  robot1: {
    tag: 'VEX · Push Back · 2025',
    title: 'Autonomous Drive System',
    desc: "The Push Back competition was one with a lot of areas to be able to reset a robot's pose. With this we were able to develop lightweight code that just used PID controllers to drive and turn and was able ot get a high skill score in the state.",
    chips: ['C++', 'PROS', 'IMUs', 'VEXos', 'Inertial Sensor', 'Motor Encoders']
  },
  robot2: {
    tag: 'VEX · High Stakes · 2025',
    title: 'PID Control',
    desc: 'Researched and developed my own math for using PID control for our driving and turning. Uses less integral control and balances out derivative and proportional movement. Also developed a way to view the change over time in a graph on excel after a test.',
    chips: ['C++', 'PROS', 'IMUs', 'Motor Encoders', 'Calculus']
  },
  robot3: {
    tag: 'VEX · Override · 2026 · In Progress',
    title: 'Odomotry Arcing Drivetrain',
    desc: 'Used triganomic functions in a sketch to develop the math needed to know where the robot is and where it needs to go. uses coordinate geometry to precisley predict the path that the robot needs to follow. The best part is that it only needs forward motors and an IMU',
    chips: ['C++', 'IMUs', 'PID Control', 'Motor Encoders', 'Trigonometry', 'Coordinate Geometry']
  },
  pers1: {
    tag: 'Personal · Web · 2026',
    title: 'Portfolio Website',
    desc: 'Designed and developed this engineering portfolio from scratch with no frameworks — pure HTML, CSS, and JavaScript. Focused on a clean industrial aesthetic, smooth animations, and mobile responsiveness. Hosted on GitHub Pages.',
    chips: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages', 'Responsive Design']
  },
  pers2: {
    tag: 'Personal · Robotics · 2026 · In Progress',
    title: 'FPV Drone',
    desc: 'With the help of a friend, we are currently building a FPV racing drove with motors, fast paced image processing, and a flight controller that will follow a person in frame ',
    chips: ['Python', 'Raspberry Pi', 'Image Processing', 'Control Theory', 'Electronics']
  },
  pers3: {
    tag: 'Personal · Programming · 2023',
    title: 'Custom 3D Printer Mod',
    desc: 'Upgraded an Ender 3 with a direct-drive Sprite extruder, BLTouch auto bed leveling, and a new 32-bit mainboard running Marlin 2.0. Designed and printed a custom toolhead mount and cable management system. Drastically improved print quality and reliability.',
    chips: ['Marlin Firmware', 'CAD', 'Electronics', 'FDM', '3D Printing']
  },
  class1: {
    tag: 'Engineering Class · 2025',
    title: 'Introduction to Engineering Design',
    desc: 'Covered the full engineering design process: problem definition, ideation, prototyping, testing, and iteration. Learned CAD modeling in SolidWorks and created full technical documentation packages. Final project was a fully functional mechanical assembly evaluated on performance and design quality.',
    chips: ['Fusion360', 'CAD', 'Prototyping', 'Technical Writing', 'Design Process']
  },
  class2: {
    tag: 'Math Class · 2025',
    title: 'Algebra 2 Honors',
    desc: 'Developed a deep understanding of core algebraic structures and their applications. Topics included trigonometric identities and equations, matrix operations and transformations, conic sections, sequences and series, as well as foundational probability and statistics. Emphasis on proof-based reasoning and preparing for higher-level math.',
    chips: ['Trig', 'Matracies', 'Conics', 'Statistics', 'Probability']
  },
  class3: {
    tag: 'Engineering Class · 2025',
    title: 'Physics 1',
    desc: 'Introductory physics course covering the major domains of classical and applied physics. Studied 1D and 2D kinematics, Newtons laws, and projectile motion. Analyzed electrical circuits using Ohms law and series/parallel configurations. Explored power and energy relationships, and finished with geometrical optics including reflection, refraction, and lenses.',
    chips: ['Kinematics', 'Circuits', 'Power', 'Optics', "Newton's Laws"]
  },
  class4: {
    tag: 'Engineering Class · 2026',
    title: 'Principles of Engineering',
    desc: 'Project-driven course introducing the engineering design process across multiple disciplines. Built and programmed robots using sensor integration, completed electronics labs involving circuit design and breadboarding, applied kinematics to mechanical systems, and collaborated on team engineering challenges. Coding projects included Python scripting and microcontroller programming.',
    chips: ['Python', 'Robotics', 'Electronics', 'Kinematics', 'Team Design', 'Micro controllers']
  },
  class5: {
    tag: 'Math Class · 2026',
    title: 'Pre-Calculus Honors',
    desc: 'Rigorous preparation for AP Calculus through mastery of advanced pre-calculus topics. Covered trigonometric functions, identities, and inverse functions in depth; explored exponential and logarithmic functions; studied limits and an introduction to derivatives; and concluded with the Fundamental Theorem of Calculus as a bridge to full calculus coursework.',
    chips: ['Trig', 'Logarithms', 'Limits', 'Derivative', 'Fundamental Theorem of Calculus']
  }
};

// ── Open modal ──
function openModal(id) {
  const d = modalData[id];
  if (!d) return;
  document.getElementById('modalContent').innerHTML = `
    <div class="modal-tag">${d.tag}</div>
    <h2>${d.title}</h2>
    <p style="margin-top:1rem">${d.desc}</p>
    <div class="modal-chips">
      ${d.chips.map(c => `<span>${c}</span>`).join('')}
    </div>
  `;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// Close modal with Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ── Animate skill bars on scroll ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.bar-fill').forEach(bar => {
        bar.style.animationPlayState = 'running';
      });
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.skills-grid').forEach(el => {
  el.querySelectorAll('.bar-fill').forEach(bar => {
    bar.style.animationPlayState = 'paused';
  });
  observer.observe(el);
});
