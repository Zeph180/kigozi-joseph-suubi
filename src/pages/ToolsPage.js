import React from "react";
import SectionHeading from "../components/SectionHeader";
import {
  CssIcon,
  HtmlIcon,
  JsIcon,
  ReactIcon,
  JiraIcon,
  FigmaIcon,
  GraphIcon,
  NodeIcon,
  MongoIcon,
  VscodeIcon,
} from "../assets/tools";
import "./ToolsPage.css";

const tools = [
  <CssIcon />,
  <HtmlIcon />,
  <JsIcon />,
  <ReactIcon />,
  <JiraIcon />,
  <FigmaIcon />,
  <GraphIcon />,
  <NodeIcon />,
  <MongoIcon />,
  <VscodeIcon />,
];

const ToolsPage = () => {
  return (
    <div id="tools" className="container">
      <SectionHeading sectionName="My magic tools" />
      <div className="tools-container">
        {tools.map((tool) => (
          <div className="tool-icon">{tool}</div>
        ))}
      </div>
    </div>
  );
};

export default ToolsPage;
