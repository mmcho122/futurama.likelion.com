import { NextPage } from "next";
import styled from "@emotion/styled";
import { fetcher } from '../utils/fetcher';
import useSWR from 'swr';
import { Error, Loading } from '../components'
import { CastData } from "../types/cast";
import Link from "next/link";
import { API_ENDPOINT, CASTIMAGE_ENDPOINT, CASTIMAGE_ROUTES } from "../constants";

const CastPage: NextPage = () => {
    const route = 'cast';
    const { data, error } = useSWR(`${API_ENDPOINT}${route}`, fetcher);

    if(error) return <Error />
    if(!data) return <Loading />

    return (
        <div>
                {data.map((cast: CastData) => {
                    const {name, born, bio, id } = cast;
                    return (
                        <Card key={`futurama-cast-${id}`}>
                            <Link href={bio.url}>
                                <a   target="_blank" rel="noopener noreferrer">
                                    <div>
                                        <Name>{name}</Name><Icon>IMDb</Icon>
                                    </div>
                                    <p><Subitem>Born</Subitem> {born}</p>
                                </a>
                                </Link>
                        </Card>
                    )
                })}
           
        </div>
    )
}


const Name = styled.h1`
    display: inline-block;
    margin: 10px 5px;
    font-size: 1.2rem;
    font-weight: 600;
`
const Icon = styled.span`
`

const Subitem = styled.span`

`

const Card = styled.div`
    min-width: min-content;
    width: 20vw;
    text-align: center;
    padding: 30px;
    margin: 0 auto;
    }
`


export default CastPage;
