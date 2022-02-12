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

export const ItemName = styled.Text`
  color: #565656;
`;

export const ItemDescription = styled.Text`
  color: #888888;
`;

export const ColumLeft = styled.View``;

export const ColumRight = styled.Text`
  color: #565656;
`;

export const RowBox = styled.View`  
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  background: #FFFFFF;
  color: #252525;
  padding: 10px 20px;
  border: solid 1px #EFEFEF;  
`;


export const RowForm = styled.View`
  border: solid 2px #EFEFEF;
`;
export const RowBoxLabel = styled.Text`  
  width: 100%;  
  background: #FFFFFF;
  color: #656565;  
  padding-left:20px;
`;
export const RowBoxInput = styled.View`  
  width: 100%;  
  background: #FFFFFF;
  color: #252525;
  padding-left:20px;
`;
export const RowBoxInputInfo = styled.Text`
  width: 100%;  
  color: #FF0000;
  background: #FFFFFF;
  padding-left:20px;
`;



export const ColBox = styled.Text`
  display: flex;
  flex-direction: row;
`;

export const ColBoxTitle = styled.Text`
  display: flex;
  flex-direction: row;
  color: #000000;
  font-weight: bold
`;

export const BoxAcao = styled.View`
  margin-bottom: 10px;
`;

export const ModalContainer = styled.View`
  background-color: rgba(0,0,0,0.7);
  flex: 1;
`;

export const ModalContainerValido = styled.View`
  background-color: rgba(150, 150, 150, 6);
  flex: 1;
`;

export const ViewModal = styled.View`  
  width: 90%;    
  margin: auto;  
  background: #FFFFFF;
`;

export const ViewModalContent = styled.View`  
  padding: 20px;
  background: #FFFFFF;
`;

export const ViewModalTitle = styled.Text`
  color: #23569C;  
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 22px;
  text-align: center
`;

export const ViewModalSubTitle = styled.Text`
  width: 100%;
  color: #656565;  
  font-size: 16px;   
  margin-bottom: 30px;
`;

export const ViewModalText = styled.Text`
  width: 100%;
  color: #656565;  
  font-size: 16px;      
`;