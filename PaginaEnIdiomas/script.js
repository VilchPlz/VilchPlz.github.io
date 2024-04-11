  // Function to fetch JSON data (for demonstration purposes)
  async function fetchTranslations() {
    // This function fetches translations from an external file, replace it with your actual implementation
  // import translations from '' assert {type:'json'} 
    
    const translations = {
        
        "en":{
            "big_text": "Welcome",
            "paragraph": "Wait for more information."
        },
        "es":{
            "big_text":"Bienvenido",
            "paragraph":"Espera mas informacion"
    
        },
        "fr":{
            "big_text":"Bienvenue",
            "paragraph":"Attendez plus d'informations"
    
        },
        "de":{
            "big_text":"Willkommen",
            "paragraph":"Warten Sie auf weitere Informationen"
    
        },
        "it":{
            "big_text":"Benvenuta",
            "paragraph":"Attendi maggiori informazioni"
    
        }
    };
    return translations;
}
async function updateTextContent(language) {
    const translations = await fetchTranslations();
    const translation = translations[language];
    const bigTextElement = document.getElementById("big-text");
    const paragraphElement = document.getElementById("paragraph");
    bigTextElement.textContent = translation.big_text;
    paragraphElement.textContent = translation.paragraph;
}

// Event listener for language buttons
const languageButtons = document.querySelectorAll('.language-button');
languageButtons.forEach(button => {
    button.addEventListener('click', function() {
        const language = this.getAttribute('data-lang');
        updateTextContent(language);
    });
});

// Initial update based on default language
updateTextContent('en'); // Change 'en' to your default language