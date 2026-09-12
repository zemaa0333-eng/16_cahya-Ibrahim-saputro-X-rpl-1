let menuIcon = document.querySelector('#menu-icon');
let navbar  = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offheight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        };
    });
    
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
    strings: ['Siswa SMKS Krian 1 Sidoarjo', 'Siswa X RPL 1'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/* ================= PROJECT POPUP ================= */

const projectData = {
    project1: {
        title: 'Web Design',
        description: 'Proyek pertama berupa desain website yang dibuat untuk menampilkan informasi dengan tampilan yang menarik dan responsif.'
    },
    project2: {
        title: 'Web Development',
        description: 'Proyek kedua berfokus pada pembuatan dan pengembangan website menggunakan HTML, CSS, dan JavaScript.'
    },
    project3: {
        title: 'UI/UX Design',
        description: 'Proyek ketiga berfokus pada rancangan antarmuka agar website lebih nyaman digunakan dan mudah dipahami.'
    },
    tanaman1: {
        title: 'Menananam Kangkung: Tugas Ketahanan Pangan Mapel PPLG',
        description: 'Proyek ketahanan pangan mata pelajaran Pengembangan Perangkat Lunak dan Gim (PPLG) berupa kegiatan budidaya tanaman kangkung, yang menggabungkan proses pembelajaran agrikultur praktis untuk mendukung kemandirian pangan.'
    },
    tanaman2: {
        title: ' 10 MenanamJenis TOGA: Projek Kesehatan Mandiri dan Lingkungan',
        description: 'Proyek ketahanan pangan dan pemanfaatan lahan sekolah melalui budidaya 10 jenis Tanaman Obat Keluarga (TOGA) pilihan, yang memadukan kegiatan agrikultur praktis dengan penerapan teknologi digital untuk mendukung kesehatan mandiri dan edukasi lingkungan.'
    }
};

function openProject(projectId) {
    const modal = document.getElementById('projectModal');
    const title = document.getElementById('modalTitle');
    const description = document.getElementById('modalDescription');
    const project = projectData[projectId];

    if (!project) return;

    title.textContent = project.title;
    description.textContent = project.description;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeProject() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

document.getElementById('projectModal').addEventListener('click', (event) => {
    if (event.target.id === 'projectModal') {
        closeProject();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeProject();
    }
});
