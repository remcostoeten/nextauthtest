import { Button } from "../../../../components/ui";

type SocialButtonProps = {
    icon: string;
    name: string;
};

export default function SocialButton({ icon, name }: SocialButtonProps) {
    return (
        <Button className="flex flex-1 shrink gap-2 justify-center items-center px-10 py-3 rounded-lg border border-solid basis-0 bg-white bg-opacity-10 border-white border-opacity-10 min-h-[44px] max-md:px-5">
            <img
                loading="lazy"
                src={icon}
                alt={`${name} icon`}
                className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
            />
            <span className="self-stretch my-auto">{name}</span>
        </Button>
    );
}
