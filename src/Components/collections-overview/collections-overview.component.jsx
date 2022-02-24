import React from "react";
import {connect} from "react-redux";
import "./collections-overview.styles.scss";

import CollectionPreview from "../collection-preview/collection-preview.component";

import {selectCollectionForPreview} from "../../redux/shop/shop.selectors";

const CollectionsOverview = ({collections}) => (
    <div className="collection-overview">
        {collections.map(({id, title, items}) => (
            <CollectionPreview key={id} title={title} items={items} />
            ))
        }
    </div>
);

const mapStateToProps = (state) => ({
    collections: selectCollectionForPreview(state)
});

export default connect(mapStateToProps)(CollectionsOverview);