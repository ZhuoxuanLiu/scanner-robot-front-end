import { Button } from 'antd';
import type {FC} from 'react';
import React, { useState} from 'react';

export type ButtonProps = {
  description: React.ReactNode;
  icon?: React.ReactNode;
  clickFunction?: any
};

const CardButton: FC<ButtonProps> = ({ description, icon }) => {

  const [loadings, setLoadings] = useState([])

  const enterLoading = (index: number) => {
    setLoadings(() => {
      loadings.map((loading, i) => i === index ? true : loading)
      return loadings
    });

    setTimeout(() => {
      setLoadings(() => {
        loadings.map((loading, i) => i === index ? false : loading)
        return loadings
      });
    }, 6000);
  };

  return (
    <>
      <Button
        type="default"
        shape="round"
        block
        icon={icon}
        loading={loadings[0]}
        onClick={() => enterLoading(0)}
      >
        {description}
      </Button>
    </>
  );
}

export default CardButton;
