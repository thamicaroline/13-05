import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: rgb(192, 192, 192);
`;
export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 24px;
`;
export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  color: gray;
  margin-bottom: 20px;
  fontWeight: bold
`;
 export const Logo = styled.Image`
 width: ${RFValue(50)}px;
 height: ${RFValue(50)}px;
 margin-botton: ${RFValue(10)}px;

 `;
