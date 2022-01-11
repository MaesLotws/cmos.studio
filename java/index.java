import Container,Box,Button,Heading,Image,useColorModeValue,Link from"@chakra-ui/react"as chakraui;
import NextLink from'next/link';
import ChevronRightIcon from"@chakra-ui/icons";
import BioSection,BioYear from"../componenets/bio";

public class Page extends Section,Paragraph,Layout,NextLink{
    public static Page{
        Layout layout = new Layout();
        Container mainCont = new Container();
        Box descBox = new Box(borderRadius="lg", bg=chakraui.useColorModeValue('whiteAlpha.500', 'whiteAlpha.200'), p=3, mb = 6, align = "center");
        descBox("Hello, I&apos;m a web and game developer based in Canada");
        Box HeadingSet = new Box(display=(md=flex));
        Box HeadingSetGrow = new Box(flexGrow = 1);
        Heading HeadingText = new Heading(size="h2", variant="page-title");
        Heading.text("Cmos");
        Paragraph p = new Paragraph("Musician, Student, and Lain-enthusiast");
	Box imageBox = new Box(flexShrink=0,mt="base:4, md:0", ml="md:6", align="center";
	Image profileImage = new Image(borderColor="whiteAlpha.800", borderWidth=2, borderStyle="solid", maxWidth="100px", display="inline-block", borderRadius="full", src="/images/cmos.jpg" alt="cmos";
        imageBox.render(profileImage);
	
		<Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>
                        I&apos;m a young student with a deeply rooted passion for coding, problem solving, and music. Currently I&apos;m working on a game called {''}
                        <NextLink href="/works/yesteryear"><Link>Yesteryear </Link></NextLink>
                        and my musical project {''}
                        <NextLink href="/works/volitiledreams"><Link>Volitile Dreams</Link></NextLink>
                    </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href = "works/">
                        <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                            My Portfolio
                        </Button>
                    </NextLink>
                </Box>
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
            </Container>
            </Layout>
        )
    }
}

export default
Page
