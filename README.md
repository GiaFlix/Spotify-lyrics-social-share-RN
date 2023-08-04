# Spotify Lyrics Social Share RN 😎🎶

Ciao a tutti! Ho pensato di creare qualcosa di carino: una mini app in React Native che permetta di creare una card stile Spotify con testi personalizzabili, da condividere sui social media, come Instagram!

## Caratteristiche dell'app 🚀

L'applicazione è strutturata in modo che tu possa creare una card con i tuoi testi preferiti. Quando decidi di condividerla, l'app farà uno screenshot della card e la convertirà in un codice base64, pronto per essere condiviso sui principali social media.

Attualmente, nell'esempio dell'app, sono disponibili le opzioni di condivisione per Instagram, WhatsApp e Snapchat. Ma se vuoi aggiungere altre app, sentiti libero di farlo e fammelo sapere! 📱

## Esperienza di sviluppo 😅

Per sviluppare quest'app ci ho impiegato ben 3 giorni! Sì, può sembrare strano, ma ci sono stati vari test e build. Ora posso dire di aver imparato nuove cose sulla parte nativa di Android. Quindi, se qualcosa non funziona come previsto, vi prego di essere pazienti, cercherò sempre di migliorarla! 💪

## Nota sull'IOS 🍏

Prima di tutto, l'app è stata testata e sviluppata solo per Android. Non posso garantire che funzioni correttamente su dispositivi IOS. Purtroppo, il simulatore su Macbook non dispone dell'App Store, quindi non ho potuto fare test specifici per IOS. Tuttavia, se tu hai un iPhone e provi l'app, fammi sapere come va! 😉

## Repository e asset 📁

All'interno della repository troverai alcune immagini che vengono utilizzate nell'app. Senti pure di personalizzare tutto a tuo piacimento! 🎨

Ho utilizzato i font che Spotify usa nel design, ma ho anche incluso un font chiamato "ClimateCrisis" per il logo "Giaflix music". Naturalmente, sei libero di cambiarli se preferisci un altro stile.

## Struttura dei file 📂

Ho organizzato i file in modo informale, considera che è solo un esempio veloce. Nel file "app.js" troverai il cuore dell'applicazione. Ricordati di modificare l'appId alla riga 61 se vuoi condividere su Instagram e di gestire il background nel file "back.js".

Consiglio vivamente di leggere i commenti presenti nel codice, ti aiuteranno a capire le scelte fatte durante lo sviluppo! 🤓

Il file "card.js" contiene il componente della card con il layout stile Spotify. Nota che i font sono inclusi solo una volta nel file "app.js".

## Build e comandi 💻

Per fare la build dell'app, puoi usare i seguenti comandi:

- Per lo sviluppo locale: `eas build --profile development --platform android`
- Per la versione finale: `eas build -p android --profile preview`
- Per avviare il server locale: `npx expo start`

Assicurati di avere configurato il tuo account EAS correttamente. Nel file "plug.js" troverai un plugin utile per gestire l'apertura di applicazioni terze. Se vuoi aggiungere altre app con cui interagire, dovrai inserire i loro identificativi nel file.

## Licenza 📜

Questo progetto è fornito "così com'è", senza alcuna garanzia esplicita o implicita. In nessun caso gli autori o i contributori saranno responsabili per qualsiasi danno diretto, indiretto, accidentale, speciale, esemplare o conseguente derivante da questo software o dall'uso di altre interazioni con il software. 😱💥

### 🚀 Fai ciò che vuoi! 🎨

Vogliamo che tu sappia che ciò che fai con questa repository non ci interessa! Non ci preoccupiamo minimamente di come personalizzi, modifichi o utilizzi il codice. L'importante è che tu ti diverta e che impari qualcosa di nuovo lungo il percorso! 💻🤩

## Considerazioni finali 🙌

È necessario avere una build completa dell'app per testarla. Quindi, purtroppo, non potrai usare Expo Go per provarla rapidamente. Ma se riscontri problemi o hai domande, non esitare a contattarmi. Sarò più che felice di aiutarti e discutere delle tue idee!

Divertiti con l'app e buon coding! 😄🎉
