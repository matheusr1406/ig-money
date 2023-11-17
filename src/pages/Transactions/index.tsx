import { useContext} from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/Formatter";
import { SearchForm } from "./components/SearchForm";
import { Container, Price, TableTR } from "./styles";


export function Transactions() {
 const {transactions} = useContext(TransactionsContext);


  return (
    <div>
      <Header />
      <Summary />

      <Container>
        <SearchForm />
        <TableTR>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <Price variant={transaction.type}>
                      {transaction.type === "outcome" && '- '}
                    {priceFormatter.format(transaction.price)}
                    </Price>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                </tr>
              );
            })}
          </tbody>
        </TableTR>
      </Container>
    </div>
  );
}
