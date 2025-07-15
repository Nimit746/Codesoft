/* eslint-disable no-unused-vars */
const Button = (props) => {
    return (
        <button
            className="flex items-center justify-center w-16 aspect-square bg-slate-500 text-white rounded-xl hover:bg-slate-600 font-bold text-3xl"
            onClick={() => props.onClick(props.title)}
        >
            {props.title}
        </button>
    );
};

export default Button;
