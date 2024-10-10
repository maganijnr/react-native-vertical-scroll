import { faker } from "@faker-js/faker";

faker.seed(12);

const data = [...Array(12).keys()].map(() => ({
	key: faker.string.uuid(),
	title: faker.music.songName(),
	image: faker.image.urlLoremFlickr({
		width: 300,
		height: 300 * 1.4,
		category: "music",
	}),
	bg: faker.internet.color(),
	description: faker.lorem.sentence({ min: 1, max: 3 }),

	artist: {
		name: faker.music.artist(),
		avatar: faker.image.urlLoremFlickr(),
	},
}));
export type Item = (typeof data)[0];
export default data;
