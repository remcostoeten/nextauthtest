import { Input, Label } from "@/components/ui";

type InputFieldProps = {
    label: string;
    icon: string;
    placeholder: string;
    type?: string;
    name: string;
};

export default function InputField({ label, icon, placeholder, type = "text", name }: InputFieldProps) {
    return (
        <div className="flex flex-col w-full">
            <Label htmlFor={name} className="text-base text-white">
                {label}
            </Label>
            <div className="flex gap-3 items-center px-4 py-3 mt-2 w-full text-sm leading-none rounded-md border border-solid bg-white bg-opacity-10 border-white border-opacity-10 min-h-[44px] text-white text-opacity-30">
                <img
                    loading="lazy"
                    src={icon}
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                />
                <Input
                    type={type}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    className="bg-transparent border-none text-white text-opacity-30 w-full"
                />
            </div>
        </div>
    );
}
