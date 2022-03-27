import styled from '@emotion/styled'
import Image from 'next/image'
import { Text, useColorModeValue } from "@chakra-ui/react"

const SkillBox = styled.span`
    font-size: 30px;
    display: fixed;
    align-items: center;
    line-height: 20px;
    padding: 15px;
    float: left;
    width: 100%; 
    height: 100%;
    border: 5px solid;
    border-radius: var(--chakra-radii-md);
`

const BoxSkill = ({ src, alt, skillName, href, h }) => {
    return (
        <a href={href} target="_blank" rel="noreferrer">
            <SkillBox borderColor={useColorModeValue('#202023', '#f0e7db')}>
                <Image src={src} alt={alt} width={60} height={h} />
                <Text marginRight={10}>{ skillName }</Text>    
            </SkillBox>
        </a>
    )
}

export default BoxSkill