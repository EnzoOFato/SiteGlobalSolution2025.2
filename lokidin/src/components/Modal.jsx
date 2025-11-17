export default function Modal({ aberto, fechar, children }) {
    return (
        <div
            onClick={fechar}
            className={`fixed inset-0 z-50 flex justify-center items-center 
            ${aberto ? "visible bg-black/40 backdrop-blur-sm" : "invisible"}`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`
                    relative bg-white rounded-xl shadow-lg p-6 
                    w-[95%] max-w-2xl max-h-[90vh] overflow-y-auto
                    transition-all 
                    ${aberto ? "scale-100 opacity-100" : "scale-110 opacity-0"}
                `}
            >
                <button
                    onClick={fechar}
                    className="absolute top-3 right-3 text-4xl font-extrabold leading-nonetext-black hover:text-gray-700select-none"
                >
                    ×
                </button>

                {children}
            </div>
        </div>
    );
}
