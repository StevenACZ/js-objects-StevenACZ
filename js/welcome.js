const GREETINGS = {
  english: 'Welcome',
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  flemish: 'Welgekomen',
  french: 'Bienvenue',
  german: 'Willkommen',
  irish: 'Failte',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  polish: 'Witamy',
  spanish: 'Bienvenido',
  swedish: 'Valkommen',
  welsh: 'Croeso'
}

function greet(language) {
  switch (language) {
    case 'IP_ADDRESS_INVALID':
    case 'IP_ADDRESS_NOT_FOUND':
    case 'IP_ADDRESS_REQUIRED':
      return 'Welcome'
      break;
  }
  
  for (let key in GREETINGS) {
    if (language.toLowerCase() == key) {
      return GREETINGS[key];
    }
  }
}