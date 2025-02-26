import { useSessionContext } from "@supabase/auth-helpers-react";
import { useEffect, useMemo, useState } from "react";
import { Song } from "@/types";
import toast from "react-hot-toast";

const useGetSongById = (id?: string) => {
    const [isLoading, setIsLoading] = useState(false);
    const [song, setSong] = useState<Song | undefined>(undefined);
    const { supabaseClient } = useSessionContext();

    useEffect(() => {
        if (!id) {
            setSong(undefined);
            return;
        }

        setIsLoading(true);

        const fetchSong = async () => {
            const { data, error } = await supabaseClient
                .from("songs")
                .select("*")
                .eq("id", id)
                .single(); // Fetch a single record

            if (error) {
                setIsLoading(false);
                return toast.error(error.message);
            }

            setSong(data as Song);
            setIsLoading(false);
        };

        fetchSong();
    }, [id, supabaseClient]); 

    return useMemo(() => ({
        song,
        isLoading
    }), [song, isLoading]);
};

export default useGetSongById;
