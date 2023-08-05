import { Container } from "./styles";
import Incomes from '../../assets/arrowUp.svg';
import Out from '../../assets/arrowDown.svg';
import Total from '../../assets/dollar.svg'
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
    const { transactions } = useTransactions();

    const summary = transactions.reduce((acc, transaction)=>{
        if(transaction.type === 'deposit'){
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        }else {
            acc.withdraws -= transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={Incomes} alt="Entradas"/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'AOA',
                    }). format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={Out} alt="Saídas"/>
                </header>
                <strong> 
                    {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'AOA',
                    }). format(summary.withdraws)}
                </strong>
            </div>
            <div className="highilight">
                <header>
                    <p>Total</p>
                    <img src={Total} alt="total"/>
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'AOA',
                    }). format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}
