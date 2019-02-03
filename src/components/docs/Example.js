import React from "react";
import JSONPretty from "react-json-pretty";

const Example = props => {
  return <JSONPretty id="json-pretty" data={props.data} />;
};

export default Example;
