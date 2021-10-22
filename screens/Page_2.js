import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const Page_2 = () => {
	return (
		<View style={styles.container}>
			<Text>This is Page 2</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
export default Page_2;
