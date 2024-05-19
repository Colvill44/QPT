import { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { CircularProgress } from '@mui/material';
import './css/submitButton.css'



const SubmitButton = () => {

    // Use State for loading process
    const [searching, setSearching] = useState<any>(false);

    // Button on-click search function
    const submitSearch = () => {
        setSearching(!searching);
    }

    return (
        <div className='submit-button' onClick={submitSearch}>
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