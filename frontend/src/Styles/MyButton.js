import { Button } from '@mui/material'
import { styled } from "@mui/material/styles";

const MyButton = styled(Button)(() => ({
    borderRadius: '10px',
    color: 'secondary',
    background: 'secondary'
}));

export default MyButton