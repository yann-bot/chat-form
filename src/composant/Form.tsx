




interface ButtonProps{
    icon: React.ReactNode;
    title: string;
    paragraph: string;
    className?:string;
   
}



export const ButtonIcon = (p: ButtonProps) => {
    return (
        <button>
            <div className="flex border border-gray-300  rounded-md gap-2 p-2 " >
                    <div className="border flex items-center justify-center w-[50px] h-[40px] m-1 rounded-md border-gray-300 shadow-sm">{p.icon}</div>
                    <div className=" text-[15px] flex flex-col gap-0.2 justify-center ">
                        <div className="font-bold flex ">{p.title}</div>
                        <div className="text-gray-500">{p.paragraph}</div>
                    </div>
            </div>
        </button>
       
    )
}