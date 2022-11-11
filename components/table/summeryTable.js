import { Flex, Box, Text, Input } from '@chakra-ui/react'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineWarning } from 'react-icons/ai'
import { RiProfileLine } from 'react-icons/ri'
export default function Summary() {
    return (
        <Flex flexDir='column' p='10' border='1px'>
            <Flex w='full' justifyContent='center' borderBottom='1px'>
                <Box display='flex' p='5' justifyContent='center' w='30%'><CgProfile size={90} /></Box>
                <Text fontWeight='bold' w='70%' display='flex' alignItems='center' gap='2' ><AiOutlineWarning size={25} />You can see your brief Information about your acount</Text>
            </Flex>
            <Flex flexDir='column' gap='5' padding='5'>
                {/* row 1 */}
                <Flex w='full' gap='5' flexDirection={{ base: 'column', lg: 'row' }}>
                    <Box display='flex' alignItems='center' gap='2' w={{ base: 'full', lg: '50%' }}>
                        <Text display='flex' justifyContent='center' w='20%'>ID :</Text>
                        <Input w='80%' disabled />
                    </Box>
                    <Box display='flex' alignItems='center' gap='2' w={{ base: 'full', lg: '50%' }}>
                        <Text display='flex' justifyContent='center' w='20%'>Username :</Text>
                        <Input w='80%' disabled />
                    </Box>
                </Flex>
                {/* row 2 */}
                <Flex w='full' gap='5' flexDirection={{ base: 'column', lg: 'row' }}>
                    <Box display='flex' alignItems='center' gap='2' w={{ base: 'full', lg: '50%' }}>
                        <Text display='flex' justifyContent='center' w='20%'>Mobile :</Text>
                        <Input w='80%' disabled />
                    </Box>
                    <Box display='flex' alignItems='center' gap='2' w={{ base: 'full', lg: '50%' }}>
                        <Text display='flex' justifyContent='center' w='20%'>FirstName :</Text>
                        <Input w='80%' disabled />
                    </Box>
                </Flex>
                {/* row 3 */}
                <Flex w='full' gap='5' flexDirection={{ base: 'column', lg: 'row' }}>
                    <Box display='flex' alignItems='center' gap='2' w={{ base: 'full', lg: '50%' }}>
                        <Text display='flex' justifyContent='center' w='20%'>LastName :</Text>
                        <Input w='80%' disabled />
                    </Box>
                    <Box display='flex' alignItems='center' gap='2' w={{ base: 'full', lg: '50%' }}>
                        <Text display='flex' justifyContent='center' w='20%'>Email :</Text>
                        <Input w='80%' disabled />
                    </Box>
                </Flex>


            </Flex>
            <Flex borderTop='1px' p='5' justifyContent='center' mt='5'><Text display='flex' gap='2' fontWeight='bold' fontStyle='italic'><RiProfileLine size={25} />Profile</Text></Flex>
        </Flex>
    )
}