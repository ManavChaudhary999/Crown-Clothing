import React from "react";
import "./directory.styles.css";

import MenuItem from "../menu-item/menu-item.component";

const Directory = ({sections}) =>
{
    return(
        <div className="directory-menu">
            {sections.map(section => <MenuItem title={section.title} imageUrl={section.imageUrl} size={section.size} />)}
        </div>
    )
};
export default Directory;