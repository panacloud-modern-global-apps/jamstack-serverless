import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default ({pageContext}) => {
  console.log("Page Context: " + JSON.stringify(pageContext));
  return (
    <div>
            <div>{pageContext.title}</div>
            <div>{documentToReactComponents(pageContext.body.json)}</div>
    </div>
  )
}