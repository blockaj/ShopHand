import { useState } from 'React';
import gauges from './gaugeData.json';

const lookUpDecimalThickness: number = (mat: string, thick: number) => {
    let gaugesAndDecs = {};
    const [aluminumThickness, steelThickness] = Object.entries(gauges);

    if (mat === aluminumThickness[0]) {
        gaugesAndDecs = aluminumThickness[1];
    } else if (mat === steelThickness[0]) {
        gaugesAndDecs = steelThickness[1];
    } 

    for (const [key, value] of Object.entries(gaugesAndDecs)) {
        const currThickness = Number(key);
        if (thick === currThickness) {
            return value;
        }
    }
    return -1;
}

const GaugeMeter: React.FC = () => {
    const [materialThickness, setMaterialThickness] = useState<number>(3);
    const [materialType, setMaterialType] = useState<string>("steel");
    const [decimalThickness, setDecimalThickness] = useState<number>(
            lookUpDecimalThickness(materialType, materialThickness)
            );
    
    // HELPER FUNCTIONS
    const isSelected: boolean = (button: string) => materialType === button;

    const onChangeMaterialHandler= (e: ChangeEvent<HTMLInputElement>) => {
        setMaterialType(e.target.value);
        console.log("Material type changed, gauge: " + materialThickness);
        setDecimalThickness(lookUpDecimalThickness(e.target.value, materialThickness));
    }
    const onChangeThicknessHandler= (e: ChangeEvent<HTMLInputElement>) => {
        const currThickness = Number(e.target.value);
        console.log("User changed gauge to: " + currThickness);
        setMaterialThickness(currThickness);
        setDecimalThickness(lookUpDecimalThickness(materialType, currThickness));
    }
    
    // COMPONENT FUNCTIONS
    const MaterialType: Reac.FC = ({onChangeHandler}) => {
        return (
            <div>
                <label>Steel</label><input
                type="radio" 
                value="steel" 
                name="material" 
                onChange={onChangeHandler}
                checked={isSelected("steel")} />
                <label>Aluminum</label><input
                type="radio" 
                value="aluminum" 
                name="material"
                onChange={onChangeHandler}
                checked={isSelected("aluminum")}/>
            </div>
        )
    }

    const MaterialThickness: React.FC = ({onChangeHandler}) => {
         return (
            <div>
                <select onChange={onChangeHandler}>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                    <option value="32">32</option>
                    <option value="33">33</option>
                    <option value="34">34</option>
                    <option value="35">35</option>
                    <option value="36">36</option>
                </select>
            </div>
        );
    
    }

    return (
        <div className="gauge-meter">
            <h2>Gauge Meter</h2>
            <MaterialType onChangeHandler={onChangeMaterialHandler} />
            <MaterialThickness onChangeHandler={onChangeThicknessHandler} />
            <p>{decimalThickness}</p>
        </div>
    );
}

export default GaugeMeter;
