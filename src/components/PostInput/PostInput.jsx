const PostInput = () => {
    return (
        <div className="flex flex-col">
            <textarea
                name="post-input"
                id="post-input"
                cols="60"
                rows="5"
                placeholder="Create a post!"
                className="border-[1px] border-color-grey p-2 rounded-sm outline-none focus:border-color-idle"
            ></textarea>

            <div className="flex justify-end my-2">
                <button className="bg-color-highlight-orange text-primary-bg h-10 w-44 rounded-sm hover:bg-color-alert-error">
                    Create Post
                </button>
            </div>
        </div>
    );
};

export { PostInput };
