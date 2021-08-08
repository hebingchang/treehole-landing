import * as React from "react"
import {
  chakra,
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Heading,
  Flex,
  Button,
  HStack,
  PopoverTrigger,
  Popover,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader, PopoverBody, useToast,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import googlePlay from "./assets/google-play.png"
import appStore from "./assets/app-store.svg"
import MobileDetect from "mobile-detect"
import { useEffect, useState } from "react";
import axios from "axios";

interface Version {
  version: string;
  build: number;
  file: string;
}

export const HomePage = () => {
  let md = new MobileDetect(window.navigator.userAgent)
  let isAndroid = md.os() === 'AndroidOS'
  let isIOS = md.os() === 'iOS'

  const [androidVersion, setAndroidVersion] = useState<Version>();
  const [iOSVersion, setIOSVersion] = useState<Version>();
  const toast = useToast()

  useEffect(() => {
    if (!isIOS) {
      axios.get<Version>('https://s3.jcloud.sjtu.edu.cn/9fd44bb76f604e8597acfcceada7cb83-tongqu/treehole/android/version.json').then((res) => {
        setAndroidVersion(res.data)
      })
    }

    if (!isAndroid) {
      axios.get<Version>('https://s3.jcloud.sjtu.edu.cn/9fd44bb76f604e8597acfcceada7cb83-tongqu/treehole/ios/version.json').then((res) => {
        setIOSVersion(res.data)
      })
    }
  }, [])

  return <Box textAlign="center" fontSize="xl" height='100%'>
    <Grid minH="100%" p={3}>
      <ColorModeSwitcher justifySelf="flex-end" />
      <VStack spacing={8}>
        <Logo h="8em" pointerEvents="none" />
        <Heading as="h2" size="xl">
          亦可赛艇
        </Heading>
        <Text>
          又一个交大树洞
        </Text>
        <HStack alignItems='normal' spacing={8}>
          {!isAndroid && <Box pt='10px'>
            <chakra.img src={appStore} onClick={() => window.location.href = iOSVersion!.file} />
            <Text fontSize={13} color='grey' mt={2}>当前版本: {iOSVersion?.version}+{iOSVersion?.build}</Text>
          </Box>}
          {!isIOS && <Box>
            <chakra.img src={googlePlay} height='60px' onClick={() => toast({
              description: "Google Play 版本尚未发布，请耐心等待。",
              status: "warning",
              duration: 3000,
              isClosable: true,
            })} />
            <Text fontSize={14}>或<Button variant='link' fontSize={14}
                                         onClick={() => window.open(androidVersion?.file)}>直接下载 APK</Button></Text>
            <Text fontSize={13} color='grey' mt={2}>当前版本: {androidVersion?.version}+{androidVersion?.build}</Text>
          </Box>}
        </HStack>
      </VStack>
    </Grid>
  </Box>
}
