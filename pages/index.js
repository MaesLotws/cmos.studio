import { Container, Box, Heading, Image } from "@chakra-ui/react"

const Page = () => {
    return(
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb = {6} align = "center">
                Hello, I&apos;m a web and game developer based in Canada
            </Box>
            <Box display={{md: 'flex'}}>
            <Box flexGrow = {1}>
            <Heading as="h2" variant="page-title">
                Cmos
            </Heading>
            <p>Musician, Web-Designer, Game-Developer</p>
            </Box>
            <Box flexShrink={0} mt={{base:4, md:0}} ml={{md: 6}} align = "center">
                <Image borderColor="whiteAlpha.800" borderWidth = {2} borderStyle = "solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/cmos.jpg" alt="cmos"/>
            </Box>
            </Box>
        </Container>
    )
}

export default Page 