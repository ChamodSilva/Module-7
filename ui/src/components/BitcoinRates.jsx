import { useState, useEffect } from "react";
import useQuery from "../hooks/useQuery";
import
{
    Box,
    Typography,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    TextField,
} from "@mui/material";

const currencies =
[
    { name: "USD", symbol: "$" },
    { name: "AUD", symbol: "$" },
    { name: "NZD", symbol: "$" },
    { name: "GBP", symbol: "£" },
    { name: "EUR", symbol: "€" },
    { name: "SGD", symbol: "$" },
];

function BitcoinRates()
{
    const [searchParams] = useSearchParams();
    const optionalCur = searchParams.get("currency")
    const [currency, setCurrency] = useState(optionalCur ? optionalCur : currencies[0].name);
    const [data, isLoading] = useQuery(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);
    const [currencySymbol, setCurrencySymbol] = useState(currencies[0].symbol);
    const [BitcoinRates, setBitcoinRates] = useState();
    const [userInput, setUserInput] = useState();


    useEffect(() =>
    {
        const getCurrencyFromQueryData = (data, key) =>
        {
            if (data && keu)
            {
                setResult(data.bitcoin[key]);
            }
        };
        
        getCurrencyFromQueryData(data, currency.toLowerCase());
        console.log("data", data);
    }, [data]);


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
