import {
    Container,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'

const Work = () => (
    <Layout title="Fumiko">
        <Container>
            <iframe src="http://2.59.156.228/" width="100vw" height="100vh"></iframe>
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'