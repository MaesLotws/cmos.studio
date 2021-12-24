import { Container, Box, Heading } from "@chakra-ui/react"

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
            </Box>
        </Container>
    )
}

export default Page 