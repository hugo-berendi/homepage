import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

// Skills
import BoxSkill from '../components/skill-box'
import vuejs from '../public/images/skills/vuejs.png'
import reactjs from '../public/images/skills/reactjs.png'
import csharp from '../public/images/skills/csharp.png'
import css3 from '../public/images/skills/css3.png'
import html5 from '../public/images/skills/html5.png'
import js from '../public/images/skills/javascript.png'
import dart from '../public/images/skills/dart.png'
import flutter from '../public/images/skills/flutter.webp'
import git from '../public/images/skills/git.png'
import java from '../public/images/skills/java.png'
import kotlin from '../public/images/skills/kotlin.png'
import nodejs from '../public/images/skills/nodejs.png'
import python from '../public/images/skills/python.png'
import pytorch from '../public/images/skills/pytorch.png'
import swift from '../public/images/skills/swift.png'

const Skills = () => (
  <Layout title="Skills">
    <Container>
      <Heading as="h3" fontSize={40} mb={4}>
        Skills
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6} marginBottom={10}>
        <BoxSkill h={50} src={vuejs} alt='vuejs' skillName='Vue.JS' href='https://vuejs.org/' />
        <BoxSkill h={50} src={reactjs} alt='reactjs' skillName='React.JS' href='https://vuejs.org/' />
        <BoxSkill h={65} src={csharp} alt='c#' skillName='C#' href='https://vuejs.org/' />
        <BoxSkill h={55} src={css3} alt='css3' skillName='CSS3' href='https://vuejs.org/' />
        <BoxSkill h={55} src={html5} alt='html5' skillName='HTML5' href='https://vuejs.org/' />
        <BoxSkill h={55} src={js} alt='js' skillName='JavaScript' href='https://vuejs.org/' />
        <BoxSkill h={60} src={dart} alt='dart' skillName='Dart' href='https://vuejs.org/' />
        <BoxSkill h={60} src={flutter} alt='flutter' skillName='Flutter' href='https://vuejs.org/' />
        <BoxSkill h={55} src={git} alt='git' skillName='Git' href='https://vuejs.org/' />
        <BoxSkill h={55} src={java} alt='java' skillName='Java' href='https://vuejs.org/' />
        <BoxSkill h={60} src={kotlin} alt='kotlin' skillName='Kotlin' href='https://vuejs.org/' />
        <BoxSkill h={55} src={nodejs} alt='nodejs' skillName='Node.JS' href='https://vuejs.org/' />
        <BoxSkill h={55} src={python} alt='python' skillName='Python' href='https://vuejs.org/' />
        <BoxSkill h={60} src={pytorch} alt='pytorch' skillName='Pytorch' href='https://vuejs.org/' />
        <BoxSkill h={55} src={swift} alt='swift' skillName='Swift' href='https://vuejs.org/' />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Skills
export { getServerSideProps } from '../components/chakra'