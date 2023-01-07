import {useState} from "react";

import {IconButton, Typography} from "@mui/material";
import {Box} from "@mui/system";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from "@mui/icons-material/Remove";

import {Colors} from "../../../styles/theme";

import {defineBound} from "../../../utils";

export default function ProductCount({min, max, amountRef}) {
    const limitItemCount = defineBound(min, max);
    const [value, setValue] = useState(1);
    amountRef.current = value;

    return (
        <Box display="flex">
            <IconButton
                sx={{
                    borderRadius: 0,
                    background: `${Colors.secondary}`,
                }}
                onClick={() => setValue(limitItemCount(value - 1))}
            >
                <RemoveIcon/>
            </IconButton>
            <Typography
                variant="h6"
                sx={{
                    border: `1px solid ${Colors.secondary}`,
                    p: 2,
                }}
            >
                {value}
            </Typography>
            <IconButton
                sx={{
                    borderRadius: 0,
                    background: `${Colors.secondary}`,
                }}
                onClick={() => setValue(limitItemCount(value + 1))}
            >
                <AddIcon/>
            </IconButton>
        </Box>
    );
}