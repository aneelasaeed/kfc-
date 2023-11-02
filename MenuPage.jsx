import React, { useState } from 'react';
import { Row, Col } from 'antd';

import products from "../data/products.json";
import MyCard from '../components/MyCard';
import AddToCartDrawer from '../components/AddToCartDrawer';

export default function MenuPage() {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const showAddToCartDrawer = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  }

  const closeAddToCartDrawer = () => {
    setOpen(false);
  }

    return (
      <>
        <h1>Welcome to My Restaurant</h1>
        <AddToCartDrawer 
          open={open} 
          closeAddToCartDrawer={closeAddToCartDrawer}
          selectedProduct={selectedProduct}
          />
        <Row gutter={16}>
        {
          products.map(p => (
            <Col span={6}>
              <MyCard key={p.id} product={p} showAddToCartDrawer={showAddToCartDrawer} />
            </Col>
          ))
        }
        </Row>

      </>
    )
  }