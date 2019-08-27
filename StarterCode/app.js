// setup
var data = data;
var tbody = d3.select("tbody");
var filter_button = d3.select("#filter-btn");
var filter_bar = d3.select("#datetime");

filter_button.on("click", function (){ //creates filter button on click

    d3.event.preventDefault();

    tbody.html("");

    var input = filter_bar.property("value");
    var filtered_data = data.filter(ufo => ufo.datetime === input);

    reset_data(filtered_data); //allows data to be reset after filtering so only shows filter

});

function reset_data(filtered_data){
    filtered_data.forEach(table);
};

function table(data){
    
    var tr = tbody.append("tr");
    
    Object.entries(data).forEach(([key, value]) => {
        tr.append("td").text(value);
    })
};

data.forEach(table);



