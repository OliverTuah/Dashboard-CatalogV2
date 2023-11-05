import { Flex, Text } from '@chakra-ui/react';
import FlexibleShape from './FlexibleShape';

function ProductRecap({
  BgColor,
  IconColor,
  SrcIcon,
  TextProduct,
  TextType,
  JumlahProduct,
}) {
  return (
    <>
      <Flex
        w={'352px'}
        h={'44px'}
        gap={'20px'}
        px={'10px'}
        py={'10px'}
        direction={'column'}
      >
        <Flex justify={'space-between'}>
          <Flex gap={'20px'}>
            <FlexibleShape
              w="44px"
              h="44px"
              xposition="center"
              yposition="center"
              bgColor={BgColor}
              round="8px"
              iconsrc={SrcIcon}
              iconsize="24px"
              coloricon={IconColor}
            />
            <Flex direction={'column'}>
              <Text fontSize="16px" fontWeight="medium" textColor="#333333">
                {TextProduct}
              </Text>
              <Text fontSize="14px" fontWeight="regular" textColor="#BDBDBD">
                {TextType}
              </Text>
            </Flex>
          </Flex>
          <Flex>
            <Text fontSize="14px" fontWeight="regular" textColor="#333333">
              {JumlahProduct}
            </Text>
            <Text fontSize="14px" fontWeight="regular" textColor="#BDBDBD">
              /month
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default ProductRecap;
