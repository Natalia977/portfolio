import { Grid, Heading, VStack, Text, Image } from "@chakra-ui/react";
import Project from "../components/project";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { GiSittingDog, GiWallet } from "react-icons/gi";
import { SiYoutubemusic } from "react-icons/si";
import { ImFilm } from "react-icons/im"

export default function Home() {
  return (
    <Grid
      placeItems="center"
      p={[3, 3, 0]}
      templateColumns={["1fr", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
      templateAreas={[
        '"i" "t" "p1" "p2" "p3" "p4" "p5" "p6" "p7" "p8" "p9" "p10"',
        '"i t" "p1 p2" "p3 p4" "p5 p6" "p7 p8" "p9 p10"',
        '"p1 p2 p3 p4" "p5 i t p6" "p7 p8 p9 p10"',
      ]}
      minH="100vh"
    >
      <Image
        borderRadius='full'
        boxSize='150px'
        src='/mi foto.jpg'
        alt='Natalia Suarez'
        gridArea="i"
      />
      <VStack gridArea="t" >
        <Heading>Hi! I'm Natalia Suarez</Heading>
        <Text>I'm Full Stack Developer and this is my portfolio</Text>
        
      </VStack>
      <Project 
      icon={AiFillLinkedin} 
      text="My linkedIn profile" 
      link="https://www.linkedin.com/in/natalia-suarez-full-stack-developer/?locale=en_US" 
      gridArea="p5" 
      />
      <Project icon={AiFillGithub} text="My GitHub profile" link="https://github.com/Natalia977/Natalia977" gridArea="p3" />
      <Project icon={GiSittingDog} text="Individual Project Dogs" link="https://github.com/Natalia977/PI-Dogs" gridArea="p1" />
      <Project icon={GiWallet} text="Final Project Wallet MINT" link="https://github.com/Natalia977/PF-Wallet-Mint" gridArea="p2" />
      <Project icon={SiYoutubemusic} text="Music player" link="https://github.com/Natalia977/music_player" gridArea="p4" />
      <Project icon={ImFilm} text="Breaking Bad App" link="https://github.com/Natalia977/Breaking-Bad-App" gridArea="p6" />
      {/* <Project text="project 7" gridArea="p7" />
      <Project text="project 8" gridArea="p8" />
      <Project text="project 9" gridArea="p9" />
      <Project text="project 10" gridArea="p10" /> */}
      <VStack>
        <Text>Contact me!</Text>
        <Text></Text>
      </VStack>
    </Grid>
  )
}
