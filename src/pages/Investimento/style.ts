import styled from 'styled-components/native'; 

export const Container = styled.View`
    display: flex;
    background: #EFEFEF;
    width: 100%;
    height: 100%;    
`;

export const Title = styled.View`	
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #656565;    
  padding: 20px;
`;

export const Item = styled.View`  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #FFFFFF;
  color: #252525;
  padding: 20px;
  margin-bottom: 2px;  
`;
export const ItemPress = styled.TouchableOpacity`  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #FFFFFF;
  color: #252525;
  padding: 20px;
  margin-bottom: 2px;  
`;

export const ItemName = styled.Text`
  color: #565656
`;

export const ItemDescription = styled.Text`
  color: #888888
`;

export const ColumLeft = styled.View``;

export const ColumRight = styled.Text`
  color: #565656
`;

export const ViewLoading = styled.View`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const TextLoading = styled.Text`    
  font-weight: bold;
`;

export const ViewError = styled.View`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const TextError = styled.Text`    
  font-weight: bold;
  color: #F00;
`;