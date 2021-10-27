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
        product: "Galaxy A32 - Blue",
        brand: "Samsung",
        description:
          "Schermo straordinario per la massima fluidità di scorrimento. Rifatti gli occhi con l’incredibile display Super AMOLED FHD+ di Galaxy A32, in grado di raggiungere 800 nit¹ di luminosità anche alla luce del sole. Lasciati impressionare dall’elegante design di Galaxy A32. Con lo stile iconico della fotocamera e la finitura lucida del retro, questo smartphone non solo si fa notare, ma definisce un nuovo standard. Con il comparto fotografico di Galaxy A32 i tuoi scatti saranno sempre di un livello superiore. Realizza fotografie nitide e luminose tutto il giorno con la fotocamera principale da 64 MP ad alta risoluzione. Energia per tutto il giorno e oltre. Prestazioni straordinarie per fare più cose contemporaneamente. Un’esperienza Android™ straordinaria, sempre: Galaxy A32 supporta tutte le applicazioni Google più recenti su sistema operativo Android.",
        image: "https://asset.mediaw.it/wcsstore/MMCatalogAssetStore/asset/images/15/07/150782.jpg",
        image2: "https://asset.mediaw.it/wcsstore/MMCatalogAssetStore/asset/images/15/07/150779.jpg",
        image3: "https://asset.mediaw.it/wcsstore/MMCatalogAssetStore/asset/images/15/07/150780.jpg",
        image4: "https://asset.mediaw.it/wcsstore/MMCatalogAssetStore/asset/images/15/07/150783.jpg",
        //selectedModel: 0,
        onSale: true,
        inventory: 100,
        price: 279.99,
        features: "Quadri Band - 4G-LTE - Wi-Fi - NFC - A-GPS. Fotocamera posteriore: 64 Megapixel. Android 11 con Samsung One UI 3.1. Processore: 8-Core da 2 GHz. Memoria interna: 128 GB - RAM: 4 GB. Display 6,4 '' Super AMOLED. Distribuito da SAMSUNG Italia",
      },
      {
        id: 2,
        product: "Galaxy Z Flip3 5G 128Gb - Lavender",
        brand: "Samsung",
        description:
          "Ottieni foto straordinarie da ogni video in 8K. Utilizza Fermo Immagine 8K per ottenere da ogni video in 8K una galleria di foto da 33MP di alta qualità. E' facile registrare ora e scattare dopo. Realizza una ripresa e lascia che l’intelligenza artificiale la trasformi in foto e video tra cui puoi scegliere. È come un editor video personale, che ritaglia, rallenta e stabilizza per creare contenuti che puoi caricare direttamente su Instagram. Ricarica Ultra-rapida consente ore di utilizzo con pochi minuti di ricarica. Il processore Galaxy più veloce di sempre: con ancora più velocità, potenza ed intelligenza, il processore da 5nm è incredibilmente rapido, permettendoti di fare di più in ancora meno tempo. 8 GB di RAM. Galaxy S21 5G e S21+ 5G offrono il massimo livello certificato di sicurezza.",
        image: "https://asset.mediaw.it/wcsstore/MMCatalogAssetStore/asset/images/15/97/159708.jpg",
        image2: "https://asset.mediaw.it/wcsstore/MMCatalogAssetStore/asset/images/15/97/159706.jpg",
        image3: "https://asset.mediaw.it/wcsstore/MMCatalogAssetStore/asset/images/15/97/159707.jpg",
        image4: "https://asset.mediaw.it/wcsstore/MMCatalogAssetStore/asset/images/15/97/159705.jpg",
        //selectedModel: 0,
        onSale: false,
        inventory: 0,
        price: 879,
        features: "Penta Band - 5G - Wi-Fi - NFC - A-GPS. Fotocamera posteriore: 64 Megapixel. Android 11 con Samsung One UI 3.1. Processore: 8-Core da 2,9 GHz. Memoria interna: 128 GB - RAM: 8 GB. Display 6,2'' Dynamic AMOLED 2X. Distribuito da SAMSUNG Italia. La confezione include S21 e cavo USB-Type C."
      },
      {
        id: 3,
        product: "Galaxy S21 5G 128Gb - Phantom Pink",
        brand: "Samsung",
        description:
          "Sta dentro la tua tasca. Puoi metterlo rapidamente nella borsa. Poi puoi tirarlo fuori e lui si aprirà con uno scatto, diventando uno smartphone 5G a schermo intero che si flette per assumere la forma da te preferita. Vuoi un colore pop o preferisci un audace total-black? Galaxy Z Flip3 5G è caratterizzato da un design e da colori accattivanti. Uno smarthphone a schermo intero che si piega per essere contenuto nelle tasche più piccole. Da chiuso, Galaxy Z Flip3 5G può essere contenuto anche nelle tasche più nascoste degli outfit a “risparmio di spazio”. Leggi messaggi, scatta foto, riproduci musica e molto altro, tutto questo senza aprire il telefono. Il display posteriore da 1,9 pollici ti mostra le notifiche consentendoti di utilizzarle in modo intuitivo. Scegli le tue opzioni display preferite per un accesso semplice, poi crea le tue opzioni personali con stili e colori differenti. Con i 120Hz sul display Infinity Flex da 6,7 pollici; consente di scorrere verso il basso e da destra a sinistra, trascinare e rilasciare in modo impeccabile. Il Galaxy Z Flip3 5G sta in piedi da solo, quindi non c’è nulla da reggere e soprattutto non ci sono limiti per te. Dividi il tuo schermo in due e lavora in multitasking come un professionista. Accedi alla tua playlist di YouTube e invia messaggi ai tuoi amici, poi scatta uno strabiliante selfie e guarda le reazioni a catena. E mentre stai riproducendo un video, immergiti nell’audio con Dolby Atmos e gli altoparlanti stereo.",
        image: "https://asset.mediaw.it/wcsstore/MMCatalogAssetStore/asset/images/14/72/147294.jpg",
        image2: "https://asset.mediaw.it/wcsstore/MMCatalogAssetStore/asset/images/14/73/147301.jpg",
        image3: "https://asset.mediaw.it/wcsstore/MMCatalogAssetStore/asset/images/14/73/147300.jpg",
        image4: "https://asset.mediaw.it/wcsstore/MMCatalogAssetStore/asset/images/14/72/147292.jpg",
        //selectedModel: 0,
        onSale: true,
        inventory: 80,
        price: 1099,
        features: "Penta Band - 5G - Wi-Fi - NFC - A-GPS. Fotocamera posteriore: 12 Megapixel - Android 11. Processore: 8-Core da 2,84 GHz. Memoria interna: 128 GB - RAM: 8 GB. Display esterno Touchscreen Super AMOLED. Display interno Touchscreen Dynamic AMOLED 6,7. Distribuito da SAMSUNG Italia",
      },
      {
        id: 4,
        product: "Galaxy Book 15.6'', i3 - Denim Blue",
        brand: "Samsung",
        description:
          "Sottile e leggero, perfetto da portare ovunque. Galaxy Book: con te, ovunque ti trovi. Un modello portatile e snello che svela uno spazio di lavoro extra-ampio, con una cornice sottile che massimizza il rapporto schermo-corpo. E la leggera struttura in alluminio garantisce massima durabilità. CONNESSIONE BLUETOOTH SEMPLIFICATA. Associare Galaxy Book agli auricolari wireless Galaxy Buds non è mai stato così facile. Ti basta aprire la custodia degli auricolari vicino al laptop, e il gioco è fatto. SMARTTHINGS. Automatizza la tua casa e controlla tutti i tuoi dispositivi IoT con SmartThings: puoi anche localizzare il tuo Galaxy Book grazie a SmartThings Find. UN SECONDO DISPLAY. Duplica lo schermo del tuo Galaxy Book con il display di Galaxy Tab S7 e S7+ con S Pen, e ottieni di più dal tuo lavoro grazie alla funzionalità Second screen integrata. Prestazioni superiori con Intel®. Grazie alle nuove CPU e GPU Intel® Core™, Galaxy Book è dotato di un'incredibile potenza di elaborazione, per accompagnarti nelle giornate più intense e tenere il passo con tutte le tue attività, dal multi-tasking allo streaming fino alle sessioni di gioco dalle grafiche più spettacolari. Batteria a lunga durata, caricatore universale compatto. Meno interferenze per videochiamate professionali. Portabilità ottimizzata grazie al design multi-porta",
        image: "https://asset.mediaw.it/wcsstore/MMCatalogAssetStore/asset/images/14/70/147081.jpg",
        image2: "https://asset.mediaw.it/wcsstore/MMCatalogAssetStore/asset/images/15/65/156532.jpg",
        //selectedModel: 0,
        onSale: true,
        inventory: 80,
        price: 709,
        features: "Processore Intel® Core™ I3-1115G4 (1,7 GHz - 6 MB L3) SSD: 256 GB - RAM: 8 GB - Display: 15,6 LED Full HD WiFi IEEE 802.11a/b/g/n/ac/ax - Bluetooth 5.1 - Windows 10 Home Scheda grafica: INTEL UHD Graphics Condivisa",
      },
      {
        id: 5,
        product: "Galaxy Book GO LTE, 14.0'', Snapdragon - Mystic Silver",
        brand: "Samsung",
        description:
          "Un laptop compatto da portare ovunque. Galaxy Book Go concentra uno schermo immersivo da ben 14” e uno spettacolare audio Dolby Atmos® in un design compatto che entra comodamente in borsa. Sottile ed elegante nella sua livrea argento, la robusta struttura è dotata di una cerniera che ruota di 180°, per seguirti in ogni avventura. Tutta l'energia necessaria per seguirti ovunque. Grazie alla rete LTE sei sempre connesso. Sincronizza i tuoi dispositivi in un attimo. GALAXY BOOK SMART SWITCH. Utilizza una connessione wireless per associare i tuoi dispositivi e trasferisci foto, video, musica e documenti dal tuo vecchio laptop in un attimo. Un nuovo livello di agilità. Alimentato dal nuovo processore Snapdragon 7c Gen 2, Galaxy Book Go attinge all’esperienza degli smartphone per assicurarti prestazioni agili in ogni occasione e la possibilità di passare istantaneamente dalle reti Wi-Fi affidabili al servizio LTE, rimanendo sempre connesso.",
        image: "https://asset.mediaw.it/wcsstore/MMCatalogAssetStore/asset/images/15/65/156540.jpg",
        //selectedModel: 0,
        onSale: true,
        inventory: 70,
        price: 499,
        features: "Processore Qualcomm -Snapdragon 7c Gen 2 (2,55 GHz) RAM: 4 GB - Display: 14'' LED Full HD WiFi IEEE 802.11a/b/g/n/ac - Bluetooth 5.0 Windows 10 Modalità S Scheda grafica: QUALCOMM ADREANO Condivisa",
      },
      {
        id: 6,
        product: "Galaxy Book Ion 13,3'' i5 - Aura Silver",
        brand: "Samsung",
        description:
          "Design cangiante Aura Silver. Attira gli sguardi con un nuovo splendido design! Grazie all’accattivante finitura Aura Silver, Samsung Galaxy Ion cambia colore ogni volta che la luce lo colpisce da una un’angolazione diversa. E la cerniera di apertura, ispirata alla classica rilegatura dei libri, aggiunge una nota di classe. DISPLAY QLED. Immagini e video raggiungono un livello di realismo mai visto prima, grazie a un display QLED con 100% di volume colore certificato VDE. Wireless PowerShare. Puoi caricare il telefono in modalità wireless direttamente dal laptop, semplicemente premendo la combinazione di tasti Fn+F11.Batteria a lunga durata. Autonomia potenziata con una batteria che garantisce un maggiore tempo di utilizzo per Watt rispetto ai modelli convenzionali. È sufficiente una ricarica mattutina per utilizzare il laptop ininterrottamente, fino a 22 ore al giorno! Potente processore Intel® Core™ di decima generazione. Ottimizza la tua produttività con Galaxy Book Ion. Il processore Intel® Core™ di decima generazione fornisce prestazioni eccellenti, permettendoti di utilizzare anche programmi particolarmente esigenti, come gli editor di foto e streaming video. Alta velocità, alta connettività. Accesso facile e sicuro. Un solo gesto per accedere! Il dispositivo legge la tua impronta digitale con un sensore integrato sicuro.",
        image: "https://asset.mediaw.it/wcsstore/MMCatalogAssetStore/asset/images/14/71/147198.jpg",
        //selectedModel: 0,
        onSale: true,
        inventory: 150,
        price: 1299,
        features: "Processore Intel® Core™ I5-10210U (1,6 GHz - 6 MB L3) SSD: 256 GB - RAM: 8 GB - Display: 13,3'' Full HD WiFi IEEE 802.11a/b/g/n/ac - Bluetooth 5.0 - Windows 10 Home Scheda grafica: INTEL UHD Graphics 620 Condivisa",
      },
      {
        id: 7,
        product: "HS 1303 - Blu",
        brand: "Samsung",
        description:
          "Scopri l'audio Full-Range High-Definition. Gli auricolari In-Ear Samsung sono leggeri e compatti, e sono stati progettati per garantirti il massimo comfort e ridurre l'affaticamento durante l'ascolto di musica per un lungo periodo di tempo. L'equilibrio tra i suoni alti chiari e puliti, e i bassi profondi ti offre una esperienza sonora ricca per tutti i generi musicali. Gli auricolari per te. Il design esclusivo e i vari colori degli auricolari In-Ear Samsung sono stati studiati per soddisfare le tue esigenze in fatto di audio e stile. Controlli integrati dal design ergonomico. I controlli integrati degli auricolari In-Ear ti permettono di controllare le funzioni Play, Stop e Volume.",
        image: "https://www.smartphonecover.it/media/catalog/product/cache/925f019bcbc853722bb0f86b1d62a107/3/5/350211036_4dbf.jpg",
        //selectedModel: 0,
        onSale: true,
        inventory: 25,
        price: 9.99,
        features: "Auricolare cuffia - Lunghezza cavo 120 cm",
      },
      {
        id: 8,
        product: "Auricolare In-ear - Basic Black",
        brand: "Samsung",
        description:
          "Il piacere della musica senza ingombri. Addio ai fastidiosi cavi. I nuovi auricolari In-ear sono progettati con un filo in tessuto antigroviglio che ti permetterà di goderti la tua musica preferita senza perdere tempo e in massima semplicità. Gestisci comodamente le tue playlist. Gli auricolari In-ear sono dotati di comandi remoti a filo con tre pulsanti, che ti permetteranno di gestire rapidamente i tuoi brani musicali.",
        image: "https://asset.mediaw.it/wcsstore/MMCatalogAssetStore/asset/images/14/36/143640.jpg",
        image2: "https://asset.mediaw.it/wcsstore/MMCatalogAssetStore/asset/images/14/36/143641.jpg",
        //selectedModel: 0,
        onSale: true,
        inventory: 120,
        price: 16.99,
        features: "Audio: Stereo - Controllo Volume sul Filo Impedenza: 24 ohm Risposta in frequenza: 20Hz-20KHz Sensibilità: 90 dB / Mw",
      },
      {
      id: 9,
      product: "Galaxy Buds Live - Mystic Black",
      brand: "Samsung",
      description:
        "Ti presentiamo Galaxy Buds Live. Gli auricolari progettati per essere sempre sulla frequenza giusta. La loro forma iconica e il design ergonomico senza cuscinetti In-Ear, per non occludere il canale uditivo, insieme alla tecnologia di Cancellazione Attiva del Rumore, rendono l'esperienza di ascolto unica e comoda per tutta la giornata. Questo è il suono fatto apposta per le tue orecchie. Forma innovativa per auricolari davvero wireless. Il design accattivante di Galaxy Buds Live si fa sempre notare, anche quando li indossi. Le linee seguono le curve dell’orecchio per un look naturale, la superficie è liscia e lucida e la custodia sembra un portagioie, perfetto per stare in tasca ovunque tu vada. Fatti per le tue orecchie: Galaxy Buds Live si adagiano nell'orecchio con il massimo del comfort, così potrai indossarli tutto il giorno senza quasi accorgertene. Grazie alla tecnologia di Cancellazione Attiva dei Rumori (ANC), gli auricolari wireless Galaxy cancellano i rumori di fondo tenendoti sempre in contatto col mondo che ti circonda. Questo vuol dire che riducono le frequenze basse dei rumori fastidiosi, senza farti perdere quello che conta, come le voci delle persone o gli annunci. La funzione Attivazione Vocale Bixby è sempre pronta ogni volta che ne hai bisogno. Basta la tua voce, e potrai controllare il tuo smartphone senza muovere un dito. Gestire le chiamate, regolare il volume o controllare il meteo mentre sei in giro: puoi fare tutto, tu chiedi e Bixby ascolta. Una pressione prolungata, ed ecco Spotify. I Galaxy Buds Live sono integrati con Spotify, così potrai assegnare un comando di avvio rapido per avviarlo sul telefono. Chiamate forti e chiare. I tre microfoni integrati e la funzione Voice Pickup garantiscono alle tue chiamate la qualità audio ottimale.",
      image: "https://asset.mediaw.it/wcsstore/MMCatalogAssetStore/asset/images/13/68/136819.jpg",
      image2: "https://asset.mediaw.it/wcsstore/MMCatalogAssetStore/asset/images/13/68/136823.jpg",
      image3: "https://asset.mediaw.it/wcsstore/MMCatalogAssetStore/asset/images/13/98/139891.jpg",
      image4: "https://asset.mediaw.it/wcsstore/MMCatalogAssetStore/asset/images/13/68/136820.jpg",
      //selectedModel: 0,
      onSale: true,
      inventory: 120,
      price: 149.99,
      features: "Auricolari wireless - Riduzione rumore Controllo Volume - Comandi vocali - Memoria: 8MB Risposta chiamate - Lettura delle notifiche Sensori: Accelerometro, Hall, Prossimità, Touch capacitivo 60 minuti di riproduzione audio con 5 minuti di ricarica",
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


