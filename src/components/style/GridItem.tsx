import { Grid, styled } from "@mui/material";

export const PostListGridItem = styled(Grid)(({ theme }) => ({
    flexGrow: 0,
    [theme.breakpoints.down('sm')]: {
        flexBasis: '100%',
        maxWidth: '100%'
    },
    [theme.breakpoints.up('sm')]: {
        flexBasis: '33.33%',
        maxWidth: '33.33%'
    }
}));
export const CurrentPostGridItem = styled(Grid)(({ theme }) => ({
    flexGrow: 0,
    [theme.breakpoints.down('sm')]: {
        flexBasis: '100%',
        maxWidth: '100%'
    },
    [theme.breakpoints.up('sm')]: {
        flexBasis: '66.66%',
        maxWidth: '66.66%'
    }
}));