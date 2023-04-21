const URL = "http://localhost:8080/backend_start";


function handleHttpErrors(res) {
 if (!res.ok) {
  console.log(res.status)
   return Promise.reject({ status: res.status, fullError: res.json() })
 }
 return res.json();
}


function apiFacade() {

const login = (user, password) => {    
    const options = makeOptions("POST", true,{username: user, password: password });
    return fetch(URL + "/api/login", options).then(handleHttpErrors).then(res => {setToken(res.token)})
}

const fetchData = (ressource) => { 
    const options = makeOptions("GET",true); //True add's the token
    return fetch(URL + ressource, options).then(handleHttpErrors);
}

const makeOptions= (method,addToken,body) => {
   var opts = {
     method: method,
     headers: {
       "Content-type": "application/json",
       'Accept': 'application/json',
     }
   }
   if (addToken && loggedIn()) {
     opts.headers["x-access-token"] = getToken();
   }
   if (body) {
     opts.body = JSON.stringify(body);
   }
   return opts;
}


const setToken = (token) => {
    localStorage.setItem('jwtToken', token)
}
const getToken = () => {
    return localStorage.getItem('jwtToken')
}
const loggedIn = () => {
    const loggedIn = getToken() != null;
    return loggedIn;
}
const logout = () => {
    localStorage.removeItem("jwtToken");
}

function readJWTTokken(token) {
    console.log('TOKEN: ', token);
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    console.log(jsonPayload);
    return JSON.parse(jsonPayload);
}

const getQuiz = (setQuiz, username) => {
    const options = makeOptions("GET", true);
    return fetch(URL + `/api/quiz/generate/${username}`, options)
        .then(handleHttpErrors)
        .then((res) => {
            setQuiz(res);
        });
};

const endQuiz = (quiz, setQuiz) => {
    const options = makeOptions("POST", true, {
        totalPoints: quiz.totalPoints,
        totalCorrect: quiz.totalCorrect,
        totalIncorrect: quiz.totalIncorrect,
        questions: quiz.questions,
        username: quiz.username,
    });

    return fetch(URL + `/api/quiz/create`, options)
        .then(handleHttpErrors)
        .then((res) => {
            setQuiz(res);
        });
};

const getAllCountries = (setCountries, dynamicSort) => {
    const options = makeOptions("GET", false);
    return fetch(URL + `/api/country/all`, options)
        .then(handleHttpErrors)
        .then((res) => {
            const sortedCountries = res.sort(dynamicSort("countryName"));
            setCountries(sortedCountries);
        });
};



const getResult = (setPoints, totalPoints, setTotalPoints, correctId, answer, time, setShowResult, setAnswerCorrect, updateQuestion) => {
    const options = makeOptions("GET", true);
    return fetch(URL + `/api/quiz/result/${correctId}/${answer}/${time}`, options)
            .then(handleHttpErrors)
            .then((res) => {
                setPoints(res);
                setTotalPoints(totalPoints + res);
                setShowResult(true);
                if (res === 0) {
                    setAnswerCorrect(false);
                }
                else {
                    setAnswerCorrect(true);
                    updateQuestion(res);
                }
              });
};

    
    return {
        getResult,
        getAllCountries,
        endQuiz,
        getQuiz,
        makeOptions,
        setToken,
        getToken,
        loggedIn,
        login,
        logout,
        fetchData,
        readJWTTokken,
    }
}
const facade = apiFacade();
export default facade;
