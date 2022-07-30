import { AppBar, styled } from "@mui/material";

export const MyAppBar = styled(AppBar)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        minHeight: 48,
        paddingLeft: 16,
        paddingRigth: 16
    },
    [theme.breakpoints.up('sm')]: {
        minHeight: 64,
        paddingLeft: 24,
        paddingRight: 24
    },
    justifyContent: 'center'
}))