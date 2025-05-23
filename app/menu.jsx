import { Appearance, StyleSheet, Platform, SafeAreaView, ScrollView, FlatList, View, Text, Image } from "react-native";
import { Colors } from "@/constants/Colors";
import { Menu_Items } from "@/constants/MenuItems";
import Menu_Images from "@/constants/MenuImages";

export default function MenuScreen() {

    const colorScheme = Appearance.getColorScheme();

    const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

    const styles = createStyles(theme, colorScheme);

    const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;

    const seperatorComponent = <View style={ styles.seperator} />

    const footerComponent = <Text style={{ color: theme.text }}>End of Menu</Text>


    return (
        <Container>
            <FlatList
                data={Menu_Items}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={ styles.contentContainer }
                ItemSeparatorComponent={seperatorComponent}
                ListFooterComponent={footerComponent}
                ListFooterComponentStyle={styles.footerComponent}
                ListEmptyComponent={<Text>No Items</Text>}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <View style={styles.menuTextRow}>
                            <Text style={[styles.menuItemTitle, styles.menuItemText]}>{item.title}</Text>
                            <Text style={styles.menuItemText}>{item.description}</Text>
                        </View>
                        <Image
                            source={Menu_Images[item.id - 1]}
                            style={styles.menuImage}
                        />
                    </View>
                )}
            />
        </Container>


    )
}

function createStyles(theme, colorScheme) {
    return StyleSheet.create ({
        contentContainer: {
            padding: 10,
            paddingBottom: 20,
            paddingHorizontal: 12,
            backgroundColor: theme.background,
        },
        seperator: {
            height: 1,
            width: "50%",
            backgroundColor: colorScheme === "dark" ? "papayawhip" : "black",
            marginVertical: 10,
            maxWidth: 300,
            marginHorizontal: "auto",
            marginBottom: 10,
        },
        footerComponent: {
            marginHorizontal: "auto",
        },
        row: {
            flexDirection: "row",
            width: "100%",
            maxWidth: 600,
            height: 100,
            marginBottom: 10,
            borderStyle: "solid",
            borderColor: colorScheme === "dark" ? "papayawhip" : "black",
            borderWidth: 1,
            borderRadius: 20,
            overflow: "hidden",
            marginHorizontal: "auto",
        },
        menuTextRow: {
            width: "65%",
            paddingLeft: 10,
            paddingRight: 5,
            paddingTop: 10,
            flexGrow: 1,
        },
        menuItemTitle: {
            fontSize: 18,
            textDecorationLine: "underline",
        },
        menuItemText: {
            color: theme.text,
            
        },
        menuImage: {
            width: 100,
            height: 100,
        },
    })
}
