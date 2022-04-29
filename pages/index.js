import { Container, Box, Button, Heading, Image, Link, ListItem, List, Icon } from "@chakra-ui/react"
import Section from "../componenets/section"
import Paragraph from "../componenets/paragraph"
import Layout from "../componenets/layouts/article"
import NextLink from 'next/link'
import { BioSection, BioYear } from "../componenets/bio"
import { IoLogoInstagram, IoLogoYoutube, IoLogoTwitter, IoLogoGithub } from 'react-icons/io5'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Cmos
                        </Heading>
                        <p>Musician, Student, Programmer</p>
                    </Box>
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
                        <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/cmos.jpg" alt="cmos" />
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>
                        I&apos;m a young student with a deeply rooted passion for coding, problem solving, and music. Currently I&apos;m doing compositions for films, {''}
                        <NextLink href="/works/cmos"><Link>under my own name</Link></NextLink>
                    </Paragraph>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>
                            2005
                        </BioYear>
                        Born in Calgary, AB
                    </BioSection>
                    <BioSection>
                        <BioYear>
                            2011
                        </BioYear>
                        Began coding for the first time through a publicly funded youth-program
                    </BioSection>
                    <BioSection>
                        <BioYear>
                            2019
                        </BioYear>
                        Began teaching young children basic coding through the same program I began learning with
                    </BioSection>
                    <BioSection>
                        <BioYear>
                            2020
                        </BioYear>
                        Enrolled at Sir Winston Churchill High School and it&apos;s computer science program
                    </BioSection>
                    <BioSection>
                        <BioYear>
                            2021
                        </BioYear>
                        Accepted into the prestigious International Baccalaureate program for computer science
                    </BioSection>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Reach me
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/MaesLotws" target="_blank">
                                <Button variant="ghost" leftIcon={<Icon as={IoLogoGithub} />}>
                                    Github
                                </Button>
                            </Link>
                            <Link href="https://www.youtube.com/channel/UCIHwnT3fN3LNXq4Vg-20aKQ" target="blank">
                                <Button variant="ghost" leftIcon={<Icon as={IoLogoYoutube} />}>
                                    YouTube
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page
