import { styled, Box } from "@mui/material";

export const PostBody = styled(Box)`
    @media (min-width: 600px) {
        border-radius: 4px;
    }
    background-color: white;
    color: rgba(0, 0, 0, 0.87);
    box-shadow: rgb(0, 0, 0 / 20%) 0px 2px 1px -1px;
    overflow: hidden;
    text-align: left;
`;