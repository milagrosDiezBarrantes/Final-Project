import { Button } from '@mui/material'
import { styled } from "@mui/material/styles";

const MyButton = styled(Button)(() => ({
    borderRadius: '18px',
    color: 'primary',
    variant: "contained" 
}));

export default MyButton