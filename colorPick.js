import React, { useEffect, useState } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import ColorPicker, {
  Panel4,
  OpacitySlider,
  colorKit,
  PreviewText,
} from "reanimated-color-picker";

export default function ColorPickerr({
  coloreCambiato,
  immagineUrl,
  nomeCanzone,
  cantante,
  testoCanzone,
  viewRef, // in realtà potete toglierlo.. sicuramente vi darà errore :)
  coloreView,
  bordi,
  back,
  titolo,
}) {
  const [showModal, setShowModal] = useState(false);
  const [coloreGenerale, setColoreGenerale] = useState("red");

  useEffect(() => {
    console.log(back); // POV: sempre io che faccio debug
    setColoreGenerale(coloreView);
    console.log(coloreGenerale);
  }, [coloreView]);

  const initialColor = colorKit
    .randomHsvColor({ s: [100, 100], v: [100, 100] })
    .hex();

  const selectedColor = useSharedValue(initialColor);

  const backgroundColorStyle = useAnimatedStyle(() => ({
    backgroundColor: selectedColor.value,
  }));

  const [coloreCambi, setColoreCambi] = useState("");
  const onColorSelect = (color) => {
    selectedColor.value = color.hex;
  };
  const completo = (color) => {
    coloreCambiato(color.hex);
    setColoreCambi(color.hex);
  };

  return (
    <>
      <Pressable style={styles.openButton} onPress={() => setShowModal(true)}>
        <Text
          style={{
            color: coloreCambi,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {titolo}
        </Text>
      </Pressable>

      <Modal
        onRequestClose={() => setShowModal(false)}
        visible={showModal}
        animationType="slide"
      >
        <Animated.View style={[styles.container, backgroundColorStyle]}>
          <ScrollView
            style={{
              flex: 1,
              marginVertical: 10 * 2,
            }}
          >
            <Card
              immagineUrl={immagineUrl}
              nomeCanzone={nomeCanzone}
              cantante={cantante}
              testoCanzone={testoCanzone}
              coloreView={coloreGenerale}
              bordi={bordi}
              transparente={back ? false : true}
            />
          </ScrollView>
          <View style={styles.pickerContainer}>
            <ColorPicker
              value={selectedColor.value}
              sliderThickness={25}
              thumbSize={24}
              thumbShape="circle"
              onChange={onColorSelect}
              onComplete={completo}
            >
              <Panel4 style={styles.panelStyle} thumbShape="ring" />
              {!back && <OpacitySlider style={styles.sliderStyle} />}
              <View style={styles.previewTxtContainer}>
                <PreviewText style={{ color: "#707070" }} colorFormat="hwba" />
              </View>
            </ColorPicker>
          </View>

          <Pressable
            style={styles.closeButton}
            onPress={() => setShowModal(false)}
          >
            <Text style={{ color: "#707070", fontWeight: "bold" }}>Chiudi</Text>
          </Pressable>
        </Animated.View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  pickerContainer: {
    flex: 1,
    marginVertical: 10,
    marginBottom: 10,
    alignSelf: "center",
    width: 300,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  panelStyle: {
    borderRadius: 16,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  sliderStyle: {
    borderRadius: 20,
    marginTop: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  previewTxtContainer: {
    paddingTop: 20,
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: "#bebdbe",
  },
  openButton: {
    marginVertical: 10,
    width: "100%",
    borderRadius: 20,
    paddingHorizontal: 40,
    paddingVertical: 10,
    backgroundColor: "#fff",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  closeButton: {
    position: "absolute",
    bottom: 20,
    borderRadius: 20,
    paddingHorizontal: 40,
    paddingVertical: 10,
    alignSelf: "center",
    backgroundColor: "#fff",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

