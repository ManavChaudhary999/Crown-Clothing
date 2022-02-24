import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";

import {selectIsCollectionsLoaded} from "../../redux/shop/shop.selectors";

import WithSpinner from "../../Components/with-spinner/with-spinner.component";
import CollectionPage from "./collection.component";

const mapStateToProps = state => ({
    isLoading : !selectIsCollectionsLoaded(state)
});

// const CollectionPageContainer = connect(mapStateToProps)(WithSpinner(CollectionPage)); // also use this but not a structured way

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
  )(CollectionPage);

export default CollectionPageContainer;