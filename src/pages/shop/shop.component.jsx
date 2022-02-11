import React from 'react';
import SHOP_DATA from './shop.data.js';
import ColleccionPreview from '../../components/collection-preview/collection-preview.component';
class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...OtheCollectionProps }) => (
          <ColleccionPreview key={id} {...OtheCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
