import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { flightNumber } = await req.json();

    if (!flightNumber || typeof flightNumber !== "string") {
      return new Response(
        JSON.stringify({ error: "Flight number is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const apiKey = Deno.env.get("AVIATIONSTACK_API_KEY");
    if (!apiKey) {
      throw new Error("AVIATIONSTACK_API_KEY is not configured");
    }

    // AviationStack free tier only supports HTTP
    const url = `http://api.aviationstack.com/v1/flights?access_key=${apiKey}&flight_iata=${flightNumber.trim()}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`AviationStack API error [${response.status}]`);
    }

    const data = await response.json();

    if (data.error) {
      return new Response(
        JSON.stringify({ error: data.error.message || "API error" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const flights = data.data || [];
    if (flights.length === 0) {
      return new Response(
        JSON.stringify({ error: "No flight found for this number" }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const flight = flights[0];

    const result = {
      flightNumber: flight.flight?.iata || flightNumber,
      airline: flight.airline?.name || "Unknown",
      status: flight.flight_status || "unknown",
      departure: {
        airport: flight.departure?.airport || "Unknown",
        iata: flight.departure?.iata || "",
        scheduled: flight.departure?.scheduled || null,
        estimated: flight.departure?.estimated || null,
        actual: flight.departure?.actual || null,
        gate: flight.departure?.gate || null,
        terminal: flight.departure?.terminal || null,
      },
      arrival: {
        airport: flight.arrival?.airport || "Unknown",
        iata: flight.arrival?.iata || "",
        scheduled: flight.arrival?.scheduled || null,
        estimated: flight.arrival?.estimated || null,
        actual: flight.arrival?.actual || null,
        gate: flight.arrival?.gate || null,
        terminal: flight.arrival?.terminal || null,
      },
    };

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error checking flight status:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
