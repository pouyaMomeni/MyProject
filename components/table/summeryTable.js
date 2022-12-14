import { Flex, Box, Text, Input } from '@chakra-ui/react'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineWarning } from 'react-icons/ai'
import { RiProfileLine } from 'react-icons/ri'
import { useSummary } from 'hook'
import { useTranslation } from 'next-i18next';
export default function Summary() {
    const { data } = useSummary()
    const { t } = useTranslation();
    return (
        <Flex flexDir='column' p='10' border='1px'>
            <Flex w='full' justifyContent='center' borderBottom='1px'>
                <Box display='flex' p='5' justifyContent='center' w='30%'><CgProfile size={90} /></Box>
                <Text fontWeight='bold' w='70%' display='flex' alignItems='center' gap='2' ><AiOutlineWarning size={25} />{t("common:warn-sum")}</Text>
            </Flex>
            <Flex flexDir='column' gap='5' padding='5'>
                {/* row 1 */}
                <Flex w='full' gap='5' flexDirection={{ base: 'column', lg: 'row' }}>
                    <Box display='flex' alignItems='center' gap='2' w={{ base: 'full', lg: '50%' }}>
                        <Text display='flex' justifyContent='center' w='20%'>{t("common:id-sum")} :</Text>
                        <Input value={data?.data.Data.UserID} w='80%' disabled />
                    </Box>
                    <Box display='flex' alignItems='center' gap='2' w={{ base: 'full', lg: '50%' }}>
                        <Text display='flex' justifyContent='center' w='20%'>{t("common:username-sum")} :</Text>
                        <Input value={data?.data.Data.Username} w='80%' disabled />
                    </Box>
                </Flex>
                {/* row 2 */}
                <Flex w='full' gap='5' flexDirection={{ base: 'column', lg: 'row' }}>
                    <Box display='flex' alignItems='center' gap='2' w={{ base: 'full', lg: '50%' }}>
                        <Text display='flex' justifyContent='center' w='20%'>{t("common:mobile-sum")} :</Text>
                        <Input value={data?.data.Data.Mobile} w='80%' disabled />
                    </Box>
                    <Box display='flex' alignItems='center' gap='2' w={{ base: 'full', lg: '50%' }}>
                        <Text display='flex' justifyContent='center' w='20%'>{t("common:firstName-sum")} :</Text>
                        <Input value={data?.data.Data.FirstName} w='80%' disabled />
                    </Box>
                </Flex>
                {/* row 3 */}
                <Flex w='full' gap='5' flexDirection={{ base: 'column', lg: 'row' }}>
                    <Box display='flex' alignItems='center' gap='2' w={{ base: 'full', lg: '50%' }}>
                        <Text display='flex' justifyContent='center' w='20%'>{t("common:lastName-sum")} :</Text>
                        <Input value={data?.data.Data.LastName} w='80%' disabled />
                    </Box>
                    <Box display='flex' alignItems='center' gap='2' w={{ base: 'full', lg: '50%' }}>
                        <Text display='flex' justifyContent='center' w='20%'>{t("common:email-sum")} :</Text>
                        <Input value={data?.data.Data.Email} w='80%' disabled />
                    </Box>
                </Flex>


            </Flex>
            <Flex borderTop='1px' p='5' justifyContent='center' mt='5'><Text display='flex' gap='2' fontWeight='bold' fontStyle='italic'><RiProfileLine size={25} />{t("common:profile-sum")}</Text></Flex>
        </Flex>
    )
}