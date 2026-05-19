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
    tag: 'VEX · Robotics · 2025',
    title: 'Autonomous Drive System',
    desc: 'Designed and programmed a full swerve-drive chassis with vision-based auto-alignment. Used AprilTag fiducials detected by Limelight for field-relative positioning, and PathPlanner for smooth autonomous trajectories. The system achieved sub-inch positioning accuracy during competition.',
    chips: ['Java', 'WPILib', 'Limelight', 'PathPlanner', 'Swerve Drive', 'AprilTags']
  },
  robot2: {
    tag: 'VEX · Robotics · 2023',
    title: '4-Bar Intake Mechanism',
    desc: 'Engineered a game-piece intake mechanism using a parallel 4-bar linkage, ensuring the intake end maintains a constant angle throughout the full range of motion. Manufactured from 1×1 aluminum box tube with custom gussets. Iterated through 3 prototypes before finalizing the competition design.',
    chips: ['OnShape', 'CAD', 'Aluminum Fabrication', 'VEX', 'Mechanical Design']
  },
  robot3: {
    tag: 'Personal · Robotics · 2024',
    title: 'Line-Following Robot',
    desc: 'Built a PID-controlled line follower from the ground up. Designed a custom PCB for the IR sensor array, wrote tunable PID firmware in C++ on Arduino, and 3D printed the chassis with integrated sensor mounting. Achieved smooth tracking at high speeds with minimal oscillation.',
    chips: ['Arduino', 'C++', 'PID Control', 'KiCad', 'PCB Design', '3D Printing']
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
    tag: 'Engineering Class · 2023',
    title: 'Introduction to Engineering Design',
    desc: 'Covered the full engineering design process: problem definition, ideation, prototyping, testing, and iteration. Learned CAD modeling in SolidWorks and created full technical documentation packages. Final project was a fully functional mechanical assembly evaluated on performance and design quality.',
    chips: ['SolidWorks', 'CAD', 'Prototyping', 'Technical Writing', 'Design Process']
  },
  class2: {
    tag: 'Engineering Class · 2023',
    title: 'Statics & Mechanics of Materials',
    desc: 'Analyzed forces in static structures using free body diagrams and equilibrium equations. Studied stress, strain, beam bending, shear diagrams, and moment diagrams. Applied concepts to real structural design scenarios and material selection decisions.',
    chips: ['Statics', 'Stress Analysis', 'Beam Theory', 'MATLAB', 'Structural Design']
  },
  class3: {
    tag: 'Engineering Class · 2024',
    title: 'Electrical Circuits & Systems',
    desc: 'Circuit analysis using Kirchhoff\'s laws, Thevenin/Norton equivalents, and phasor analysis. Studied op-amps, analog filters, and digital logic. Lab component involved PCB layout in KiCad and microcontroller interfacing with sensors and actuators.',
    chips: ['Circuit Analysis', 'Op-Amps', 'KiCad', 'PCB Layout', 'Microcontrollers']
  },
  class4: {
    tag: 'Engineering Class · 2024',
    title: 'Programming for Engineers',
    desc: 'Applied Python and C++ to engineering problem sets: root-finding, numerical integration, data analysis with NumPy/Pandas, and automation scripting. Final project involved processing real sensor data and generating automated engineering reports.',
    chips: ['Python', 'C++', 'NumPy', 'Pandas', 'Numerical Methods', 'Data Analysis']
  },
  class5: {
    tag: 'Engineering Class · 2024',
    title: 'Thermodynamics',
    desc: 'Studied the first and second laws of thermodynamics, thermodynamic properties of fluids, and analysis of power cycles (Rankine, Brayton, Otto). Applied concepts to engineering system design including heat exchangers and refrigeration cycles.',
    chips: ['Thermodynamics', 'Heat Transfer', 'Power Cycles', 'MATLAB', 'Energy Systems']
  },
  class6: {
    tag: 'Engineering Class · 2025',
    title: 'Control Systems',
    desc: 'Designed feedback control systems using PID controllers, Laplace transforms, and Bode plots for stability analysis. Implemented and tuned controllers on embedded hardware. Applied theory directly to the robotics drive system autonomous alignment project.',
    chips: ['PID Control', 'Laplace Transforms', 'Bode Plots', 'Embedded Systems', 'MATLAB/Simulink']
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
