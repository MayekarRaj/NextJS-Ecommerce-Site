import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'bzke85d0',
    dataset: 'production',
    apiVersion: '2023-12-22',
    useCdn: '',
    token: process.env.NEXT_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);