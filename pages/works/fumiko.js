import {
    Container,
    Badge,
    List,
    ListItem,
    Heading,
    Center,
    Image
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { Title, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="Fumiko">
      <Container>
        <Title>
          Fumiko <Badge>2022-????</Badge>
        </Title>
        <Center my={6}>
          <Image src="/images/" alt="icon" />
        </Center>
        <P>
          Fumiko is a all in one discord bot!
        </P>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Typescript, Node.js, Discord.js</span>
          </ListItem>
          <ListItem>
            <Meta>Last update</Meta>
            <span>None</span>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Media coverage</Center>
        </Heading>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'