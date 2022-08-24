import * as React from "react"
import { Container, Heading, ListItem, UnorderedList } from "@chakra-ui/react"

export const ClassTablePage = () => {
  return <Container maxW="container.lg" pt={12} pb={12}>
    <Heading pb={12}>交课表</Heading>
    <Heading as="h3" size="md" pb={6}>
      隐私政策
    </Heading>
    <UnorderedList spacing={3}>
    <ListItem>
        在使用同步功能时，应用将引导用户使用 jAccount 登录，并连接到官方提供的 API 获取用户的课程信息。
      </ListItem>
      <ListItem>
        在这一过程中，应用不连接除学校官方 API 之外的服务，也不记录用户的 Access Token。
      </ListItem>
    </UnorderedList>
  </Container>
}
