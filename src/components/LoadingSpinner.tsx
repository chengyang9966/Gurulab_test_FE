import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { primaryColor } from "../assets/style/variables";
import { Spin} from 'antd';
export type LoadingSpinnerProps = {
  size?: number;
};

const LoadingSpinner: React.FC<LoadingSpinnerProps> = (props) => {
  const { size } = props;
  return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      zIndex:'1000',
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    }}
  >
    <Spin size="large" indicator={<LoadingOutlined style={{ fontSize: size, color: primaryColor }} />}/>
  </div>
  );
};

LoadingSpinner.defaultProps = {
  size: 100,
};

export default LoadingSpinner;
