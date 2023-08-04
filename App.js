import React, { useEffect, useRef, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from "react-native";
import Share from "react-native-share";
import Back from "./back";
import { useFonts } from "expo-font";
import { captureRef } from "react-native-view-shot";
import { FontAwesome } from "@expo/vector-icons";

import ColorPickerr from "./colorPick";
import Card from "./card";

const ShareToInstagramStory = () => {
  const viewRef = useRef(null);
  const [fontsLoaded] = useFonts({
    Circular: require("./CircularSpotifyText-Bold.otf"),
    Climate: require("./ClimateCrisis-1990.otf"),
    Gotham: require("./Gotham-Light.otf"),
  });
  const [visualizza, setVisualizza] = useState(false);
  useEffect(() => {
    if (!fontsLoaded) {
      setVisualizza(false);
    } else {
      setVisualizza(true);
    }
  }, [fontsLoaded]);
  const [hasInstagramInstalled, setHasInstagramInstalled] = useState(false);
  const [hasWhatsappInstalled, setHasWhatsappInstalled] = useState(false);
  const [hasSnapchatInstalled, setHasSnapchatInstalled] = useState(false);

  useEffect(() => {
    Share.isPackageInstalled("com.instagram.android").then(({ isInstalled }) => {
        setHasInstagramInstalled(isInstalled);
    });
    Share.isPackageInstalled("com.whatsapp").then(({ isInstalled }) => {
      setHasWhatsappInstalled(isInstalled);
    });
    Share.isPackageInstalled("com.snapchat.android").then(({ isInstalled }) => {
      setHasSnapchatInstalled(isInstalled);
    });
  }, [visualizza]);

  const onSharePressInstagram = async () => {
    try {
      const uri = await captureRef(viewRef, {
        format: "png",
        result: "data-uri",
        quality: 1,
      });
      console.log(coloreBack);
      const shareOptions = {
        appId: "IL_TUO_APPID", // CAMBIATE IL APPID
        //backgroundImage: Back, // image/jpeg
        stickerImage: uri, // image/png
        backgroundBottomColor: coloreBack,
        backgroundTopColor: coloreBack,
        attributionURL: "https://www.giaflix.it", // è in beta questa funzione
        social: Share.Social.INSTAGRAM_STORIES,
        forceDialog: true,
      };
      const result = await Share.shareSingle(shareOptions);
      console.log(result);
    } catch (error) {
      console.log("Errore condivisione nelle storie IG :", error.message);
    }
  };
  const onSharePressWhatsApp = async () => {
    try {
      setbordi(false);  // Cambia momentaneamente i bordi della Card, in maniera che sia senza il border radius
      const uri = await captureRef(viewRef, {
        format: "png",
        result: "data-uri",
        quality: 1,
      });
      setbordi(true);
      const shareOptions = { // potete inserire altre opzioni. trovate tutto sulla documentazione di react-native-share
        message: "", // se volete inserire un messaggio custom
        url: uri,
        social: Share.Social.WHATSAPP,
      };
      const result = await Share.shareSingle(shareOptions);
      console.log(result);
    } catch (error) {
      console.log("Errore condivisione su WhatsApp :", error.message);
    }
  };
  const onSharePressSnapChat = async () => {
    try {
      setbordi(false); // Anche qui i bordi :)
      const uri = await captureRef(viewRef, {
        format: "png",
        result: "data-uri",
        quality: 1,
      });
      setbordi(true);
      const shareOptions = { // anche qui se volete inserire altre opzioni, anche se tecnicamente non ci sono sulla libreria.. però potete sempre aggiungerli voi :)
        message: "", // non dovrebbe funzionare su SnapChat
        url: uri,
        social: Share.Social.SNAPCHAT,
      };
      const result = await Share.shareSingle(shareOptions);
      console.log(result);
    } catch (error) {
      console.log("Errore condivisione su SnapChat:", error.message);
    }
  };

  
  const [testoCanzone, setTestoCanzone] = useState("Testo Canzone"); // Testo della vostra canzone
  const [nomeCanzone, setNomeCanzone] = useState("La musica");  // Nome delle canzone
  const [cantante, setCantante] = useState("GiaFlix"); // il nome del cantante
  const [immagineUrl, setImmagineUrl] = useState("https://api.giaflix.it/new/logo.png"); // il link dell'immagine
  const [coloreView, setColoreView] = useState("red"); // colore della Card
  const [coloreBack, setColoreBack] = useState("#ffcccb"); // colore background della Card SOLO PER INSTAGRAM

  // controllo per far inserire il colore bianco come sfondo.. non ha senso in questo caso.
  useEffect(() => {
    if (
      coloreView == "white" ||
      coloreView == "#FFFFFF"
    ) {
      setColoreView("red");
    }
  }, [coloreView, coloreBack]);

  const [bordi, setbordi] = useState(true);

  // Funzioni per settare i colori
  const coloreFunzione = (data) => {
    setColoreView(data);
  };
  const coloreFunzioneBack = (data) => {
    setColoreBack(data);
  };

  return (
    <>
      {visualizza ? (
        <>
          <SafeAreaView />
          <View
            style={{
              flex: 1,
            }}
          >
            <Text
              style={{
                marginTop: 30,
                textAlign: "center",
                color: "black",
                fontFamily: "Climate",
                alignItems: "flex-end",

                fontSize: 10 * 2,
                marginVertical: 10,
              }}
            >
              Generatore Musica{"\n"}da Giasin {/* Inserite quello che volete */}
            </Text>

            <ScrollView>
              <View
                style={{
                  marginTop: 0,
                  marginVertical: 10 * 4,
                }}
              >
                
                <Card
                  immagineUrl={immagineUrl}
                  nomeCanzone={nomeCanzone}
                  cantante={cantante}
                  testoCanzone={testoCanzone}
                  coloreView={coloreView}
                  viewRef={viewRef}
                  bordi={bordi}
                />

                <View
                  style={{
                    width: "80%",

                    alignSelf: "center",
                  }}
                >
                  <TextInput
                    style={{
                      marginVertical: 10,
                      fontSize: 16,
                      borderWidth: 1,
                      borderColor: "black",
                      borderRadius: 10,
                      padding: 10 * 1.5,
                    }}
                    multiline
                    onChangeText={(text) => setTestoCanzone(text)}
                    value={testoCanzone}
                    placeholder="Inserisci qui il testo della canzone"
                  />
                  <TextInput
                    style={{
                      marginVertical: 10,
                      fontSize: 16,
                      borderWidth: 1,
                      borderColor: "black",
                      borderRadius: 10,
                      padding: 10 * 1.5,
                    }}
                    onChangeText={(text) => setNomeCanzone(text)}
                    value={nomeCanzone}
                    placeholder="Inserisci qui il nome della canzone"
                  />
                  <TextInput
                    style={{
                      marginVertical: 10,
                      fontSize: 16,
                      borderWidth: 1,
                      borderColor: "black",
                      borderRadius: 10,
                      padding: 10 * 1.5,
                    }}
                    onChangeText={(text) => setCantante(text)}
                    value={cantante}
                    placeholder="Inserisci qui il nome del cantante"
                  />
                  <TextInput
                    style={{
                      marginVertical: 10,
                      fontSize: 16,
                      borderWidth: 1,
                      borderColor: "black",
                      borderRadius: 10,
                      padding: 10 * 1.5,
                    }}
                    multiline
                    onChangeText={(text) => setImmagineUrl(text)}
                    value={immagineUrl}
                    placeholder="Inserisci qui il URL per l'icona"
                  />
                  <TextInput
                    style={{
                      marginVertical: 10,
                      fontSize: 16,
                      borderWidth: 1,
                      borderColor: "black",
                      borderRadius: 10,
                      padding: 10 * 1.5,
                    }}
                    autoCapitalize="none"
                    onChangeText={(text) => setColoreView(text)}
                    value={coloreView}
                    placeholder="Inserisci qui il colore (HEX)"
                  />
                  <ColorPickerr
                    coloreCambiato={coloreFunzione}
                    immagineUrl={immagineUrl}
                    nomeCanzone={nomeCanzone}
                    cantante={cantante}
                    testoCanzone={testoCanzone}
                    viewRef={viewRef}
                    coloreView={coloreView}
                    bordi={bordi}
                    titolo={"Scegli il colore Sticker"}
                  />
                  <ColorPickerr
                    coloreCambiato={coloreFunzioneBack}
                    immagineUrl={immagineUrl}
                    nomeCanzone={nomeCanzone}
                    cantante={cantante}
                    testoCanzone={testoCanzone}
                    viewRef={viewRef}
                    coloreView={coloreView}
                    back={true}
                    bordi={bordi}
                    titolo={"Scegli il colore background"}
                  />
                </View>
                {hasInstagramInstalled && (
                  <TouchableOpacity
                    onPress={() => {
                      onSharePressInstagram(), console.log("Instagram");
                    }}
                    style={{
                      padding: 10,
                      marginVertical: 10,
                      width: "80%",
                      alignSelf: "center",
                      borderRadius: 20,
                      backgroundColor: coloreView,
                      alignContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        color: "white",
                        fontFamily: "Climate",
                      }}
                    >
                      <FontAwesome name="instagram" size={24} color="white" />{" "}
                      Condividi Su Instagram{" "}
                      <FontAwesome name="instagram" size={24} color="white" />
                    </Text>
                  </TouchableOpacity>
                )}
                {hasWhatsappInstalled && (
                  <TouchableOpacity
                    onPress={() => {
                      onSharePressWhatsApp(), console.log("WhatsApp");
                    }}
                    style={{
                      padding: 10,
                      width: "80%",
                      marginVertical: 10,
                      alignSelf: "center",
                      borderRadius: 20,
                      backgroundColor: coloreView,
                      alignContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        color: "white",
                        fontFamily: "Climate",
                      }}
                    >
                      <FontAwesome name="whatsapp" size={24} color="white" />{" "}
                      Condividi Su WhatsApp{" "}
                      <FontAwesome name="whatsapp" size={24} color="white" />
                    </Text>
                  </TouchableOpacity>
                )}
                {hasSnapchatInstalled && (
                  <TouchableOpacity
                    onPress={() => {
                      onSharePressSnapChat(), console.log("SnapChat");
                    }}
                    style={{
                      padding: 10,
                      width: "80%",
                      marginVertical: 10,
                      alignSelf: "center",
                      borderRadius: 20,
                      backgroundColor: coloreView,
                      alignContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        color: "white",
                        fontFamily: "Climate",
                      }}
                    >
                      <FontAwesome
                        name="snapchat-ghost"
                        size={24}
                        color="white"
                      />{" "}
                      Condividi Su SnapChat{" "}
                      <FontAwesome
                        name="snapchat-ghost"
                        size={24}
                        color="white"
                      />
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </ScrollView>
            <Text
              style={{
                textAlign: "center",
                color: "black",
                fontFamily: "Climate",
                alignSelf: "center",
                verticalAlign: "middle",

                fontSize: 10 * 2,
                marginVertical: 10,
              }}
            >
              GIAFLIX.IT
            </Text>
          </View>
        </>
      ) : (
        <>
          <View
            style={{
              //alignSelf:"center",
              justifyContent: "center",
              backgroundColor: "red",
              flex: 1,
            }}
          >
            {console.log(Dimensions.get("window").width * 0.04)}
            <View
              style={{
                alignContent: "center",
                alignItems: "center",
                alignSelf: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{
                  width: Dimensions.get("window").width * 0.4,
                  resizeMode: "contain",
                }}
                source={require("./assets/icon.png")}
              />
              <Image
                style={{
                  width: Dimensions.get("window").width * 0.4,
                  resizeMode: "contain",
                }}
                source={require("./assets/caricamento.png")}
              />
            </View>
          </View>
        </>
      )}
    </>
  );
};

export default ShareToInstagramStory;
