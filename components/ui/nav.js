import { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Fade, ScaleFade, Slide, SlideFade } from '@chakra-ui/react'
import { useDisclosure, useColorMode } from "@chakra-ui/react";
import { useTranslation } from 'next-i18next';
// icons
import { FaBars } from 'react-icons/fa'
import { MdOutlineExitToApp } from 'react-icons/md'
import { SiPhpmyadmin } from 'react-icons/si'
import { HiOutlineXMark } from 'react-icons/hi2'
import { BsClipboardData, BsCreditCard } from 'react-icons/bs'
import { AiOutlineUser, AiOutlineBarChart } from 'react-icons/ai'
import Mode from "components/button/mode";
import Locale from "components/button/language";
import { useRouter } from "next/router"
import { logOut } from "pages/api/_index";
// d90429
export default function Nav() {
    const { t } = useTranslation();
    const router = useRouter()
    const [click, setClick] = useState(false)
    const { isOpen, onToggle } = useDisclosure()
    const CloseFunc = () => {
        setClick(!click)
        onToggle()
    }
    const exitFunc = async () => {
        const user = await logOut()
        if (user.status === 200) {
            console.log('logouttt', user);
            router.push('/')
        }
    }
    return (
        <>
            <Box   >
                <Flex height='3.5rem' bg='#52796f' justifyContent='space-around' alignItems='center' >
                    <Flex p=''>
                        <Box color='white' cursor='pointer' ><SiPhpmyadmin size={50} /></Box>
                    </Flex>
                    <Flex display={{ base: 'none', lg: 'flex' }} justifyContent='space-evenly' >
                        <Text cursor='pointer' fontWeight='bold' color='white' _hover={{ color: '#e3d0d8' }} px='2' >User information</Text>
                        <Text cursor='pointer' fontWeight='bold' color='white' _hover={{ color: '#e3d0d8' }} px='2' >Cards</Text>
                        {/* <Text color='white' _hover={{ color: 'green.700' }}>logo</Text> */}
                        <Text cursor='pointer' fontWeight='bold' color='white' _hover={{ color: '#e3d0d8' }} px='2' >List of users</Text>
                        <Text cursor='pointer' fontWeight='bold' color='white' _hover={{ color: '#e3d0d8' }} px='2' >User Data with cards</Text>
                    </Flex>
                    <Flex justifyContent='center' width='10%' gap='2' alignItems='center'>
                        <Box display='flex'><Locale /></Box>
                        <Box p='2'  ><Mode /></Box>
                        <Box display={{ base: 'none', lg: 'flex' }} cursor='pointer' color='white' _hover={{ color: '#e63946' }}   ><MdOutlineExitToApp size={25} onClick={() => exitFunc()} /></Box>
                        <Box alignContent='center' display={{ base: 'flex', lg: 'none' }} cursor='pointer' _hover={{ color: '#e3d0d8' }} color='white'>

                            {!click ? <FaBars size={25} onClick={() => CloseFunc()} /> : <HiOutlineXMark size={25} onClick={() => CloseFunc()} />}
                        </Box>
                    </Flex>
                </Flex>
            </Box>
            <ScaleFade initialScale={1} in={isOpen} gap='6'>
                <Flex pos='fixed' flexDir='column' gap='6' left={click ? '0' : '-100%'} top='0' w='50%' bg='#354F52' height='full' p='5'>

                    <Box display='flex' alignItems='center' fontWeight='bold' color='#CAD2C5' >
                        <Box w='50%'><Text ml='2' fontWeight='bold' color='white' fontSize='1.2rem' cursor='pointer'>It's easy with us</Text></Box>
                        <Box w='50%' ><Text cursor='pointer' onClick={() => CloseFunc()} _hover={{ color: '#e3d0d8' }} display='flex' justifyContent='center'><HiOutlineXMark /></Text></Box>
                    </Box>
                    <Flex flexDir='column' justifyContent='center' gap='4'>
                        <Box borderBottom='1px' pb='2.5' _hover={{ color: '#e3d0d8' }} display='flex' alignItems='center' fontWeight='bold' color='white' w='80%' ><BsClipboardData size={25} /><Text pl='2' cursor='pointer'>User information</Text></Box>
                        {/*  */}
                        <Box borderBottom='1px' pb='2.5' _hover={{ color: '#e3d0d8' }} display='flex' alignItems='center' fontWeight='bold' color='white' w='80%' ><BsCreditCard size={25} /><Text pl='2' cursor='pointer'>Cards</Text></Box>
                        {/*  */}
                        <Box borderBottom='1px' pb='2.5' display='flex' alignItems='center' cursor='pointer' _hover={{ color: '#e3d0d8' }} fontWeight='bold' color='white' w='80%' ><AiOutlineUser size={25} /><Text pl='2' >List of users</Text></Box>
                        {/*  */}
                        <Box borderBottom='1px' pb='2.5' display='flex' alignItems='center' cursor='pointer' _hover={{ color: '#e3d0d8' }} fontWeight='bold' color='white' w='80%' ><AiOutlineBarChart size={25} /><Text pl='2' cursor='pointer'>User Data with cards</Text></Box>
                        {/*  */}
                        <Box display='flex' alignItems='center' cursor='pointer' _hover={{ color: '#e63946' }} fontWeight='bold' color='white' w='80%' ><MdOutlineExitToApp size={25} /><Text onClick={() => exitFunc()} pl='2' cursor='pointer'>Exit</Text></Box>
                    </Flex>

                </Flex>
            </ScaleFade>

        </>
    )
}