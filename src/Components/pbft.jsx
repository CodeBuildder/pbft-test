import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const PBFTDiagram = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const width = 1500;
    const height = 200;
    const colors = ["blue", "orange", "green", "red", "yellow"]; // Different colors for each phase

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("background-color", "black");

    // Drawing phase separators
    data.phases.forEach((phase, index) => {
      svg
        .append("line")
        .attr("x1", (index + 1) * (width / (data.phases.length + 1)))
        .attr("y1", 0)
        .attr("x2", (index + 1) * (width / (data.phases.length + 1)))
        .attr("y2", height)
        .attr("stroke", "white")
        .attr("stroke-dasharray", "5,5");
    });

    // Drawing nodes
    svg
      .append("g")
      .selectAll("circle")
      .data(data.nodes)
      .join("circle")
      .attr("cx", 100)
      .attr("cy", (d, i) => ((i + 1) * height) / (data.nodes.length + 1))
      .attr("r", 10)
      .style("fill", "white");

    // Drawing links
    svg
      .append("g")
      .selectAll("line")
      .data(data.links)
      .join("line")
      .attr("x1", 100)
      .attr(
        "y1",
        (d) =>
          ((data.nodes.findIndex((node) => node.id === d.source) + 1) *
            height) /
          (data.nodes.length + 1)
      )
      .attr(
        "x2",
        (d) =>
          (data.phases.findIndex((phase) => phase.name === d.phase) + 1) *
          (width / (data.phases.length + 1))
      )
      .attr(
        "y2",
        (d) =>
          ((data.nodes.findIndex((node) => node.id === d.target) + 1) *
            height) /
          (data.nodes.length + 1)
      )
      .attr(
        "stroke",
        (d) => colors[data.phases.findIndex((phase) => phase.name === d.phase)]
      )
      .attr("stroke-width", 2)
      .attr("marker-end", "url(#arrow)"); // Add arrows at the end of the lines

    // Define the arrow markers
    svg
      .append("svg:defs")
      .append("svg:marker")
      .attr("id", "arrow")
      .attr("refX", 6)
      .attr("refY", 6)
      .attr("markerWidth", 30)
      .attr("markerHeight", 30)
      .attr("markerUnits", "userSpaceOnUse")
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M 0,0 12,6 0,12 3,6")
      .style("fill", "white");

    // Adding phase labels
    data.phases.forEach((phase, index) => {
      svg
        .append("text")
        .attr("x", (index + 1) * (width / (data.phases.length + 1)))
        .attr("y", 30)
        .attr("text-anchor", "middle")
        .attr("fill", "white")
        .text(phase.name);
    });
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default PBFTDiagram;
