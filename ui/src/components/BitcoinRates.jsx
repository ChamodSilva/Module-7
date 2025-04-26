import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
} from "@mui/material";

const currencies = [
  { name: "USD", symbol: "$" },
  { name: "AUD", symbol: "$" },
  { name: "NZD", symbol: "$" },
  { name: "GBP", symbol: "£" },
  { name: "EUR", symbol: "€" },
  { name: "SGD", symbol: "$" },
];
import useQuery from "../hooks/useQuery";

function BitcoinRates()
{
    const [currency, setCurrency] = useState(currencies[0].name);
    const [currencySymbol, setCurrencySymbol] = useState(currencies[0].symbol);
    // fetch URL: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}
    
    // State to capture the return

    const handleCurrencySelection = (e) =>
    {
        let matchedItem = currencies.find((curr) =>
            {
                if (curr.name === e.target.value) {
                return curr.symbol;
                }
            });
        setCurrencySymbol(matchedItem.symbol);
        setCurrency(e.target.value);
    };
    
    const currencyOptions = currencies.map((curr) =>
    (
        <MenuItem value={curr.name} key={curr.name}>
            {curr.name}
        </MenuItem>
    ));

    return (
        <>
            <Typography sx={{ padding: "20px" }}>Choose currency:</Typography>
            <Box>
                <TextField
                sx={{ m: 1 }}
                id="outlined-basic"
                placeholder={currencySymbol}
                label="Amount"
                variant="outlined"
                />
                <FormControl sx={{ m: 1 }}>
                    <InputLabel id="currency-rates-label">Currency</InputLabel>
                    <Select
                        labelId="currency-rates-label"
                        id="currency-rates"
                        value={currency}
                        label="Currency"
                        onChange={handleCurrencySelection}
                    >
                        {currencyOptions}
                    </Select>
                </FormControl>
            </Box>
        </>
    );
};
export default BitcoinRates;