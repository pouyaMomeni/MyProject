import { useState } from "react"
import { useColorMode, Button } from "@chakra-ui/react"
import { IoMdColorPalette } from 'react-icons/io'

export default function Mode() {
    const { toggleColorMode } = useColorMode()
    return (
        <Button colorScheme='gray' _hover={{ bg: 'none', color: '#e3d0d8' }} variant='ghost' onClick={toggleColorMode}>
            <IoMdColorPalette size={25} />
        </Button>
    )
}