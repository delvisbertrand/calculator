
import Input from './components/Input';
import Button from './components/Button';
import { Column, Container, Content, Row } from './styles'
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [secondNumber, setSecondNumber] = useState('0');
  const [lastButton, setLastButton] = useState('0');
  const [lastOperator, setLastOperator] = useState('=');

  const handleAtNumber = (num) => {
    setSecondNumber(prev => `${prev === '0' || !'0123456789.'.includes(lastButton) ? '' : prev}${num}`);
    setCurrentNumber(prev => `${prev === '0' || !'0123456789.'.includes(lastButton) ? '' : prev}${num}`);
  }

  const handleOnClear = () => {
    setCurrentNumber(prev => '0');
    setFirstNumber(prev => '0');
    setSecondNumber(prev => '0');
    setLastOperator(prev => '=')
  }

  const handleAt = (char) => {
    if ('0123456789.'.includes(char)) {
      handleAtNumber(char);
    } else {
      makeOperation();
      setLastOperator(char);
    }
    setLastButton(char);
  }

  const makeOperation = () => {
    let result;
    switch (lastOperator) {
      case '+':
        result = String(Number(firstNumber) + Number(secondNumber));
        break;
      case '-':
        result = String(Number(firstNumber) - Number(secondNumber));
        break;
      case 'x':
        result = String(Number(firstNumber) * Number(secondNumber));
        break;
      case '/':
        result = String(Number(firstNumber) / Number(secondNumber));
        break;
      default:
        result = currentNumber;
        setSecondNumber(result);
        break;
    }
    if(result) {
      setFirstNumber(result);
      setCurrentNumber(result);
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="C" onClick={() => handleOnClear()}/>
          <Button label="/" onClick={() => handleAt('/')}/>
          <Button label="x" onClick={() => handleAt('x')}/>
          <Button label="-" onClick={() => handleAt('-')}/>
        </Row>
        <Row>
          <Column>
            <Row>
              <Button label="7" onClick={() => handleAt('7')}/>
              <Button label="8" onClick={() => handleAt('8')}/>
            </Row>
            <Row>
              <Button label="4" onClick={() => handleAt('4')}/>
              <Button label="5" onClick={() => handleAt('5')}/>
            </Row>
            <Row>
              <Button label="1" onClick={() => handleAt('1')}/>
              <Button label="2" onClick={() => handleAt('2')}/>
            </Row>
            <Row>
              <Button label="0" onClick={() => handleAt('0')}/>
            </Row>
          </Column>
          <Column>
            <Row>
              <Column>
                <Row>
                  <Button label="9" onClick={() => handleAt('9')}/>
                </Row>
                <Row>
                  <Button label="6" onClick={() => handleAt('6')}/>
                </Row>
                <Row>
                  <Button label="3" onClick={() => handleAt('3')}/>
                </Row>
                <Row>
                  <Button label="." onClick={() => handleAt('.')}/>
                </Row>
              </Column>
              <Column>
                <Row>
                  <Button label="+" onClick={() => handleAt('+')}/>
                </Row>
                <Row>
                  <Button label="=" onClick={() => handleAt('=')}/>
                </Row>
              </Column>
            </Row>
          </Column>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
