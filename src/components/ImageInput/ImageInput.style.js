import styled from 'styled-components';

export const ProfileImageContainer = styled.div`
  text-align: left;
  margin-bottom: 9px;
`;

export const InputLabel = styled.div`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 6px;
`;

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 10px 0;
`;

export const StyledLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  width: ${({ width }) => (width ? width : '149px')};
  height: ${({ height }) => (height ? height : '149px')};

  margin: ${({ $margin }) => ($margin ? $margin : '0')};

  border: none;
  border-radius: 50%;
  background-color: lightgray;

  cursor: pointer;
  overflow: hidden;
`;

export const StyledInput = styled.input`
  display: none;
`;

export const PreviewImage = styled.img`
  position: absolute;

  width: 100%;
  height: 100%;
  object-fit: cover;

  filter: brightness(${({ $brightness }) => $brightness});
`;

export const StyledAddSign = styled.span`
  display: flex;
  align-items: center;

  width: 30px;
  height: 30px;

  &::before,
  &::after {
    position: absolute;

    width: 30px;
    height: 5px;

    background-color: black;
    content: '';
  }

  &::before {
    transform: rotate(90deg);
  }
`;

export const HelperText = styled.span`
  margin: 3px 0 0;

  color: red;
  font-size: 12px;
`;

export const ChangeButton = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;

  padding: 4px 7px;

  border: 2px solid white;
  border-radius: 10px;

  color: white;
  font-size: 16px;
  font-weight: 400;
  text-align: center;

  transform: translate(-50%, -50%); /* 요소를 수평 및 수직으로 가운데 정렬 */
`;
