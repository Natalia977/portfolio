import { Grid, Heading, VStack,Text, Image } from "@chakra-ui/react";
import Project from "../components/project";

export default function Home() {
  return (
    <Grid placeItems="center" p={3}>
      <Image
        borderRadius='full'
        boxSize='150px'
        src='/mi foto.jpg'
        alt='Natalia Suarez'
      />
      <VStack>
        <Heading>Natalia Suarez</Heading>
        <Text>Este es mi portfolio</Text>
      </VStack>
      <Project text="proyecto 1" />
      <Project text="proyecto 2" />
      <Project text="proyecto 3" />
    </Grid>
  )
}
