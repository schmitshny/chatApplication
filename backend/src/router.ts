import express from 'express';
import fs from 'fs';
import path from 'path';

export default function() {
  const router = express.Router();

  fs.readdirSync(path.join(__dirname, 'routes')).forEach(file => {
    const route = require(`./routes/${file}`);
    router.use(route(express.Router()));
  });

  return router;
}
