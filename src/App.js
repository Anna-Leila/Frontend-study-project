import './App.css'; // import css file for App
import {BrowserRouter} from "react-router-dom"; // import BrowserRouter for navigation in the app
import {HashLink} from "react-router-hash-link"; // import HashLink to navigate to the specific place on the page using hash
import UserInputs from "./components/UserInputs"; // import UserInputs component
import Products from "./components/Products"; // import Products component

function App() { // function component App

    // function in a variable, which takes parameter event and handles submission of the form
    // for now it just shows simple alert message to the user
    const onSubmitHandler = (event) => {
        alert("Form submitted successfully! We will reach out to you as soon as possible"); // show alert message to the user
        //Write more code here to handle form submission properly
    }

    // function stored in a variable, which takes 2 parameters name and productLink, and returns list item with hash-specific link
    const Link = ({name, productLink}) => {
        return <li className="nav-item"> {/* create list item */}
            {/* add link to a specific product section */}
            <HashLink className="nav-link active" to={productLink}>{name}</HashLink>
        </li>
    }

    // return form with all necessary parts
    return <form className="form-horizontal" onSubmit={onSubmitHandler}> {/* create form */}
        <BrowserRouter> {/* set browser router to enable 'jumping' to locations */}
            <nav className="navbar navbar-expand-sm navbar-dark"> {/* create navigation bar; expand it only on small screens */}
                <div className="container-fluid"> {/* full width container */}
                    <ul className="navbar-nav"> {/* unordered list */}
                        <Link name="CPU" productLink="/Product#CPU"/> {/* Add link to CPU products' section */}
                        <Link name="GPU" productLink="/Product#GPU"/> {/* Add link to GPU products' section */}
                        <Link name="RAM" productLink="/Product#RAM"/> {/* Add link to RAM products' section */}
                        <Link name="Hard drive" productLink="/Product#Hard drive"/> {/* Add link to hard drives products' section */}
                    </ul>
                </div>
            </nav>

            <h2>Please, fill in the form:</h2> {/* Headline, asking to fill in the form */}

            <UserInputs /> {/* Section for the customer information inputs */}

            <Products /> {/* Section to choose products */}

            <button type="submit" className="btn btn-lg">Submit</button> {/* Submit button */}
        </BrowserRouter>
    </form>
}

export default App; // expose App component to other files as a default component
