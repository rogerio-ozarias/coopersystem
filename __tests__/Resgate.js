import React from 'react';
import renderer from 'react-test-renderer';
import Investimento from "../src/pages/Investimento";

test('renders correctly', () => {
  const tree = renderer.create(<Investimento />).toJSON();
  expect(tree).toMatchSnapshot();
});
/*
import { renderer, screen} from 'react-test-renderer';
import Invesvestimento from "../src/pages/Investimento";
import Resgate from "../src/pages/Resgate";

// https://www.youtube.com/watch?v=pbwXsjVEMqg
// https://jestjs.io/pt-BR/docs/tutorial-react-native
describe('Clicar em confirmar com mais de um campos a resgatar com valor invalido', () => {
    test('Clicar no investimento I', () => {
        // testar se abru a tela de resgate após o clique
        const { investimento } = renderer(<Investimento />)
        return true;
    });

    test('Digitar um valor acima do disponível na primeira ação.', () => {
        // Ex: BBAS3 tem 11 mil de saldo acumulado, digitar 12 mil no campo valor a resgatar
        return true;
    });

    test('Digitar um valor abaixo do disponível na segunda ação.', () => {
        // Ex: VALE3 tem 8 mil de saldo acumulado, digitar 9 mil no campo valor a resgatar
        return true;
    });

    test('Clicar em confirmar', () => {
        
        // Resultado esperado: Deve aparecer um modal alertando 
        // que foi digitado um ou mais valor acima do permitido, 
        // e exibir quais ações estão com erro.
        
        return true;
    });
})

describe('Clicar em confirmar com todos os campos com valor validos', () => {
    test('Clicar no investimento I', () => {
        // testar se abril a tela de resgate
        return true;
    });

    test('Digitar um valor abaixo ou igual ao disponível na primeira e segunda ação.', () => {
        // Ex: BBAS3 tem 11 mil de saldo acumulado, digitar 11 mil no campo valor a resgatar 
        // Ex: VALE3 tem 8 mil de saldo acumulado, digitar 2 mil no campo valor a resgatar
        return true;
    });

    test('Digitar um valor abaixo ou igual ao disponível na terceira ação.', () => {
        return true;
    });

    test('Clicar em confirmar', () => {
        
        // Resultado esperado: Deve aparecer um modal com a mensagem que o 
        // resgate foi efetuado com sucesso, e quando clicar em novo resgate, 
        // voltar para tela inicial.
   
        return true;
    });
})*/