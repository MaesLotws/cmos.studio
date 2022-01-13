import NextLink from 'next/link'
import { Container, Badge, Link, List, ListItem, Heading, Box } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../componenets/work"
import P from '../../componenets/paragraph'
import Layout from "../../componenets/layouts/article"
import Section from '../../componenets/section';

const Work = () => {
    return (
        <Layout title="Cmos">
            <Container>
                <Title>
                    cmos
                </Title>
                <P>
                    I&apos;ve been composing since 2020, and have since written the scores to both games and film. I&apos;m currently working on composing for my game YesterYear, a game collaboration with fellow game developer Daniel Graves, as well as an upcoming film entitled Dinner Ready For One (Dir. Max Couture)
                </P>
                <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                    frameBorder='0'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video' />
                <Section>
                    <Heading display='section-title' as="h3" fontSize={20} mb={4}>
                        Is This the Place?
                    </Heading>
                </Section>
            </Container>
        </Layout>
    )
}

export default Work