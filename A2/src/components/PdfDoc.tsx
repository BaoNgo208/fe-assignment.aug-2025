import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { z } from "zod";
import { step1Schema, step2Schema, step3Schema } from "../App";

export type FormData = z.infer<typeof step1Schema> &
  z.infer<typeof step2Schema> &
  z.infer<typeof step3Schema>;

const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 12, fontFamily: "Helvetica" },
  h1: { fontSize: 18, marginBottom: 10, fontWeight: "bold" },
  section: { marginBottom: 12 },
  label: { fontSize: 10, color: "#555" },
  value: { marginBottom: 6 },
  divider: { borderBottom: "1px solid #ddd", marginVertical: 10 },
});

interface PdfDocProps {
  data: Partial<FormData>;
}

const PdfDoc: React.FC<PdfDocProps> = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.h1}>Multi-Step Form — Live Preview</Text>

      <View style={styles.section}>
        <Text style={styles.label}>Full name</Text>
        <Text style={styles.value}>{data.fullName || "—"}</Text>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{data.email || "—"}</Text>
        <Text style={styles.label}>Phone</Text>
        <Text style={styles.value}>{data.phone || "—"}</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.section}>
        <Text style={styles.label}>Address</Text>
        <Text style={styles.value}>{data.address1 || "—"}</Text>
        <Text style={styles.label}>City</Text>
        <Text style={styles.value}>{data.city || "—"}</Text>
        <Text style={styles.label}>Country</Text>
        <Text style={styles.value}>{data.country || "—"}</Text>
        <Text style={styles.label}>Postal Code</Text>
        <Text style={styles.value}>{data.postal || "—"}</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.section}>
        <Text style={styles.label}>Notes</Text>
        <Text style={styles.value}>{data.notes || "—"}</Text>
      </View>
    </Page>
  </Document>
);

export default PdfDoc;
