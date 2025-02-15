const Badge = ({ status }) => {
    if (status === "success") {
        return (
            <div className="badge badge-success">
                <svg
                    className="size-[1em]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <g
                        fill="currentColor"
                        strokeLinejoin="miter"
                        strokeLinecap="butt"
                    >
                        <circle
                            cx="12"
                            cy="12"
                            r="10"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="square"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                        ></circle>
                        <polyline
                            points="7 13 10 16 17 8"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="square"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                        ></polyline>
                    </g>
                </svg>
                Заполнено
            </div>
        );
    } else if (status === "error") {
        return (
            <div className="badge badge-error">
                <svg
                    className="size-[1em]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <g fill="currentColor">
                        <rect
                            x="1.972"
                            y="11"
                            width="20.056"
                            height="2"
                            transform="translate(-4.971 12) rotate(-45)"
                            fill="currentColor"
                            strokeWidth={0}
                        ></rect>
                        <path
                            d="m12,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm0-20C7.038,3,3,7.037,3,12s4.038,9,9,9,9-4.037,9-9S16.962,3,12,3Z"
                            strokeWidth={0}
                            fill="currentColor"
                        ></path>
                    </g>
                </svg>
                Есть ошибки
            </div>
        );
    } else {
        return (
            <div className="badge badge-info">
                <svg
                    className="size-[1em]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <g
                        fill="currentColor"
                        strokeLinejoin="miter"
                        strokeLinecap="butt"
                    >
                        <circle
                            cx="12"
                            cy="12"
                            r="10"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="square"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                        ></circle>
                        <path
                            d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="square"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                        ></path>
                        <circle
                            cx="12"
                            cy="7.25"
                            r="1.25"
                            fill="currentColor"
                            strokeWidth="2"
                        ></circle>
                    </g>
                </svg>
                В процессе
            </div>
        );
    }
};

export const AcordeonItem = ({ title, status, children, defaultChecked }) => {
    return (
        <div className="collapse collapse-arrow bg-base-100 border border-base-300 shrink-0 shadow-md bg-base-200">
            <input
                type="radio"
                name="my-accordion-2"
                defaultChecked={defaultChecked}
            />
            <div className="collapse-title font-semibold flex flex-row justify-between">
                <div>{title}</div>
                <Badge status={status} />
            </div>
            <div className="collapse-content">{children}</div>
        </div>
    );
};
