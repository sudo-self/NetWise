import { d as defineEventHandler, r as readBody } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const ping = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { url } = body;
  if (!url) {
    return {
      statusCode: 400,
      message: "URL is required"
    };
  }
  try {
    const response = await fetch("https://api.siterelic.com/ping", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.SITE_RELIC_API_KEY
        // Use the environment variable
      },
      body: JSON.stringify({
        url
      })
    });
    if (!response.ok) {
      throw new Error("Failed to ping the URL");
    }
    const data = await response.json();
    return {
      statusCode: 200,
      data: data.data
    };
  } catch (error) {
    return {
      statusCode: 500,
      message: error.message
    };
  }
});

export { ping as default };
//# sourceMappingURL=ping.mjs.map
