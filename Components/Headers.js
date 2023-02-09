import { StyleSheet, Text, View } from 'react-native'
import { Icon } from '@rneui/base'

export default Headers = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>VIP AC CARE</Text>
            <Text style={styles.headerSubTxt}>Sales & Service</Text>
            <View style={styles.location}>
                <Text style={{ marginLeft: 3, color: 'navy' }}>Salem</Text>
            </View>
            <View style={styles.featuresTxt}>
                <Text style={styles.featSubTxt}>Air Conditioner | Refrigerator</Text>
                <Text style={styles.featSubTxt}>Washing Machine | Water heater</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 20
    },
    headerText: {
        color: 'navy',
        fontSize: 42,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        fontWeight: 'bold',
    },
    headerSubTxt: {
        fontSize: 22,
        paddingTop: 5,
        color: 'navy',
        fontWeight: '600'
    },
    featuresTxt: {
        paddingTop: 15,
        alignItems: 'center',
    },
    featSubTxt: {
        color: "red",
        fontSize: 15,
        letterSpacing: 1,
    },
    location: {
        marginTop: 5,
        alignItems: 'center',
        flexDirection: 'row',
        fontSize: 16,
    }
})