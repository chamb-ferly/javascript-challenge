// from data.js
var tableData = data;
// console.log(tableData);

// append data into table body 
var tbody = d3.select("tbody");

tableData.forEach((ufoSight) => {
    var row = tbody.append("tr");
    Object.entries(ufoSight).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// filter datetime button
var button = d3.select("#filter-btn");

button.on("click", function() {
    var date = d3.select("#datetime").property("value");
    filtered = tableData
    if (date) {
        filtered = filtered.filter((row) => row.datetime === date);
    };
        console.log(filtered);
        // clear tbody rows
        tbody.html("");

        filtered.forEach((ufoSight) => {
            var row = tbody.append("tr");
            Object.entries(ufoSight).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            });
        });
    });

    // tableData.forEach((filtered) => {
    //     var row = tbody.append("tr");
    //     Object.entries(filtered).forEach(([key, value]) => {
    //         var cell = row.append("td");
    //         cell.text(value);
    //     });
    // });
