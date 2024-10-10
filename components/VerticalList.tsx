import {
	View,
	Text,
	StyleSheet,
	FlatList,
	Dimensions,
	Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Item } from "@/constants/mockData";
import ImageColors from "react-native-image-colors";
import AnimatedCard from "./AnimatedCard";
import Animated, {
	useAnimatedScrollHandler,
	useSharedValue,
} from "react-native-reanimated";

type VerticlListProps = {
	data: Item[];
};

type AnimatedCardProps = {
	item: Item;
	index: number;
};
const { height } = Dimensions.get("screen");
const spacing = 8;
const itemSize = height * 0.72;
const itemFullSize = itemSize + spacing * 2;

export default function VerticalList({ data }: VerticlListProps) {
	const scrollY = useSharedValue(0);

	const onScroll = useAnimatedScrollHandler((e) => {
		scrollY.value = e.contentOffset.y / itemFullSize;
	});
	return (
		<Animated.FlatList
			data={data}
			renderItem={({ item, index }) => (
				<AnimatedCard item={item} index={index} scrollY={scrollY} />
			)}
			contentContainerStyle={{
				paddingHorizontal: spacing * 3,
				gap: spacing * 2,
				paddingVertical: (height - itemFullSize) / 2,
			}}
			snapToInterval={itemSize + spacing * 2}
			decelerationRate={"fast"}
			onScroll={onScroll}
			showsVerticalScrollIndicator={false}
			scrollEventThrottle={16} // 1000/60frames
		/>
	);
}
