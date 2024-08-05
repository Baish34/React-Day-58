import { useState } from "react";
import "./App.css";

const EducationLevel = () => {
  const [education, setEducation] = useState("");

  const educationLevelHandler = (event) => {
    setEducation(event.target.value);
  };

  const displaySelectedLevel = () => {
    if (education.length === 0) {
      return "";
    } else {
      return `Education level: I have a ${education}.`;
    }
  };

  return (
    <div>
      <form onChange={educationLevelHandler}>
        <label>Choose your highest education level:</label>
        <br />
        <input type="radio" value="high school" name="level" /> High School{" "}
        <br />
        <input type="radio" value="bachelors degree" name="level" /> Bachelor's
        Degree <br />
        <input type="radio" value="masters degree" name="level" /> Master's
        Degree <br />
        <input type="radio" value="Ph.D" name="level" /> Ph.D.
      </form>
      <p>{displaySelectedLevel()}</p>
    </div>
  );
};

const MusicGenre = () => {
  const [music, setMusic] = useState("");

  const musicGenreHandler = (event) => {
    setMusic(event.target.value);
  };

  const displaySelectedGenre = () => {
    if (music.length === 0) {
      return "";
    } else {
      return `I like ${music} music.`;
    }
  };

  return (
    <div>
      <form onChange={musicGenreHandler}>
        <label>Choose your favorite music genre:</label>
        <br />
        <input type="radio" value="pop" name="genre" /> Pop <br />
        <input type="radio" value="rock" name="genre" /> Rock <br />
        <input type="radio" value="hip hop" name="genre" /> Hip Hop <br />
        <input type="radio" value="classical" name="genre" /> Classical
      </form>
      <p>{displaySelectedGenre()}</p>
    </div>
  );
};

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const paymentMethodHandler = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <div>
      <form onChange={paymentMethodHandler}>
        <label>Choose your preferred payment method:</label>
        <br />
        <input type="radio" value="credit card" name="method" /> Credit Card{" "}
        <br />
        <input type="radio" value="paypal" name="method" /> Paypal <br />
        <input type="radio" value="bitcoin" name="method" /> Bitcoin <br />
        <input type="radio" value="cash" name="method" /> Cash
      </form>
      <p>Selected payment method: {paymentMethod}</p>
    </div>
  );
};

const Weather = () => {
  const [selectedWeather, setSelectedWeather] = useState("");

  const weatherHandler = (event) => {
    setSelectedWeather(event.target.value);
  };

  const displaySelectedWeather = () => {
    if (selectedWeather.length === 0) {
      return "";
    } else {
      return `Selected  weather: I like ${selectedWeather} weather.`;
    }
  };

  return (
    <div>
      <form onChange={weatherHandler}>
        <label>Choose your favorite music genre:</label>
        <br />
        <input type="radio" value="sunny" name="weather" /> Sunny <br />
        <input type="radio" value="rainy" name="weather" /> Rainy <br />
        <input type="radio" value="cloudy" name="weather" /> Cloudy <br />
        <input type="radio" value="snowy" name="weather" /> Snowy
      </form>
      <p>{displaySelectedWeather()}</p>
    </div>
  );
};

const Occupation = () => {
  const [selectOccupation, setSelectedOccupation] = useState("");

  const occupationHandler = (event) => {
    setSelectedOccupation(event.target.value);
  };

  return (
    <div>
      <form onChange={occupationHandler}>
        <label>Choose your occupation:</label>
        <br />
        <input type="radio" value="student" name="occupation" /> Student <br />
        <input type="radio" value="teacher" name="occupation" /> Teacher <br />
        <input type="radio" value="engineer" name="occupation" /> Engineer{" "}
        <br />
        <input type="radio" value="doctor" name="occupation" /> Doctor
      </form>
      <p>Selected occupation: {selectOccupation}</p>
    </div>
  );
};

export default function App() {
  return (
    <main>
      <EducationLevel />
      <MusicGenre />
      <Payment />
      <Weather />
      <Occupation />
    </main>
  );
}
