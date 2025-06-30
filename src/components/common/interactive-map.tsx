"use client";

import { APIProvider, Map, Marker, InfoWindow } from "@vis.gl/react-google-maps";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

// The API key is read from the environment variables.
// In Next.js, variables prefixed with NEXT_PUBLIC_ are exposed to the browser.
const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

// Peshawar coordinates (approximate)
const projectLocation = { lat: 34.0151, lng: 71.5249 };

export default function InteractiveMap() {
  const [showInfoWindow, setShowInfoWindow] = useState(true);

  if (!GOOGLE_MAPS_API_KEY) {
    return (
      <div className="flex items-center justify-center h-full bg-muted rounded-lg p-4 text-center">
        <div className="space-y-2">
          <MapPin className="h-12 w-12 text-destructive mx-auto" />
          <p className="font-semibold text-destructive">Google Maps API Key is missing.</p>
          <p className="text-sm text-muted-foreground">
            Please set the NEXT_PUBLIC_GOOGLE_MAPS_API_KEY environment variable to enable the map.
          </p>
        </div>
      </div>
    );
  }

  return (
    <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
      <div style={{ height: "100%", width: "100%", minHeight: "400px", borderRadius: "0.75rem", overflow: "hidden" }}>
        <Map
          defaultCenter={projectLocation}
          defaultZoom={13}
          mapId="nobleHealthServicesMap" // Optional: for Cloud-based Maps Styling
          gestureHandling={'greedy'}
          disableDefaultUI={false}
          className="rounded-xl"
        >
          <Marker 
            position={projectLocation} 
            onClick={() => setShowInfoWindow(!showInfoWindow)}
          />
          {showInfoWindow && (
            <InfoWindow 
              position={projectLocation}
              onCloseClick={() => setShowInfoWindow(false)}
            >
              <Card className="border-none shadow-none p-0 m-0 max-w-xs">
                <CardHeader className="p-2">
                  <CardTitle className="text-base font-headline text-primary">Noble Health Services Project Site</CardTitle>
                </CardHeader>
                <CardContent className="p-2 text-xs text-muted-foreground">
                  <p>Strategically located on Ring Road, Peshawar.</p>
                  <p>Future site of a world-class university hospital.</p>
                </CardContent>
              </Card>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}
