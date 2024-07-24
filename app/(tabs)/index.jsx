import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function test() {
	return (
		<View className="flex-1 items-center justify-center bg-white">
			<Text>Home</Text>
			<Link href={"/Profile"} className="text-3xl text-blue-500">
				Go to profile
			</Link>
		</View>
	);
}
