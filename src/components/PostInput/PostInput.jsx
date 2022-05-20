import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewPostHelper } from '../../features/posts/postSlice';

const PostInput = () => {
    const { token } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [userInput, setUserInput] = useState({ content: '' });

    const handlePostInput = (event, userInput) => {
        event.preventDefault();
        dispatch(createNewPostHelper({ userInput, token }));
        setUserInput({ ...userInput, content: '' });
    };

    return (
        <div>
            <form
                className="flex flex-col pt-2"
                onSubmit={(event) => handlePostInput(event, userInput)}
            >
                <textarea
                    name="post-input"
                    id="post-input"
                    cols="60"
                    rows="5"
                    placeholder="Create a post!"
                    value={userInput.content}
                    onChange={(event) =>
                        setUserInput({ ...userInput, content: event.target.value })
                    }
                    className="border-[1px] border-color-grey p-2 rounded-sm outline-none focus:border-color-idle"
                ></textarea>

                <div className="flex justify-between my-2">
                    <div className="post-attachments flex items-center">
                        <div className="post-attachment-item mr-2">
                            <i className="fal fa-image text-2xl"></i>
                        </div>
                        <div className="post-attachment-item">
                            <i className="fal fa-smile text-2xl"></i>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="bg-color-highlight-orange text-primary-bg md:h-10 xs:h-8 xs:w-36 md:w-44 rounded-sm hover:bg-color-alert-error"
                    >
                        Create Post
                    </button>
                </div>
            </form>
        </div>
    );
};

export { PostInput };
