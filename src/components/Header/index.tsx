import logo from '../../assets/money.svg'

import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) { 
  return (
    <Container>
        <Content>
            <img src={logo} alt="MoneyTransfer"/>
            <button type="button" onClick={onOpenNewTransactionModal}>
                Nova Transação
            </button>
        </Content>
    </Container>
  )
}
