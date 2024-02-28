import React from 'react'
import { Flex ,Container, Box } from '@chakra-ui/react'
import FeedPosts from './../../componants/FeedPosts/FeedPosts';
import SuggestsUsers from '../../componants/SuggestsUser/SuggestsUsers';



const HomePage = () => {
  return (
<Container maxW={"container.lg"}>
  <Flex gap={20}>
    <Box flex={2} py={10}       
>
         <FeedPosts />
    </Box>
    <Box flex={3} mr={20} 
      display={{base:"none",lg:"block"}} maxW={"300px"}
    
    >
      <SuggestsUsers/>

  </Box>
  </Flex>

</Container> 
 )
}

export default HomePage