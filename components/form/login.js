import { useForm } from 'react-hook-form'
import {
    FormErrorMessage,
    FormLabel,
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

// sm: '320px',
// md: '768px',
// lg: '960px',
// xl: '1200px',
// '2xl': '1536px',

export default function Login() {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()
    // values of form
    function onSubmit(values) {
        console.log(values);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box height='100vh' display='flex' justifyContent='center' alignItems='center' color='black'>
                <Flex bg='#52796f' width={{ base: '20rem', md: '40rem' }} rounded='xl' p='5' >
                    {/* side 1 */}
                    <Box width='50%' mx='4' display={{ base: 'none', md: 'block' }}  >
                        <Box display='flex' flexDirection='column' height='100%' justifyContent='center' alignItems='center' color='white'><SiPhpmyadmin size={120} />
                            <Text p='2' borderBottom='2px' fontWeight='bold'>Welcome to our Website</Text>
                            <Text p='2' color='white' fontWeight='bold'>We show you Data!</Text>
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
                                id='name'
                                placeholder='Username'
                                color='white'
                                focusBorderColor='white'
                                {...register('name', {
                                    required: 'This is required',
                                    minLength: { value: 4, message: 'Minimum length should be 4' },
                                })}
                            />
                            <FormErrorMessage>
                                {errors.name && errors.name.message}
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
                                placeholder='Password'
                                focusBorderColor='white'
                                {...register('password', {
                                    required: 'This is required',
                                    minLength: { value: 4, message: 'Minimum length should be 4' },
                                })}
                            />
                            <FormErrorMessage>
                                {errors.password && errors.password.message}
                            </FormErrorMessage>
                        </Flex>
                        {/* username inpute */}
                        <Flex justifyContent='center' >
                            <Button mt='4' bg='white' width='12rem' rounded='full' isLoading={isSubmitting} type='submit'>
                                Login
                            </Button>
                        </Flex>
                        <Flex justifyContent='center' alignItems='center'>
                            <Text cursor='pointer' fontSize='11px' alignSelf='center' color='white' textDecoration='underline' _hover={{ color: '#e3d0d8' }}>Our Terms and Privacy</Text>
                        </Flex>
                        <Flex justifyContent='center' mr={{ base: '0', md: '19rem' }} gap='5' mt='0.5rem'>
                            <Box color='white' cursor='pointer' _hover={{ color: '#e3d0d8' }}><FaLinkedin size={22} /></Box>
                            <Box color='white' cursor='pointer' _hover={{ color: '#e3d0d8' }}><BsGithub size={22} /></Box>
                            <Box color='white' cursor='pointer' _hover={{ color: '#e3d0d8' }}><AiTwotoneMail size={22} /></Box>
                        </Flex>
                    </FormControl>
                </Flex>
            </Box>
        </form>
    )
}