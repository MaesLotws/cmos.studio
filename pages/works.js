import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../componenets/section"
import { WorkGridItem } from "../componenets/grid-item";
import thumbVolDreams from '../public/images/works/VolDreamsEyeCatch.jpg'
import thumbCmos from '../public/images/cmos.jpg'

const Works = () => {
    return(
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="volitiledreams" title="Volitile Dreams" thumbnail={thumbVolDreams}>
                        Math-Rock/Jazz Fusion musical project
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="cmos" title="cmos" thumbnail={thumbCmos}>
                        Game and movie soundtracks
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works