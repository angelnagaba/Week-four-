//define the news sources as an object
var https = require('https'); //we import http to enable node to transfer data over http

console.log("1. al-jazeera-english\n2. bbc-news\n3. cnn\n4. abc-news\n");
//we create an arrow function that has an object showing news sources
const picksources = function() {

    const news_sources = {
        1: "al-jazeera-english",
        2: "bbc-news",
        3: "cnn",
        4: "abc-news"
    };
    //Getting input from the user
    //get process.stdin as the standard input object
    var standard_input = process.stdin;

    process.stdin.setEncoding('utf-8');

    console.log("Please enter a number of one of the news sources:\n");

    let user_input = "";
    standard_input.on("data", function(data) {
        const sources = [1, 2, 3, 4];
        const num_data = Number(data); //changing strings to int

        if (data == "exit\n") {
            //program exits
            console.log("user input incomplete, program exit.");
            process.exit();
        } else if (!sources.includes(num_data)) {
            // Program exit.
            console.log("Please input a valid news source");
        } else {

            const url = `https://newsapi.org/v2/top-headlines?sources=${news_sources[num_data]}&pageSize=10&apiKey=68b91b62e7304d5ba7c49beb0ee8d096`;

            https
                .get(url, response => {
                    let data = "";

                    // Handle response data chunks
                    response.on("data", chunk => {
                        data += chunk;
                    });

                    // handle response data
                    response.on("end", () => {
                        res = JSON.parse(data);
                        console.log("Res", res);
                    });
                })
                .on("error", err => {
                    error = err;
                    console.log("Error", err);
                });
        }
    });
};
picksources();