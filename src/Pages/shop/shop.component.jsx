import React, {useEffect, lazy} from "react";
import {Route} from "react-router-dom";
import {connect} from "react-redux";

// Only For One time
//import {selectCollectionForPreview} from "../../redux/shop/shop.selectors";
//import {addShopCollectionAndDocument} from "../../Firebase/firebase.utils";

import {fetchCollectionsStart} from "../../redux/shop/shop.action";

const CollectionPageContainer = lazy(() => import("../collection/collection.container"));
const CollectionsOverviewContainer = lazy(() => import("../../Components/collections-overview/collections-overview.container"));

const ShopPage = ({fetchCollectionsStart, match}) => {
    useEffect( () => {
        // Only For One time
        // const collections = this.props.collections;
        // addShopCollectionAndDocument('collections', collections.map(({title, items}) => ({title, items})));
        
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);

    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
        </div>
    );
}

// Only For One time
// const mapStateToProps = state => ({
//     collections : selectCollectionForPreview(state)
// });

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);