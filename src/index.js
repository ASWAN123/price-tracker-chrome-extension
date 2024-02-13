import { getdata } from "./firebase";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";





async function fetchDataAndOpenTab() {
    try {
        const data = await getdata();
        if (data.url && data.iconStatus === "on") {
            chrome.tabs.create({ url: data.url });
        }else{
          document.body.style.display = "block";
          document.body.style.height = "600px";
          document.body.style.width = "400px";
          document.body.style.backgroundColor = "#121212"
          const root = document.createElement("div");
          root.className = "container";
          document.body.appendChild(root);
          const rootDiv = ReactDOM.createRoot(root);
          rootDiv.render(
              <React.StrictMode>
                  <App />
              </React.StrictMode>
          );
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchDataAndOpenTab(); // Call the function when the component mounts