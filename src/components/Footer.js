/* eslint-disable jsx-a11y/anchor-is-valid */
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

const Footer = function () {
    return (
        <Grid container direction="row" justifyContent="space-between" alignItems="center" spacing={3} sx={{ py: 3 }}>
            <Grid item xs={12} md={6}>
                <Typography variant="body2" color="inherit" align="center">
                    {'Copyright © '} {new Date().getFullYear()}{' '}
                    <Link color="inherit" underline="hover" href="#" target="_blank" rel="noopener">
                        mjrgeorge.{' '}
                    </Link>
                    All rights reserved.
                </Typography>
            </Grid>
            <Grid item container direction="row" justifyContent="center" alignItems="center" xs={12} md={6} spacing={2}>
                <Grid item>
                    <Typography variant="body2" color="inherit" align="center">
                        <Link color="inherit" underline="hover" href="#">
                            Disclaimer
                        </Link>
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body2" align="center">
                        <Link color="inherit" underline="hover" href="#">
                            Privacy Policy
                        </Link>
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body2" align="center">
                        <Link color="inherit" underline="hover" href="#">
                            Terms of Services
                        </Link>
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body2" align="center">
                        <Link color="inherit" underline="hover" href="#">
                            Sitemap
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Footer;
