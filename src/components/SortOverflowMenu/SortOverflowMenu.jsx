import { useDispatch } from 'react-redux';
import { setSortBy } from '../../features/posts/postSlice';
const SortOverflowMenu = ({ setSortOverflow }) => {
    const dispatch = useDispatch();

    return (
        <div className="sort-overflow-menu select-none bg-color-grey text-primary-bg border-[1px] w-max list-none text-left">
            <li
                className="p-2 hover:cursor-pointer hover:bg-neutral-600"
                onClick={() => dispatch(setSortBy('Trending'))}
            >
                Trending
            </li>
            <li
                className="p-2 hover:cursor-pointer hover:bg-neutral-600"
                onClick={() => dispatch(setSortBy('Latest'))}
            >
                Latest
            </li>
            <li
                className="p-2 hover:cursor-pointer hover:bg-neutral-600"
                onClick={() => dispatch(setSortBy('Oldest'))}
            >
                Oldest
            </li>
        </div>
    );
};

export { SortOverflowMenu };
