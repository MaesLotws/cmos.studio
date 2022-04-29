import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../componenets/section"
import { WorkGridItem } from "../componenets/grid-item";

import thumbCmos from '../public/images/cmos.jpg'
import thumbLight from '../public/images/lightcrypt.jpg'
import Layout from "../componenets/layouts/article";

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem id="cmos" title="cmos" thumbnail={thumbCmos}>
                            Game and movie soundtracks
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works
