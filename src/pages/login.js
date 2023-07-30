import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button } from '@mui/material';
import RootLayout from '@/components/layouts/RootLayout';
import { signIn } from "next-auth/react";

const loginPage = () => {

    return (
        <Box
            sx={{
                marginTop: { xs: 4, sm: 8 },
                marginBottom: { xs: 4, sm: 8 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Container component="main" maxWidth="sm">
                <Box sx={{ border: '1px solid gray', p: { xs: 6, sm: 9 } }}>
                    <Typography variant="h3" align="center" pb={6}>
                        Login
                    </Typography>
                    <Button variant="outlined" color="warning" size="large" fullWidth startIcon={<GitHubIcon fontSize="large" />}
                        onClick={() => signIn('github', {
                            callbackUrl: 'https://simple-pc-builder-client.vercel.app/'
                        })} >
                        Log In With Github
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default loginPage;


loginPage.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}
