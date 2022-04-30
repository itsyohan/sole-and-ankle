import React from 'react';
import styled from 'styled-components/macro';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';
import Modal from '../Modal';

const ShoeGrid = () => {
  const [isModalOpen, toggleModal] = React.useState(false);

  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeCard key={shoe.slug} {...shoe} toggleModal={toggleModal} />
      ))}
      <Modal isOpen={isModalOpen} toggleModal={toggleModal}>
        <p>This is the information about shoes</p>
        <p>This is the information about shoes</p>
        <p>This is the information about shoes</p>
        <p>This is the information about shoes</p>
        <p>This is the information about shoes</p>
        <p>This is the information about shoes</p>
        <p>This is the information about shoes</p>
        <p>This is the information about shoes</p>
        <p>This is the information about shoes</p>
        <p>This is the information about shoes</p>
        <p>This is the information about shoes</p>
        <p>This is the information about shoes</p>
        <p>This is the information about shoes</p>
        <p>This is the information about shoes</p>
        <p>This is the information about shoes</p>
        <p>This is the information about shoes</p>
        <p>This is the information about shoes</p>
        <p>This is the information about shoes</p>
        <p>This is the information about shoes</p>
        <p>This is the information about shoes</p>
        <p>This is the information about shoes</p>
        <p>This is the information about shoes</p>
        <p>This is the information about shoes</p>
        <p>This is the information about shoes</p>
        <p>This is the information about shoes</p>
        <p>This is the information about shoes</p>
        <p>This is the information about shoes</p>
        <p>This is the information about shoes</p>
        <p>This is the information about shoes</p>
        <p>This is the information about shoes</p>
        <p>This is the information about shoes</p>
        <p>This is the information about shoes</p>
      </ Modal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
`;

export default ShoeGrid;
