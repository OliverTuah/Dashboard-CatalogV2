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
} from "@chakra-ui/react";
import CompButton from "./CompButton";
import FlexibleShape from "./FlexibleShape";

function DataProduct(data, limit) {
  const datatable = [
    {
      id: "#1",
      name: "Jesus T-Shirt",
      quantity: 200,
      price: "Rp400.000",
      text: "Pending",
    },
    {
      id: "#2",
      name: "Hoodie Jesus",
      quantity: 200,
      price: "Rp400.000",
      text: "Process",
    },
    {
      id: "#3",
      name: "Cap Love GKE",
      quantity: 200,
      price: "Rp400.000",
      text: "On-Delivery",
    },
    {
      id: "#4",
      name: "Stay With Me",
      quantity: 200,
      price: "Rp20.000",
      text: "Cancel",
    },
    {
      id: "#5",
      name: "Halo GKE",
      quantity: 200,
      price: "Rp150.000",
      text: "On-Delivery",
    },
  ];

  return (
    <>
      <Flex direction={"column"}>
        <FlexibleShape
          w="1100px"
          h="fit-content"
          px="20px"
          py="20px"
          direc="column"
          color="white"
          shadow="0px 0px 10px #4147D520"
          round="12px"
          gap="20px"
          content={
            <>
              <Text
                px={"20px"}
                fontSize={"16px"}
                fontWeight={"Bold"}
                textColor={"#333333"}>
                Product Order
              </Text>
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
                    {datatable.map((item) => (
                      <Tr key={item.id}>
                        <Td>{item.id}</Td>
                        <Td>{item.name}</Td>
                        <Td>{item.quantity}</Td>
                        <Td>{item.price}</Td>
                        <Td>
                          <CompButton
                            ColorB={
                              item.text === "Pending"
                                ? "#9B51E010"
                                : item.text === "Process"
                                ? "#F2C94C10"
                                : item.text === "On-Delivery"
                                ? "#21965310"
                                : item.text === "Cancel"
                                ? "#EB575710"
                                : "#FFFFFF"
                            }
                            TextColor={
                              item.text === "Pending"
                                ? "#9B51E0"
                                : item.text === "Process"
                                ? "#F2C94C"
                                : item.text === "On-Delivery"
                                ? "#219653"
                                : item.text === "Cancel"
                                ? "#EB5757"
                                : "#FFFFFF"
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
            </>
          }
        />
      </Flex>
    </>
  );
}

export default DataProduct;
