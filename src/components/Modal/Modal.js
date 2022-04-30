import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';

const Modal = (props) => {
  return (
    <Wrapper isOpen={props.isOpen}>
      <Backdrop onClick={() => props.toggleModal(false)} />
      <ContentWrapper>
        {props.isOpen}
        {props.children}
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: ${p => p.isOpen ? 'display' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
`;


const Backdrop = styled.div`
  background-color: #bdbdbd;
  min-height: 100vh;
  opacity: 50%;
`;

const ContentWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin-top: 36px;
  margin-left: auto;
  margin-right: auto;
  min-width: 500px;
  min-height: 500px;
  max-width: 500px;
  max-height: 500px;
  background-color: white;
  border-radius: 10px;
  padding: 20px 10px;
`

export default Modal;
