import { Box, Typography } from "@mui/material";
import Slides from "./components/Slides";
import Shows from "./components/Shows";

export default function Home() {
    return (
        <Box>
            <Slides />
            <Shows />
        </Box>
    )
}