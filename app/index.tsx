import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// @ts-ignore
import { Ionicons } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";

export default function index() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false, headerTitle: "Home" }} />
      <SafeAreaView style={estilos.container}>
        <View style={estilos.viewLogo}>
          <Image
            source={require("../assets/dahora.png")}
            style={estilos.logo}
          />
          <Text style={estilos.tituloApp}>Dá Hora Filmes</Text>
        </View>
        <View style={estilos.viewBotoes}>
          <Link href="/buscar" asChild>
            <Pressable style={estilos.botaoInicial}>
              <Ionicons
                name="search"
                size={24}
                color="white"
                style={{ marginRight: 8 }}
              />
              <Text style={estilos.textoBotao}>Buscar Filmes</Text>
            </Pressable>
          </Link>

          <Link href="/favoritos" asChild>
            <Pressable style={estilos.botaoInicial}>
              <Ionicons
                name="star"
                size={24}
                color="yellow"
                style={{ marginRight: 8 }}
              />
              <Text style={estilos.textoBotao}>Favoritos</Text>
            </Pressable>
          </Link>
        </View>
        <View style={estilos.viewRodape}>
          <Link href="/privacidade" asChild>
            <Pressable style={estilos.botaoRodape}>
              <Ionicons
                name="lock-closed"
                size={18}
                color="white"
                style={{ marginRight: 7 }}
              />
              <Text style={estilos.textoRodape}> Privacidade</Text>
            </Pressable>
          </Link>

          <Link href="/sobre" asChild>
            <Pressable style={estilos.botaoRodape}>
              <Ionicons
                name="information-circle"
                size={18}
                color="white"
                style={{ marginRight: 7 }}
              />
              <Text style={estilos.textoRodape}>Sobre</Text>
            </Pressable>
          </Link>
        </View>
      </SafeAreaView>
    </>
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
    // backgroundColor: "yellow",
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
