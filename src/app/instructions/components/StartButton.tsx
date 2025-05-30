'use client'
import React, { ChangeEvent, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ClipLoader from 'react-spinners/ClipLoader';
import setPreferenceService from '@/constants/setPreference';
import { toast } from 'react-toastify';

interface StartButtonProps {
    selectedLanguage: string;
}

export default function StartButton({ selectedLanguage }: StartButtonProps) {
    const [start, setStart] = useState<string>("");
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [userId, setUserId] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedUserId = localStorage.getItem('userId');
            if (storedUserId) {
                setUserId(storedUserId);
            }
        }
    }, []);
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStart(event.target.value);
    };
    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };
    function languageValue(selectedLanguage : number ) : string {
        switch(selectedLanguage) {
            case 3: return "C";
            case 4: return "Cpp";
            case 5: return "Python";
            case 6: return "Java";
        }
        return "";
    }
    const handleStart = async () => {
        if (selectedLanguage) {
            setLoading(true);
            try {
                const response = await setPreferenceService(userId, selectedLanguage);
                if (response === "Error fetching the response") {
                    throw new Error("Error fetching the response");
                }
                const language = languageValue(parseInt(selectedLanguage)); 
                localStorage.setItem("language", language); 
                router.push('/start');                 
            } catch (error) {
                toast.error("Error occurred! Refresh the page and try again.");
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <>
            <div className='flex text-base mb-5 mt-5 pl-3 pr-4 font-bold'>
                <input type='checkbox' className='rounded w-5 h-5 mt-0.5' onChange={handleCheckboxChange} />
                <span className='pl-2'>
                    I hereby confirm that I have read all the instructions and am ready to begin my test. Write START in the Text Box to enable Start Button
                </span>
            </div>

            <div className='flex justify-end mr-22 mb-8 pr-8'>
                <input
                    className='w-[20%] border border-black focus:outline-none rounded-lg p-3 text-center bg-transparent placeholder-gray-500'
                    type="text"
                    value={start}
                    onChange={handleChange}
                    placeholder="START"
                />
            <button
                disabled={!(start === "START" && isChecked && selectedLanguage !== "") || loading}
                onClick={handleStart}
                className={`${!(start === "START" && isChecked && selectedLanguage !== "") || loading ? 'bg-gray-300 text-gray-600' : 'bg-[#546CFF] text-white'} w-[22%] rounded-xl p-2 pl-5 pr-5 ml-4 text-lg`}
            >
                {loading ? <ClipLoader color="blue" size={24} /> : 'Start'}
            </button>
            </div>
        </>
    );
}