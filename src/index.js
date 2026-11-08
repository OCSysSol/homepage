import { onRequestPost, onRequestOptions } from "../functions/api/contact.js";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // API route for contact form
    if (url.pathname === "/api/contact" || url.pathname === "/api/contact/") {
      const context = { request, env, ctx, params: {} };
      if (request.method === "POST") {
        return onRequestPost(context);
      }
      if (request.method === "OPTIONS") {
        return onRequestOptions(context);
      }
      return new Response("Method not allowed", { status: 405 });
    }

    // Serve static assets from public/
    return env.ASSETS.fetch(request);
  }
};
