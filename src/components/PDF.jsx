import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer'


const styles = new StyleSheet.create({
    section: {
        margin: "30px 30px",
        display: "flex",
        alignItems: "center",
    },
    heading: {
        fontSize: "12px",
        fontWeight: "900",
        textTransform: "uppercase",
        marginBottom: "10px"
    },
    subheading: {
        marginTop: "20px",
        textTransform: 'uppercase',
        fontSize: "12px"
    }
})

function PDF() {
    return (
        <>
            <Document>
                <Page size="A4" styles={styles.pages}>
                    <View style={styles.section}>
                        <Text>
                            hello
                        </Text>
                    </View>
                </Page>
            </Document >
        </>
    )
}

export default PDF;