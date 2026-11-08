import { handleContact, handleOptions } from "./api/contact.js";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // API route for contact form
    if (url.pathname === "/api/contact" || url.pathname === "/api/contact/") {
      if (request.method === "POST") {
        return handleContact(request, env);
      }
      if (request.method === "OPTIONS") {
        return handleOptions();
      }
      return new Response("Method not allowed", { status: 405 });
    }

    // Serve static assets from public/ directory
    return env.ASSETS.fetch(request);
  }
};
