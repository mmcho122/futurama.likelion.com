import { NextPage } from "next";
import { fetcher } from "../utils/fetcher";
import useSWR from "swr";
import { CharacterData } from "../types/characters";
import styled from "@emotion/styled";
import { Error, Loading } from "../components"
import { API_ENDPOINT } from '../constants'

const CharacterPage: NextPage =  () => {
    const route = 'characters';
    const { data, error } = useSWR(`${API_ENDPOINT}${route}`, fetcher);

    if(error) return <Error />
    if(!data) return <Loading />

    return (
        <div>
            <Container>
                {data.map((character: CharacterData) => {
                    const { id, images, name, sayings, gender, species, homePlanet, occupation } = character;
                    const randomNum = Math.floor(Math.random() * sayings.length);
                    return (
                        <CardContainer key={`futurama-character-${id}`}>
                            <Card>
                                <ImageContainer>
                                    <ProfilePic src={images.main} alt="" />
                                </ImageContainer>
                                <h1>{name.first} {name.middle} {name.last}</h1>
                            </Card>
                            <Overlay>
                                <ItemList>
                                    <Name>{name.first} {name.middle} {name.last}</Name>
                                    <li>{gender}</li>
                                    <li>{species}</li>
                                    <li>{homePlanet}</li>
                                    <li>{occupation}</li>
                                <blockquote>
                                    <p>“{sayings[randomNum]}”</p>
                                </blockquote>
                                </ItemList>
                            </Overlay>
                        </CardContainer>
                    )    
                })}
            </Container>
        </div>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
`

const Overlay = styled.div`
   
`

const ItemList = styled.ul`
   
`

const Card = styled.div`
    &:hover {
        display:none;
    }
`
const ImageContainer = styled.div`
    
`
const ProfilePic = styled.img`
    max-height: 416px;
    object-fit: contain;
    
`

const CardContainer = styled.div`
    
`

const Name = styled.li`

    
`

export default CharacterPage;