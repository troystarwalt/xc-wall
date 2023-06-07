import artworks from '../images/artworks'
import { faker } from '@faker-js/faker';

// Add new Pieces here.
// Add an import under artworks/index.js to the new piece if it is an image that is being uploaded
// Pieces is a dataset of indeifudal pieces of art.
// Pieces are composed of:
// src: a url or a pointer toward an uploaded asset under images
// id: unique ID

export const Pieces = [
    {
        src: 'https://picsum.photos/200/300',
        id: 'file-1',
        alt: 'ALT Copy for Image #1',
        title: 'Image #1',
        artist: faker.name.fullName(),
        tag: ["elephant", "sky"],
        type: "photo"
    },
    {
        src: 'https://picsum.photos/200/301',
        id: 'file-2',
        alt: 'ALT Copy for Image #2',
        title: 'Image #2',
        artist: faker.name.fullName(),
        tag: ["elephant", "sky"],
        type: "photo"
    },
    {
        src: 'https://picsum.photos/300/300',
        id: 'file-3',
        alt: 'ALT Copy for Image #3',
        title: 'Image #3',
        artist: faker.name.fullName(),
        tag: ["elephant", "sky"],
        type: "photo"
    },
    {
        src: 'https://picsum.photos/200/303',
        id: 'file-4',
        alt: 'ALT Copy for Image #4',
        title: 'Image #4',
        artist: faker.name.fullName(),
        tag: ["elephant", "sky"],
        type: "photo"
    },
    {
        src: 'https://picsum.photos/200',
        id: 'file-5',
        alt: 'ALT Copy for Image #5',
        title: 'Image #5',
        artist: faker.name.fullName(),
        tag: ["elephant", "animal"],
        type: "photo"
    },
    {
        src: 'https://picsum.photos/200/600',
        id: 'file-6',
        alt: 'ALT Copy for Image #6',
        title: 'Image #6',
        artist: faker.name.fullName(),
        tag: ["elephant", "animal"],
        type: "photo"
    },
    {
        src: artworks.artwork7,
        id: 'file-7',
        alt: 'ALT Copy for Image #7',
        title: 'Image #7',
        artist: faker.name.fullName(),
        tag: ["elephant", "animal"],
        type: "photo"
    },
    {
        src: artworks.artwork1,
        id: 'file-8',
        alt: 'ALT Copy for Image #1',
        title: 'Image #1',
        artist: faker.name.fullName(),
        tag: ["elephant", "animal"],
        type: "photo"
    },
    {
        src: 'https://picsum.photos/600/300',
        id: 'file-9',
        alt: 'ALT Copy for Image #9',
        title: 'Image #9',
        artist: faker.name.fullName(),
        tag: ["wolf", "animal"],
        type: "photo"
    },
];

// All unique tags
export let tags = [...new Set(Pieces.flatMap(piece => piece.tag))];
