export default function Modal({ aberto, fechar, children}){
    return (
        <div onClick={fechar} className={`fixed inset-0 flex justify-center items-center ${aberto ? "visible bg-black/20" : "invisible"}`}>
            <div onClick={(e) => e.stopPropagation()} className={`bg-white rounded-xl shadow p-6 transition-all ${aberto ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
                {children}
            </div>
        </div>
    )
}