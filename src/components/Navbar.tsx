import { Box, Button, Flex, Wrap } from "@chakra-ui/react";
import Logo from "./Logo";
import Link from "next/link";

export default function Navbar() {
    return <Box borderBlockEndColor="light" borderBlockEndWidth="1px" borderBlockEndStyle="solid" py="10px" mb="30px">
        <Flex justifyContent="space-between">
            <Logo />
            <Wrap spacing='10px'>
                <Button><Link href="/">Home</Link></Button>
                <Button><Link href="/exemplo">Exemplo</Link></Button>
            </Wrap>
        </Flex>
    </Box>;
}