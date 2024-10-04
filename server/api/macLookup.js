// server/api/macLookup.js
import { defineEventHandler, getQuery, sendError } from 'h3';

export default defineEventHandler(async (event) => {
  const { mac_address } = getQuery(event);

  if (!mac_address) {
    return sendError(event, createError({ statusCode: 400, statusMessage: 'MAC address is required' }));
  }

  const apiKey = process.env.MAC_LOOKUP_API_KEY;

  const url = `https://api.maclookup.app/v2/macs/${mac_address}?apiKey=${apiKey}`;

  try {
    const response = await $fetch(url);

    return response;
  } catch (error) {
    return sendError(event, createError({ statusCode: error.response?.status || 500, statusMessage: error.message }));
  }
});




