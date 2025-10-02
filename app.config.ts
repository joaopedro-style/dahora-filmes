// Módulo responsável pelo acesso á dados de variáveis de ambiente
import "dotenv/config";

import { ExpoConfig, ConfigContext } from "@expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "DáHora-Filmes",
  slug: "dahora-filmes",
  owner: "joaopedro07", // Necessario para o eas
  scheme: "dahora",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icone.png",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  splash: {
    image: "./assets/splash-dahora.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  platforms: ["ios", "android"],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/icone.png",
      backgroundColor: "#000000",
    },
    edgeToEdgeEnabled: true,
    package: "com.joaopedro.dahorafilmes",
  },
  plugins: ["expo-font", "expo-router"],
  // Acessando a API_KEY através do dotenv e guardando na chave apiKey
  extra: {
    apiKey: process.env.API_KEY,
    // Necessario para o eas
    eas: {
      projectId: "82019f42-5442-4e3c-bc7c-a8bf63d9542a",
    },
  },
  updates: {
    url: "https://u.expo.dev/82019f42-5442-4e3c-bc7c-a8bf63d9542a",
  },
  runtimeVersion: {
    policy: "appVersion",
  },
});
