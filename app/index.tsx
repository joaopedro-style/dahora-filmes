import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// @ts-ignore
import { Ionicons } from "@expo/vector-icons";

export default function index() {
  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.viewLogo}>
        <Image source={require("../assets/dahora.png")} style={estilos.logo} />
        <Text style={estilos.tituloApp}>Dá Hora Filmes</Text>
      </View>
      <View style={estilos.viewBotoes}>
        <Pressable
          style={({ pressed }) => [
            estilos.botaoInicial,
            pressed && { backgroundColor: "black" },
          ]}
        >
          <Ionicons
            name="search"
            size={24}
            color="white"
            style={{ marginRight: 8 }}
          />
          <Text style={estilos.textoBotao}>Buscar Filmes</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            estilos.botaoInicial,
            pressed && { backgroundColor: "black" },
          ]}
        >
          <Ionicons
            name="star"
            size={24}
            color="yellow"
            style={{ marginRight: 8 }}
          />
          <Text style={estilos.textoBotao}>Favoritos</Text>
        </Pressable>
      </View>
      <View style={estilos.viewRodape}>
        <Pressable
          style={({ pressed }) => [
            estilos.botaoRodape,
            pressed && { backgroundColor: "black" },
          ]}
        >
          <Ionicons
            name="lock-closed"
            size={18}
            color="white"
            style={{ marginRight: 7 }}
          />
          <Text style={estilos.textoRodape}>Privacidade</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            estilos.botaoRodape,
            pressed && { backgroundColor: "black" },
          ]}
        >
          <Ionicons
            name="information-circle"
            size={18}
            color="white"
            style={{ marginRight: 7 }}
          />
          <Text style={estilos.textoRodape}>Sobre</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: "center",
  },
  viewLogo: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
  },
  tituloApp: {
    fontSize: 32,
    color: "#5451a6",
    fontFamily: "Monoton",
    textAlign: "center",
    marginBottom: 65,
  },
  viewBotoes: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 240,
    gap: 35,
  },
  botaoInicial: {
    backgroundColor: "#5451a6",
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  textoBotao: {
    color: "white",
    fontSize: 16,
  },
  viewRodape: {
    backgroundColor: "#5451a6",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 7,
    paddingVertical: 12,
    bottom: 15,
  },
  botaoRodape: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  textoRodape: {
    color: "white",
    fontSize: 14,
  },
});
