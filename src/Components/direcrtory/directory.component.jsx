import React from "react";
import "./directory.styles.css";

import {SectionData} from "../../Data";
import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: SectionData
        }
    }
    render()
    {
        const sections = this.state.sections;

        return(
            <div className="directory-menu">
                {sections.map(({id, ...otherProps}) => <MenuItem key={id} {...otherProps} />)}
            </div>
        );
    }
}

export default Directory;