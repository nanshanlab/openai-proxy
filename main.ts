import { serve } from "https://deno.land/std@0.182.0/http/server.ts";

const OPENAI_API_HOST = "api.openai.com";

serve(async (request) => {
  const url = new URL(request.url);

  if (url.pathname === "/") {
    return new Response("-");
  }

  url.host = OPENAI_API_HOST;
  return await fetch(url, request);
});