'use client'; 
import { useEffect, useState } from "react";

import AuthModal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal"

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false); 

    //never want to render a model if it is on the server side rendering
    useEffect(() => {
        setIsMounted(true); 
    },[]); 

    if (!isMounted){
        return null; 
    }

    return (
        <>
           <AuthModal/>
           <UploadModal/>
        </>
    ); 
}

export default ModalProvider; 