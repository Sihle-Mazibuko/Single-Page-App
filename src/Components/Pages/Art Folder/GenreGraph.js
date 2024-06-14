import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import "./Graph.css";

const Graph = ({ data, setSelectedGenre }) => {
  const svgRef = useRef(); // Reference to SVG element

  useEffect(() => {
    if (!data || data.length === 0) return; // Return if data is empty or not yet loaded

    // Margins and dimensions for the graph
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Select SVG element using D3 and set width and height
    const svg = d3
      .select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Function to generate random heights for bars
    const generateRandomHeights = (numBars, maxHeight) => {
      const heights = [];
      for (let i = 0; i < numBars; i++) {
        heights.push(Math.random() * maxHeight); // Generate random height
      }
      return heights;
    };

    // Color palette for bars
    const colorPalette = [
      "#f72585ff",
      "#b5179eff",
      "#7209b7ff",
      "#560badff",
      "#480ca8ff",
      "#3a0ca3ff",
      "#3f37c9ff",
      "#4361eeff",
      "#4895efff",
      "#4cc9f0ff",
    ];

    // Generate random heights for bars based on data length
    const barHeights = generateRandomHeights(data.length, 200); // Adjust 200 based on your graph's scale

    // Define x and y scales using D3
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.genre)) // Map genre names to x-axis
      .range([0, width])
      .paddingInner(0) // No inner padding
      .paddingOuter(0); // No outer padding

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(barHeights)]) // Domain based on max random bar height
      .range([height, 0]); // Range from bottom to top of graph

    // Tooltip for showing genre name on hover
    const tooltip = d3.select("body").append("div").attr("class", "tooltip");

    // Render bars using D3
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => xScale(d.genre))
      .attr("y", (d, i) => yScale(barHeights[i])) // Use random heights here
      .attr("width", xScale.bandwidth())
      .attr("height", (d, i) => height - yScale(barHeights[i])) // Use random heights here
      .attr(
        "fill",
        () => colorPalette[Math.floor(Math.random() * colorPalette.length)] // Random color from palette
      )
      .on("mouseover", function (event, d) {
        d3.select(this).attr("opacity", 0.7); // Highlight bar on mouseover
        tooltip.style("visibility", "visible").text(d.genre); // Show genre name in tooltip
      })
      .on("mousemove", function (event) {
        tooltip
          .style("top", `${event.pageY - 10}px`)
          .style("left", `${event.pageX + 10}px`); // Position tooltip near mouse pointer
      })
      .on("mouseout", function () {
        d3.select(this).attr("opacity", 1); // Restore opacity on mouseout
        tooltip.style("visibility", "hidden"); // Hide tooltip
      })
      .on("click", (event, d) => setSelectedGenre(d)); // Set selected genre on click

    // Cleanup function to remove D3 elements on unmount
    return () => {
      svg.selectAll("*").remove(); // Remove all elements from SVG
      tooltip.remove(); // Remove tooltip element
    };
  }, [data]); // Dependencies include data, so useEffect runs when data changes

  return <svg ref={svgRef}></svg>;
};

export default Graph;
