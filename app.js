import express from 'express';
import { shortenedRoutes } from './routes/shortener.routes.js'; 

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

// express router
// app.use(router);
app.use(shortenedRoutes);

app.listen(PORT, () => {
    console.log(`Server is at http://localhost:${PORT}`);
}); 