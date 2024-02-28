import { Box, Button, Flex, Link, Tooltip } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  InstagramLogo,
  InstagramMobileLogo,
  

} from "../../assets/Contants";
import { BiLogOut } from "react-icons/bi";
import useLogout from './../../hooks/useLogout';
import SidebarItems from "./SidebarItems";

const Sidebar = () => {


  const {  handleLogout,isLoggingOut } = useLogout();

  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      position={"sticky"}
      borderColor={"whiteAlpha.300"}
      py={8}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={"column"} gap={10} w="full" height={"full"}>
        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "none", md: "block" }}
          cursor={"pointer"}
        >
          <InstagramLogo />
        </Link>
        <Link
          to={"/"}
          as={RouterLink}
          p={2}
          display={{ base: "block", md: "none" }}
          borderRadius={6}
          _hover={{
            bg: "whiteAlpha.200",
          }}
          w={10}
          cursor={"pointer"}
        >
          <InstagramMobileLogo />
        </Link>
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
					<SidebarItems />
				</Flex>

        {/* log out */}
        <Tooltip
              hasArrow
              label={"Logout"}
              placement="right"
              ml={1}
              openDelay={500}
              display={{ base: "block", md: "none" }}
            >
              <Link
              						onClick={handleLogout}

                display={"flex"}
                to={'/auth'}
                as={RouterLink}
                alignItems={"center"}
                gap={4}
                _hover={{ bg: "whiteAlpha.400" }}
                borderRadius={6}
                mt={"auto"}
                p={2}
                w={{ base: "10", md: "full" }}
                justifyContent={{ base: "center", md: "flex-start" }}
              >
              <BiLogOut size={25} />
              <Button
							display={{ base: "none", md: "block" }}
							variant={"ghost"}
							_hover={{ bg: "transparent" }}
							isLoading={isLoggingOut}
						>
							Logout
						</Button>              </Link>
            </Tooltip>
      </Flex>
    </Box>
  );
};

export default Sidebar;
