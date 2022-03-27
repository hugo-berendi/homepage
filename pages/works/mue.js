import {
  Container,
  Badge,
  Link,
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
  <Layout title="amembo">
    <Container>
      <Title>
        Mue <Badge>2022-????</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/" alt="icon" />
      </Center>
      <P>
        Mue is a free and open-source no copyright music player
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>MacOS, Windows 10/11, Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React.js</span>
        </ListItem>
        <ListItem>
          <Meta>Download</Meta>
          <Link href="https://www.example.com/">
            v0.0.0
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>None</span>
        </ListItem>
        <ListItem>
          <Meta>Manual</Meta>
          <Link href="https://info.lokilp66.dev/mue/">wiki</Link>
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
