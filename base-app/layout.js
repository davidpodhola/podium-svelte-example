const express = require("express");
const app = express();

const Layout = require("@podium/layout");

// registering the layout
const layout = new Layout({
  name: "svelteLayout", // required
  pathname: "/", // required
});

// registering the Svelte micro frontends (podlets)
const sveltemessagepod = layout.client.register({
  name: "svelteMessagePod", // required
  uri: "http://localhost:7100/manifest.json", // required
});
const sveltereceivepod = layout.client.register({
  name: "svelteReceivePod", // required
  uri: "http://localhost:7101/manifest.json", // required
});
const layoutpod = layout.client.register({
  name: "layoutPod", // required
  uri: "http://localhost:7102/manifest.json", // required
});

app.use(layout.middleware());

// what should be returned when someone goes to the root URL
app.get("/", async (req, res) => {
  const incoming = res.locals.podium;

  //fetching the podlet data
  const content = await Promise.all([
    sveltemessagepod.fetch(incoming),
    sveltereceivepod.fetch(incoming),
    layoutpod.fetch(incoming),
  ]);

  //binding the podlet data to the layout
  incoming.podlets = content;
  incoming.view.title = "Home Page";

  const result = `<div>
    ${content[2]}
    ${content[0]}
    ${content[1]}
  </div>
  <script>
    console.log('*** main app loaded');
    
    setTimeout( () => { 
      var newParent = document.getElementById('svelte-message2');
      var oldParent = document.getElementById('svelte-message');
  
      while (oldParent.childNodes.length > 0) {
          newParent.appendChild(oldParent.childNodes[0]);
      }
      
      newParent = document.getElementById('svelte-receive2');
      oldParent = document.getElementById('svelte-receive');
  
      while (oldParent.childNodes.length > 0) {
          newParent.appendChild(oldParent.childNodes[0]);
      }
    }, 1000);
   
  </script>
  `;


  res.podiumSend(result);
});


app.listen(7000);
