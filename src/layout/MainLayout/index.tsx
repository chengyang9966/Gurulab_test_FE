import React from 'react'
import { Col, Row } from 'antd';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Row>
      <Col span={24}>{children}</Col>
    </Row>
  )
}

export default MainLayout