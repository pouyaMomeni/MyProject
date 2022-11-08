import { Button, Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Link from 'next/link'
const Locale = ({ children }) => {
    let router = useRouter()
    return (
        <>
            <Box direction='col' p='2.5' position='fixed' right='0' top='50%'>
                {router.locales.map((locale) => {
                    return (
                        <Button key={locale} _hover={{ bg: 'none', color: '#e3d0d8' }} display='flex' flexdire='column' width='1rem' colorScheme='gray' variant='ghost'><Link href={router.asPath} locale={locale} >{locale}</Link></Button>
                    )
                })}
            </Box>
            {children}
        </>
    )
}

export default Locale