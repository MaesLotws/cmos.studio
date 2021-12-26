import { ChakraProvider } from "@chakra-ui/react"
import Layout from '../componenets/layouts/main'
import Fonts from "../componenets/fonts"
import theme from "../lib/theme"

const Website = ({Component, pageProps, router}) => {
    return(
        <ChakraProvider theme = {theme}>
            <Fonts/>
            <Layout router = {router}>
                <Component {... pageProps} key={router.route} />
            </Layout>
        </ChakraProvider>
    )
}

export default Website