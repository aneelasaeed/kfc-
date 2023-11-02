import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

const { Meta } = Card;

const MyCard = ({product, showAddToCartDrawer}) => {
  const {id, price, description, image, title} = product;

  const onAddToCartClick = () => {
    // open drawer and show product

  }

  return(
    <Card
    hoverable
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src={image}
      />
    }
    actions={[
      <ShoppingCartOutlined key="cart" onClick={() => showAddToCartDrawer(product)} />,
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
    ]}
  >
    <Meta
      title={title}
      description={description}
    />
  </Card>
  )
};

export default MyCard;