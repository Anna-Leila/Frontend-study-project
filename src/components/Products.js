import React, {useState} from "react"; // import React and useState hook
import productsList from "./ProductsList"; // import list of products

// function component that shows products
function Products() {
    const [products, setProducts] = useState(productsList); // a state variable products and a method for setting this variable
    const [totalCost] = useState({cost: 0}); // a state variable for total cost of the chosen product
    const min = 1, max = 1000; //  minimum and maximum amount to order (only if the customer chooses the products)

    const updateCheckbox = id => e => { // arrow function to update checkbox status (checked/unchecked) for product with id = id
        let newArr = [...products]; // clone products list
        // set new buy status - if checkbox is checked, customer does buy this product, otherwise doesn't
        newArr[id].buy = e.target.checked;
        setProducts(newArr); // update state

        if (e.target.checked) { // if checkbox is checked
            totalCost.cost += (products[id].amount * products[id].price); // increase the total cost
        } else { // otherwise
            totalCost.cost -= (products[id].amount * products[id].price); // decrease the total cost
        }
    }

    const updateAmount = id => e => { // arrow function to update amount customer wants to buy for product wih id = id
        totalCost.cost -= (products[id].amount * products[id].price); // remove current product cost from total cost

        let value = e.target.value; // get input value
        if (!(e.target.value === "")) { // if input isn't empty (then it's a number)
            value = parseInt(e.target.value); // get integer value from string value
            if (value<min || value>max) value = 1; // if value is out of boundaries set it to 1;
        }

        let newArr = [...products]; // clone products list
        newArr[id].amount = value; // set new amount, which customer wants to buy
        setProducts(newArr); // update state

        totalCost.cost += (value * products[id].price); // add new product cost to total cost
    }

    const CPU = []; // array for CPU
    const GPU = []; // array for GPU
    const RAM = []; // array for RAM
    const hardDrive = []; // array for hard drive

    for (let product of products) { // for every product
        // create IDs for current product
        const checkboxId = "checkboxId" + product.id; // id for the checkbox
        const labelForCheckBoxId = "checkboxLabelId" + product.id; // id for the label next to the checkbox

        const amountInputId = "amountInputId" + product.id; // id for number input
        const labelForAmountInputId = "labelForAmountInputId" + product.id; // id for the label next to number input
        const toggleShowInput = "toggleShowInput" + product.id; // id for the section, which can be hidden

        const productKey = "productKey" + product.id; // id for the current product

        // variable with frontend HTML for this product
        const productCode = <React.Fragment key={productKey}> {/* put into react fragment, because we add components in a list */}
            <div className="row mb-3 computerComponent" id={product.id}> {/* row for a computer component with margin 3 at the bottom */}
                <label className="col-form-label col-sm-3" htmlFor={amountInputId}> {/* label with checkbox it's label */}

                    {/* checkbox for this product;
                     if checked, then we show input field (toggleShowInput) for amount of ths component to order;
                     we should order at least 1 such component; only when input is empty we order 0;
                     if unchecked, we don't order */}
                    <input className="form-check-input largeCheckbox" type="checkbox" id={checkboxId}
                    onClick={updateCheckbox(product.id)} // on click call updateCheckbox function for this product
                    />
                    &nbsp; {/* empty space between input and label */}

                    {/* label for checkbox */}
                    <label className="form-check-label pl-3" htmlFor={checkboxId} id={labelForCheckBoxId}>
                        {product.name}. Price - ${product.price} {/* label text */}
                    </label>
                </label>

                <label htmlFor={amountInputId} className="col-form-label col-sm-2"> {/* label with logo/image of this product, takes 2 columns */}
                    <img src={product.imgLink} alt={product.name} width="100" height="100" /> {/* logo/image of product */}
                </label>

                {/* this div field will only be visible, if checkbox for this product is checked  */}
                <div className="toggle col-sm-3" id={toggleShowInput} // takes 3 columns
                     style={{ display: product.buy ? 'block' : 'none' }}> {/* display only if customer wants to buy this product */}


                    <input type="number" className="form-control mb-1" id={amountInputId} // input field for the amount of a single product to order
                           min={min} max={max} value={product.amount} // this amount is between min and max
                           onChange={updateAmount(product.id)} // when input field is changed, call updateAmount function for this product
                        />


                    <label className="form-label" htmlFor={amountInputId} id={labelForAmountInputId}> {/* label for amount input */}
                        The cost is ${product.price * product.amount} {/* label text shows cost of this product */}
                    </label>
                </div>
            </div>
        </React.Fragment>


        if (product.type === "CPU") { // if product is a CPU
            CPU.push(productCode); // then add it to CPU array
        } else if (product.type === "GPU") { // if product is a GPU
            GPU.push(productCode); // then add it to GPU array
        } else if (product.type === "RAM") { // if product is a RAM
            RAM.push(productCode); // then add it to RAM array
        } else if (product.type === "Hard drive") { // if products is a hard drive
            hardDrive.push(productCode); // then add it to hardDrive array
        }
    }

    return (<> {/* return multiple elements using short syntax of React.Fragment */}
            <h4>Computer components:</h4> {/* heading for computer components */}

            <h5 id="CPU">Central processing unit (CPU)</h5> {/* heading for CPU */}
            <div>{CPU}</div> {/* products of type CPU */}

            <h5 id="GPU">Graphical processing unit (GPU)</h5> {/* heading for GPU */}
            <div>{GPU}</div> {/* products of type GPU */}

            <h5 id="RAM">Random access memory (RAM)</h5> {/* heading for RAM */}
            <div>{RAM}</div> {/* products of type RAM */}

            <h5 id="Hard drive">Hard drive</h5> {/* heading for hard drives */}
            <div>{hardDrive}</div> {/* products of type hard drive */}

            <h5> {/* heading with total cost of chosen products */}
                The total cost is ${totalCost.cost} {/* take cost from state variable totalCost */}
            </h5>
        </>
    )
}


export default Products // expose Products component to usage in other files