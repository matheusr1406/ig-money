import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { Container } from "./styles";
import * as z from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { useContext } from "react";
import { TransactionsContext } from "../../../../contexts/TransactionsContext";


const searchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm (){
    const {loadTransactions} = useContext(TransactionsContext)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {register, handleSubmit} = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })

   async function handleSearchTransactions (data: SearchFormInputs){
        await loadTransactions(data.query);
    }
    return (
        <Container onSubmit={handleSubmit(handleSearchTransactions)}>
            <input 
             type="text"
             placeholder="Busque por transações"
             {...register('query')}
             />
            
            <button type="submit">
                <MagnifyingGlass size={20}/>
                Buscar
            </button>
        </Container>
    )
}