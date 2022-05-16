const PostInput = () => {
    return (
        <div className="flex flex-col pt-2">
            <textarea
                name="post-input"
                id="post-input"
                cols="60"
                rows="5"
                placeholder="Create a post!"
                className="border-[1px] border-color-grey p-2 rounded-sm outline-none focus:border-color-idle"
            ></textarea>

            <div className="flex justify-between my-2">
                <div className="post-attachments flex items-center">
                    <div className="post-attachment-item mr-2">
                        <i class="fal fa-image text-2xl"></i>
                    </div>
                    <div className="post-attachment-item">
                        <i class="fal fa-smile text-2xl"></i>
                    </div>
                </div>
                <button className="bg-color-highlight-orange text-primary-bg h-10 w-44 rounded-sm hover:bg-color-alert-error">
                    Create Post
                </button>
            </div>
        </div>
    );
};

export { PostInput };
