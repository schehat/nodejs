const fs = require("fs");

// need to state a callback function
fs.readdir("./", function(err, files) {
    if (err) console.log("Error", err);
    else console.log("Result", files);
});