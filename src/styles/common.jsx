import styled from 'styled-components';

// common styled components
const S = {
  Hr: styled.hr`
    width: 100%;

    margin: 0;

    border: 1px solid #00000029;
  `,
  Highlight: styled.span`
    font-weight: bold;
  `,
  StyledSection: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};

export default S;
