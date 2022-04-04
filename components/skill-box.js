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
`

const BoxSkill = ({ src, alt, skillName, href, h }) => {
    return (
        <a href={href} target="_blank" rel="noreferrer">
            <SkillBox
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                borderRadius="lg"
            >
                <Image src={src} alt={alt} width={60} height={h} />
                <Text marginRight={10}>{ skillName }</Text>    
            </SkillBox>
        </a>
    )
}

export default BoxSkill
