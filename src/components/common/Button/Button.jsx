const Button = ({ children, icon, variant = "green", wSmall }) => {
    const base =
        "flex items-center gap-2 rounded-3xl cursor-pointer font-medium";

    const styles = {
        green: "bg-green-600 text-white",
        white: "bg-white text-green-600",
        gray: "bg-gray-100 text-gray-500",
        textblack: "bg-gray-200 text-black",
        black: "bg-black text-white",
    };

    return (
        <button className={`${base} ${styles[variant]} ${wSmall ? "text-xs px-4 py-2": "w-max px-7 py-2"}`}>
            {children}
            {icon}
        </button>
    );
};
export default Button;