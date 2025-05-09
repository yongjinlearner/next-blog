'use client'
import React, { useState, useEffect } from 'react';

export default function GiphySearchBar({setGiphySearch}) {

    const handleGiphySearch = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        const formData = new FormData(event.target);
        const searchQuery = formData.get('search');

        if (searchQuery === '') {
            alert('Please enter a search term');
            return;
        }
        console.log('Search query:', searchQuery);
        
        setGiphySearch(searchQuery); // Set the search query in the parent component
    }

    return (
        <form className="flex" onSubmit={handleGiphySearch}>
            <input
                type="text"
                name="search"
                placeholder="Search for GIFs"
                className="border border-gray-300 rounded-lg p-2 w-[70%]"
                required
            />
            <button
                type="submit"
                className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 w-[30%]"
            >
                Search
            </button>
        </form>
    )
}