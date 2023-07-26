/**
 * Profile Component:
 *
 * This component displays a user's profile with their name, description, and a list of prompt cards. The user's
 * name and description are displayed at the top with a blue gradient effect. The component renders a list of
 * prompt cards using the `PromptCard` component for each prompt in the `data` array. The `PromptCard` component
 * is passed the necessary props to handle edit and delete actions for each prompt. This component is typically
 * used to display a user's profile page along with their posts or prompts.
 *
 * Props:
 * - name (string): The name of the user whose profile is being displayed.
 * - desc (string): The description or bio of the user.
 * - data (array): An array of prompt objects representing the user's prompts.
 * - handleEdit (function): A callback function to handle the edit action for a prompt.
 * - handleDelete (function): A callback function to handle the delete action for a prompt.
 *
 * Render:
 * The component renders a section containing the user's profile information and a list of prompt cards. The user's
 * name and description are displayed at the top. The prompt cards are displayed in a grid-like layout using the
 * `prompt_layout` class. Each prompt card is rendered using the `PromptCard` component with the necessary props.
 * The `PromptCard` component handles the display of prompt details, creator information, and actions such as edit
 * and delete.
 */

import PromptCard from './PromptCard';

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
    return (
        <section className='w-full'>
            <h1 className='head_text text-left '>
                <span className='blue_gradient'>{name} Profile</span>
            </h1>
            <p className='desc text-left'>{desc}</p>
            <div className='mt-10 prompt_layout'>
                {data.map((post) => (
                    <PromptCard
                        key={post._id}
                        post={post}
                        handleEdit={() => handleEdit && handleEdit(post)}
                        handleDelete={() => handleDelete && handleDelete(post)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Profile;
