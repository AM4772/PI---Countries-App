import { React, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postActivity, getCountries } from "../../redux/actions";
import Navbar from "../Nav/NavBar";
import styles from "./form.module.css";
import Loading from "../Loading/Loading";

const Validation = (state) => {
  let errors = {};
  if (state.selectedCountries.length < 1) {
    errors.selectedCountries =
      "Country is a required field, please select at least 1 country.";
  } else if (!state.name) {
    errors.name = "Activity name is required.";
  } else if (isNaN(state.name) !== true) {
    errors.name = "Activity name cannot be a number.";
  } else if (state.name.length > 140) {
    errors.name = "Exceeded character length (max 140).";
  } else if (!state.difficulty) {
    errors.difficulty = "Difficulty is a required field, please select one.";
  } else if (!state.duration) {
    errors.duration = "Duration is a required field.";
  } else if (state.duration.length > 9) {
    errors.duration = "Exceeded character length (max 9).";
  } else if (!state.duration.includes("hour")) {
    errors.duration =
      'Please set duration in hours and include the word "hour" or "hours".';
  } else if (!state.season) {
    errors.season = "Season is a required field, please select one.";
  } else if (!state.description) {
    errors.description =
      "Description is a required field, please write a brief description.";
  } else if (state.description.length > 255) {
    errors.description =
      "Description length exceeded. Max length is 255 characters.";
  }
  return errors;
};

export default function CreateActivity() {
  const dispatch = useDispatch();
  const history = useHistory();
  const countries = useSelector((state) => state.countries);
  const [state, setState] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    description: "",
    selectedCountries: [],
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [choice, setChoice] = useState();

  /*   const clear = (e) => {
    e.target.value = "";
  }; */

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    if (!e.nativeEvent.inputType) {
      e.target.blur();
    }
    // console.log(state);
  }

  function handleSelect(e) {
    e.preventDefault();
    if (
      !state.selectedCountries.includes(e.target.value) &&
      e.target.value !== "country"
    ) {
      setState({
        ...state,
        selectedCountries: [...state.selectedCountries, e.target.value],
      });
      setChoice("default");
    } else {
      return alert(
        "You have already added this country to the list. Please select another country or continue filling out the form."
      );
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(state);
    setErrors(Validation(state));
    const saveErrors = Validation(state);
    if (
      Object.values(saveErrors).length !== 0 ||
      state.selectedCountries.length < 1
    ) {
      alert(
        "Please, check if all fields were filled out or if you had errors."
      );
      history.push("/activity");
    } else {
      dispatch(postActivity(state));
      setState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        description: "",
        selectedCountries: [],
      });
      history.push("/home");
    }
  }

  function handleDelete(c) {
    setState({
      ...state,
      selectedCountries: state.selectedCountries.filter((el) => el !== c),
    });
  }

  function handleReset(e) {
    setState({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      description: "",
      selectedCountries: [],
    });
    history.push("/activity");
  }

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div className={styles.container_page}>
      <Navbar />
      {/*       {loading === true ? (
        <Loading setLoading={setLoading} />
      ) : ( */}
      <section className={styles.container_box}>
        <fieldset className={styles.form_container}>
          <h1>Create a new activity!!</h1>
          <Link to="/home">
            <button className={styles.form_button}>Back to Home</button>
          </Link>
          <form
            id="act_form"
            className={styles.my_form}
            onSubmit={(e) => handleSubmit(e)}
          >
            <fieldset>
              <label for="countries">Countries...* </label>
              <select
                id="countries"
                name="countries"
                value={choice}
                defaultValue={"default"}
                required="required"
                onChange={(e) => handleSelect(e)}
              >
                <option value={"default"} disabled>
                  Select a country (min required 1)
                </option>
                {countries.map((c) => (
                  <option value={c.name}>{c.name}</option>
                ))}
              </select>
              {errors.selectedCountries && (
                <p className={styles.selected_error}>
                  {errors.selectedCountries}
                </p>
              )}
              <br />
              <label for="act_name">Activity name*: </label>
              <textarea
                id="act_name"
                type="text"
                maxLength={140}
                value={state.name}
                name="name"
                className={styles.activity}
                required="required"
                onChange={(e) => handleChange(e)}
                placeholder="Surfing in Maui, Hawai... (max length 140 char.)."
              ></textarea>
              {errors.name && (
                <p className={styles.selected_error}>{errors.name}</p>
              )}
              <label for="act_difficulty">Difficulty*: </label>
              <select
                id="act_difficulty"
                type="number"
                value={state.difficulty}
                name="difficulty"
                required="required"
                onChange={(e) => handleChange(e)}
              >
                <option value="" disabled>
                  Select...
                </option>
                <option value={1}> Piece of cake!</option>
                <option value={2}> Half a piece of cake!</option>
                <option value={3}> Fifty, fifty</option>
                <option value={4}> Now we are talking!</option>
                <option value={5}> Buckle up!</option>
              </select>
              {errors.difficulty && (
                <p className={styles.selected_error}>{errors.difficulty}</p>
              )}
              <label for="act_duration">Duration*: </label>
              <textarea
                id="act_duration"
                type="text"
                maxLength={9}
                /*                   value={state.duration} */
                name="duration"
                className={styles.duration}
                required="required"
                onChange={(e) => handleChange(e)}
                placeholder="x hours..."
              ></textarea>
              {errors.duration && (
                <p className={styles.selected_error}>{errors.duration}</p>
              )}
              <label for="act_season">Season*: </label>
              <select
                id="act_season"
                type="text"
                value={state.season}
                name="season"
                required="required"
                onChange={(e) => handleChange(e)}
              >
                <option value="" disabled>
                  Select...
                </option>
                <option value={"Any"}> Any </option>
                <option value={"Summer"}> Summer </option>
                <option value={"Fall"}> Fall </option>
                <option value={"Winter"}> Winter </option>
                <option value={"Spring"}> Spring </option>
              </select>
              {errors.season && (
                <p className={styles.selected_error}>{errors.season}</p>
              )}
              <label for="act_descript">Brief description*: </label>
              <textarea
                id="act_descript"
                rows="5"
                cols="25"
                type="text"
                maxLength={255}
                value={state.description}
                name="description"
                className={styles.description}
                required="required"
                placeholder="A stroll thru Central Park, Manhattan...."
                onChange={(e) => handleChange(e)}
              ></textarea>
              {errors.description && (
                <p className={styles.selected_error}>{errors.description}</p>
              )}
              <fieldset className={styles.buttons}>
                <button id="sendBtn" type="submit">
                  CREATE ACTIVITY
                </button>
                <button id="reSetBtn" onClick={(e) => handleReset(e)}>
                  RESET FORM
                </button>
              </fieldset>
            </fieldset>
          </form>
        </fieldset>
        <br />
        <fieldset className={styles.selected}>
          {" "}
          <label>Selected Countries</label>
          <br />
          <hr />
          {state.selectedCountries.map((c) => (
            <div className={styles.selected_wrap}>
              <p className={styles.selected_p}>{c}</p>
              <button
                className={styles.selected_btn}
                onClick={() => handleDelete(c)}
              >
                {" "}
                x{" "}
              </button>
            </div>
          ))}
        </fieldset>
      </section>
      {/*       )} */}
    </div>
  );
}

/* <label for="difficulty">Difficulty*: </label>
<input
  type="input"
  list="difficulty-list"
  value={state.difficulty}
  name="difficulty"
  required="required"
  onChange={(e) => handleDifficultyChange(e)}
  onClick={clear}
  onFocus={clear}
  placeholder="Select..."
/>
<datalist id="difficulty-list">
  <option value={1}> Piece of cake!</option>
  <option value={2}> Half a piece of cake!</option>
  <option value={3}> Fifty, fifty</option>
  <option value={4}> Now we are talking!</option>
  <option value={5}> Buckle up!</option>
</datalist> */

/* <input
type="input"
name="act_season"
list="season-list"
onChange={(e) => handleChange(e)}
onClick={clear}
onFocus={clear}
placeholder="Select..."
required="required"
/>
<datalist id="season-list">
<option value="Summer"></option>
<option value="Fall"></option>
<option value="Winter"></option>
<option value="Spring"></option>
<option value="Any"></option>
</datalist> */
