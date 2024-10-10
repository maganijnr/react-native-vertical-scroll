import { View, Text, Dimensions, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Item } from "@/constants/mockData";
import Animated, {
	interpolate,
	SharedValue,
	useAnimatedStyle,
} from "react-native-reanimated";

type AnimatedCardProps = {
	item: Item;
	index: number;
	scrollY: SharedValue<number>;
};
const { height } = Dimensions.get("screen");
const spacing = 8;
const itemSize = height * 0.72;
const itemFullSize = itemSize + spacing * 2;
export default function AnimatedCard({
	item,
	index,
	scrollY,
}: AnimatedCardProps) {
	const stylez = useAnimatedStyle(() => {
		return {
			opacity: interpolate(
				scrollY.value,
				[index - 1, index, index + 1],
				[0.2, 1, 0.2]
			),
			transform: [
				{
					scale: interpolate(
						scrollY.value,
						[index - 1, index, index + 1],
						[0.85, 1, 0.85]
					),
				},
			],
		};
	});
	return (
		<Animated.View
			style={[
				{
					// backgroundColor: "#fff",
					flex: 1,
					height: itemSize,
					padding: spacing * 2,
					borderRadius: 8,
					gap: spacing,
					position: "relative",
				},
				stylez,
			]}
		>
			<Image
				source={{ uri: item.image }}
				style={[StyleSheet.absoluteFillObject, { borderRadius: 12 }]}
				blurRadius={10}
			/>
			<Image
				source={{ uri: item.image }}
				style={{ flex: 1, height: itemSize * 0.4 }}
			/>
			<View style={{ gap: spacing }}>
				<Text style={{ fontSize: 22, fontWeight: "700", color: "#ddd" }}>
					{item.title}
				</Text>
				<Text
					numberOfLines={3}
					style={{ fontSize: 14, fontWeight: "500", color: "#ddd" }}
				>
					{item.description}
				</Text>
			</View>

			<View
				style={{
					flexDirection: "row",
					gap: spacing,
					alignItems: "center",
				}}
			>
				<Image
					source={{ uri: item.artist.avatar }}
					style={{ width: 24, aspectRatio: 1, borderRadius: 50 }}
				/>
				<Text style={{ fontWeight: "400", color: "#ddd" }}>
					{item.artist.name}
				</Text>
			</View>
		</Animated.View>
	);
}
