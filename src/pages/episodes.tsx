import { NextPage } from "next";
import styled from "@emotion/styled";
import { fetcher } from '../utils/fetcher';
import useSWR from 'swr';
import { Error, Loading } from '../components'
import { EpisodeData } from "../types/episodes";

const EpisodeIndexPage: NextPage = () => {
    const { data, error } = useSWR('https://api.sampleapis.com/futurama/episodes', fetcher);

    if(error) return <Error />
    if(!data) return <Loading />

    const handleClick = () => {
        window.scrollTo(0,0);
    }

    return (
        <Container>
            {data.map((episode: EpisodeData) => {
                const {number, title, writers, originalAirDate, desc, id } = episode;
                
                return (
                    <Card key={`futurama-episode-${id}`}>
                        <ul>
                            <Title key={`episode-title-${id}`}>{title}</Title>
                            <li key={`episode-number-${id}`}><Item>Episode</Item> #{number}</li>
                            <li key={`episode-airdate-${id}`}><Item>Aired Date</Item> {originalAirDate}</li>
                            <li key={`episode-writer-${id}`}><Item>Written by</Item> {writers}</li>
                            <Desc key={`episode-desc-${id}`}>{desc}</Desc>
                        </ul>
                    </Card>
                )
            })}
        </Container>
    )
}

const Container = styled.div`
    margin-top: 15px;
    display: grid;
    grid-template-columns: 1fr;
    box-sizing: border-box;
    gap: 20px;
    }
`

const Card = styled.div`
 
`
const Item = styled.dt`
`

const Title = styled.li`
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 10px;
`
const Desc = styled.li`

`

export default EpisodeIndexPage;
