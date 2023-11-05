import { useState } from 'react';
import { Avatar, Box, Flex, ChakraProvider } from '@chakra-ui/react';
import CompButton from './CompButton';
import { BiSolidDashboard } from 'react-icons/bi';
import { PiHandHeart } from 'react-icons/pi';
import { RiFileList3Line } from 'react-icons/ri';
import { TbReportMoney } from 'react-icons/tb';
import { Image } from '@chakra-ui/react';

function Navbar({ stateComponent }) {
  const [buttonStates, setButtonStates] = useState({
    button1: true,
    button2: false,
    button3: false,
    button4: false,
  });

  const toggleButton = (buttonKey) => {
    setButtonStates((prevState) => ({
      button1:
        buttonKey === 'button1'
          ? prevState.button1 == true
            ? true
            : !prevState.button1
          : false,
      button2:
        buttonKey === 'button2'
          ? prevState.button2 == true
            ? true
            : !prevState.button2
          : false,
      button3:
        buttonKey === 'button3'
          ? prevState.button3 == true
            ? true
            : !prevState.button3
          : false,
      button4:
        buttonKey === 'button4'
          ? prevState.button4 == true
            ? true
            : !prevState.button4
          : false,
    }));
    stateComponent(buttonKey);
  };

  return (
    <>
      <Flex
        h={'100vh'}
        px={'30px'}
        py={'50px'}
        direction={'column'}
        gap={'50px'}
        color={'white'}
        boxShadow={'0px 4px 10px #4147D520'}
      >
        <Box w={'64px'} alignSelf="center">
          <Image src="\Logo GKE.png" alt="Logo GKE" />
        </Box>
        <Flex
          direction={'column'}
          alignItems={'center'}
          justify={'space-between'}
          h="full"
        >
          <ChakraProvider>
            <Flex direction={'column'} gap={'20px'}>
              <CompButton
                setButton={() => toggleButton('button1')}
                ColorB={buttonStates.button1 ? '#D7E0FF' : '#FFFFFF'}
                TextColor={buttonStates.button1 ? '#4147D5' : '#9A9A9A'}
                SizeText="16px"
                fontType={buttonStates.button1 ? 'Bold' : 'Regular'}
                px="10px"
                py="10px"
                Alignitems="flex-start"
                LIcon={<BiSolidDashboard />}
                text={buttonStates.button1 ? 'Dashboard' : 'Dashboard'}
              />
              <CompButton
                setButton={() => toggleButton('button2')}
                ColorB={buttonStates.button2 ? '#D7E0FF' : '#FFFFFF'}
                TextColor={buttonStates.button2 ? '#4147D5' : '#9A9A9A'}
                SizeText="16px"
                fontType={buttonStates.button2 ? 'Bold' : 'Regular'}
                px="10px"
                py="10px"
                IconSpace="10px"
                Alignitems="flex-start"
                LIcon={<PiHandHeart />}
                text={buttonStates.button2 ? 'Product' : 'Product'}
              />
              <CompButton
                setButton={() => toggleButton('button3')}
                ColorB={buttonStates.button3 ? '#D7E0FF' : '#FFFFFF'}
                TextColor={buttonStates.button3 ? '#4147D5' : '#9A9A9A'}
                SizeText="16px"
                fontType={buttonStates.button3 ? 'Bold' : 'Regular'}
                IconSpace="10px"
                px="10px"
                py="10px"
                Alignitems="flex-start"
                LIcon={<RiFileList3Line />}
                text="Orders"
              />
              <CompButton
                setButton={() => toggleButton('button4')}
                ColorB={buttonStates.button4 ? '#D7E0FF' : '#FFFFFF'}
                TextColor={buttonStates.button4 ? '#4147D5' : '#9A9A9A'}
                SizeText="16px"
                fontType={buttonStates.button4 ? 'Bold' : 'Regular'}
                IconSpace="10px"
                px="10px"
                py="10px"
                Alignitems="flex-start"
                LIcon={<TbReportMoney />}
                text="Report"
              />
            </Flex>
            <Avatar bg="teal.500" size="sm" />
          </ChakraProvider>
        </Flex>
      </Flex>
    </>
  );
}

export default Navbar;
