// src/components/GoogleAnalyticsTracker.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function GoogleAnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    // Pastikan gtag sudah ter-load
    if (typeof window.gtag !== "undefined") {
      window.gtag("config", "G-QP3HWQ0P80", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
}
