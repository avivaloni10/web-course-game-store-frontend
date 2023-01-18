import { useState } from "react";

import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from "@mui/icons-material/Remove";

import { Colors } from "../../../styles/theme";

import { defineBound } from "../../../utils";

export default function ProductCount({ min, max, amountSetter, initialValue }) {
    if (max === 0) {
        min = 0;
    }
    const limitItemCount = defineBound(min, max);
    const [value, setValue] = useState(max === 0 ? 0 : initialValue || 1);

    const onAmountChanged = (newAmount) => {
        const limitedAmount = limitItemCount(newAmount);
        setValue(limitedAmount);
        amountSetter(limitedAmount);
    }

    return (
        <Box display="flex">
            <IconButton
                sx={{
                    borderRadius: 0,
                    background: `${Colors.secondary}`,
                }}
                onClick={() => { onAmountChanged(value - 1); }}
            >
                <RemoveIcon />
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
                onClick={() => onAmountChanged(value + 1)}
            >
                <AddIcon />
            </IconButton>
        </Box>
    );
}