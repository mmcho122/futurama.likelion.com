import { NextPage } from "next";
import styled from "@emotion/styled";
import { fetcher } from '../utils/fetcher';
import useSWR from 'swr';
import { Error, Loading } from '../components'
import { InfoData } from '../types/info';
import Link from "next/link";

const InfoPage: NextPage = () => {
    const { data, error } = useSWR('https://api.sampleapis.com/futurama/info', fetcher);

    if(error) return <Error />
    if(!data) return <Loading />

    return (
        <div>
            {data.map((info: InfoData) => {
                const {synopsis, yearsAired, creators, id } = info;
    
                return (
                    <div key={`futurama-showinfo-${id}`}>
                        <Heading>Years Aired</Heading>
                        <Content>{yearsAired}</Content>
                        <Heading>Creators</Heading>
                        <Content>
                            <Link href={creators[0].url}>
                                <a>{creators[0].name}, </a>
                            </Link> 
                        </Content>
                        <Heading>Synopsis</Heading>
                        <Content>{synopsis}</Content>
                    </div>
                )
            })}
        </div>
    )
}

const Heading = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 30px;
    color: #3f41a2;
`

const Content = styled.p`
    font-size: 1rem;
    line-height: 180%;
    margin-bottom: 20px;
`

export default InfoPage;
