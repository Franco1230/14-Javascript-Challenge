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
    filteredData = tableData
    // Select the input element and get the raw HTML node
    var inputDate = d3.select("#datetime");
    var dateValue = inputDate.property("value");
    var filteredData = filteredData.filter(function(event) {
        if(dateValue !== null && dateValue !== '') {
            return event.datetime === dateValue;};
        return event.datetime;
    });
  
    var inputCity = d3.select("#city");
    var cityValue = inputCity.property("value").toLowerCase();
    var filteredData = filteredData.toLowerCase().filter(function(event) {
        if(cityValue !== null && cityValue !== '') {
            return event.city === cityValue;};
        return event.city;
    });
            
    var inputState = d3.select("#state");
    var stateValue = inputState.property("value").toLowerCase();
    var filteredData = filteredData.toLowerCase().filter(function(event) {
        if(stateValue !== null && stateValue !== '') {
            return event.state === stateValue;};
        return event.state;
    });
            
    var inputCountry = d3.select("#country");
    var countryValue = inputCountry.property("value").toLowerCase();
    var filteredData = filteredData.toLowerCase().filter(function(event) {
        if(countryValue !== null && countryValue !== '') {
            return event.country === countryValue;};
        return event.country;
    });   
   
    var inputShape = d3.select("#shape");
    var shapeValue = inputShape.property("value").toLowerCase();
    var filteredData = filteredData.toLowerCase().filter(function(event) {
        if(shapeValue !== null && shapeValue !== '') {
            return event.shape === shapeValue;};
        return event.shape;
    });
    
    // Write filtered table to html
    fullTable(filteredData);
});
  
// Clear filters and show full table
function clearFilter(element) {
    element.form.reset();
    fullTable(tableData);
};