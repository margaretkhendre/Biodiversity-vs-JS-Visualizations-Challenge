// function that populates  metadata
function demographicInfo(sample)
{
    //console.log(sample);

    // use d3.json to get data
    d3.json("samples.json").then((data) => {
        // get all metadata
        let metaData = data.metadata;
        //console.log(metaData);

        // filter based on value of sample- returns 1 result in array 
        let result = metaData.filter(sampleResult => sampleResult.id == sample);
        //console.log(result);

        // access index 0 for array
        let resultData = result[0];
        //console.log(resultData);

        // clearout the metadata and set html equal to blank text
        d3.select("#sample-metadata").html("");

        // use object.entries to get the value key pairs
        Object.entries(resultData).forEach(([key, value])=>{
            // add to the sample data / dempgraphics section
            d3.select("#sample-metadata")
            .append("h5").text(`${key}: ${value}`);
        });
    });
}

// function that builds the bar chart
function buildBarChart(sample)
{
    //console.log(sample);
    //let data = d3.json("samples.json");
    //console.log(data);

    d3.json("samples.json").then((data) => {
        // get all samples
        let sampleData = data.samples;
        //console.log(sampleData);

        
        // filter based on value of sample- returns 1 result in array 
        let result = sampleData.filter(sampleResult => sampleResult.id == sample);
        //console.log(result);
    
        // access index 0 for array
        let resultData = result[0];
        //console.log(resultData);


        // get otu_ids
        let otu_ids = resultData.otu_ids;
        let otu_labels = resultData.otu_labels;
        let sample_values = resultData.sample_values;
        //console.log(otu_ids);
        //console.log(otu_labels);
        //console.log(sample_values);

        // build bar chart
        // yticks
        let yticks = otu_ids.slice(0,10).map(id => `OTU ${id}`);
        //console.log(yticks);
        // x values 
        let xvalues = sample_values.slice(0, 10);
        //console.log(xvalues);
        // labels
        let textLables = otu_labels.slice(0,10);
        //console.log(textLables);

        let barChart = {
            y: yticks.reverse(),
            x: xvalues.reverse(),
            text: textLables.reverse(),
            type: "bar",
            orientation: "h" // horizontal
        }

        let layout = {
            title: "Top 10 Belly Button Bacteria"
        };

        Plotly.newPlot("bar", [barChart], layout);

    });
}

// function that builds bubble chart
function buildBubbleChart(sample)
{
    d3.json("samples.json").then((data) => {
        // get all samples
        let sampleData = data.samples;
        //console.log(sampleData);

        
        // filter based on value of sample- returns 1 result in array 
        let result = sampleData.filter(sampleResult => sampleResult.id == sample);
        // access index 0 for array
        let resultData = result[0];

        // get otu_ids
        let otu_ids = resultData.otu_ids;
        let otu_labels = resultData.otu_labels;
        let sample_values = resultData.sample_values;
      
        // build the bubble chart
        let bubbleChart = {
            y: sample_values,
            x: otu_ids,
            text: otu_labels,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: "Earth"
            }
        }

        let layout = {
            title: "Bacteria Cultures per Sample",
            hovermode: "closest",
            xaxis: {title: "OTU ID"}
        };

        Plotly.newPlot("bubble", [bubbleChart], layout);
    });
}

// function that initializes the dashboard
function initialize()
{
    //let data = d3.json("samples.json");
    //console.log(data);

    // access the dropdown selector from the index.html file 
    var select = d3.select("#selDataset");

    // use d3.json to get data
    d3.json("samples.json").then((data) => {
        let sampleNames = data.names; // made arrary of just names
        //console.log(sampleNames);

        // use a foreach to create options for the samples in the selector
        sampleNames.forEach((sample) => {
            select.append("option")
                .text(sample)
                .property("value", sample);
        });
        // when initialized, pass in the information for the first sample
        let samp1 = sampleNames[0];

        //call the function to build the metadata
        demographicInfo(samp1);
        // call function to build the bar chart
        buildBarChart(samp1);
    });


}

// function that updates the dashboard
function optionChanged(item)
{
    // call the update to the metadata
    demographicInfo(item);
    // call function to build bar chart
    buildBarChart(item);
    // call function to build bubble chart
    buildBubbleChart(item);
}

// call the initialize function
initialize();

