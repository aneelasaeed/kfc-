import React from 'react';
import { Drawer } from 'antd';

const AddToCartDrawer = (props) => {
  const { open, selectedProduct, closeAddToCartDrawer } = props;

  return (
    <Drawer
      title={selectedProduct.title}
      visible={open}
      placement="right"
      onClose={closeAddToCartDrawer}
    >
      <div>
        <img src={selectedProduct.image} alt={selectedProduct.title} style={{ maxWidth: '100%' }} />
      </div>
      <div>
        <p>Description: {selectedProduct.description}</p>
        <p>Price: ${selectedProduct.price}</p>
      </div>
    </Drawer>
  );
};

export default AddToCartDrawer;
