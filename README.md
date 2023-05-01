# Belly-button-challenge 
### Background
In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site., which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.


### Instructions
Complete the following steps:

1. Use the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

### Bar Chart
2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

- Use sample_values as the values for the bar chart.

- Use otu_ids as the labels for the bar chart.

- Use otu_labels as the hovertext for the chart.

<img width="311" alt="Screenshot 2023-05-01 at 5 16 47 PM" src="https://user-images.githubusercontent.com/121995835/235540105-155a63f9-1d51-434b-8a21-fdbf60096522.png">

### Bubble Chart
3. Create a bubble chart that displays each sample.

- Use otu_ids for the x values.

- Use sample_values for the y values.

- Use sample_values for the marker size.

- Use otu_ids for the marker colors.

- Use otu_labels for the text values.


4. Display the sample metadata, i.e., an individual's demographic information.

5. Display each key-value pair from the metadata JSON object somewhere on the page.

