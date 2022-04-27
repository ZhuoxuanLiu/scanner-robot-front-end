import { Button } from 'antd';
import React from 'react';

export type ButtonProps = {
  description: React.ReactNode;
  icon?: React.ReactNode;
};

class CardButton extends React.Component<ButtonProps> {
  state = {
    loadings: [],
  };

  enterLoading = (index: number) => {
    this.setState(({ loadings }: { loadings: boolean[] }) => {
      const newLoadings = [...loadings];
      newLoadings[index] = true;

      return {
        loadings: newLoadings,
      };
    });
    setTimeout(() => {
      this.setState(({ loadings }: { loadings: boolean[] }) => {
        const newLoadings = [...loadings];
        newLoadings[index] = false;

        return {
          loadings: newLoadings,
        };
      });
    }, 6000);
  };

  render() {
    const { loadings } = this.state;
    const { description, icon } = this.props;
    return (
      <>
        <Button
          type="default"
          shape="round"
          block
          icon={icon}
          loading={loadings[0]}
          onClick={() => this.enterLoading(0)}
        >
          {description}
        </Button>
      </>
    );
  }
}

export default CardButton;
