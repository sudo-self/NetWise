import { defineEventHandler, readBody, sendError, createError } from 'h3';

export default defineEventHandler(async (event) => {
  if (event.req.method !== 'POST') {
    return sendError(event, createError({ statusCode: 405, statusMessage: 'Method Not Allowed' }));
  }

  const { ip } = await readBody(event);
  if (!ip) {
    return sendError(event, createError({ statusCode: 400, statusMessage: 'IP address is required' }));
  }

  const apiKey = process.env.VPN_LOOKUP_API_KEY;
  if (!apiKey) {
    return sendError(event, createError({ statusCode: 500, statusMessage: 'API key is not configured' }));
  }

  const url = `https://api.vpnlookup.com/v1/${ip}?apiKey=${apiKey}`;

  try {
    const response = await $fetch(url);
   
    return {
      ip: response.ip,
      isp: response.isp,
      country: response.country,
      city: response.city,
      vpn: response.vpnStatus === 'yes',
    };
  } catch (error) {
    const statusCode = error.response?.status || 500;
    const statusMessage = error.response?.data?.message || error.message || 'Unknown error occurred while fetching VPN details';
    return sendError(event, createError({ statusCode, statusMessage }));
  }
});



