import styled from '@emotion/styled'
import Image from 'next/image'
import { Text } from "@chakra-ui/react"

const SkillBox = styled.span`
    font-weight: bold;
    font-size: 20px;
    display: fixed;
    align-items: center;
    height: 50px;
    width: 50%;
    line-height: 20px;
    padding: 10px;
    float: left;
`

const Skill = ({ src, alt, skillName, href }) => {
    return (
        <a href={href} target="_blank" rel="noreferrer">
            <SkillBox>
                <Image src={src} alt={alt} width={30} height={25} />
                <Text>{ skillName }</Text>    
            </SkillBox>
        </a>
    )
}

export default Skill