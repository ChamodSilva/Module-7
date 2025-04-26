import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const emojiStatus =
{
    happy: "happy",
    unhappy: "unhappy",
    throwTable: "throwTable",
};

export function DataProvider({children})
{
    const [emoji, setEmoji] = useState('');

    function displayEmojiHandler(emojiName)
    {
        switch (emojiName)
        {
            case emojiStatus.happy:
                setEmoji(':)');
                break;
            case emojiStatus.unhappy:
                setEmoji(':(');
                break;
            case emojiStatus.throwTable:
                setEmoji('╯° · °)╯︵ ┻━┻');
                break;
            default:
                setEmoji('@_@');
                break;
        }
    }

    return (
        <DataContext.Provider value={{ emoji, displayEmojiHandler}}>
            {children}
        </DataContext.Provider>
    );
};

export function useDataContext()
{
    return useContext(DataContext);
}