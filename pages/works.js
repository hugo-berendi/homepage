import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

// Thumbnails
import thumbMue from '../public/card.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={40} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.6}>
          <WorkGridItem id="fumiko" thumbnail={thumbMue} title="Fumiko">
            Fumiko is a all in one discord bot!
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
