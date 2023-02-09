import { Button, Icon } from '@rneui/themed'
import { StyleSheet, Text, View, Linking } from 'react-native'

const Contactus = () => {
    return (
        <View style={styles.contactContainer}>
            <View style={styles.infoContainer}>
                <Text style={styles.headerText}>CONTACT</Text>
                <Text style={styles.nameText}>VIJAY M</Text>
                <View style={{ width: '90%' }}>
                    <Button onPress={() => Linking.openURL(`tel:${7397130827}`)}
                        title="Call"
                        iconContainerStyle={{ marginRight: 10 }}
                        titleStyle={{ fontWeight: '700', fontSize: 16, letterSpacing: 1 }}
                        buttonStyle={{
                            backgroundColor: '#3270e3',
                            borderColor: 'transparent',
                            borderWidth: 0,
                            borderRadius: 30,
                        }}
                        containerStyle={{
                            width: "100%",
                            marginTop: 20,
                        }}
                    />
                    <Button onPress={() => Linking.openURL(`https://wa.me/+917397130827`)}
                        title="Whatsapp"
                        iconContainerStyle={{ marginRight: 10 }}
                        titleStyle={{ fontWeight: '700', fontSize: 16, letterSpacing: 1 }}
                        buttonStyle={{
                            backgroundColor: 'green',
                            borderColor: 'transparent',
                            borderWidth: 0,
                            borderRadius: 30,
                        }}
                        containerStyle={{
                            width: "100%",
                            marginVertical: 7,
                        }}
                    />
                </View>
            </View>
        </View>
    )
}

export default Contactus

const styles = StyleSheet.create({
    contactContainer: {
        width: '80%',
        height: 220,
        borderRadius: 10,
        marginTop: -10,
    },
    infoContainer: {
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    title: {
        fontSize: 20,
    },
    name: {
        marginTop: 20,
        fontSize: 30
    },
    headerText: {
        color: 'navy',
        fontSize: 17,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        fontWeight: 'bold',
    },
    nameText: {
        color: '#000',
        fontSize: 30,
        marginTop: 15,
        fontWeight: 'bold',
    },
    btn: {
        marginTop: 10
    },
    btnText: {
        fontSize: 18
    }
})
