/**
 * The `useSearchData` custom hook is responsible for handling the search functionality.
 * It takes an initialData array as input and returns state and functions related to search.
 *
 * Parameters:
 * - initialData: An array of data to be used as the initial set of search results.
 *
 * Return:
 * An object containing the following properties and functions:
 * - searchText: A string representing the current search input text.
 * - searchedResults: An array representing the filtered search results based on the search input.
 * - handleSearchChange: A function to update the search input text and filter the results accordingly.
 *
 * Functions:
 * - filterPrompts: A function that filters the provided data based on the search value.
 *                  It uses regular expressions to match the search value with the data fields
 *                  (username, tag, and prompt) and returns the filtered results.
 * - handleSearchChange: A function that is called when the search input text changes.
 *                       It sets a timeout to debounce the search and updates the search results
 *                       after a 500ms delay to reduce unnecessary re-renders and improve performance.
 */



const { useState } = require('react');

const useSearchData = (initialData) => {
    const [searchText, setSearchText] = useState('');
    const [searchTimeout, setSearchTimeout] = useState(null);
    const [searchedResults, setSearchedResults] = useState(initialData);

    const filterPrompts = (data, searchValue) => {
        const regex = new RegExp(searchValue, 'i');
        return data.filter(
            (item) => regex.test(item.creator.username) || regex.test(item.tag) || regex.test(item.prompt)
        );
    };

    const handleSearchChange = (e, data) => {
        clearTimeout(searchTimeout);
        setSearchText(e.target.value);

        setSearchTimeout(
            setTimeout(() => {
                const searchResult = filterPrompts(data, e.target.value);
                setSearchedResults(searchResult);
            }, 500)
        );
    };
    return {
        searchText,
        searchedResults,
        handleSearchChange,
    };
};
export default useSearchData;
