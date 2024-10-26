import { Fragment } from "react";
import { TechIcon } from "./TechIcon";
import { twMerge } from "tailwind-merge";
export const ToolboxItem = ({toolboxItem,className,itemsWrapperClassName}:{
    toolboxItem:{
        title:string;
        iconType:React.ElementType;
    }[]
    className?:string;
    itemsWrapperClassName?:string;

}) => {
    return(
        <div className={twMerge("flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",className)}>
            <div className={twMerge("flex flex-none py-0.5 gap-6 pr-6",itemsWrapperClassName)}>
              {...new Array(2).fill(0).map((_,idx) => (
                <Fragment key={idx}>
                {toolboxItem.map((item) => (
                 <div key={item.title} className="inline-flex items-center gap-4 py-2 px-3 border border-emerald-400/20 outline-2 outline-white/10 rounded-lg">
                 <TechIcon component ={item.iconType} />
                  <span className="font-semibold">{item.title}</span>  
                 </div>
                 ))}
              </Fragment>
            ))}
      </div>
      </div>
    )
}