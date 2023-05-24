import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'nhackblog',
  apiKey: process.env.API_KEY,
});
