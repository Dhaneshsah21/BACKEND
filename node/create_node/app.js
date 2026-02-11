// Import core modules
const fs = require("fs");
const path = require("path");


// 1. CREATE & WRITE FILE
fs.writeFile("taskFile.txt", "This is initial content", (err) => {
  if (err) return console.log("Error creating file");

  console.log("File created & written");

  // 2. UPDATE FILE (APPEND)

  fs.appendFile("taskFile.txt", "\nThis content is updated", (err) => {
    if (err) return console.log("Error updating file");

    console.log("File updated");

    // 3. READ FILE 
    fs.readFile("taskFile.txt", "utf8", (err, data) => {
      if (err) return console.log("Error reading file");

      console.log("File content:");
      console.log(data);

      // 4. PATH OPERATIONS
      
      console.log("Absolute Path:", path.resolve("taskFile.txt"));
      console.log("File Extension:", path.extname("taskFile.txt"));
      console.log("Current Directory:", __dirname);

      // 5. DELETE FILE
    
      fs.unlink("taskFile.txt", (err) => {
        if (err) return console.log("Error deleting file");

        console.log("File deleted successfully");
      });
    });
  });
});
