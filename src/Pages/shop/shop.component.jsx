import React from "react";

import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../Components/collection-preview/collection-preview.component";

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            collections: SHOP_DATA
        };
    }

    render()
    {
        const collections = this.state.collections;

        return(
            <div className="shop-page">
                {collections.map(({id, title, items}) => (
                    <CollectionPreview key={id} title={title} items={items} />
                    ))
                }
            </div>
        );
    }
}

export default Shop;