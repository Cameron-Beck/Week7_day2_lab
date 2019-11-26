import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      countries: [],
      inputName: null,
      // countryListUrl

      },
      mounted(){
        this.fetchCountry()
      },
    methods: {
      fetchCountry: function(){
        const request = fetch("https://restcountries.eu/rest/v2/all")
          .then(response => response.json())
          .then(data => this.countries = data)
      },
    },
    computed:{
    filterCountry: function(){
      return this.countries.filter((country) => {
          return this.country.name === this.inputName;
      })

    },
  }

  });
});
