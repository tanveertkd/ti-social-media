import toast from "react-hot-toast";

const getSharableLink = (postId) => {
    toast.success('Link copied.');
    navigator.clipboard.writeText(`https://ti-social.netlify.app/post/${postId}`);
};

export { getSharableLink };