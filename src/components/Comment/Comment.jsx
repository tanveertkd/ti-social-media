import { Link } from "react-router-dom";
import { postTime } from "../../utils/postTime";

const Comment = ({ comment, users }) => {
    const currentCommentAuthor = users?.find(user => user?.username === comment?.username);
    return (
        <div
            className="post border-[1px] p-4 border-color-text-lighter-grey rounded my-4 shadow-md"
            key={comment?._id}
        >   
            <Link to={`/profile/${currentCommentAuthor?.username}`}>
                <li className="list-none flex items-center">
                    <div className="w-[48px] mr-2">
                        <img
                            src={currentCommentAuthor?.avatarUrl}
                            alt={currentCommentAuthor?.username}
                            className="rounded-full"
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <p className="text-lg">
                            {comment?.firstName} {comment?.lastName}
                        </p>
                        <p className="text-sm px-2">@{comment?.username}</p>
                        <p className="separator pr-2">•</p>
                        <p className="text-sm">
                            {postTime(comment?.createdAt)}
                        </p>
                    </div>
                </li>
            </Link>
            <li className="list-none text-left py-2">{comment?.text}</li>
        </div>
    );
};

export { Comment };
