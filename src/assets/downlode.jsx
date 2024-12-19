import React from 'react';
import nkdPdf from './NKD.pdf'; // Adjust the path if necessary
import "../Pages/Aboutpage.css"

const DownloadButton = () => (
    <button>
        <a href={nkdPdf} className='resumebtn' download>
        Resume
    </a>
    </button>
);

export default DownloadButton;
