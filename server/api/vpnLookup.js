import { defineEventHandler, readBody, sendError } from 'h3';

export default defineEventHandler(async (event) => {
  const { ip } = await readBody(event);

  if (!ip) {
    return sendError(event, createError({ statusCode: 400, statusMessage: 'IP address is required' }));
  }

  const apiKey = process.env.VPN_LOOKUP_API_KEY;
  const url = `https://api.vpnlookup.com/v1/${ip}?apiKey=${apiKey}`;

  try {
    const response = await $fetch(url);
    return response;
  } catch (error) {
    return sendError(event, createError({ statusCode: error.response?.status || 500, statusMessage: error.message }));
  }
});

