import LockIcon from '@mui/icons-material/Lock';
import { IconButton, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import React from 'react';
import { useRouter } from 'next/router';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.h2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.grey[300],
    height: '200px',
}));

const CategorySection = function () {
    const router = useRouter();
    const services = [
        {
            id: 1,
            service: 'Processor',
            image: '',
            link: `/product_by_category/Processor`,
        },
        {
            id: 2,
            service: 'Motherboard',
            image: '',
            link: `/product_by_category/Motherboard`,
        },
        {
            id: 3,
            service: 'RAM',
            image: '',
            link: `/product_by_category/RAM`,
        },
        {
            id: 4,
            service: 'Power Supply Unit',
            image: '',
            link: `/product_by_category/Power Supply Unit`,
        },
        {
            id: 5,
            service: 'Storage Device',
            image: '',
            link: `/product_by_category/Storage Device`,
        },
        {
            id: 6,
            service: 'Monitor',
            image: '',
            link: `/product_by_category/Monitor`,
        },
    ];

    const handleRoute = (pageUrl) => {
        router.push(pageUrl);
    };

    return (
        <Box py={3}>
            <Grid container direction="column">
                <Grid item>
                    <Typography variant="h4" align='center' py={2}>
                       Category Section
                    </Typography>
                </Grid>
                <Grid item container spacing={2}>
                    {services.map((item) => (
                        <Grid item xs={6} lg={3} key={item.id}>
                            <Item>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: '100%',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => handleRoute(item.link)}
                                >
                                    <Typography variant="h5" color="GrayText" gutterBottom>
                                        {item.service}
                                    </Typography>
                                </Box>
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Box>
    );
};

export default CategorySection;
