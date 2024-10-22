import { PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge"

export const HeroOrbit = ({
    children,
    size,
    rotation,
    orbitDuration,
    shouldOrbitSpin = false,
    shouldStarSpin= false,
    starDuration
}:
PropsWithChildren<{size:number,rotation : number,orbitDuration?:string,shouldOrbitSpin?:boolean,shouldStarSpin?:boolean,starDuration?:string}>) => {
    return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
    <div className={twMerge(shouldOrbitSpin === true && "animate-spin")} style={{
        animationDuration: orbitDuration,
    }}>
    <div className="flex items-start justify-start" style={{
        transform: `rotate(${rotation}deg)`,
        height:`${size}px`,
        width:`${size}px`
        }}>
    <div className={twMerge(shouldStarSpin === true && "animate-spin")} style={{
        animationDuration: starDuration,
    }}>
    <div className="inline-flex" style={{
        transform:`rotate(${rotation *-1}deg)`
    }}>
      {children}
    </div>
    </div>
    </div>
    </div>
    </div>
    )
}