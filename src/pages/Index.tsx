import { useEffect } from "react";

// The landing page is a standalone HTML file served from /public.
const Index = () => {
  useEffect(() => {
    window.location.replace("/trailhead-landing.html");
  }, []);

  return null;
};

export default Index;
