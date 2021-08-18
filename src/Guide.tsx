import * as React from "react"
import { Container, Heading, ListItem, UnorderedList } from "@chakra-ui/react"

export const GuidePage = () => {
  return <Container maxW="container.lg" pt={12} pb={12}>
    <Heading pb={12}>使用指南</Heading>
    <Heading as="h2" size="lg" pb={8} id="concept">
      机制
    </Heading>
    <Heading as="h3" size="md" pb={6}>
      匿名身份
    </Heading>
    <UnorderedList spacing={3}>
      <ListItem>
        亦可赛艇是<b>前台匿名、后台实名</b>的社区。使用 jAccount 登录后，社区后台将记录用户的 jAccount 帐号，但帐号在前端不可见。
      </ListItem>
      <ListItem>
        当新用户登录时，系统会自动为用户发放一个<b>匿名身份</b>，用户使用匿名身份进行发帖及回帖操作。
      </ListItem>
      <ListItem>
        匿名身份是可再生资源。用户可以随时领取新的匿名身份，但<b>每月最多领取 10 个匿名身份且同时存在的匿名身份不超过 5 个</b>。此限制在每月的 1 日 0 时重置。
      </ListItem>
      <ListItem>
        领取新的身份时，有 20% 的概率可以领取到由 2 个英文单词拼接而成的，可读性较高的身份名。
      </ListItem>
      <ListItem>
        用户也可以随时删除匿名身份。需要注意该身份的历史发帖/回帖<b>不会</b>随身份的删除而删除。
      </ListItem>
    </UnorderedList>

    <Heading as="h3" size="md" pb={6} pt={8}>
      版面
    </Heading>
    <UnorderedList spacing={3}>
      <ListItem>
        社区分为多个版面，请根据各个版面的主题及版规发帖。
      </ListItem>
      <ListItem>
        「<b>深夜食堂</b>」是一个特殊的版面。「深夜食堂」版面及主题帖仅在北京时间每日的 22 时至次日 6 时可见，其余时间不可见、不可访问、不可发帖或回帖。
      </ListItem>
    </UnorderedList>

    <Heading as="h3" size="md" pb={6} pt={8}>
      发帖 / 回帖
    </Heading>
    <UnorderedList spacing={3}>
      <ListItem>
        发帖及回帖时请注意友善发言，<b>禁止发布涉及严重色情、涉政负面、严重辱骂、电话号码 / 微信 / QQ 以及所有违法违规内容</b>。
      </ListItem>
      <ListItem>
        主题帖及回帖使用 <b>Markdown</b> 语法渲染。如果你不熟悉 Markdown，请在编辑完成后预览渲染效果。
      </ListItem>
    </UnorderedList>

    <Heading as="h3" size="md" pb={6} pt={8}>
      管理
    </Heading>
    <UnorderedList spacing={3}>
      <ListItem>
        亦可赛艇不是一个强管理的社区。用户发布的每一个主题帖与回帖都会经过商业的内容安全基础设施进行机器审查。
      </ListItem>
      <ListItem>
        通过机器审查并不意味着内容合法。如果发现恶意绕过机器审查发表违规内容等行为，用户将受到封禁帐号等严厉惩罚。涉嫌违反法律法规的，我们将配合有关部门对相关帐号进行调查。
      </ListItem>
    </UnorderedList>

    <Heading as="h2" size="lg" pb={8} pt={12} id="punishment">
      惩罚
    </Heading>

    <Heading as="h3" size="md" pb={6}>
      封禁匿名身份
    </Heading>
    <UnorderedList spacing={3}>
      <ListItem>
        匿名身份被封禁的效果等同于用户手动删除。
      </ListItem>
    </UnorderedList>

    <Heading as="h3" size="md" pb={6} pt={8}>
      禁言帐号
    </Heading>
    <UnorderedList spacing={3}>
      <ListItem>
        禁言帐号分为暂时禁言与永久禁言。
      </ListItem>
      <ListItem>
        帐号禁言期间，所有匿名身份将无法发言。
      </ListItem>
    </UnorderedList>

    <Heading as="h3" size="md" pb={6} pt={8}>
      封禁帐号
    </Heading>
    <UnorderedList spacing={3}>
      <ListItem>
        帐号无法进行包括发帖、浏览帖子等任何操作。
      </ListItem>
    </UnorderedList>
  </Container>
}
