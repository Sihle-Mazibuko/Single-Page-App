// Graph.js
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import "./Graph.css";

const Graph = ({ data, setSelectedGenre }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!data || data.length === 0) return;

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Function to generate random heights
    const generateRandomHeights = (numBars, maxHeight) => {
      const heights = [];
      for (let i = 0; i < numBars; i++) {
        heights.push(Math.random() * maxHeight); // Generate random height
      }
      return heights;
    };

    // Define the color palette
    const colorPalette = [
      "#f72585ff", // $rose
      "#b5179eff", // $fandango
      "#7209b7ff", // $grape
      "#560badff", // $chrysler-blue
      "#480ca8ff", // $dark-blue
      "#3a0ca3ff", // $zaffre
      "#3f37c9ff", // $palatinate-blue
      "#4361eeff", // $neon-blue
      "#4895efff", // $chefchaouen-blue
      "#4cc9f0ff", // $vivid-sky-blue
    ];

    const barHeights = generateRandomHeights(data.length, 200); // Adjust 200 based on your graph's scale

    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.genre))
      .range([0, width])
      .paddingInner(0) // No inner padding
      .paddingOuter(0); // No outer padding

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(barHeights)])
      .range([height, 0]);

    const tooltip = d3.select("body").append("div").attr("class", "tooltip");

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
        () => colorPalette[Math.floor(Math.random() * colorPalette.length)]
      ) // Random color from palette
      .on("mouseover", function (event, d) {
        d3.select(this).attr("opacity", 0.7);
        tooltip.style("visibility", "visible").text(d.genre);
      })
      .on("mousemove", function (event) {
        tooltip
          .style("top", `${event.pageY - 10}px`)
          .style("left", `${event.pageX + 10}px`);
      })
      .on("mouseout", function () {
        d3.select(this).attr("opacity", 1);
        tooltip.style("visibility", "hidden");
      })
      .on("click", (event, d) => setSelectedGenre(d)); // Set selected genre on click

    return () => {
      svg.selectAll("*").remove(); // Clean up D3 elements on unmount
      tooltip.remove(); // Remove tooltip on unmount
    };
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default Graph;
