document.addEventListener("DOMContentLoaded", function () {
  // Controleer of de eerste carrousel aanwezig is
  if (document.querySelector(".carrousel")) {
    uitvoeren("carrousel");
  }

  // Controleer of de tweede carrousel aanwezig is
  if (document.querySelector(".carrousel2")) {
    uitvoeren("carrousel2");
  }
});

// UITLEH: dom content loaded houdt in dat wanneer de volledige pagina is geladen , de code pas wordt uitgevoert om errors te voorkomen. De IF statement controleerd of de carrousels aanwezig zijn in de pagina , , zodat k geen errors krijg op de tweede pagina. Wanneer ze aanwezig zijn worden de functies uitvoeren voor beide carrousels  uitgevoert

function uitvoeren(carouselClass) {
  let plaatje = 0;
  let startX = 0;
  let endX = 0;

  // hier wordt de function aangemaakt , de function uitvoeren wordt uitgevoerd op de parameter carouselClass (carrousel en carrouslet2) de variabele plaatje houdt bij welk plaatje er op dat moment is, 0 is 1. (startx en endx houden swipe eweggingen nij)

  const carousel = document.querySelector(`.${carouselClass} ul`);
  const images = document.querySelectorAll(`.${carouselClass} ul li`);
  const totalImages = images.length;
  const terugKnop = document.querySelector(
    `.${carouselClass} button:nth-of-type(1)`
  );
  const heenKnop = document.querySelector(
    `.${carouselClass} button:nth-of-type(2)`
  );

  // de constante crrousel selecteerd de gehele UL, images selecteerd dde afbeeldingen in de carrousel. de constante totalimages geef aan hoeveel li er zijn , dus hoeveel images er zijn. vervolgens worden de knoppen aangemaakt voor beide carrousels.

  // Controleer of carousel en buttons bestaan
  if (!carousel || !terugKnop || !heenKnop) {
    console.error(
      `Jammer neef, elementen voor de carousel ${carouselClass} zijn niet gevonden!
      `
    );
    return;
  }

  // dit was een controlen om te kijken of de elementen in mn html stonden. als deze dingen niet gevonden zijn, stopt te functie met uitvoeren

  function beweeg(richting) {
    plaatje += richting;

    /* Loop de carrousel door: ga terug naar 1 na het laatste plaatje */
    if (plaatje < 0) {
      plaatje = totalImages - 1; // Spring terug naar de laatste afbeelding
    } else if (plaatje >= totalImages) {
      plaatje = 0; // Spring terug naar de eerste afbeelding
    }

    // de functie beweeg zorgt ervoor dat de carrousel beweegt naar de volgende plaatje als je op heenbutton nklikt wrdt plaatje verhoogd , anderseids omlaag. Wanneer het plaatje buiten de waarde valt van 0 wordt de carrousel opnieuw inieuw ingesteld , dus als je minder dan nul bent (op nul zijn en dan de terugknop indrukken, ga je naar de laatste afbeelding) en als je alle afbeeldingen voorbij bent spring hij terug naar 0 (infinite loop) verderop in de code is een eventlistner die bij de heenknoop en terugknop een waarde geeft aan RICHTIG om zo te bepalen welke kant hij op moet bewegen. RICHING = PARAMETER

    const verschuif = -plaatje * 1000; // Hier stel je de breedte van de slides in
    carousel.style.transform = `translateX(${verschuif}px)`;
  }

  // de verschuif constonte zorgt dat de carrousel verschuift door het plaatje x het aantal pixels te doen , dus er stel je wilt naar plaatj 3, doet hij 2 keer 1000 pixexls erbij om zo 2000 pixels op te shcuiven we willen dat de carrousel naar links verschuif dus daarom een - tekentje ervoor. omdat de pixels dan negatief op de x as bewegen.

  terugKnop.addEventListener("click", () => beweeg(-1));
  heenKnop.addEventListener("click", () => beweeg(1));

  // SWIPE FUNCTIE
  carousel.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  carousel.addEventListener("touchmove", (e) => {
    endX = e.touches[0].clientX;
  });

  carousel.addEventListener("touchend", () => {
    if (startX > endX + 50) {
      // Swipe naar links, ga naar de volgende slide
      beweeg(1);
    } else if (startX < endX - 50) {
      // Swipe naar rechts, ga naar de vorige slide
      beweeg(-1);
    }
  });
}

//CHAT-gpt hoe werkt eens swipe functie toevoegen in html css, codegauge touch events, Dhiwise  on touch interactifity

//chat-gpt , error verhelpen, maak een code die controlleerd of het element uberhaupt in de html staat

//Chat-gpt-carrousel instructies

/* SOCIALS VIDEO */

document.addEventListener("DOMContentLoaded", function () {
  // Controleer of het .social element met een video aanwezig is
  const video = document.querySelector(".social article:nth-of-type(2) video");

  if (video) {
    // Maak de play-button dynamisch aan vannuit JAVA script
    const playButton = document.createElement("button");
    playButton.textContent = "stop";

    // Voeg de play-button toe aan het tweede article
    const article = document.querySelector(".social article:nth-of-type(2)");
    article.appendChild(playButton);

    // Wanneer op de play-button wordt geklikt
    playButton.addEventListener("click", function () {
      if (video.paused) {
        video.play();
        playButton.classList.add("hidden");
      } else {
        video.pause();
        playButton.classList.remove("hidden");
      }
    });

    // Wanneer de video wordt gepauzeerd of afgespeeld
    video.addEventListener("pause", function () {
      playButton.classList.remove("hidden");
    });

    video.addEventListener("play", function () {
      playButton.classList.add("hidden");
    });
  }
});

//bron CHAT-gpt KAn ik deze playbutton ook toevoegeen zonder classes en divs, dus door javascript

//bron chat-gpt Waarom werkt mijn button niet

//bron chat gpt waarom werkt mijn button maar 1 keer

/* verschillende TAYCAN */
document.addEventListener("DOMContentLoaded", function () {
  // Controleer of de Taycan-afbeeldingen enook knoppen aanwezig zijn
  const taycanImage = document.querySelector(
    ".taycan article:nth-of-type(1) img:nth-of-type(1)"
  );
  const crossTurismoImage = document.querySelector(
    ".taycan article:nth-of-type(1) img:nth-of-type(2)"
  );
  const taycanButton = document.querySelector(
    ".taycanwissel button:nth-of-type(1)"
  );
  const crossTurismoButton = document.querySelector(
    ".taycanwissel button:nth-of-type(2)"
  );

  if (taycanImage && crossTurismoImage && taycanButton && crossTurismoButton) {
    // Voeg een eventistener toe aan de Taycan knop
    taycanButton.addEventListener("click", function () {
      // Laat de Taycan-afbeelding zien en verberg de Cross Turismo-afbeelding
      taycanImage.style.display = "block";
      crossTurismoImage.style.display = "none";
    });

    // Voeg een event listener toe aan de Cross Turismo knop
    crossTurismoButton.addEventListener("click", function () {
      // Laat de Cross Turismo-afbeelding zien en verberg de Taycan-afbeelding
      crossTurismoImage.style.display = "block";
      taycanImage.style.display = "none";
    });
  }
});

/* PRIJS CHECKER */

document.addEventListener("DOMContentLoaded", function () {
  // Selecteer alleen de buttons in de specifieke secties met de tekst 'Bekijk prijs'
  const buttons = document.querySelectorAll(
    ".coupe button, .cabrio button, .targa button, .turbo50 button, .turbo button, .GT3 button, .GT3RS button"
  );

  buttons.forEach(function (button) {
    // Controleer of de button de tekst 'Bekijk prijs' bevat
    if (button.textContent.trim() === "Bekijk prijs") {
      button.addEventListener("click", function () {
        // Zoek het <p> element dat na de knop komt om die ;ater te kunnen aanspreken
        const prijs = button.nextElementSibling;

        // Wissel de zichtbaarheid
        if (prijs.style.display === "none") {
          prijs.style.display = "block";
          button.textContent = "Verberg prijs"; // Verander de knoptekst
        } else {
          prijs.style.display = "none";
          button.textContent = "Bekijk prijs"; // Verander de knoptekst terug
        }
      });
    }
  });
});

/* GELUIDJE */

// Controleer of de button binnen de .GT3RS-sectie is
var gt3rsButton = document.querySelector(".GT3RS button:nth-of-type(2)");

if (gt3rsButton) {
  gt3rsButton.addEventListener("click", function () {
    // Zoek het audio-element binnen de GT3RS-sectie
    var geluid = document.querySelector(".GT3RS audio");
    var geluidknop = this; // deze knop die nu wordt ingedrukt

    // Maak de knop tijdelijk kleiner
    geluidknop.style.transform = "scale(0.95)";

    // Zet de knop na 0.200 ms terug naar de normale grootte
    setTimeout(function () {
      geluidknop.style.transform = "scale(1)";
    }, 200);

    // Controleer of het geluidselement bestaat
    if (geluid) {
      // Controleer of het geluid al speelt
      if (geluid.paused) {
        geluid.play(); // Speel het geluid af
      } else {
        geluid.pause(); // Pauzeer het geluid
        geluid.currentTime = 0; // Zet het geluid terug naar het begin
      }
    } else {
      console.error("Audio element niet gevonden");
    }
  });
} else {
  console.log("GT3RS knop niet gevonden");
}

/* GELUIDJE HALLOWEEN */
var halloweenButton = document.querySelector(
  ".halloween button:nth-of-type(1)"
);
if (halloweenButton) {
  halloweenButton.addEventListener("click", function () {
    // Zoek het audio-element binnen de .halloween sectie
    var sound = document.querySelector(".halloween audio");
    var geluidknop2 = this;

    geluidknop2.style.transform = "scale(0.95)";

    // Zet de knop na 200 ms terug naar de normale grootte
    setTimeout(function () {
      geluidknop2.style.transform = "scale(1)";
    }, 200);

    // Controleer of het geluidselement bestaat
    if (sound) {
      // Controleer of het geluid al speelt
      if (sound.paused) {
        sound.play(); // Speel het geluid af
      } else {
        sound.pause(); // Pauzeer het geluid
        sound.currentTime = 0; // Zet het geluid terug naar het begin
      }
    } else {
      console.error("Audio element niet gevonden");
    }
  });
} else {
  console.log("Halloween knop niet gevonden");
}

//Pastor Canayo-Sound buttons youtube, Farooq dad-add buttons with sound

/* Halloween pagina */
var halloweenKnop = document.querySelector(".halloweenknop");
if (halloweenKnop) {
  halloweenKnop.addEventListener("click", function () {
    var halloweenpagina = document.querySelector(".halloween");

    // Controleer of de sectie verborgen is
    if (
      halloweenpagina.style.display === "none" ||
      halloweenpagina.style.display === ""
    ) {
      halloweenpagina.style.display = "block"; // Toon de sectie
      halloweenKnop.classList.add("xactief"); // Voeg de "X" toe via CSS
    } else {
      halloweenpagina.style.display = "none";
      halloweenKnop.classList.remove("xactief"); // Verwijder de "X" uit de knop
    }
  });
} else {
  console.log("Halloween sectie knop niet gevonden");
}

//Chatgpt- hoe kan ik dit item tevooerschijn halen, display block MDN

/*NIGHTMODE*/

// Selecteer de button binnen de .nightmode section
const toggleButton = document.querySelector(".nightmode button");

// Voeg een event listener toe aan de button om te schakelen tussen light en dark mode
toggleButton.addEventListener("click", function () {
  // Toggle de 'dark-mode' class op de <html> tag
  document.documentElement.classList.toggle("dark-mode");

  // Wissel tussen de maan en de zon iconen
  const moonIcon = document.querySelector(".nightmode button img:nth-child(1)");
  const sunIcon = document.querySelector(".nightmode button img:nth-child(2)");

  // Controleer of de 'dark-mode' actief is, en verander de zichtbaarheid van de iconen
  if (document.documentElement.classList.contains("dark-mode")) {
    moonIcon.style.display = "none"; // Verberg de maan
    sunIcon.style.display = "inline-block"; // Toon de zon
  } else {
    moonIcon.style.display = "inline-block"; // Toon de maan
    sunIcon.style.display = "none"; // Verberg de zon
  }
});

//BRON W3Schools how to toggle between light and dark mode, Dailiy tuition: how to make light and dark mode, chatgpt- waarom werkt dit niet (implenteer code)
