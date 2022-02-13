import React, { useState, useReducer, useEffect } from 'react';
import { ScrollView, Modal, Alert } from 'react-native';
import { useRoute, useNavigation, Link } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';
import { formatNumber } from "../../helpers/Formata";
import Button from '../components/Button';


import { 
    Container, 
    Title, 
    ItemName,   
    ColumLeft,
    RowBox,    
    RowBoxLabel,
    RowBoxInput,
    RowBoxInputInfo,
    ColBox,
    ColBoxTitle,
    BoxAcao,
    ViewModal,
    ModalContainer,
    ModalContainerValido,
    ViewModalContent,
    ViewModalTitle,
    ViewModalSubTitle,
    ViewModalText
} from './style';

interface AcaoInterface {
    id: number;
    nome: string;
    percentual: number,
    inputInfo: string,
    valorResgatar: number
} 

interface InvestimentoInterface {
    nome: string;
    objetivo: string;
    saldoTotal: number;
    indicadorCarencia: string;
    acoes: AcaoInterface[]
} 

const ValorResgate = (props) => {
    const [valorResgatar, setValorResgatar] = useState('0');  
    const [infoResgate, setInfoResgate] = useState('');    
    const [labelColor, setLabelColor] = useState('#888');    
    const { acao, saldoTotal, setValorTotal } = props;
    const valorDispoinivel = saldoTotal*(acao.percentual/100);        
    
    return (
        <BoxAcao>
            <RowBox>
                <ColBox style={{color:'#000'}}>Ação</ColBox>
                <ColBox>{ acao.nome }</ColBox>
            </RowBox>
            <RowBox>
                <ColBox style={{color:'#000'}}>Saldo acumulado</ColBox>
                <ColBox>R$ { formatNumber(valorDispoinivel) }</ColBox>
            </RowBox>  
            <RowBoxLabel style={{color:labelColor}}>Valor a resgatar</RowBoxLabel>
            <RowBoxInput>
                <TextInputMask { ...props } 
                    type={'money'}
                    options={{
                        precision: 2,
                        separator: ',',
                        delimiter: '.',
                        unit: 'R$ ',
                        suffixUnit: ''                
                    }}
                    value={ valorResgatar }
                    includeRawValueInChangeText={true}
                    onChangeText={(text, rawText) => {
                         
                        let valorDBResgate = parseFloat(rawText);                                                
                        acao.inputInfo =  (valorDBResgate > valorDispoinivel) ? 
                            setInfoResgate(`Valor não pode ser maior que R$ ${formatNumber(valorDispoinivel)}`)
                        :   setInfoResgate('');                        

                        setValorTotal({
                            type: 'add',
                            item:{
                                id: acao.id, 
                                nome: acao.nome,
                                valor: valorDBResgate,
                                valorDisponivel: valorDispoinivel
                            }                            
                        });                        
                    }}                                
                    onFocus={(e) => {
                        setLabelColor('#23569C');
                    }}  
                    onBlur={() => {
                        setLabelColor('#888');
                    }}                         
                    keyboardType="numeric"  />
            </RowBoxInput>
            <RowBoxInputInfo>
                { infoResgate }
            </RowBoxInputInfo>
           
        </BoxAcao>
    );
}

const Resgate: React.FC = (props) => {
    
    const route = useRoute();
    const routeParams = route.params as InvestimentoInterface;
    const { saldoTotal } = routeParams;          
    const [valorTotal, setValorTotal] = useState(0.00);    
    const [validacao, setValidacao] = useState(false);       
    const [modalVisible, setModalVisible] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalSubTitle, setModalSubTitle] = useState('');
    const [modalText, setModalText] = useState([]);    
    const navigation = useNavigation();    

    const initialState = [];
    const reducer = (resgateState, action ) => {
        switch(action.type){
            case 'add':                   
                let newState = resgateState.filter(e => e.id !== action.item.id);
                newState = [...newState, action.item];                  
                let somaValor = 0;
                newState.map(e => {
                    somaValor+= (!isNaN(e.valor)) ? e.valor : 0;                    
                })
                setValorTotal(somaValor);                                
                return newState;                
            break;            
            default:
                return resgateState
        }
    };

    const [resgateState, dispatch] = useReducer(reducer, initialState);
    
    const handlePres = () => {
        let erro = [];
        let valido = false;
        // verifica se for informado valor a resgatar
        if(valorTotal > 0){                        
            // faz a validação
            resgateState.map(e => {
                if(e.valor >  e.valorDisponivel){                    
                    erro.push(`${e.nome}: Valor máximo de R$ ${formatNumber(e.valorDisponivel)}`);
                }
            })        
            if(erro.length){
                setModalTitle('DADOS INVÁLIDOS');
                setModalSubTitle('Você preencheu um ou mais campos acima do permitido:');
                setModalText(erro);
            }else{
                valido = true;
                setModalTitle('RESGATE EFETUADO!');
                setModalSubTitle('O valor solicitado estará em sua conta em até 5 dias uteis!');                
                setModalText(erro);
            }
        }else{
            setModalTitle('DADOS INVÁLIDOS');
            setModalSubTitle('Você não informou nenhum valor de resgate.');            
            setModalText(erro);
        }    
        
        setValidacao(valido);                   
        setModalVisible(true);                                      
             
    } 
    
    const ModalBox = (props) => {
        return (
            <Modal animationType='fade' visible={props.modalVisible} transparent={true}>
                <ModalContainer>
                    <ViewModal>   
                        <ViewModalContent>                    
                            <ViewModalTitle>{modalTitle}</ViewModalTitle>
                            <ViewModalSubTitle>{modalSubTitle}</ViewModalSubTitle>
                            { modalText.map((e, index) =>  <ViewModalText key={index}>{ e }</ViewModalText>) }
                        </ViewModalContent>
                        <Button title="FECHAR" onPress={props.onClose()} />   
                    </ViewModal>
                </ModalContainer>
            </Modal>
        );
    }
    
    return (
        <Container>                            
            
            <ScrollView>
                <Title>                    
                    <ColumLeft>
                        <ItemName style={{color:'#898989'}}>DADOS DO INVESTIMENTO</ItemName>
                    </ColumLeft>
                </Title>                 

                <RowBox>
                    <ColBox style={{ color:'#000'}}>Nome</ColBox>
                    <ColBox>{ routeParams.nome }</ColBox>
                </RowBox>
                <RowBox>
                    <ColBox style={{ color:'#000'}}>Saldo total dispoinivel</ColBox>
                    <ColBox>R$ { formatNumber(routeParams.saldoTotal) }</ColBox>
                </RowBox>       

                <Title>                    
                    <ColumLeft>
                        <ItemName style={{color:'#898989'}}>RESGATE DO SEU JEITO</ItemName>
                    </ColumLeft>
                </Title>        
                
                {routeParams.acoes.map((e, index) => 
                    <ValorResgate 
                        key={index} 
                        setValorTotal={dispatch} 
                        saldoTotal={saldoTotal} 
                        acao={e} placeholder='Digite o valor' /> 
                )}

                <RowBox>
                    <ColBoxTitle>Valor total a resgatar</ColBoxTitle>
                    <ColBox>R$ { formatNumber(valorTotal) }</ColBox>
                </RowBox>                  
                
                <Button title="CONFIRMAR RESGATE" onPress={handlePres}/>    

                {
                    // se tiver valido
                    validacao ?
                        <Modal animationType='fade' visible={modalVisible} transparent={false} >
                            <ModalContainerValido>
                                <ViewModal>   
                                    <ViewModalContent>                    
                                        <ViewModalTitle>{modalTitle}</ViewModalTitle>
                                        <ViewModalSubTitle>{modalSubTitle}</ViewModalSubTitle>
                                        { modalText.map((e, index) =>  <ViewModalText key={index}>{ e }</ViewModalText>) }
                                    </ViewModalContent>
                                    
                                    <Button title="NOVO RESGATE" onPress={() => {                                                                         
                                        navigation.goBack();                     
                                        setModalVisible(false);                  
                                    }} /> 
                                    
                                </ViewModal>
                            </ModalContainerValido>
                        </Modal>

                    :
                        // se tiver invalido
                        <Modal animationType='fade' visible={modalVisible} transparent={true} >
                            <ModalContainer>
                                <ViewModal>   
                                    <ViewModalContent>                    
                                        <ViewModalTitle>{modalTitle}</ViewModalTitle>
                                        <ViewModalSubTitle>{modalSubTitle}</ViewModalSubTitle>
                                        { modalText.map((e, index) =>  <ViewModalText key={index}>{ e }</ViewModalText>) }
                                    </ViewModalContent>
                                   
                                    <Button title="CORRIGIR" onPress={() => {
                                        setModalVisible(false);                                                                        
                                    }} />   
                                    
                                </ViewModal>
                            </ModalContainer>
                        </Modal>
                }                                 
                
            </ScrollView>
        </Container>
    );
}

export default Resgate;