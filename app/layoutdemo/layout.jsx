

import { ChakraProvider, Flex, Box } from "@chakra-ui/react"


const tablist = [
    { label: "hime" },
    { label: "app" },
    { label: "plugin" },
    { label: "user" },
    { label: "database" },
]

export default function Layout({ children }) {
    return <>
        <Flex>

            <Flex w="110px" h="100vh" flexDirection={"column"} bg="black" gap={"20px"} alignItems={"center"}>
                {tablist.map((item, index) => <Box key={index} color="white" w="80px" h="80px" textAlign="center">{item["label"]}</Box>)}

            </Flex>
            <Flex flexGrow={1}>
                <ChakraProvider >
                    {children}
                </ChakraProvider>
            </Flex>

        </Flex>
    </>
}