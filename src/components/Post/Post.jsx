import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Post = ({ postData }) => {
    const { users } = useSelector((state) => state.users);
    const currentUser = users.find((currUser) => currUser.username === postData.username);
    return (
        <div
            className="post border-[1px] p-4 border-color-text-lighter-grey rounded my-4 shadow-md"
            key={postData?._id}
        >
            <li className="list-none flex items-center">
                <i class="far fa-user-circle pr-2 text-4xl"></i>
                <div className="flex justify-center items-center">
                    <p className="text-lg">
                        {currentUser?.firstName} {currentUser?.lastName}
                    </p>
                    <p className="text-sm px-2">@{postData?.username}</p>
                    <p className="separator pr-2">•</p>
                    <p className="text-sm">
                        24<sup>th</sup>Sep 2022
                    </p>
                </div>
            </li>
            <li className="list-none text-left py-2">{postData?.content}</li>
            <li className="list-none flex justify-around pb-2">
                <div>
                    <i className="fal fa-thumbs-up hover:text-color-highlight-orange hover:cursor-pointer"></i>{' '}
                    {postData?.likes?.likeCount}
                </div>
                <div>
                    <Link to="/post">
                        <i className="fal fa-comments hover:text-color-highlight-orange hover:cursor-pointer"></i>{' '}
                        {postData?.comments?.length}
                    </Link>
                </div>
                <div>
                    <i className="fal fa-share hover:text-color-highlight-orange hover:cursor-pointer"></i>
                </div>
                <div>
                    <i className="fal fa-bookmark hover:text-color-highlight-orange hover:cursor-pointer"></i>
                </div>
            </li>
        </div>
    );
};
export { Post };
