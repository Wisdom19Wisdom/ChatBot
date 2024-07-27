import { useEffect } from "react";
import Home from "./components/Home";

const App = () => {

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-id', '3447573624');
    script.id = 'chatling-embed-script';
    // script.setAttribute('data-display', 'fullscreen');
    script.type = 'text/javascript';
    script.src = 'https://chatling.ai/js/embed.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);


  return (
    <div>
      <Home/>
    </div>
  )
}

export default App
