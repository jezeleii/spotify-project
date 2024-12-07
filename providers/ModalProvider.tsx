'use client'; 
import { useEffect, useState } from "react";
import Modal from "@/components/Modal"; 
import AuthModal from "@/components/AuthModal";

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
        </>
    ); 
}

export default ModalProvider; 