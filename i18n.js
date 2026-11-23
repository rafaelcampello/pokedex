const pokemonDescriptions = {};
const locales = ['pt-BR', 'en', 'es', 'pl'];
const descriptionLoads = new Map();

const messages = {
    'pt-BR': {
        aboutTitle: "Projeto independente e educativo",
        aboutProject: "Esta Pokédex é um projeto de prática de JavaScript, HTML e uso de APIs. Ela não tem relação com a Pokédex interna do jogo PokeXGames e não é afiliada ao jogo.",
        aboutSource: "Agradecemos aos criadores e mantenedores da PokéAPI pela base de dados e pelo acervo de imagens. Os dados do catálogo são incorporados ao projeto a partir dos arquivos da PokéAPI. O navegador carrega as imagens do repositório de sprites sob demanda.",
        aboutLink: "PokéAPI no GitHub",
        language: 'Idioma', list: 'Lista de Pokémon', search: 'Pesquisar Pokémon',
        placeholder: 'Nome ou número', previous: 'Anterior', next: 'Próximo',
        empty: 'Nenhum Pokémon encontrado.', variety: 'Variedade', defaultForm: 'Forma padrão',
        nextVariant: 'Ver a próxima versão', unavailable: 'Imagem indisponível.',
        hint: 'Clique na imagem para ver a próxima versão.', generation: 'Geração',
        height: 'Altura', weight: 'Peso', type: 'Tipo', description: 'Descrição',
        credits: 'Créditos', character: 'Personagem', level: 'nível', clan: 'clã', server: 'Servidor Gold do PxG',
        portfolio: 'Portfólio profissional de {{name}}', social: '{{site}} de {{name}}',
        scripts: 'Ative o JavaScript para consultar o catálogo.',
        loadError: 'Não foi possível carregar o idioma.',
        types: ['Normal', 'Lutador', 'Voador', 'Veneno', 'Terra', 'Pedra', 'Inseto', 'Fantasma', 'Aço', 'Fogo', 'Água', 'Grama', 'Elétrico', 'Psíquico', 'Gelo', 'Dragão', 'Sombrio', 'Fada']
    },
    en: {
        aboutTitle: "Independent educational project",
        aboutProject: "This Pokédex was built to practice JavaScript, HTML and working with APIs. It is unrelated to the in-game Pokédex in PokeXGames and is not affiliated with the game.",
        aboutSource: "Thanks to the PokéAPI creators and maintainers for the data and image collection. The catalog uses local data sourced from PokéAPI files. The browser loads images from the sprite repository on demand.",
        aboutLink: "PokéAPI on GitHub",
        language: 'Language', list: 'Pokémon list', search: 'Search Pokémon',
        placeholder: 'Name or number', previous: 'Previous', next: 'Next',
        empty: 'No Pokémon found.', variety: 'Variety', defaultForm: 'Default form',
        nextVariant: 'Show the next version', unavailable: 'Image unavailable.',
        hint: 'Click the image to see the next version.', generation: 'Generation',
        height: 'Height', weight: 'Weight', type: 'Type', description: 'Description',
        credits: 'Credits', character: 'Character', level: 'level', clan: 'clan', server: 'PxG Gold Server',
        portfolio: 'Professional portfolio of {{name}}', social: '{{name}} on {{site}}',
        scripts: 'Enable JavaScript to browse the catalog.', loadError: 'The language could not be loaded.',
        types: ['Normal', 'Fighting', 'Flying', 'Poison', 'Ground', 'Rock', 'Bug', 'Ghost', 'Steel', 'Fire', 'Water', 'Grass', 'Electric', 'Psychic', 'Ice', 'Dragon', 'Dark', 'Fairy']
    },
    es: {
        aboutTitle: "Proyecto independiente y educativo",
        aboutProject: "Esta Pokédex es un proyecto para practicar JavaScript, HTML y el uso de APIs. No tiene relación con la Pokédex interna de PokeXGames ni está afiliada al juego.",
        aboutSource: "Gracias a los creadores y mantenedores de PokéAPI por los datos y las imágenes. El catálogo usa datos locales obtenidos de los archivos de PokéAPI. El navegador carga las imágenes del repositorio de sprites cuando se necesitan.",
        aboutLink: "PokéAPI en GitHub",
        language: 'Idioma', list: 'Lista de Pokémon', search: 'Buscar Pokémon',
        placeholder: 'Nombre o número', previous: 'Anterior', next: 'Siguiente',
        empty: 'No se encontraron Pokémon.', variety: 'Variante', defaultForm: 'Forma predeterminada',
        nextVariant: 'Ver la siguiente versión', unavailable: 'Imagen no disponible.',
        hint: 'Haz clic en la imagen para ver la siguiente versión.', generation: 'Generación',
        height: 'Altura', weight: 'Peso', type: 'Tipo', description: 'Descripción',
        credits: 'Créditos', character: 'Personaje', level: 'nivel', clan: 'clan', server: 'Servidor Gold de PxG',
        portfolio: 'Portafolio profesional de {{name}}', social: '{{site}} de {{name}}',
        scripts: 'Activa JavaScript para consultar el catálogo.', loadError: 'No se pudo cargar el idioma.',
        types: ['Normal', 'Lucha', 'Volador', 'Veneno', 'Tierra', 'Roca', 'Bicho', 'Fantasma', 'Acero', 'Fuego', 'Agua', 'Planta', 'Eléctrico', 'Psíquico', 'Hielo', 'Dragón', 'Siniestro', 'Hada']
    },
    pl: {
        aboutTitle: "Niezależny projekt edukacyjny",
        aboutProject: "Ten Pokédex powstał w ramach ćwiczeń z JavaScriptu, HTML-u i obsługi API. Nie ma związku z Pokédexem dostępnym w grze PokeXGames ani z samą grą.",
        aboutSource: "Dziękujemy twórcom i opiekunom PokéAPI za dane i zbiór obrazów. Katalog korzysta z lokalnych danych z plików PokéAPI. Przeglądarka pobiera obrazy z repozytorium sprite’ów w razie potrzeby.",
        aboutLink: "PokéAPI na GitHubie",
        language: 'Język', list: 'Lista Pokémonów', search: 'Szukaj Pokémonów',
        placeholder: 'Nazwa lub numer', previous: 'Poprzedni', next: 'Następny',
        empty: 'Nie znaleziono Pokémonów.', variety: 'Odmiana', defaultForm: 'Forma podstawowa',
        nextVariant: 'Pokaż następną wersję', unavailable: 'Obraz niedostępny.',
        hint: 'Kliknij obraz, aby zobaczyć następną wersję.', generation: 'Generacja',
        height: 'Wzrost', weight: 'Waga', type: 'Typ', description: 'Opis',
        credits: 'Twórcy', character: 'Postać', level: 'poziom', clan: 'klan', server: 'Serwer Gold w PxG',
        portfolio: 'Portfolio zawodowe: {{name}}', social: '{{name}} w serwisie {{site}}',
        scripts: 'Włącz JavaScript, aby przeglądać katalog.', loadError: 'Nie udało się wczytać języka.',
        types: ['Normalny', 'Walczący', 'Latający', 'Trujący', 'Ziemny', 'Kamienny', 'Robaczy', 'Duch', 'Stalowy', 'Ognisty', 'Wodny', 'Trawiasty', 'Elektryczny', 'Psychiczny', 'Lodowy', 'Smoczy', 'Mroczny', 'Baśniowy']
    }
};

const typeIndexes = new Map(messages['pt-BR'].types.map((type, index) => [type, index]));

function loadDescriptions(locale) {
    if (!descriptionLoads.has(locale)) {
        const script = document.createElement('script');
        script.src = 'descricoes-' + locale + '.js';
        const load = new Promise((resolve, reject) => {
            script.onload = () => pokemonDescriptions[locale] ? resolve() : reject();
            script.onerror = reject;
        }).catch(error => {
            descriptionLoads.delete(locale);
            script.remove();
            throw error;
        });
        descriptionLoads.set(locale, load);
        document.head.append(script);
    }
    return descriptionLoads.get(locale);
}

function preferredLocale() {
    try {
        const saved = localStorage.getItem('pokedex-language');
        if (locales.includes(saved)) return saved;
    } catch {
        // A seleção ainda funciona em navegadores que bloqueiam o armazenamento local.
    }
    return 'pt-BR';
}

function saveLocale(locale) {
    try {
        localStorage.setItem('pokedex-language', locale);
    } catch {
        // A seleção fica ativa nesta aba.
    }
}
