import { Grid, Image} from "@chakra-ui/react";
import Project from "../components/project";
import { GiSittingDog, GiWallet } from "react-icons/gi";
import { SiYoutubemusic } from "react-icons/si";
import { ImFilm } from "react-icons/im";
import Info from "@/components/Info";

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
      gap="10px"
      mt={[4, 0]}
    >
      <Image
        borderRadius='full'
        boxSize='250px'
        objectFit="cover"
        src='/mi foto.jpg'
        alt='Natalia Suarez'
        gridArea="i"
      />
      <Info/>     
      <Project icon={GiSittingDog} text="Individual Project Dogs" link="https://github.com/Natalia977/PI-Dogs" gridArea="p1" />
      <Project icon={GiWallet} text="Final Project Wallet MINT" link="https://github.com/Natalia977/PF-Wallet-Mint" gridArea="p2" />
      <Project icon={SiYoutubemusic} text="Music player" link="https://github.com/Natalia977/music_player" gridArea="p3" />
      <Project icon={ImFilm} text="Breaking Bad App" link="https://github.com/Natalia977/Breaking-Bad-App" gridArea="p4" />
      <Project icon={ImFilm} text="Administracion de Consorcios" link="https://github.com/Natalia977/Breaking-Bad-App" gridArea="p5" />
      {/* <Project text="project..." gridArea="p6" />
      <Project text="project..." gridArea="p7" />
      <Project text="project..." gridArea="p8" />
      <Project text="project..." gridArea="p9" />
      <Project text="project..." gridArea="p10" /> */}
      
    </Grid>
  )
}
