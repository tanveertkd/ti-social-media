import { useDispatch } from 'react-redux';
import { setSortBy } from '../../features/posts/postSlice';
const SortOverflowMenu = ({ setSortOverflow }) => {
    const dispatch = useDispatch();

    return (
        <div className="sort-overflow-menu select-none bg-color-grey text-primary-bg border-[1px] w-max list-none text-left">
            <li
                className="p-2 hover:cursor-pointer hover:bg-neutral-600"
                onClick={() => {
                    dispatch(setSortBy('Trending'));
                    setSortOverflow(false);
                }}
            >
                <i className="fas fa-rss pr-2 text-color-hover-light-grey"></i> Trending
            </li>
            <li
                className="p-2 hover:cursor-pointer hover:bg-neutral-600"
                onClick={() => {
                    dispatch(setSortBy('Latest'));
                    setSortOverflow(false);
                }}
            >
                <i className="fas fa-arrow-up text-color-hover-light-grey"></i> Latest
            </li>
            <li
                className="p-2 hover:cursor-pointer hover:bg-neutral-600"
                onClick={() => {
                    dispatch(setSortBy('Oldest'));
                    setSortOverflow(false);
                }}
            >
                <i className="fas fa-arrow-down text-color-hover-light-grey"></i> Oldest
            </li>
        </div>
    );
};

export { SortOverflowMenu };
