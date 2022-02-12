import React, { useEffect, useState } from 'react';
import api from "../../services/api";
import { formatNumber } from "../../helpers/Formata";

import { 
    Container, 
    Title, 
    Item, 
    ItemPress,
    ItemName, 
    ItemDescription, 
    ColumLeft,
    ColumRight ,
    ViewLoading,
    TextLoading,
    ViewError,
    TextError
} from './style';

interface acao {
    id: number;
    nome: string;
    percentual: number
} 

interface Investimento {
    nome: string;
    objetivo: string;
    saldoTotal: number;
    indicadorCarencia: string;
    acoes: acao[]
} 

interface ListaInvestimentos {
    listaInvestimentos: Investimento[]
}

const ItemInvestimento = props => {        

    const { navigate } = props.navigation;
    
    const handlePress = (inv: Investimento) => {
        navigate('Resgate', inv);
    }

    const Columns = props => (
        <>
            <ColumLeft>
                <ItemName>{ props.inv.nome }</ItemName>
                <ItemDescription>{ props.inv.objetivo }</ItemDescription>
            </ColumLeft>
            <ColumRight>{ formatNumber(props.inv.saldoTotal) }</ColumRight>
        </>
    );

    if(props.inv.indicadorCarencia == 'S'){
        return (            
            <Item> 
                <Columns {...props} />
            </Item>            
        );
    }else{
        return (
            <ItemPress onPress={() => handlePress(props.inv)}> 
                <Columns {...props} />
            </ItemPress>
        );
    }
};

const Investimento: React.FC = (props) => {
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState<ListaInvestimentos>();

    const loadApi = async() => {                     
        try {                   
            let { data } = await api.get('ca4ec77d-b941-4477-8a7f-95d4daf7a653');            
            setData(data.response.data);                                    
        } catch (error) {   
            setError(true);            
        }         
        setLoading(false);
    };

    useEffect(() => {        
        loadApi();
    }, []);

    if(loading) {
        return (
            <ViewLoading>
                <TextLoading>Carregando...</TextLoading>
            </ViewLoading>
        );
    } else {
        if(error){
            return(
                <ViewError>       
                    <TextError>ERRO DE CONEXÃO</TextError>                                        
                </ViewError>
            );
        }else{
            return (
                <Container>       
                    <Title>                    
                        <ColumLeft>
                            <ItemName style={{color:'#898989'}}>INVESTIMENTOS</ItemName>
                        </ColumLeft>
                        <ColumRight style={{color:'#898989'}}>R$</ColumRight>
                    </Title>                     
                    {data.listaInvestimentos.map((e, index) => 
                        <ItemInvestimento {...props} key={index} inv={e} />
                    )}
                </Container>
            );
        }
    }
}

export default Investimento;