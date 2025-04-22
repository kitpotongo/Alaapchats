const express = require('express');
   const path = require('path');
   const app = express();
   const PORT = process.env.PORT || 3000;

   // Host all files in the 'public' folder
   app.use(express.static(path.join(__dirname, 'public')));

   // All page requests load index.html
   app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname, 'public', 'index.html'));
   });

   // Start the server
   app.listen(PORT, () => console.log(`AlaapChats running on port ${PORT}`));
