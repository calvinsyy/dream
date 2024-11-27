export default function contact() {
  const contact = document.getElementById('contact');

  if (contact != null) {
    // Contact Title
    const contactTitle = document.createElement('div');
    contactTitle.classList.add('wavy');
    contactTitle.innerHTML = /* html */ `   
     <span style="--i:1">C</span>
     <span style="--i:2">O</span>
     <span style="--i:3">N</span>
     <span style="--i:4">T</span>
     <span style="--i:5">A</span>
     <span style="--i:6">C</span>
     <span style="--i:7">T</span>`;
    contact.appendChild(contactTitle);

    // Email
    const email = document.createElement('p');
    email.setAttribute('id', 'email');
    email.innerHTML = `For inquiries please drop me a line at:<br>HEY@CALVINSZE.COM`;
    contact.appendChild(email);

    // Socials
    const socials = document.createElement('div');
    socials.setAttribute('id', 'socials');

    // IMDb
    const imdb = document.createElement('a');
    imdb.classList.add('social');
    imdb.innerHTML = /* html */ `<span>IMDB</span>`;
    imdb.href = 'https://www.imdb.com/name/nm9251920/';
    imdb.target = '_blank';
    socials.appendChild(imdb);

    // IMDbPro
    const imdbPro = document.createElement('a');
    imdbPro.classList.add('social');
    imdbPro.innerHTML = /* html */ `<span>IMDBPRO</span>`;
    imdbPro.href = 'https://pro.imdb.com/name/nm9251920/';
    imdbPro.target = '_blank';
    socials.appendChild(imdbPro);

    // LinkedIn
    const linkedin = document.createElement('a');
    linkedin.classList.add('social');
    linkedin.innerHTML = /* html */ `<span>LINKEDIN</span>`;
    linkedin.href = 'https://www.linkedin.com/in/calvinsze/';
    linkedin.target = '_blank';
    socials.appendChild(linkedin);

    // Instagram
    const instagram = document.createElement('a');
    instagram.classList.add('social');
    instagram.innerHTML = /* html */ `<span>INSTAGRAM</span>`;
    instagram.href = 'https://www.instagram.com/calvin.syy';
    instagram.target = '_blank';
    socials.appendChild(instagram);

    // GitHub
    const github = document.createElement('a');
    github.classList.add('social');
    github.innerHTML = /* html */ `<span>GITHUB</span>`;
    github.href = 'https://github.com/calvinsyy';
    github.target = '_blank';
    socials.appendChild(github);

    contact.appendChild(socials);
  }
}
