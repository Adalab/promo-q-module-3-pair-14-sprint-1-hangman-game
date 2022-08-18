const callToApi = () => {
  return fetch("https://adalab-api.herokuapp.com/api/random/word")
    .then((response) => response.json())
    .then((dataApi) => {
      return dataApi;
    });
};
export default callToApi;
