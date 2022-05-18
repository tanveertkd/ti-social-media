import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editPostHelper } from '../../features/posts/postSlice';

const EditPostModal = ({ postData, setEditModal, token }) => {
    const dispatch = useDispatch();
    const [postContent, setPostContent] = useState({
        content: postData?.content,
    });

    const handleEditSubmission = (e, postContent) => {
        e.preventDefault();
        dispatch(editPostHelper({ postId: postData?._id, postContent, token }));
        setEditModal(false);
    };

    return (
        <div className="bg-primary-bg w-1/2">
            <form
                className="edit-post p-2 rounded border-[1px] border-color-grey flex flex-col"
                onSubmit={(e) => handleEditSubmission(e, postContent)}
            >
                <div className="top flex">
                    <img
                        src="https://i.pravatar.cc/50"
                        alt="profile-asset"
                        className="rounded-full"
                    />
                    <input
                        type="text"
                        value={postContent?.content}
                        onChange={(e) =>
                            setPostContent({ ...postContent, content: e.target.value })
                        }
                        className="border-[1px] border-color-grey w-full p-2"
                    />
                </div>
                <div className="bottom w-full flex justify-end py-2">
                    <button
                        className="bg-color-alert-error hover:bg-color-highlight-orange text-primary-bg p-1 px-4 mx-2 rounded"
                        onClick={() => setEditModal(false)}
                    >
                        Close
                    </button>
                    <button
                        type="submit"
                        className="bg-color-grey text-primary-bg p-1 px-4 rounded"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export { EditPostModal };
