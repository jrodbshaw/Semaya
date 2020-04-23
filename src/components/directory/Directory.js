import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menuItem/MenuItem";

import { sections } from "../../api/Sections";

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
