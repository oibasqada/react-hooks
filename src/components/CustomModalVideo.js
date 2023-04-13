import React, {useState} from 'react';
import ModalVideo from "react-modal-video/src";

const CustomModalVideo = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <div>
            <ModalVideo chanel='youtube' autoplay is Open={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)}/>
        </div>
    );
};

export default CustomModalVideo;