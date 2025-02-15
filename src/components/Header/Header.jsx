import { Username } from "./Username";

export const Header = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start"></div>
            <div className="navbar-center">
                <div className="text-xl text-bold">Форма регистрации</div>
            </div>
            <div className="navbar-end gap-4 hidden md:inline-flex">
                <Username />
            </div>
            <div className="navbar-end gap-4 md:hidden">
                <div className="dropdown dropdown-bottom dropdown-end">
                    <div
                        tabIndex="0"
                        role="button"
                        className="btn btn-ghost btn-circle"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {" "}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />{" "}
                        </svg>
                    </div>
                    <div
                        tabIndex="0"
                        className="dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        <Username />
                    </div>
                </div>
            </div>
        </div>
    );
};
