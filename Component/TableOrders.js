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
import OverlayButtonOrders from './OverlayButtonOrders';
import Filter from './Filter';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useState } from 'react';

function TableOrders({ stateComponent }) {
  const datatable = [
    {
      id: '#1',
      name: 'Jesus T-Shirt',
      quantity: 200,
      price: 'Rp400.000',
      text: 'Pending',
    },
    {
      id: '#2',
      name: 'Hoodie Jesus',
      quantity: 200,
      price: 'Rp400.000',
      text: 'Process',
    },
    {
      id: '#3',
      name: 'Cap Love GKE',
      quantity: 200,
      price: 'Rp400.000',
      text: 'On-Delivery',
    },
    {
      id: '#4',
      name: 'Stay With Me',
      quantity: 200,
      price: 'Rp20.000',
      text: 'Cancel',
    },
    {
      id: '#5',
      name: 'Halo GKE',
      quantity: 200,
      price: 'Rp150.000',
      text: 'On-Delivery',
    },
  ];
  const [selectedFilter, setSelectedFilter] = useState([]);

  const [filter1, setFilter1] = useState(false);
  const [filter2, setFilter2] = useState(false);
  const [filter3, setFilter3] = useState(false);
  const [filter4, setFilter4] = useState(false);

  const handleFilter1Click = () => {
    setFilter1(!filter1);
    if (filter1) {
      setSelectedFilter(
        selectedFilter.filter((filter) => filter !== 'Pending')
      );
    } else {
      setSelectedFilter([...selectedFilter, 'Pending']);
    }
  };

  const handleFilter2Click = () => {
    setFilter2(!filter2);
    if (filter2) {
      setSelectedFilter(
        selectedFilter.filter((filter) => filter !== 'Process')
      );
    } else {
      setSelectedFilter([...selectedFilter, 'Process']);
    }
  };

  const handleFilter3Click = () => {
    setFilter3(!filter3);
    if (filter3) {
      setSelectedFilter(
        selectedFilter.filter((filter) => filter !== 'On-Delivery')
      );
    } else {
      setSelectedFilter([...selectedFilter, 'On-Delivery']);
    }
  };

  const handleFilter4Click = () => {
    setFilter4(!filter4);
    if (filter4) {
      setSelectedFilter(selectedFilter.filter((filter) => filter !== 'Cancel'));
    } else {
      setSelectedFilter([...selectedFilter, 'Cancel']);
    }
  };

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
              Order
            </Text>
            <Flex w="1119px" justifyContent="space-between">
              <Flex alignItems="center" gap="20px">
                <Text
                  fontSize={'16px'}
                  fontWeight={'medium'}
                  textColor={'#333333'}
                >
                  Filter:
                </Text>
                <Flex gap="20px">
                  <Filter
                    setButton={handleFilter1Click}
                    ColorB={filter1 ? '#9B51E010' : '#F1F1F1'}
                    TextColor={filter1 ? '#9B51E0' : '#333333'}
                    SizeText="16px"
                    fontType="medium"
                    px="10px"
                    py="10px"
                    Alignitems="center"
                    RIcon={filter1 ? <AiOutlineCheckCircle /> : <></>}
                    text="Pending"
                  />
                  <Filter
                    setButton={handleFilter2Click}
                    ColorB={filter2 ? '#F2C94C10' : '#F1F1F1'}
                    TextColor={filter2 ? '#F2C94C' : '#333333'}
                    SizeText="16px"
                    fontType="medium"
                    px="10px"
                    py="10px"
                    Alignitems="center"
                    RIcon={filter2 ? <AiOutlineCheckCircle /> : <></>}
                    text="Process"
                  />
                  <Filter
                    setButton={handleFilter3Click}
                    ColorB={filter3 ? '#21965310' : '#F1F1F1'}
                    TextColor={filter3 ? '#219653' : '#333333'}
                    SizeText="16px"
                    fontType="medium"
                    px="10px"
                    py="10px"
                    Alignitems="center"
                    RIcon={filter3 ? <AiOutlineCheckCircle /> : <></>}
                    text="On-Delivery"
                  />
                  <Filter
                    setButton={handleFilter4Click}
                    ColorB={filter4 ? '#EB575710' : '#F1F1F1'}
                    TextColor={filter4 ? '#EB5757' : '#333333'}
                    SizeText="16px"
                    fontType="medium"
                    px="10px"
                    py="10px"
                    Alignitems="center"
                    RIcon={filter4 ? <AiOutlineCheckCircle /> : <></>}
                    text="Cancel"
                  />
                </Flex>
              </Flex>
              <OverlayButtonOrders />
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
                        <Th>Receipt No</Th>
                        <Th>Product Name</Th>
                        <Th>Quantity</Th>
                        <Th>Total Price</Th>
                        <Th>Status</Th>
                        <Th>Action</Th>
                      </Tr>
                    </Thead>
                    <Tbody color="#333333" fontWeight="regular">
                      {datatable
                        .filter(
                          (item) =>
                            !selectedFilter ||
                            selectedFilter.length === 0 ||
                            selectedFilter.includes(item.text)
                        )
                        .map((item) => (
                          <Tr key={item.id}>
                            <Td>{item.id}</Td>
                            <Td>{item.name}</Td>
                            <Td>{item.quantity}</Td>
                            <Td>{item.price}</Td>
                            <Td>
                              <CompButton
                                ColorB={
                                  item.text === 'Pending'
                                    ? '#9B51E010'
                                    : item.text === 'Process'
                                    ? '#F2C94C10'
                                    : item.text === 'On-Delivery'
                                    ? '#21965310'
                                    : item.text === 'Cancel'
                                    ? '#EB575710'
                                    : '#FFFFFF'
                                }
                                TextColor={
                                  item.text === 'Pending'
                                    ? '#9B51E0'
                                    : item.text === 'Process'
                                    ? '#F2C94C'
                                    : item.text === 'On-Delivery'
                                    ? '#219653'
                                    : item.text === 'Cancel'
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

export default TableOrders;
