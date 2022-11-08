import { Flex, Text, Box } from "@chakra-ui/react";
import { FaFacebookF, FaTwitter, FaWifi, FaGooglePlusG } from 'react-icons/fa'
import { BiCopyright } from 'react-icons/bi'
export default function Footer() {
    return (
        <Flex flexDir='column' height='19rem' bg='#354F52'>
            {/* 1 */}
            <Flex height='60%' padding='10' borderBottom='1px' borderBottomColor='white'>
                <Flex display={{ base: 'none', lg: 'flex' }} flexDir='column' justifyContent='center' alignItems='center' w='30%'>
                    <Text cursor='pointer' fontSize='29px' color='white' fontWeight='bold'>LOGO</Text>
                    <Text cursor='pointer' display='flex' alignItems='center' fontWeight='bold' fontSize='12px' color='white'>Pouya Momeni</Text>
                </Flex>
                <Flex justifyContent='space-evenly' alignItems='center' w={{ base: '100%', lg: '70%' }}>
                    <Box display='flex' flexDirection='column' gap='2' >
                        <Text _hover={{ color: '#e3d0d8' }} cursor='pointer' fontSize='12px' color='white' fontWeight='bold' >WEEBLY-THEMES</Text>
                        <Text _hover={{ color: '#e3d0d8' }} cursor='pointer' fontSize='12px' color='white' fontWeight='bold'>PRE-SALE FAQS</Text>
                        <Text _hover={{ color: '#e3d0d8' }} cursor='pointer' fontSize='12px' color='white' fontWeight='bold'>SUBMIT A TICKET</Text>
                    </Box>
                    <Box display='flex' flexDirection='column' gap='2'>
                        <Text _hover={{ color: '#e3d0d8' }} cursor='pointer' fontSize='12px' color='white' fontWeight='bold'>SERVICES</Text>
                        <Text _hover={{ color: '#e3d0d8' }} cursor='pointer' fontSize='12px' color='white' fontWeight='bold'>THEME TWEAK</Text>
                    </Box>
                    <Box display='flex' flexDirection='column' gap='2'>
                        <Text _hover={{ color: '#e3d0d8' }} cursor='pointer' fontSize='12px' color='white' fontWeight='bold'>SHOWCASE</Text>
                        <Text _hover={{ color: '#e3d0d8' }} cursor='pointer' fontSize='12px' color='white' fontWeight='bold'>WIDGETKIT</Text>
                        <Text _hover={{ color: '#e3d0d8' }} cursor='pointer' fontSize='12px' color='white' fontWeight='bold'>SUPPORT</Text>
                    </Box>
                    <Box display='flex' flexDirection='column' gap='2'>
                        <Text _hover={{ color: '#e3d0d8' }} cursor='pointer' fontSize='12px' color='white' fontWeight='bold'>ABOUT US</Text>
                        <Text _hover={{ color: '#e3d0d8' }} cursor='pointer' fontSize='12px' color='white' fontWeight='bold'>CONTACT US</Text>
                        <Text _hover={{ color: '#e3d0d8' }} cursor='pointer' fontSize='12px' color='white' fontWeight='bold'>AFFILIATES</Text>
                        <Text _hover={{ color: '#e3d0d8' }} cursor='pointer' fontSize='12px' color='white' fontWeight='bold'>RESOURCES</Text>
                    </Box>
                </Flex>
            </Flex>
            {/* 1 */}
            {/* 2 */}
            <Flex flexDir='column' justifyContent='center' alignItems='center' height='40%' gap='3'>
                <Flex gap='3' alignItems='center'>
                    <Box _hover={{ color: '#e3d0d8' }} cursor='pointer' color='white'><FaFacebookF size={25} /></Box>
                    <Box _hover={{ color: '#e3d0d8' }} cursor='pointer' color='white'><FaTwitter size={25} /></Box>
                    <Box _hover={{ color: '#e3d0d8' }} cursor='pointer' color='white'><FaWifi size={25} /></Box>
                    <Box _hover={{ color: '#e3d0d8' }} cursor='pointer' color='white'><FaGooglePlusG size={28} /></Box>
                </Flex>
                <Flex>
                    <Box color='white' mx='1'><BiCopyright size={20} /></Box>
                    <Text fontSize='12px' color='white' fontWeight='bold'>Copyright.All rights reserved</Text>
                </Flex>
            </Flex>
            {/* 2 */}
        </Flex>
    )

}