'use client'; 

import Modal from "./Modal"; 
import useAuthModal from "@/hooks/useAuthModal";
import { 
    useSupabaseClient, 
    useSessionContext, 
 } from "@supabase/auth-helpers-react";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; 
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared"; 

const AuthModal = () => {
    const supabaseClient = useSupabaseClient();
    const router = useRouter(); 
    const { session } = useSessionContext();  
    const {} = useAuthModal(); 
    const { onClose, isOpen } = useAuthModal(); 

    //use effect to close the modal once registration is complete
    useEffect(() => {
        if (session){
            router.refresh(); 
            onClose(); 
        }

    }, [session, router, onClose])
    
    const onChange = (open: boolean) => {
        if(!open){ 
            onClose(); 
        }

    }
    return (
        <Modal
            title="Welcome back"
            description="Login to your account"
            isOpen={isOpen}
            onChange={onChange}
        >
            <Auth
                theme="dark"
                magicLink
                providers = {["github"]}
                supabaseClient={supabaseClient}
                appearance={{
                    theme: ThemeSupa, 
                    variables: {
                        default: {
                            colors: { 
                                brand: "#404040", 
                                brandAccent: "#22c55e"
                            }
                        }
                    }
                }}
            />
        </Modal>
    ); 
}

export default AuthModal; 