// QUESTO SERVE PERCHE' SI. cioè.. se avete un dispositivo che usa android 11+ quindi SDK 30 DOVETE metterlo
// semplicemente questo file chiamato anche plugin vi serve per poi buildare l'app in maniera che aggiunga sul androidManifest.xml dei package sulla sezione queries
// perché? credo sia un fattore di sicurezza.. in caso ecco la documentazione https://developer.android.com/training/package-visibility/declaring

const { 
      AndroidConfig, 
      ConfigPlugin, 
      withAndroidManifest, 
    } = require("expo/config-plugins"); 
     
    // Use these imports in SDK 46 and lower 
    // import { AndroidConfig, ConfigPlugin, withAndroidManifest } from '@expo/config-plugins'; 
    // import { ExpoConfig } from '@expo/config-types'; 
     
    // Using helpers keeps error messages unified and helps cut down on XML format changes. 
    const { 
      addMetaDataItemToMainApplication, 
      getMainApplicationOrThrow, 
      writeAndroidManifestAsync, 
    } = AndroidConfig.Manifest; 
     
    // Write in the apps we want to shareSingle to inside the Android manifest 
    // to give them visibility after privacy updates to Android 12 
    module.exports = config => { 
      return withAndroidManifest(config, async config => { 
        config.modResults = await setCustomConfigAsync(config, config.modResults); 
        return config; 
      }); 
    }; 
     
    // Splitting this function out of the mod makes it easier to test. 
    async function setCustomConfigAsync(config, androidManifest) { 
      androidManifest.manifest.queries[0].package = [ 
        { $: { "android:name": "com.instagram.android" } }, 
        { $: { "android:name": "com.twitter.android" } }, 
        { $: { "android:name": "com.facebook.katana" } }, 
        { $: { "android:name": "com.whatsapp" } }, 
        { $: { "android:name": "com.snapchat.android" } }, 
        { $: { "android:name": "org.telegram.messenger" } }, 
      ]; 
     
      return androidManifest; 
    }