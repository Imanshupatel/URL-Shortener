import { createReadStream, createWriteStream, read } from "fs";
import path from "path";

const inputFilePath = path.join(import.meta.dirname, "input.txt");
const outputFilePath = path.join(import.meta.dirname, "output.txt");

const readableStream = createReadStream(inputFilePath, { encoding: "utf-8", highWaterMark: 16 });

const writableStream = createWriteStream(outputFilePath);

// Listen for data chunks
readableStream.on("data", (chunk) => {
    console.log("Buffer (chunk):", Buffer.from(chunk)); // convert the chunk to a Buffer 
    console.log("Received chunk:", chunk); // Logs each 16-byte chunk 
    writableStream.write(chunk); // write each chunk to output file
});

// Handle stream end
readableStream.on("end", () => {
    console.log("File read completed.");
    writableStream.end();
});

// readableStream.pipe(writableStream);

// Handle errors
readableStream.on("error", (err) => console.error("Error:", err));
writableStream.on("error", (err) => console.error("Error:", err));