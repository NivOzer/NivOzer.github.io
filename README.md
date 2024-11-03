GIS Project: Analysis of Correlation between Population and Tech Companies in Israel

![Description of Image](https://i.postimg.cc/V6rhZZrp/Capture.jpg)


Project Overview
This project analyzes the spatial distribution of population and tech companies across different regions in Israel. It allows users to filter data based on specific criteria, visualize demographic and tech company data on interactive maps, and explore correlations between population density and tech company presence.

Features
City and Population Filters: Select a specific city and adjust population thresholds to filter the displayed data.
Age Group Selection: Visualize data for specific age groups.
Interactive Maps: Switch between different views:
Demographic Map: Displays population distribution.
Tech Companies Map: Shows tech company locations.
Combined Map: Overlays population and tech company data.
Heatmap: Visualizes population density and tech company clustering.
Data Visualizations: Charts provide additional insights:
Population distribution by district.
Tech companies distribution by district.
Top 10 cities by number of tech companies.
Scatter plot comparing population to tech company count.
Usage
Select a city and set the desired population threshold.
Choose an age group for demographic analysis.
Switch between different map views and observe the distribution patterns.
Analyze the charts for district-wise and city-wise trends in population and tech companies.
Showcase Video

For a detailed walkthrough of the project, watch the showcase video.
https://youtu.be/masTRQvD8Mk

Technology Stack
Frontend: React, Leaflet (for interactive maps)
Backend: Node.js, Express
Database: MongoDB (for storing population and tech company data)
GIS Tools: QGIS for initial data processing and map layer creation
Project Structure
/src: Contains the main code for the frontend and backend.
/public: Stores static assets, including map layers and icons.
/data: Raw data files and scripts for data cleaning and processing.
Installation
Clone this repository.
Install dependencies:
bash
Copy code
npm install
Start the server:
bash
Copy code
npm start
Access the application at your local host http://localhost:3000.
Acknowledgments
