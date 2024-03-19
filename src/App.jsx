import { useState } from "react";
import "./App.css";

function App() {
  const [submitForm, setSubmitForm] = useState([]);
  const [inputForm, setInputForm] = useState({
    title: "",
    author: "",
    years: "",
    price: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setInputForm((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitForm((prevSubmit) => [...prevSubmit, inputForm]);
    setInputForm({
      title: "",
      author: "",
      years: "",
      price: "",
    });
  };

  const handleDelete = (i) => {
    setSubmitForm((prevSubmit) => {
      const updateSubmit = [...prevSubmit];
      updateSubmit.splice(i, 1);
      return updateSubmit;
    });
  };

  const handleEdit = (i) => {
    const bookEdit = submitForm[i];
    setInputForm(bookEdit);
    setSubmitForm((prevForm) => {
      const updateForm = [...prevForm];
      updateForm.splice(i, 1);
      return updateForm;
    });
  };

  return (
    <>
      <section>
        <form onSubmit={handleSubmit}>
          <h2>Add Book Information</h2>
          <label>
            Name
            <input
              type="text"
              name="title"
              onChange={handleInput}
              value={inputForm.title}
            />
          </label>
          <label>
            Author
            <input
              type="text"
              name="author"
              onChange={handleInput}
              value={inputForm.author}
            />
          </label>
          <label>
            Years
            <input
              type="number"
              name="years"
              onChange={handleInput}
              value={inputForm.years}
            />
          </label>
          <label>
            Price
            <input
              type="number"
              name="price"
              onChange={handleInput}
              value={inputForm.price}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </section>

      <section>
        <h2>Books List</h2>
        <ul>
          {submitForm.map((book, index) => (
            <li key={index}>
              Title:{book.title}, Author:{book.author},Years:{book.years},Price:
              {book.price}
              <button
                onClick={() => {
                  handleEdit(index);
                }}
              >
                edit
              </button>
              <button
                onClick={() => {
                  handleDelete(index);
                }}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default App;
