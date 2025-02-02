import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Box, Image } from "@chakra-ui/react";
import { Button } from "../components/ui/button";
import { playlistMockUp } from "../services/mockUpData";
import { getUserPlaylist } from "../services/playlistService";

export default function SideBar() {
  const navigate = useNavigate();
  const [playlist, setPlaylist] = useState([]);

  const fetchPlaylistData = async () => {
     //insert your code here
     const response = await getUserPlaylist();
     console.log(response)
     setPlaylist(response)

  };

   useEffect(() => {
      fetchPlaylistData();
  }, []);

  return (
    <Box backgroundColor={"black"}>
      <Box
        bgColor={"gray.900"}
        width={"80px"}
        height={"calc(100vh - 140px)"}
        padding={"10px"}
        borderRadius={"8px"}
      >
        <Flex
          flexWrap={"wrap"}
          flexDir={"column"}
          gap={"15px"}
          justifyContent={"flex-start"}
        >
          {playlist.map((item) => (
            <Button
              key={item.id}
              variant="plain"
              display="block"
              color="gray"
              padding={"0px 0px 55px 0px"}
              onClick={() => navigate(`/playlist/${item.id}`)}
            >
              <Image src={item.cover} borderRadius={"8px"}></Image>
            </Button>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
