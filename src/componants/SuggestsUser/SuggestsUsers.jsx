import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import SuggestHeader from "./SuggestHeader";
import SuggestsUser from "./SuggestsUser";
import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers";

const SuggestsUsers = () => {
  const { isLoading, suggestedUsers } = useGetSuggestedUsers();

	// optional: render loading skeleton
	if (isLoading) return null;
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestHeader />
      {suggestedUsers.length !== 0 && (
				<Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
					<Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
						Suggested for you
					</Text>
					<Text fontSize={12} fontWeight={"bold"} _hover={{ color: "gray.400" }} cursor={"pointer"}>
						See All
					</Text>
				</Flex>
			)}
      {suggestedUsers.map((user) => (
				<SuggestsUser user={user} key={user.id} />
			))}


      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"self-end"}>
        &copy; All rights reserved 2024 | Made By{" "}
        <Link href="/" target="_blank" color={"blue.500"} fontSize={14}>
          Alialdin
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestsUsers;
