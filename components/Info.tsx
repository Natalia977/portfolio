import { Heading, VStack, Text, Link, Icon, HStack } from "@chakra-ui/react";
import { FiLinkedin, FiTwitter, FiMail, FiGithub } from "react-icons/fi"

export default function Info() {
    return (

        <VStack
            spacing={[6, 3]}
            gridArea="t"
            align={["center", "flex-start"]}
            w="full"
            p={5}
        >
            <Heading>Hi! I am Natalia Suarez</Heading>
            <Text align={["center", "left"]}>
                I am License in Information Systems and Full Stack Developer. This is my portfolio. Here you will find some of my projects
            </Text>
            <HStack spacing={6} >
                <Link href="https://www.linkedin.com/in/natalia-suarez-full-stack-developer/?locale=en_US" target="_blank" >
                    <Icon as={FiLinkedin} boxSize="30px" />
                </Link>
                <Link href="https://twitter.com/natu977_suarez" target="_blank">
                    <Icon as={FiTwitter} boxSize="30px" />
                </Link>
                <Link href="mailto:natu977@gmail.com" target="_blank">
                    <Icon as={FiMail} boxSize="30px" />
                </Link>
                <Link href="https://github.com/Natalia977/Natalia977" target="_blank">
                    <Icon as={FiGithub} boxSize="30px" />
                </Link>
            </HStack>
        </VStack>
    )
}