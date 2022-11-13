import { useForm } from 'react-hook-form'
import {
    FormErrorMessage,
    FormControl,
    Input,
    Button,
    Box,
    Flex,
    Text
} from '@chakra-ui/react'
import { MdOutlineFingerprint } from 'react-icons/md'
// ICONS
import { FaLinkedin } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { AiTwotoneMail } from 'react-icons/ai'
import { SiPhpmyadmin } from 'react-icons/si'
import Mode from 'components/button/mode'
// i18next
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router'
import { login } from 'pages/api/_index'
import Cookies from 'js-cookie'

export default function Login() {
    const router = useRouter();
    const { t } = useTranslation();
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()
    async function onSubmit(values) {
        const user = await login(values)
        if (user.status === 200) {
            Cookies.set('Authorization', user.data.Data.Token)
            console.log(" login ", user);
            router.push('/main')
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box height='100vh' display='flex' justifyContent='center' alignItems='center' color='black'>
                    <Flex bg='#52796f' width={{ base: '20rem', md: '40rem' }} rounded='xl' p='5' >
                        {/* side 1 */}
                        <Box width='50%' mx='4' display={{ base: 'none', md: 'block' }}  >
                            <Box display='flex' flexDirection='column' height='100%' justifyContent='center' alignItems='center' color='white'><SiPhpmyadmin size={120} />
                                <Text p='2' borderBottom='2px' fontWeight='bold'>{t("common:h1-login")}</Text>
                                <Text p='2' color='white' fontWeight='bold'>{t("common:h3-login")}</Text>
                            </Box>
                        </Box>
                        {/* side 2 */}
                        <FormControl isInvalid={errors.name} display='flex' flexDirection='column' justifyContent='center' gap='5' alignItems='center' width={{ base: "full", md: '50%' }} mt='6'>
                            <Flex justifyContent='center'>
                                <Box color='white' _hover={{ color: '#e3d0d8' }}><MdOutlineFingerprint size={40} /></Box>
                            </Flex>
                            {/* username inpute */}
                            <Flex direction='column' gap='1'>
                                <Input
                                    variant='flushed'
                                    autoComplete='off'
                                    py='5'
                                    textAlign='center'
                                    id='number'
                                    placeholder={t("common:input-number-login")}
                                    color='white'
                                    focusBorderColor='white'
                                    {...register('number', {
                                        required: t("common:require"),
                                        minLength: { value: 10, message: t("common:length") },
                                    })}
                                />
                                <FormErrorMessage>
                                    {errors.number && errors.number.message}
                                </FormErrorMessage>
                            </Flex>
                            {/* username inpute */}
                            {/* username inpute */}
                            <Flex direction='column' gap='1'>
                                <Input
                                    variant='flushed'
                                    type='password'
                                    py='5'
                                    color='white'
                                    textAlign='center'
                                    id='password'
                                    placeholder={t("common:input-password-login")}
                                    focusBorderColor='white'
                                    {...register('password', {
                                        required: t("common:require"),
                                        minLength: { value: 4, message: t("common:length") },
                                    })}
                                />
                                <FormErrorMessage>
                                    {errors.password && errors.password.message}
                                </FormErrorMessage>
                            </Flex>
                            {/* username inpute */}
                            <Flex justifyContent='center' >
                                <Button mt='4' bg='white' width='12rem' rounded='full' isLoading={isSubmitting} type='submit'>
                                    {t("common:login")}
                                </Button>
                            </Flex>
                            <Flex justifyContent='center' alignItems='center'>
                                <Text cursor='pointer' fontSize='11px' alignSelf='center' color='white' textDecoration='underline' _hover={{ color: '#e3d0d8' }}>{t("common:rule")}</Text>
                            </Flex>
                            <Flex justifyContent='center' gap='5' mt='0.5rem'>
                                <Box color='white' cursor='pointer' _hover={{ color: '#e3d0d8' }}><FaLinkedin size={22} /></Box>
                                <Box color='white' cursor='pointer' _hover={{ color: '#e3d0d8' }}><BsGithub size={22} /></Box>
                                <Box color='white' cursor='pointer' _hover={{ color: '#e3d0d8' }}><AiTwotoneMail size={22} /></Box>
                            </Flex>
                        </FormControl>
                    </Flex>
                </Box>
            </form>
            <Box pos='fixed' top='45%' right='0' >
                <Mode />
            </Box>
        </>
    )
}