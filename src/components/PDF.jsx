import { Document, PDFViewer, Page, StyleSheet, Text, View } from '@react-pdf/renderer'

const styles = new StyleSheet.create({
    section: {
        margin: "0px 40px 0px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    heading: {
        fontSize: "16px",
        letterSpacing: "3px",
        textTransform: "uppercase",
        marginTop: "15vh",
        fontFamily: "Times-Roman"
    },
    content: {
        textAlign: "justify",
        fontSize: "13px",
        letterSpacing: "3px",
        margin: "30px 10px 0px 10px",
        lineHeight: "2",
    },
    footer: {
        margin: "20px 40px 0px 40px",

    },
    signature: {
        fontSize: "11px",
        letterSpacing: "3px",
        lineHeight: "2",
        margin: "0px 10px",

    }
})



function PDF() {
    return (
        <>
            <PDFViewer style={{ width: "100%", height: "101vh" }}>
                <Document>
                    <Page size="A4" styles={styles.pages}>
                        <View style={styles.section}>
                            <Text style={styles.heading}>
                                Declaration Statement
                            </Text>
                            <Text style={styles.content}>
                                This is to certify that [Student Full Name], with admission number [Admission Number], has successfully completed driver education at [Driving School Name].
                            </Text>
                        </View>
                        <View style={styles.footer}>
                            <Text style={styles.signature}>
                                12-06-2024
                            </Text>
                            <Text style={styles.signature}>
                                Cherthala
                            </Text>
                        </View>
                    </Page>
                </Document >
            </PDFViewer>
        </>
    )
}

export default PDF;

