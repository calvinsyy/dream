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

    // Facebook
    const facebook = document.createElement('a');
    facebook.classList.add('social');
    facebook.innerHTML = /* html */ `<span>FACEBOOK</span>`;
    facebook.href = 'https://www.facebook.com/calvin.syyyy/';
    facebook.target = '_blank';
    socials.appendChild(facebook);

    // Instagram
    const instagram = document.createElement('a');
    instagram.classList.add('social');
    instagram.innerHTML = /* html */ `<span>INSTAGRAM</span>`;
    instagram.href = 'https://www.instagram.com/calvin.syy/';
    instagram.target = '_blank';
    socials.appendChild(instagram);

    // LinkedIn
    const linkedin = document.createElement('a');
    linkedin.classList.add('social');
    linkedin.innerHTML = /* html */ `<span>LINKEDIN</span>`;
    linkedin.href = 'https://www.linkedin.com/in/calvinsze/';
    linkedin.target = '_blank';
    socials.appendChild(linkedin);

    // Whatsapp
    const Whatsapp = document.createElement('a');
    Whatsapp.classList.add('social');
    Whatsapp.innerHTML = /* html */ `<span>WHATSAPP</span>`;
    Whatsapp.href = 'https://api.whatsapp.com/send/?phone=%2B15168888886&text&type=phone_number&app_absent=0/';
    Whatsapp.target = '_blank';
    socials.appendChild(Whatsapp);

    // Spotify
    const Spotify = document.createElement('a');
    Spotify.classList.add('social');
    Spotify.innerHTML = /* html */ `<span>SPOTIFY</span>`;
    Spotify.href = 'https://open.spotify.com/playlist/3VceEeakunmaHplVFBL4mg?si=9556b41dbcea4702&nd=1&dlsi=126a4945370c4ce9';
    Spotify.target = '_blank';
    socials.appendChild(Spotify);

    contact.appendChild(socials);
  }
}
