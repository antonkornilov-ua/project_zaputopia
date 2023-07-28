'use client';
/**
 * The `Feed` component is responsible for displaying a feed of prompts.
 * It fetches all posts from the server on mount and provides a search functionality.
 * It uses the custom hook `useSearchData` to handle the search logic.
 *
 * Props:
 * None
 *
 * State:
 * - allPosts: An array containing all the posts fetched from the server.
 *
 * Custom Hook:
 * - useSearchData: A custom hook that handles the search logic based on the provided data.
 *                  It returns `searchText`, `searchedResults`, and `handleSearchChange`.
 *                  `searchText` holds the current search input, `searchedResults` stores
 *                  the filtered results based on the search, and `handleSearchChange` is a
 *                  function to update the search text and filter the results accordingly.
 *
 * Methods:
 * - fetchPosts: An async function to fetch all posts from the server and update the `allPosts` state.
 * - handleTagClick: A function to handle tag clicks and trigger search based on the clicked tag.
 *
 * Render:
 * The component renders a search input field where users can search for prompts by tag or username.
 * The component renders a `PromptCardList` component to display the list of prompts.
 * If there is no search input, it displays all the posts (`allPosts`), otherwise, it displays
 * the filtered results (`searchedResults`) based on the search input.
 * When a tag is clicked, it filters the results to show prompts with the clicked tag.
 */

import useSearchData from '@/hooks/useSearchData';
import PromptCardList from './PromptCardList';
import { useEffect, useState } from 'react';

const Feed = () => {
    const [allPosts, setAllPosts] = useState([]);

    const fetchPosts = async () => {
        const response = await fetch('/api/prompt');
        const data = await response.json();
        setAllPosts(data);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const { searchText, searchedResults, handleSearchChange } = useSearchData(allPosts);

    const handleTagClick = (tagName) => {
        handleSearchChange({ target: { value: tagName } }, allPosts);
    };

    return (
        <section className='feed'>
            <form className='relative w-full flex-center'>
                <input
                    type='text'
                    placeholder='search for a tag or username'
                    value={searchText}
                    onChange={(e) => handleSearchChange(e, allPosts)}
                    required
                    className='search_input peer'
                />
            </form>
            <PromptCardList data={searchText ? searchedResults : allPosts} handleTagClick={handleTagClick} />
        </section>
    );
};

export default Feed;
