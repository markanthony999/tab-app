import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const Home = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>This is Home</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,

		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 24,
	},
});
export default Home;
