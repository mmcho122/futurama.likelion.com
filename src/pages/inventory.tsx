import { NextPage } from "next";
import styled from "@emotion/styled";
import { fetcher } from '../utils/fetcher';
import useSWR from 'swr';
import { Error, Loading } from '../components'
import { API_ENDPOINT } from '../constants'
import { InventoryData } from "../types/inventory";

const InventoryPage: NextPage = () => {
    const route = 'inventory';
    const { data, error } = useSWR(`${API_ENDPOINT}${route}`, fetcher);
    
    if(error) return <Error />
    if(!data) return <Loading />
    
    return (
        <div>
            <Heading>Futurama Inventory</Heading>
            <Container>
                <ItemListContainer>
                    <ItemList>
                        {data.map((item: InventoryData)=>{
                            const { title, category, description, slogan, price, stock, id} = item;
                            return (
                                <Item key={`futurama-inventory-${id}`}>
                                    <Title>{title}</Title>
                                    <div>
                                        <Term>category</Term>
                                        <Desc>{category}</Desc>
                                    </div>
                                    <Term>description</Term>
                                    <Desc>{description}</Desc>
                                    <Term>slogan</Term>
                                    <Desc>{slogan}</Desc>
                                    <div>
                                        <Term>price</Term>
                                        <Desc>{price}</Desc>
                                    </div>
                                    <Term>stock</Term>
                                    <Desc>{stock}</Desc>
                                </Item>
                            )
                        })}
                    </ItemList>
                </ItemListContainer>
            </Container>
        </div>
    )
}

export default InventoryPage;

const Heading = styled.h1`
    font-size: 30px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 20px;
`

const Container = styled.div`

`

const ItemListContainer = styled.div`

`

const ItemList = styled.div`
    margin: 10px;
    height: 100%;
`

const Item = styled.dl`
    line-height: 140%;
    padding: 10px 0;
    }
`
const Term = styled.dt`
 
`

const Desc = styled.dd`
`


const Title = styled.p`
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 180%;
`

const Button = styled.button`
    border: solid 1px #5fd1d1;
    background-color: #5fd1d1;
    border-radius: 5px;
    padding: 10px;
    font-size: 1rem;
    color: #000;
    display: block;
    margin: 10px;
    box-sizing: border-box;
    width: 80px;
    }
`

