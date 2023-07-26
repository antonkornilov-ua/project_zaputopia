/**
 * PromptCardList Component:
 *
 * This component represents a list of prompt cards. It takes an array of prompt data as input and renders multiple
 * `PromptCard` components for each prompt in the array. The `PromptCardList` component is typically used to display
 * a collection of prompts, such as those fetched from an API or stored in a database. It allows users to interact
 * with individual prompts and handles click events on the associated tags. The component receives the prompt data array
 * as the `data` prop and the `handleTagClick` function to handle tag click events. Each prompt in the data array is
 * rendered as a separate `PromptCard` component with the corresponding details.
 *
 * Props:
 * - data (array): An array of prompt objects representing the prompt data to be displayed in the list.
 * - handleTagClick (function): A callback function to handle the click event when a tag on a prompt card is clicked.
 *
 * Render:
 * The component renders a list of prompt cards, each containing the prompt content, associated tag, and user details.
 * It uses the `PromptCard` component to render each individual prompt card, passing the prompt data and the
 * `handleTagClick` function as props. The `map` function is used to iterate through the `data` array and generate
 * a `PromptCard` component for each prompt object in the array. The resulting list of `PromptCard` components is
 * displayed with appropriate spacing and styling.
 */

import PromptCard from './PromptCard';

const PromptCardList = ({ data, handleTagClick }) => {
    return (
        <div className='mt-16 prompt_layout'>
            {data.map((post) => (
                <PromptCard key={post._id} post={post} handleTagClick={handleTagClick} />
            ))}
        </div>
    );
};
export default PromptCardList;
