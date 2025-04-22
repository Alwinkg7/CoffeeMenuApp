import { Fontisto } from '@expo/vector-icons';
import {
  StyleSheet, SafeAreaView, View, Text, Appearance
} from 'react-native';
import { Link } from 'expo-router';

import { Colors } from '@/constants/Colors';

export default function ContactScreen() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  const imgColor = colorScheme === 'dark' ? 'papayawhip' : '#333';

  const styles = createStyles(theme, colorScheme);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgContainer}>
        <Fontisto
          name="coffeescript"
          size={200}
          color={imgColor}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Kochi Brew</Text>

        <View style={styles.section}>
          <Text style={styles.label}>Address</Text>
          <Text style={styles.text}>
            555 Coffee Lane{'\n'}
            Near Kakkanad, Kochi
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Contact</Text>
          <Text style={styles.text}>
            <Link href="tel:5555555555" style={styles.link}>555-555-5555</Link>
          </Text>
          <Text style={styles.text}>
            <Link href="sms:5555555555" style={styles.link}>Send a text</Link>
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Hours</Text>
          <Text style={styles.text}>6am – 4pm daily</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

function createStyles(theme, colorScheme) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    imgContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 40,
      backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#f5f5f5',
    },
    content: {
      padding: 24,
    },
    title: {
      color: theme.text,
      fontSize: 28,
      fontWeight: '300',
      marginBottom: 32,
      letterSpacing: 0.5,
    },
    section: {
      marginBottom: 24,
    },
    label: {
      color: theme.text,
      fontSize: 14,
      fontWeight: '500',
      marginBottom: 8,
      opacity: 0.6,
      textTransform: 'uppercase',
      letterSpacing: 1,
    },
    text: {
      color: theme.text,
      fontSize: 16,
      lineHeight: 24,
      marginBottom: 8,
    },
    link: {
      color: colorScheme === 'dark' ? 'papayawhip' : '#333',
      textDecorationLine: 'underline',
    }
  });
}