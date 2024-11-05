import { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { CircularProgress } from '@mui/material';
import OpenAI from "openai";
import './css/submitButton.css'

interface SubmitProps {
    results: any;
    setResults: any;
    prompt: any;
    setPrompt: any;
}

const SubmitButton = (props: SubmitProps) => {

    const { prompt, results, setResults } = props;

    // Use State for loading process
    const [searching, setSearching] = useState<any>(false);

    // Button submission api request
    const submitPrompt = async () => {
        setSearching(true);
        const openai = new OpenAI({ apiKey: process.env.REACT_APP_OPENAI_API_KEY, dangerouslyAllowBrowser: true });
        const result = await openai.chat.completions.create({
            messages: [{ "role": "user", "content": prompt }],
            model: "gpt-3.5-turbo",
            max_tokens: 250,
            temperature: 0.7
        })
        console.log(result.choices[0])
        setResults(result.choices[0])
        setSearching(false);
        console.log(results)
    };

    return (
        <div className='submit-button' onClick={submitPrompt}>
            {searching ? (
                <div className='loading-spinner'>
                    <CircularProgress color="inherit" size={25} />
                </div>
            ) : (
                <SendIcon className='send-icon' />
            )}

        </div>
    );
};

export default SubmitButton;