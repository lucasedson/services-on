import ServiceCard from "../serviceCard";

export default function ViewServices() {
    return (
        <div className="flex flex-col w-[98%] bg-[rgba(0,0,0,0.2)] rounded-lg m-2 p-2">
        <div className="">
            <div>
                <h1 className="text-2xl text-center align-text-bottom mt-4 mb-3 text-[var(--primary-color)]">
                    Meus Serviços
                </h1>
            </div>
                <ul>
                    <ServiceCard title="Serviço 1" description="Descricão do Serviço 1"/>
                    <ServiceCard title="Serviço 2" description="Descricão do Serviço 2"/>
                    <ServiceCard title="Serviço 3" description="Descricão do Serviço 3"/>
                </ul>
            <div>

            </div>
        </div>


        </div>
    )
}