import React, {useState} from "react";
import productsList from "./ProductsList";
import {HashLink} from 'react-router-hash-link';
import {BrowserRouter, HashRouter} from "react-router-dom";

function Products() {
    const [products, setProducts] = useState(productsList);
    const [totalCost, setTotalCost] = useState({cost: 0});

    const updateCheckbox = id => e => {
        let newArr = [...products];
        newArr[id].buy = e.target.checked;
        setProducts(newArr);

        if (e.target.checked) {
            totalCost.cost += (products[id].amount * products[id].price);
        } else {
            totalCost.cost -= (products[id].amount * products[id].price);
        }
    }

    const updateAmount = id => e => {
        totalCost.cost -= (products[id].amount * products[id].price);

        let newArr = [...products];
        newArr[id].amount = parseInt(e.target.value);
        setProducts(newArr);

        totalCost.cost += (products[id].amount * products[id].price);
        console.log(totalCost);
    }

    const CPU = [];
    const GPU = [];
    const RAM = [];
    const hardDrive = [];

    for (let product of products) {
        const checkboxId = "checkboxId" + product.id;
        const labelForCheckBoxId = "checkboxLabelId" + product.id;

        const amountInputId = "amountInputId" + product.id;
        const labelForAmountInputId = "labelForAmountInputId" + product.id;
        const toggleShowInput = "toggleShowInput" + product.id;

        const productCode = <div className="row mb-3 computerComponent" key={product.id} id={product.id}>
                <label className="col-form-label col-sm-3" htmlFor={amountInputId}>
                    <input className="form-check-input largeCheckbox" type="checkbox" key={checkboxId} id={checkboxId}
                    onClick={updateCheckbox(product.id)}/>
                    &nbsp; {/* empty space between input and label */}

                    <label className="form-check-label pl-3" htmlFor={checkboxId} key={labelForCheckBoxId} id={labelForCheckBoxId}>
                        {product.name}. Price - ${product.price}
                    </label>
                </label>

                <label htmlFor={amountInputId} className="col-form-label col-sm-2">
                    <img src={product.imgLink} alt={product.name} width="100" height="100" />
                </label>

                <div className="toggle col-sm-3" key={toggleShowInput} id={toggleShowInput}
                     style={{ display: product.buy ? 'block' : 'none' }}>

                    <input type="number" className="form-control mb-1" key={amountInputId} id={amountInputId}
                           min="1" max="1000" value={product.amount}
                           onChange={updateAmount(product.id)}/>


                    <label className="form-label" htmlFor={amountInputId} key={labelForAmountInputId} id={labelForAmountInputId}>
                        The cost is ${product.price * product.amount}
                    </label>
                </div>
            </div>


        if (product.type === "CPU") {
            CPU.push(productCode);
        } else if (product.type === "GPU") {
            GPU.push(productCode);
        } else if (product.type === "RAM") {
            RAM.push(productCode);
        } else if (product.type === "Hard drive") {
            hardDrive.push(productCode);
        }
    }

    return (<>
            <h4>Computer components:</h4>

            <h5>Central processing unit (CPU)</h5>
            <div id="CPU">
                {CPU}
            </div>

            <h5>Graphical processing unit (GPU)</h5>
            <div id="GPU">
                {GPU}
            </div>

            <h5>Random access memory (RAM)</h5>
            <div id="RAM">
                {RAM}
            </div>

            <h5 id="Hard drive">Hard drive</h5>
            <div>
                {hardDrive}
            </div>

            <h5>
                The total cost is ${totalCost.cost}
            </h5>
        </>
    )
}


export default Products