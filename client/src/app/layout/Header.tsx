import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
    sendTheme: (checked: boolean) => void;
}

export default function Header({ sendTheme }: Props) {

    return (
        <AppBar position="static" sx={{ mb: 4 }}>
            <Toolbar>
                <Typography variant='h6'>RE-STORE</Typography>
                <Switch color='secondary' onChange={(event) => { sendTheme(event.target.checked) }} />
            </Toolbar>
        </AppBar>
    )
}