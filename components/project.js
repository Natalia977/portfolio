import { Box } from "@chakra-ui/react";

export default function Project({ text }) {
    return (
        <Box w="full" h="100px" _hover={{background: "#dedcd9"}}>
            {text}
        </Box>
    );

}