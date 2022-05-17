import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editUserHelper } from '../../features/user/userSlice';

const EditProfileModal = ({ setModal, currentUser }) => {
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);
    const { firstName, lastName, email, bio, site } = currentUser;
    const [userInput, setUserInput] = useState({
        firstName: firstName,
        lastName: lastName,
        email: '',
        bio: bio,
        site: site,
    });

    const editHandler = (e, userInput) => {
        e.preventDefault();
        setModal(false);
        dispatch(editUserHelper({ userInput, token }));
    };
    return (
        <div className="py-4 border-[1px] bg-primary-bg w-[500px] z-10 border-color-grey rounded flex flex-col items-center justify-center">
            <i
                class="fal fa-times w-full flex justify-end mr-8 hover:cursor-pointer"
                onClick={() => setModal(false)}
            ></i>
            <p className="text-xl w-10/12 my-4">Edit your profile</p>
            <form
                className="login-input-form w-10/12"
                onSubmit={(event) => editHandler(event, userInput)}
            >
                <div className="form-input my-4 flex flex-col">
                    <label for="login-firstName" className="input-label text-left text-base">
                        {' '}
                        First Name:{' '}
                    </label>
                    <input
                        type="text"
                        required
                        placeholder="Enter your first name"
                        name="login-firstName"
                        className="login-firstName input-form border-[1px] border-color-grey rounded p-[2px]"
                        value={userInput.firstName === '' ? firstName : userInput.firstName}
                        onChange={(event) =>
                            setUserInput({
                                ...userInput,
                                firstName: event.target.value,
                            })
                        }
                    />
                </div>

                <div className="form-input my-4 flex flex-col">
                    <label for="login-lastName" className="input-label text-left text-base">
                        {' '}
                        Last Name:{' '}
                    </label>
                    <input
                        type="text"
                        required
                        placeholder="Enter your last name"
                        name="login-lastName"
                        className="login-lastName input-form border-[1px] border-color-grey rounded p-[2px]"
                        value={userInput.lastName === '' ? lastName : userInput.lastName}
                        onChange={(event) =>
                            setUserInput({
                                ...userInput,
                                lastName: event.target.value,
                            })
                        }
                    />
                </div>

                <div className="form-input my-4 flex flex-col">
                    <label for="login-email" className="input-label text-left text-base">
                        {' '}
                        Email:{' '}
                    </label>
                    <input
                        type="text"
                        required
                        placeholder="Enter your email address"
                        name="login-email"
                        className="login-email input-form border-[1px] border-color-grey rounded p-[2px]"
                        value={userInput.email === '' ? email : userInput.email}
                        onChange={(event) =>
                            setUserInput({
                                ...userInput,
                                email: event.target.value,
                            })
                        }
                    />
                </div>

                <div className="form-input my-4 flex flex-col">
                    <label for="login-email" className="input-label text-left text-base">
                        {' '}
                        Bio:{' '}
                    </label>
                    <input
                        type="text"
                        required
                        placeholder="Edit your bio"
                        name="login-email"
                        className="login-email input-form border-[1px] border-color-grey rounded p-[2px]"
                        value={userInput.bio === '' ? bio : userInput.bio}
                        onChange={(event) =>
                            setUserInput({
                                ...userInput,
                                bio: event.target.value,
                            })
                        }
                    />
                </div>

                <div className="form-input my-4 flex flex-col">
                    <label for="login-email" className="input-label text-left text-base">
                        {' '}
                        Website:{' '}
                    </label>
                    <input
                        type="text"
                        required
                        placeholder="Edit your portfolio/website link"
                        name="login-email"
                        className="login-email input-form border-[1px] border-color-grey rounded p-[2px]"
                        value={userInput.site === '' ? site : userInput.site}
                        onChange={(event) =>
                            setUserInput({
                                ...userInput,
                                site: event.target.value,
                            })
                        }
                    />
                </div>

                <div className="form-submit-btn">
                    <button
                        type="submit"
                        className="btn form-btn bg-color-grey text-primary-bg w-full p-1.5 border-[1px] border-color-grey rounded my-4 hover:bg-color-hover-grey"
                    >
                        Confirm Changes
                    </button>
                </div>
            </form>
        </div>
    );
};

export { EditProfileModal };
