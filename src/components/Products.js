import React, {useState} from "react"; // import React and useState hook
import productsList from "./ProductsList"; // import list of products

// function component that shows products
function Products() {
    const [products, setProducts] = useState(productsList);
    const [totalCost] = useState({cost: 0});
    const min = 1, max = 1000;

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

        let value = e.target.value;
        if (!(e.target.value === "")){
            value = parseInt(e.target.value);
            if (value<min || value>max) value = 1;
        }

        let newArr = [...products];
        newArr[id].amount = value;
        setProducts(newArr);

        totalCost.cost += (value * products[id].price);
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

        const key = "key" + product.id;

        const productCode = <React.Fragment key={key}>
            <div className="row mb-3 computerComponent" id={product.id}>
                <label className="col-form-label col-sm-3" htmlFor={amountInputId}>
                    <input className="form-check-input largeCheckbox" type="checkbox" id={checkboxId}
                    onClick={updateCheckbox(product.id)}/>
                    &nbsp; {/* empty space between input and label */}

                    <label className="form-check-label pl-3" htmlFor={checkboxId} id={labelForCheckBoxId}>
                        {product.name}. Price - ${product.price}
                    </label>
                </label>

                <label htmlFor={amountInputId} className="col-form-label col-sm-2">
                    <img src={product.imgLink} alt={product.name} width="100" height="100" />
                </label>

                <div className="toggle col-sm-3" id={toggleShowInput}
                     style={{ display: product.buy ? 'block' : 'none' }}>

                    <input type="number" className="form-control mb-1" id={amountInputId}
                           min={min} max={max} value={product.amount}
                           onChange={updateAmount(product.id)}/>


                    <label className="form-label" htmlFor={amountInputId} id={labelForAmountInputId}>
                        The cost is ${product.price * product.amount}
                    </label>
                </div>
            </div>
        </React.Fragment>


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

            <h5 id="CPU">Central processing unit (CPU)</h5>
            <div>
                {CPU}
            </div>

            <h5 id="GPU">Graphical processing unit (GPU)</h5>
            <div>
                {GPU}
            </div>

            <h5 id="RAM">Random access memory (RAM)</h5>
            <div>
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