import { useState } from 'react';


const DecToFrac:React.FC = () => {
    const [fraction, setFraction] = useState<number[]>([0, 1, 1]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (isNaN(event.target.value)) {
            setFraction([0, 1, 1]);

        } else if (isSafe(event.target.value)) {
            const inputDecimal = Number(event.target.value);
            console.log(inputDecimal);
            const frac = calculateFrac(inputDecimal);
            console.log(frac);
            setFraction(frac);
        }
    }
     
    const isSafe:boolean = (inputDecimal: string) => {
        if (inputDecimal.length > 8) {
            return false;
        }
        return true;
    }

    const calculateFrac:number[] = (inputDecimal: number) => {
        const BASE_DENOM = 64;
        const BASE_DEC = 1/64;
        
        let whole = 0; 
        let num = 0;
        let denom = BASE_DENOM;
        
        // Separate out integers
        while (inputDecimal >= 1) {
                console.log(whole)
                whole += 1;
                inputDecimal -=1;
        }
        
        while (inputDecimal >= BASE_DEC) {
                num += 1;
                inputDecimal -= BASE_DEC;
        }
       // Simplify 
        while (num % 2 === 0 && denom % 2 == 0) {
                num = num / 2;
                denom = denom / 2;
        }
        if (num == 0 && denom == 1) {
                return [0, 1, 1];
        }

        return [whole, num, denom];
        
    }

    const formatFrac:string = (frac: number[]) => {
        const [whole, num, denom] = frac;
        if (whole > 0) {
            return whole + " " + num + "/" + denom;
        }
        return num + "/" + denom; 
    }

    return (
            <div className="dec-to-frac">
            <h2>{formatFrac(fraction)}</h2>
            <input type="text" name="decimal" onChange={handleChange} />
            </div>
           ); 
}

export default DecToFrac;
