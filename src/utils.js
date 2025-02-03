export function formatDateTime(dateTimeStr) {
    const date = new Date(dateTimeStr);

    // Get the day and add ordinal suffix
    const day = date.getDate();
    const suffix = getOrdinalSuffix(day);

    // Get month abbreviation
    const month = date.toLocaleString("en-US", { month: "short" });

    // Get 12-hour format time with AM/PM
    const hours = date.getHours();
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12 AM

    return `${day}${suffix} ${month} ${formattedHours} ${period}`;
}

// Function to get ordinal suffix
function getOrdinalSuffix(day) {
    if (day >= 11 && day <= 13) return "th"; // Special cases for 11th, 12th, 13th
    switch (day % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
}

export function formatDate(dateTimeStr) {
    const date = new Date(dateTimeStr);

    // Get the day and add ordinal suffix
    const day = date.getDate();
    const suffix = getOrdinalSuffix(day);

    // Get month abbreviation
    const month = date.toLocaleString("en-US", { month: "short" });



    return `${day}${suffix} ${month}`;
}



export function convertToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}



import React, { useState, useEffect, useRef } from 'react';
export const useInterval = (callback, delay) => {

    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);


    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}