import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Flex
} from '@chakra-ui/react'
import { useTranslation } from 'next-i18next';
import { useCard } from 'hook';
import { RiProfileLine } from 'react-icons/ri'
export default function CardTable() {
    const { data } = useCard()

    return (

        <Flex justifyContent='center' padding='5' my='4rem'>
            <TableContainer w='70%'>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>--</Th>
                            <Th>Username</Th>
                            <Th>CardName</Th>
                            <Th >CardNumber</Th>
                            <Th >ShabaNumber</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data?.data.Data.map((value, index) => {
                            return (
                                <Tr key={index}>
                                    <Td scope="row">{index + 1}</Td>
                                    <Td display='flex' alignItems='center' > {value.Username}</Td>
                                    <Td>{value.CardName}</Td>
                                    <Td>{value.CardNumber}</Td>
                                    <Td >{value.ShabaNumber}</Td>
                                </Tr>
                            )
                        })}
                    </Tbody>
                    <TableCaption  >Cards</TableCaption>

                </Table>
            </TableContainer>
        </Flex>
    )
}