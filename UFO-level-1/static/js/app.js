// from data.js
var tableData = data;

// YOUR CODE HERE!
function fullTable(tableData) {
    var tbody = d3.select(".table").select("tbody");
    tbody.html("");
    tableData.forEach((x) => {
        var row = tbody.append("tr");
        Object.entries(x).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
};

// Write table to html
fullTable(tableData);

// Listen for filter button
var filterButton = d3.select("#filter-btn");
filterButton.on("click", function() {
    // Select the input element and get the raw HTML node
    var inputDate = d3.select("#datetime");
    var inputValue = inputDate.property("value");
    var filteredData = tableData.filter(function(event) {
        if(inputValue !== null && inputValue !== '') {
            return event.datetime === inputValue;};
        return event.datetime;
    });
    // Write filtered table to html
    fullTable(filteredData);
});

// Clear filters and show full table
function clearFilter(element) {
    element.form.reset();
    fullTable(tableData);
};