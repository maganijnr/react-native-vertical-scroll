import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";

import VerticalList from "@/components/VerticalList";
import data from "@/constants/mockData";

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar barStyle={"light-content"} />
			<VerticalList data={data} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#111",
		justifyContent: "center",
	},
});
