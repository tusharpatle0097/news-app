import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Loader } from '../../components/loader/Loader';
import { EDDarkMode } from '../../contexts/DarkModeTheme';
import { globalNews } from '../../apis/Api';
// #151a1b

const GlobalNews = () => {

    const { DarkModeEB } = useContext(EDDarkMode)
    const [data, setData] = useState([]);

    useEffect(() => {
        getTopNews();
    }, []);

    const getTopNews = () => {
        axios.get(globalNews)
            .then(res => {
                console.log(res.data.articles);
                setData(res.data.articles);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const convertToIST = (utcTime) => {
        const ISTOffset = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds
        const ISTTime = new Date(utcTime).getTime() + ISTOffset;
        return new Date(ISTTime).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    };

    return (
        <>
            <div className='text-center text-[30px] font-bold my-5'>Global  News</div>
            <div className="grid px-3 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 flex items-center justify-center gap-4">
                {data.length > 0 ? (data.map((items, index) => {
                    return (
                        <div key={index} className={` ${DarkModeEB ? 'bg-[#151a1b]' : ''} max-w-xs rounded overflow-hidden shadow-lg h-[35rem]`}>
                            <img className="w-full" src={items.urlToImage} alt={items.title} />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 group whitespace-nowrap overflow-hidden text-ellipsis group-hover:overflow-visible">{items.title}</div>
                                <p className={`text-gray-700 text-base ${DarkModeEB ? 'text-white' : ''}`}>{items.description}</p>
                            </div>
                            <div className="px-6 py-4">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">{items.source.name}</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-5">{convertToIST(items.publishedAt)}</span>
                            </div>
                        </div>
                    );
                })) : Loader}
            </div>
        </>
    );
};

export default GlobalNews;
