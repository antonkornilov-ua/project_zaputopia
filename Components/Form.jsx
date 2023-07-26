/**
 * The `Form` component is a reusable form used for creating and editing prompts.
 *
 * Props:
 * - type: A string representing the type of form, whether it is for creating or editing a prompt.
 * - post: An object representing the prompt data to be displayed and edited in the form.
 * - setPost: A function to update the `post` state with the new prompt data.
 * - submitting: A boolean representing the form submission status (true when submitting, false otherwise).
 * - handleSubmit: A function to handle the form submission when the user submits the form.
 *
 * Render:
 * The component renders a form with fields for creating/editing a prompt, including a text area
 * for the prompt content and an input field for the prompt tag. The form also includes a "Cancel" link
 * to navigate back to the homepage and a "Submit" button for form submission.
 * The "Submit" button is disabled when the form is in the submitting state.
 */
import Link from 'next/link';

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
    return (
        <section className='w-full max-w-full flex-start flex-col'>
            <h1 className='head_text text-left'>
                <span className='blue_gradient'>{type} Post</span>
            </h1>
            <p className='desc text-left max-w-md'>
                {type} and share amazing prompts with the world, and let your imagination run wild with any AI-powered
                platform
            </p>

            <form onSubmit={handleSubmit} className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>
                <label>
                    <span className='font-satoshi font-semibold text-base text-gray-700 dark:text-gray-50'>Your AI Prompt</span>

                    <textarea
                        value={post.prompt}
                        onChange={(e) => setPost({ ...post, prompt: e.target.value })}
                        placeholder='Write your post here'
                        required
                        className='form_textarea '
                    />
                </label>

                <label>
                    <span className='font-satoshi font-semibold text-base text-gray-700 dark:text-gray-50'>
                        Field of Prompt <span className='font-normal'>(#product, #webdevelopment, #idea, etc.)</span>
                    </span>
                    <input
                        value={post.tag}
                        onChange={(e) => setPost({ ...post, tag: e.target.value })}
                        type='text'
                        placeholder='#Tag'
                        required
                        className='form_input'
                    />
                </label>

                <div className='flex-end mx-3 mb-5 gap-4'>
                    <Link href='/' className='text-gray-500 dark:text-gray-50 text-sm'>
                        Cancel
                    </Link>

                    <button
                        type='submit'
                        disabled={submitting}
                        className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'>
                        {submitting ? `${type}ing...` : type}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Form;
