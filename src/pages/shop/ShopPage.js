import React from "react";

import { SHOP_DATA } from "../../api/Collections";

import CollectionPreview from "../../components/collectionPreview/CollectionPreview";

const ShopPage = () => {
  return (
    <div className="shop-page">
      {SHOP_DATA.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
