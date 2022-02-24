import React from "react";
import {connect} from "react-redux";

import {selectIsCollectionsFetching} from "../../redux/shop/shop.selectors";

import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";;

const mapStateToProps = (state) => ({
    isLoading: selectIsCollectionsFetching(state)
});

const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview));

export default CollectionsOverviewContainer;