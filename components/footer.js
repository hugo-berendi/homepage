import { Box } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Hugo Berendi. <br></br>
      inspired by {' '}<NextLink href="https://www.craftz.dog/"><Link href="https://www.craftz.dog/" target="_blank" >craftz.dog</Link></NextLink>
    </Box>
  )
}

export default Footer
