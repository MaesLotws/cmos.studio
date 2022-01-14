import { Container, Heading, List, ListItem, Badge, Link } from "@chakra-ui/react"
//import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title } from "../../componenets/work"
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
                <Section>
                    <Heading display='section-title' as="h3" fontSize={20} mb={4}>
                        Is This the Place?
                        <Badge>
                            2022
                        </Badge>
                    </Heading>
                    <P>An indie art film about coming to terms with life (Dir. Max Couture)</P>
                    <List>
                        <ListItem>
                            <iframe width="560"
                                height="315"
                                src="https://www.youtube.com/embed/CW1SSUy4Z7E"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen />
                        </ListItem>
                        <ListItem>
                            <iframe width="560"
                                height="315"
                                src="https://www.youtube.com/embed/ioATJOUF2Ec"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen />
                        </ListItem>
                    </List>
                </Section>
                <Section>
                    <Heading display="section-title" as="h3" fontSize={20} mb={4}>
                        The Flautist
                        <Badge>
                            2021
                        </Badge>
                    </Heading>
                    <P>An unreleased and since canceled game I started in 2021</P>
                    <List>
                        <ListItem>
                            <iframe width="560"
                                height="315"
                                src="https://www.youtube.com/embed/videoseries?list=PLOkbq6zWxtbx0JVmOtQ8MGaRWRwwvUkem"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen />
                        </ListItem>
                    </List>
                </Section>
                <Section>
                    <Heading display="section-title" as="h3" fontSize={20} mb={4}>
                        Bullet-Hell Academy
                        <Badge>
                            2021
                        </Badge>
                    </Heading>
                    <P>Grade 10 Final Compsci Project. {''}
                        <Link href="https://github.com/MaesLotws/BulletHellAcademy">You can see it here.</Link>
                    </P>
                    <List>
                        <ListItem>
                            <iframe width="560"
                                height="315"
                                src="https://www.youtube.com/embed/xecsm2r0rko"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen />
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    )
}

export default Work