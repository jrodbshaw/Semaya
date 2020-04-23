import React from "react";
import "./directory.styles.scss";
import MenuItem from "../MenuItem";

import { sections } from "../../api/sections";

const Directory = () => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
