import {
  Flex,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  Icon,
  Button,
  Box,
} from '@chakra-ui/react';
import CompButton from './CompButton';
import FlexibleShape from './FlexibleShape';
import { AiOutlineFolderAdd } from 'react-icons/ai';
import OverlayButtonAdd from './OverlayButtonAdd';

function TableProducts() {
  const datatable = [
    {
      id: '#1402',
      name: 'Jesus T-Shirt',
      quantity: 200,
      price: 'Rp400.000',
      text: 'Medium-Stock',
    },
    {
      id: '#1403',
      name: 'Hoodie Jesus',
      quantity: 200,
      price: 'Rp400.000',
      text: 'Medium-Stock',
    },
    {
      id: '#1404',
      name: 'Cap Love GKE',
      quantity: 200,
      price: 'Rp400.000',
      text: 'Full-Stock',
    },
    {
      id: '#1405',
      name: 'Stay With Me',
      quantity: 200,
      price: 'Rp20.000',
      text: 'Low-Stock',
    },
    {
      id: '#1406',
      name: 'Halo GKE',
      quantity: 200,
      price: 'Rp150.000',
      text: 'Low-Stock',
    },
  ];

  return (
    <>
      <Flex mt={'50px'} gap={'20px'} direction={'column'}>
        <Box w="100%" overflow="hidden">
          <Flex
            gap={'20px'}
            direction="column"
            overflowY="auto"
            height="80vh"
            css={{
              scrollbarWidth: 'none',
              '::-webkit-scrollbar': {
                display: 'none',
              },
            }}
          >
            <Text fontSize={'24px'} fontWeight={'medium'} textColor={'#333333'}>
              Store Revenue
            </Text>
            <Flex w="1119px" justifyContent="flex-end">
              <OverlayButtonAdd />
            </Flex>
            <FlexibleShape
              w="1119px"
              h="fit-content"
              px="20px"
              py="20px"
              direc="row"
              color="white"
              shadow="0px 0px 10px #4147D520"
              round="12px"
              content={
                <TableContainer h="100%" w="100%" maxH="100%" maxW="100%">
                  <Table variant="simple">
                    <Thead color="#333333">
                      <Tr>
                        <Th>Product ID</Th>
                        <Th>Product Name</Th>
                        <Th>Quantity</Th>
                        <Th>Price</Th>
                        <Th>Status</Th>
                        <Th>Action</Th>
                      </Tr>
                    </Thead>
                    <Tbody color="#333333" fontWeight="regular">
                      {datatable.map((item) => (
                        <Tr key={item.id}>
                          <Td>{item.id}</Td>
                          <Td>{item.name}</Td>
                          <Td>{item.quantity}</Td>
                          <Td>{item.price}</Td>
                          <Td>
                            <CompButton
                              ColorB={
                                item.text === 'Full-Stock'
                                  ? '#27AE6010'
                                  : item.text === 'Medium-Stock'
                                  ? '#F2C94C10'
                                  : item.text === 'Low-Stock'
                                  ? '#EB575710'
                                  : '#FFFFFF'
                              }
                              TextColor={
                                item.text === 'Full-Stock'
                                  ? '#27AE60'
                                  : item.text === 'Medium-Stock'
                                  ? '#F2C94C'
                                  : item.text === 'Low-Stock'
                                  ? '#EB5757'
                                  : '#FFFFFF'
                              }
                              SizeText="16px"
                              fontType="semibold"
                              w="135px"
                              px="10px"
                              py="10px"
                              Alignitems="center"
                              text={item.text}
                            />
                          </Td>
                          <Td>
                            <Button>See Detail</Button>
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              }
            />
          </Flex>
        </Box>
      </Flex>
    </>
  );
}

export default TableProducts;
