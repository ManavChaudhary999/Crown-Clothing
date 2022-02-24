import React from "react";
import {Route} from "react-router-dom";
import {connect} from "react-redux";

// Only For One time
//import {selectCollectionForPreview} from "../../redux/shop/shop.selectors";
//import {addShopCollectionAndDocument} from "../../Firebase/firebase.utils";

import {fetchCollectionsStartAsync} from "../../redux/shop/shop.action";
// import {selectIsCollectionsFetching} from "../../redux/shop/shop.selectors";
import {selectIsCollectionsLoaded} from "../../redux/shop/shop.selectors";

import WithSpinner from "../../Components/with-spinner/with-spinner.component";

import CollectionPage from "../collection/collection.component";
import CollectionsOverview from "../../Components/collections-overview/collections-overview.component";;

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component
{
    componentDidMount()
    {   
        // Only For One time
        // const collections = this.props.collections;
        // addShopCollectionAndDocument('collections', collections.map(({title, items}) => ({title, items})));
        
        const {fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync();
    }

    render()
    {
        const {match, isLoaded} = this.props;

        return (
            <div className="shop-page">
                {/* <Route exact path={`${match.path}`} component={CollectionOverview} /> */}
                <Route exact path={`${match.path}`} render={props => <CollectionOverviewWithSpinner isLoading={!isLoaded} {...props} />} />
                {/* <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> */}
                <Route path={`${match.path}/:collectionId`} render={props => <CollectionPageWithSpinner isLoading={!isLoaded} {...props} />} />
            </div>
        );
    }
}

// Only For One time
// const mapStateToProps = state => ({
//     collections : selectCollectionForPreview(state)
// });

const mapStateToProps = state => ({
    //isFetching : selectIsCollectionsFetching(state)
    isLoaded: selectIsCollectionsLoaded(state)
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);