import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    prodottiCarrello:[],
    reviews:[],
    prossimoId: 3,
    prodotti: [
      {
        id: 1,
        product: "Holiday Vibes- Calendario Dell'Avvento 2021",
        brand: "Sephora",
        description:
          "Il Calendario dell'Avvento della bellezza, imperdibile! Se c'è un prodotto da non perdere a Natale ogni anno, è questo! Il Calendario dell'Avvento di bellezza. E c'è più di un motivo per innamorarsi. Questa edizione del 2021 è più gioiosa e generosa dei precedenti calendari dell'avvento. Dal 1 al 24 dicembre, apri ogni box per scoprire giorno dopo giorno una nuova sorpresa di bellezza. Trattamenti per il viso, per gli occhi, quanto basta per mettere un po' di colore sulle palpebre, sulle labbra e molto altro ancora.",
        image: "https://www.sephora.it/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw4d368671/images/hi-res/SKU/SKU_2492/531320_swatch.jpg",
        image2: "https://www.sephora.it/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw5a14ef3c/images/hi-res/alternates/PID_alternate1/PID_alternate1_1600/P10018361_1.jpg",
        image3: "https://www.sephora.it/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw36a38511/images/hi-res/alternates/PID_alternate3/PID_alternate3_1226/P10018361_3.jpg",
        image4: "https://www.sephora.it/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwf78f1ea8/images/hi-res/alternates/PID_alternate4/PID_alternate4_1019/P10018361_4.jpg",
        //selectedModel: 0,
        onSale: true,
        inventory: 100,
        price: 39.99,
        features: "L'imperdibile Calendario dell'Avvento ti sta aspettando. 24 prodotti per il make up, la cura della pelle, il corpo e gli accessori per assaporare un tocco di shine, cocooning e chill quotidianamente e durante l'attesa del 24 dicembre!",
      },
      {
        id: 2,
        product: "Lip Plumper Viper",
        brand: "Nabla",
        description:
          "Viper Lip Plumper è un balsamo volumizzante trasparente che aumenta il volume delle labbra in pochi minuti e ne satura il colore di un rossore naturale. Blend brevettati di ingredienti funzionali di origine naturale forniscono un effetto rimpolpante sia immediato che a lungo termine. La texture fluida e corposa favorisce un’azione emolliente, nutriente ed antiossidante. Grazie alla comoda twist pen, i principi attivi vengono preservati fino all’ultimo utilizzo e senza alcuno spreco. 100% Vegan & Cruelty Free!",
        image: "https://www.sephora.it/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwb9c3769e/images/hi-res/SKU/SKU_1787/536389_swatch.jpg",
        image2: "https://www.sephora.it/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw1f1395b1/images/hi-res/alternates/PID_alternate1/PID_alternate1_953/P10012159_1.jpg",
        image3: "https://www.sephora.it/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwfe125ae3/images/hi-res/alternates/PID_alternate2/PID_alternate2_840/P10012159_2.jpg",
        image4: "https://www.sephora.it/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwc933b2b2/images/hi-res/alternates/PID_alternate3/PID_alternate3_738/P10012159_3.jpg",
        //selectedModel: 0,
        onSale: false,
        inventory: 0,
        price: 18.90,
        features: "Viper Lip Plumper è un balsamo volumizzante trasparente che aumenta il volume delle labbra in pochi minuti e ne satura il colore di un rossore naturale. "
      },
      {
        id: 3,
        product: "BADgal BANG! Mascara",
        brand: "BENEFIT COSMETICS",
        description:
          "Ciglia che si vedono dallo spazio! BADgal Bang! è il mascara best seller di Benefit che dona alle tue ciglia volume megagalattico con una tenuta fino a 36 ore! E' il più innovativo, il più ESPLOSIVO e si spinge con audacia dove nessun mascara aveva mai osato. BADgal BANG! assicura alle ciglia 36 ore* di volume ESTREMO senza mai appesantirle. La formula di questo mascara volumizzante è composta da aero-particelle, uno dei materiali più leggeri conosciuti, che porterà le vostre ciglia sulla luna!",
        image: "https://www.sephora.it/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw6d86e753/images/hi-res/SKU/SKU_6/421048_swatch.jpg",
        image2: "https://www.sephora.it/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw5af46988/images/hi-res/alternates/PID_alternate1/PID_alternate1_1/P3228024_1.jpg",
        image3: "https://www.sephora.it/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwc0170f1f/images/hi-res/alternates/PID_alternate4/PID_alternate4_330/P3228024_4.jpg",
        image4: "https://www.sephora.it/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwa06877e0/images/hi-res/alternates/PID_alternate5/PID_alternate5_1/P3228024_5.jpg",
        //selectedModel: 0,
        onSale: true,
        inventory: 80,
        price: 29.90,
        features: "Ciglia che si vedono dallo spazio! BADgal Bang! è il mascara best seller di Benefit che dona alle tue ciglia volume megagalattico con una tenuta fino a 36 ore!",
      },
      {
        id: 4,
        product: "Palette 12 Ombretti - Naked Honey",
        brand: "Urban Decay",
        description:
          "Un alveare di tonalità nude per creare look luminosi e brillanti, ma anche per donare profondità al tuo sguardo. Uno sciame di shade dolci come il miele ti travolgerà e non potrai più vivere senza. 12 tonalità neutre e dorate che vanno dall'oro più brillante fino ad un goloso marrone cioccolato. Utilizza la tonalità Amber per illuminare il tuo sguardo, ottieni un effetto smokey con Sting, e fatti rapire da tutta la dolcezza del miele con la nuance Honey.",
        image: "https://www.sephora.it/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw44f60787/images/hi-res/PID_principal/PID_principal_532/P3833084_principal.jpg?sw=585&sh=585&sm=fit",
        image2: "https://www.sephora.it/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw5d5b427b/images/hi-res/alternates/PID_alternate3/PID_alternate3_337/P3833084_3.jpg",
        image3:"https://www.sephora.it/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw83a8801b/images/hi-res/alternates/PID_alternate1/PID_alternate1_450/P3833084_1.jpg",//selectedModel: 0,
        image4:"https://www.sephora.it/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw2b642e74/images/hi-res/alternates/PID_alternate4/PID_alternate4_1097/P3833084_4.jpg",
        onSale: true,
        inventory: 80,
        price: 29.00,
        features: "Naked Honey è la nuovissima palette ombretti di Urban Decay. Le 12 shade richiamano l'armonia tipica della natura, cogliendo l'equilibrio perfetto tra intensità e dolcezza.",
      },
      {
        id: 5,
        product: "Fondotinta In Balsamo Perfezionatore - Good Apple",
        brand: "KVD BEAUTY",
        description:
          "Good Apple è un fondotinta vegano, arricchito con estratti di mela e ialuronato di sodio, per nutrire e idratare la pelle. È cremoso, non comedogenico e minimizza l'aspetto dei pori, per una carnagione fresca e liscia. È ideale per la pelle secca e mista, ma può essere utilizzato anche sulla pelle grassa con l'applicazione di una cipria fissante.",
        image: "https://www.sephora.it/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw7003e631/images/hi-res/SKU/SKU_2216/550012_swatch.jpg",
        image2:"https://www.sephora.it/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw26fe7928/images/hi-res/alternates/PID_alternate1/PID_alternate1_1304/P10015018_1.jpg",
        image3:"https://www.sephora.it/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw5b60b0e6/images/hi-res/alternates/PID_alternate2/PID_alternate2_1135/P10015018_2.jpg",
        image4:"https://www.sephora.it/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw8e65d900/images/hi-res/alternates/PID_alternate5/PID_alternate5_644/P10015018_5.jpg",
        //selectedModel: 0,
        onSale: true,
        inventory: 70,
        price: 37,
        features: "UN PRODOTTO VINCENTE: Il fondotinta in balsamo Good Apple è stato un successo su Tik Tok e ha conquistato la sfera digitale con la sua coprenza leggera ma elevata. Una piccola quantità è sufficiente per ottenere un finish naturale e un incarnato fresco e impeccabile.",
      },
      {
        id: 6,
        product: "Fondotinta Fluido Finitura Naturale - luide De Beauté Fini Naturel",
        brand: "GUCCI",
        description:
          "Adatto a tutti, senza limite di genere o tipi di pelle, Fluide De Beauté Fini Naturel dona una copertura modulabile grazie ad una formula leggera e a lunga tenuta. Il fondotinta è setoso e regala un incarnato visibilmente perfezionato con un impeccabile finitura naturale che aiuta a minimizzare le imperfezioni. Il prodotto lascia un velo impercettibile sulla pelle che enfatizza la naturale bellezza ogni volta che viene indossato.",
        image: "https://www.sephora.it/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw0f0a4cc2/images/hi-res/SKU/SKU_1985/539522_swatch.jpg",
        image2:"https://www.sephora.it/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw52c0fb63/images/hi-res/alternates/PID_alternate1/PID_alternate1_1083/P10013206_1.jpg",
        image3:"https://www.sephora.it/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwe9cec9b8/images/hi-res/alternates/PID_alternate2/PID_alternate2_949/P10013206_2.jpg",
        image4:"https://www.sephora.it/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw482dcd3c/images/hi-res/alternates/PID_alternate3/PID_alternate3_823/P10013206_3.jpg",//selectedModel: 0,
        onSale: true,
        inventory: 150,
        price: 61,
        features: "Gucci Beauty continua a celebrare l’individualità e la diversità sopra ogni cosa con il lancio del nuovo fondotinta liquido - Fluide De Beauté Fini Naturel. ",
      },
      {
        id: 7,
        product: "Cofanetto Mascara Grandiôse",
        brand: "LANCÔME",
        description:
          "Il cofanetto contiene: Il tuo Grandiôse mascara set include: • Hypnôse Grandiôse Mascara - 01 Noir 10 ml • Le crayon khôl - Matita per Occhi Nera in formato miniatura - 01 noir 0,7 g • Mini Bi-Facil - Struccante per Occhi 30 ml",
        image: "https://www.sephora.it/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw298b32e3/images/hi-res/SKU/SKU_2047/542921_swatch.jpg",
        image2:"https://www.sephora.it/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw25134acf/images/hi-res/alternates/PID_alternate1/PID_alternate1_1125/P10013458_1.jpg",
        image3:"https://www.sephora.it/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw880ac18f/images/hi-res/alternates/PID_alternate2/PID_alternate2_980/P10013458_2.jpg",
        image4:"https://www.sephora.it/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwac87a3c6/images/hi-res/alternates/PID_alternate3/PID_alternate3_845/P10013458_3.jpg",
        //selectedModel: 0,
        onSale: true,
        inventory: 25,
        price: 39.90,
        features: "RIVELAZIONE GRANDIÔSE: CIGLIA A VENTAGLIO, CURVATURA DIVINA. Scopri il Set Mascara Grandiôse di Lancôme, il mix di prodotti make-up occhi perfetti per un look occhi completo! ll momento più magico dell'anno sta arrivando e Lancôme ha il regalo perfetto per te o per chi ami.",
      },
      {
        id: 8,
        product: "Precisely, My Brow Pencil - Matita Sopracciglia",
        brand: "BENEFIT COSMETICS",
        description:
          "Addio temperamatite, la punta è retrattile (e non si spezza!) e il colore è waterproof, tenuta perfetta fino a 12 ore! Il pratico scovolino all’altra estremità della matita serve per sfumare e rendere le tue sopracciglia ancora più naturali. Disponibile in 12 tonalità. ",
        image: "https://www.sephora.it/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw08cf6514/images/hi-res/SKU/SKU_4/352824_swatch.jpg",
        image2: "https://www.sephora.it/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw3d51b7d3/images/hi-res/alternates/PID_alternate1/PID_alternate1_1/P2578003_1.jpg",
        image3:"https://www.sephora.it/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw4e34993a/images/hi-res/alternates/PID_alternate2/PID_alternate2_1/P2578003_2.jpg",
        image4:"https://www.sephora.it/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw919dffa6/images/hi-res/alternates/PID_alternate3/PID_alternate3_1/P2578003_3.jpg",
        //selectedModel: 0,
        onSale: true,
        inventory: 120,
        price: 29.90,
        features: "Precisely My Brow Pencil è la matita ultra-sottile che definisce le tue sopracciglia, riempiendo le zone rade con tratti morbidi e naturali. ",
      },
      {
      id: 9,
      product: "Rouge Dior – Rossetto Ricaricabile – Satinato, Mat, Metallizzato E Vellutato",
      brand: "DIOR",
      description:
        "La sua formula arricchita con estratti di peonia rossa e fiore di melograno trasforma il rossetto Rouge Dior in un vero e proprio trattamento floreale dalle proprietà leviganti. Rouge Dior è più moderno che mai: ornato dalle iniziali “CD” che richiamano le silhouette strette in vita proposte nelle sfilate della Maison, si rinnova con una formula inedita che rivela colori couture sempre più intensi e luminosi. ",
      image: "https://www.sephora.it/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dweca0437e/images/hi-res/SKU/SKU_2013/535410_swatch.jpg",
      image2: "https://www.sephora.it/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw422c79bc/images/hi-res/alternates/PID_alternate1/PID_alternate1_1116/P10013305_1.jpg",
      image3: "https://www.sephora.it/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwd12b9c2e/images/hi-res/alternates/PID_alternate5/PID_alternate5_568/P10013305_5.jpg",
      image4: "https://www.sephora.it/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw9fb420b3/images/hi-res/alternates/PID_alternate3/PID_alternate3_837/P10013305_3.jpg",
      //selectedModel: 0,
      onSale: true,
      inventory: 120,
      price: 38.90,
      features: "Rouge Dior è il rossetto iconico di Dior. A lunga tenuta, preserva l’idratazione delle labbra assicurando 16 ore* di comfort. ",
      },
    ],
    utente: {
      nome: "Carlotta",
      cognome: "Rabagliati",
      eta: 25,
      email: "rabagliaticarlotta@gmail.com",
    },

    

  },
  mutations: {
    AGGIUNGI_CARRELLO: function (state, product) {
      state.prodottiCarrello.push(product);
    },
    SVUOTA_CARRELLO: function (state) {
      state.prodottiCarrello = [];
    },
    AGGIUNGI_RECENSIONE: function (state, productReview) {
      state.reviews.push(productReview);
    },
    
  },
  actions: {},
  modules: {},
  getters: {
    nomeEsteso: function (state) {
      return state.utente.nome + " " + state.utente.cognome;
    },
    getProductById: (state) => (id) => {
      return state.prodotti[id - 1];
    },
    numeroProdotti: function (state) {
      return state.prodotti.length;
    },
  }, 

});


