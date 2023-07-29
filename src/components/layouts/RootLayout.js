import Header from '../Header';
import Footer from '../Footer';
import { Box } from '@mui/material';
const RootLayout = ({children}) => {

  return (
    <Box>
      <Header/>
      <Box  minHeight="80vh">
      {children}
      </Box>
      <Footer/>
    </Box>
  );
};
export default RootLayout;
