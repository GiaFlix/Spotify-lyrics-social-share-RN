import React from "react";
import { View, Text, Image } from "react-native";


// la logica della Card è molto semplice
// usa i valori forniti dai paramentri che vengono inseriti quando viene chiamato il componente
// quelli necessari sono i soliti:
// immagineUrl, nomeCanzone, cantante, testoCanzone
// gli altri dipendono dalla situazione

export default Card = ({
  immagineUrl,
  nomeCanzone,
  cantante,
  testoCanzone,
  coloreView,
  bordi,
  viewRef,
  transparente,
}) => {
  return (
    <>
      <View
        ref={viewRef} // permette al react-native-view-shot di fare lo screenshot del componente
        style={{
          width: 675 / 2,
          alignSelf: "center",
          padding: 30,
          backgroundColor: transparente ? null : coloreView,
          borderWidth: transparente ? 1 : null,
          marginBottom: transparente ? 10 : null,
          borderRadius: bordi ? 40 / 2 : 0,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 60 / 2,
          }}
        >
          <View>
            <Image
              style={{
                width: 40,
                height: "auto",
                aspectRatio: 1 / 1,
                borderRadius: 14 / 2,
              }}
              source={{ uri: immagineUrl }}
            />
          </View>
          <View
            style={{
              marginLeft: 30 / 2,
              flexDirection: "column",
              maxWidth: "80%",
            }}
          >
            <Text
              style={{
                fontSize: 35 / 2,
                color: "white",
                fontFamily: "Circular",
              }}
            >
              {nomeCanzone}
            </Text>
            <Text
              style={{
                fontSize: 28 / 2,
                color: "white",
                fontFamily: "arial",
              }}
            >
              {cantante}
            </Text>
          </View>
        </View>
        <View
          style={{
            maxWidth: 400 / 2,
            marginBottom: 60 / 2,
            //backgroundColor:"yellow" // POV: io che faccio debug
          }}
        >
          <Text
            style={{
              fontSize: 60 / 2,
              color: "white",
              fontFamily: "Circular",
            }}
          >
            {testoCanzone}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 40 / 2,
            color: "white",
            marginBottom: 90 / 2 - 30,
            fontFamily: "Climate",
          }}
        >
          GIAFLIX Music {/* Se lo modifichi.. dimmelo.. sono curioso di sapere cosa metterai :=) */}
        </Text>
      </View>
    </>
  );
};
