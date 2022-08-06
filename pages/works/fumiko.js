import {
    Container,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
    <Layout title="Fumiko">
        <Container>
            <iframe src="http://2.59.156.228/"></iframe>
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'