import { StyleSheet, Button, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useContext } from 'react';
import { ThemeContext } from '../context-store/context';

export default function SettingsScreen() {
  const { theme, setTheme } = useContext(ThemeContext);

  // Sets theme
  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Checks theme
  // TODO - Remove console.log in prod
  useEffect(() => {
    console.log('settingsScreen: ', theme);
  }, [theme]);

  return (
    <View
      style={theme == 'light' ? styles.container_light : styles.container_dark}
    >
      <Text style={theme == 'light' ? styles.text_light : styles.text_dark}>
        We are on {theme} mode!
      </Text>
      <Button title='Switch Mode' onPress={handleThemeChange} />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container_light: {
    flex: 1,
    backgroundColor: '#e4d0ff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container_dark: {
    flex: 1,
    backgroundColor: '#1e085a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_light: {
    marginBottom: 20,
    color: '#000',
  },
  text_dark: {
    marginBottom: 20,
    color: '#fff',
  },
});
