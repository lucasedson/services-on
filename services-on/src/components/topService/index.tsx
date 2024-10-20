import { BiPlus } from "react-icons/bi";
export default function TopService() {
    return <div className="flex flex-row w-[98%] h-[80px] bg-[rgba(0,0,0,0.2)] rounded-lg m-2 p-2">

        <div className="flex items-center justify-center w-[40px] h-[40px] bg-[var(--primary-color)] rounded-lg m-2 p-2">
            <BiPlus className="text-3xl cursor-pointer" />
        </div>
            <h1 className="text-1xl font-bold text-center align-text-bottom mt-4 text-[var(--primary-color)] ">Adicionar Serviço</h1>
    </div>;
}