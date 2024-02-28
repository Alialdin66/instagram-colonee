import { Box, Flex, Spinner } from "@chakra-ui/react";
import Sidebar from "../../componants/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { Navbar } from "../../componants/Navbar/Navbar";

const Pagelayout = ({ children }) => {
  const firebaseConfig = {
    apiKey: "AIzaSyB3vN1joK9N6Z2t8COc7TgvmN9viY6tiIo",
    authDomain: "insta-colone-eead0.firebaseapp.com",
    projectId: "insta-colone-eead0",
    storageBucket: "insta-colone-eead0.appspot.com",
    messagingSenderId: "677061978744",
    appId: "1:677061978744:web:c2817b027def7428c35b8d",
    measurementId: "G-6R8HWVZBT5"
  };
  const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
  const { pathname } = useLocation();
  const [user, loading] = useAuthState(auth);

  const canRenderSidebar = pathname !== "/auth" && user;
  const canRenderNavbar = !user && !loading && pathname !== "/auth";

	const checkingUserIsAuth = !user && loading;
	if (checkingUserIsAuth) return <PageLayoutSpinner />;

  return (
    <Flex flexDir={canRenderNavbar ? "column" : "row"}> 
      {canRenderSidebar ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}
			{canRenderNavbar ? <Navbar /> : null}

      <Box flex={1} w={{ base: "calc(100&-70px)", md: "calc(100&-240px)" }} mx={"Auto"}>
        {children}
      </Box>
    </Flex>
  );
};

export default Pagelayout;

const PageLayoutSpinner = () => {
	return (
		<Flex flexDir='column' h='100vh' alignItems='center' justifyContent='center'>
			<Spinner size='xl' />
		</Flex>
	);
};