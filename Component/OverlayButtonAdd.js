import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Icon,
  Input,
  Flex,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react';
import { AiOutlineFolderAdd } from 'react-icons/ai';
import { BiSolidCloudUpload } from 'react-icons/bi';

function OverlayButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        bgColor="#21965310"
        textColor="#219653"
        fontSize="16px"
        fontWeight="Bold"
        iconSpacing="10px"
        justifyContent="center"
        px="10px"
        py="10px"
        leftIcon={<Icon as={AiOutlineFolderAdd} boxSize="18px" />}
      >
        Add Product
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex gap="20px" px="20px" py="20px">
              <Flex shadow="0px 0px 10px #4147D520" round="12px">
                <Flex
                  w="250px"
                  h="full"
                  alignItems="center"
                  justifyContent="center"
                  bgColor="#21965310"
                  color="#219653"
                  direction="column"
                >
                  <Icon as={BiSolidCloudUpload} boxSize="42px" color />
                  <Text
                    textColor="#323232"
                    fontSize="12px"
                    fontWeight="regular"
                    textAlign="center"
                    iconSpacing="10px"
                  >
                    Upload Your Image
                  </Text>
                  <Input
                    type="file"
                    height="100%"
                    width="100%"
                    position="absolute"
                    top="0"
                    left="0"
                    opacity="0"
                    aria-hidden="true"
                    accept="image/*"
                  />
                </Flex>
              </Flex>
              <Flex direction="column" w="full">
                <FormControl>
                  <FormLabel>Product Name</FormLabel>
                  <Input border="1px solid #333333" size="md" mb="10px" />
                  <FormLabel>Description Product</FormLabel>
                  <Input border="1px solid #333333" size="md" mb="10px" />
                  <FormLabel>Product Type</FormLabel>
                  <Select
                    border="1px solid #333333"
                    placeholder="------"
                    mb="10px"
                  >
                    <option>Hoodie</option>
                    <option>T-Shirt</option>
                    <option>Cap</option>
                    <option>Accessories</option>
                  </Select>
                  <FormLabel>Quantity & Size Product</FormLabel>
                  <Flex gap="10px">
                    <InputGroup>
                      <InputLeftAddon w="80px" children="S" />
                      <Input border="1px solid #333333" size="md" mb="10px" />
                    </InputGroup>
                    <InputGroup>
                      <InputLeftAddon w="80px" children="M" />
                      <Input border="1px solid #333333" size="md" mb="10px" />
                    </InputGroup>
                    <InputGroup>
                      <InputLeftAddon w="80px" children="L" />
                      <Input border="1px solid #333333" size="md" mb="10px" />
                    </InputGroup>
                  </Flex>
                  <Flex gap="10px">
                    <InputGroup>
                      <InputLeftAddon w="80px" children="XL" />
                      <Input border="1px solid #333333" size="md" mb="10px" />
                    </InputGroup>
                    <InputGroup>
                      <InputLeftAddon w="80px" children="XXL" />
                      <Input border="1px solid #333333" size="md" mb="10px" />
                    </InputGroup>
                    <InputGroup>
                      <InputLeftAddon w="80px" children="XXXL" />
                      <Input border="1px solid #333333" size="md" mb="10px" />
                    </InputGroup>
                  </Flex>
                  <FormLabel>Price</FormLabel>
                  <InputGroup>
                    <InputLeftAddon w="50px" children="Rp" />
                    <Input border="1px solid #333333" size="md" mb="10px" />
                  </InputGroup>
                </FormControl>
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="#EB5757"
              bgColor="#EB5757"
              mr="10px"
              onClick={onClose}
            >
              Batal
            </Button>
            <Button bgColor="#21965310" textColor="#219653">
              Save Product
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default OverlayButton;
