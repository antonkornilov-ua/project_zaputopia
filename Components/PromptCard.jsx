'use client';
/**
 * PromptCard Component:
 *
 * This component represents a prompt card that displays a user's prompt along with relevant details and actions.
 * The prompt card includes the user's profile image, username, email, prompt content, associated tag, and copy
 * prompt functionality. The component also provides options to edit and delete the prompt for the user who created it.
 * The `PromptCard` component uses `next-auth/react` to fetch the user's session data and manages the state for the copy
 * prompt functionality. It also utilizes the `usePathname` and `useRouter` hooks from `next/navigation` to handle routing.
 * The component is designed to be used in various contexts, such as on the feed, user profile, or in a list of prompts.
 *
 * Props:
 * - post (object): An object representing the prompt data containing fields like prompt content, tag, and creator details.
 * - handleTagClick (function): A callback function to handle the click event when a tag is clicked.
 * - handleEdit (function): A callback function to handle the edit action for the prompt.
 * - handleDelete (function): A callback function to handle the delete action for the prompt.
 *
 * Render:
 * The component renders a prompt card with the user's profile image, username, email, prompt content, and associated tag.
 * The prompt card also includes a copy button that allows users to copy the prompt content to the clipboard. If the user
 * viewing the prompt card is the creator of the prompt and the page path is '/profile', edit and delete options are displayed.
 * The component uses `Image` from `next/image` for rendering the user's profile image with optimized loading and caching.
 */

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
    const { data: session } = useSession();
    const pathName = usePathname();
    const router = useRouter();

    const [copied, setCopied] = useState('');

    const handleProfileClick = () => {
        // console.log(post);
        if (post.creator._id === session?.user.id) return router.push('/profile');

        router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
    };

    const handleCopy = () => {
        setCopied(post.prompt);
        navigator.clipboard.writeText(post.prompt);
        setTimeout(() => {
            setCopied(false);
        }, 3000);
    };

    return (
        <div className='prompt_card'>
            <div className='flex justify-between items-start gap-5'>
                <div
                    className='flex-1 flex justify-start items-center gap-3 cursor-pointer'
                    onClick={handleProfileClick}>
                    <Image
                        src={post.creator.image}
                        alt='user_image'
                        width={40}
                        height={40}
                        className='rounded-full object-contain'
                    />

                    <div className='flex flex-col'>
                        <h3 className='font-satoshi font-semibold text-gray-900 '>{post.creator.username}</h3>
                        <p className='font-inter text-sm text-gray-500'>{post.creator.email}</p>
                    </div>
                </div>

                <div className='copy_btn' onClick={handleCopy}>
                    <Image
                        src={copied === post.prompt ? '/assets/icons/tick.svg' : '/assets/icons/copy.svg'}
                        width={12}
                        height={12}
                        alt={copied === post.prompt ? 'tick_icon' : 'copy_icon'}
                    />
                </div>
            </div>
            <p className='my-4 font-satoshi font-sm text-gray-700 break-words'>{post.prompt}</p>
            <p
                className='font-inter text-sm blue_gradient cursor-pointer'
                onClick={() => handleTagClick && handleTagClick(post.tag)}>
                #{post.tag}
            </p>

            {session?.user.id === post.creator._id && pathName === '/profile' && (
                <div className='mt-5 flex-center gap-4 border-t border-gray-100 pt-3'>
                    <p
                        className='font-inter px-5 text-sm green_gradient cursor-pointer dark:text-green-700'
                        onClick={handleEdit}>
                        Edit
                    </p>
                    <p
                        className='font-inter text-sm orange_gradient cursor-pointer dark:text-orange-500'
                        onClick={handleDelete}>
                        Delete
                    </p>
                </div>
            )}
        </div>
    );
};

export default PromptCard;
