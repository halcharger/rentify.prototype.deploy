'use strict';
app.factory('dummyDataService', [
  function () {

    var dummyDataFactory = {};

    dummyDataFactory.sites= [
      {
        "rentifySubDomain":"retirementholidayviews",
        "name":"Retirement Holiday Views",
        "owner":"David Cameron"
      },
      {
        "rentifySubDomain":"citygetawayparadise",
        "name":"City Getaway Paradise",
        "owner":"Tony Blair"
      },
      {
        "rentifySubDomain":"newenglandbliss",
        "name":"New England Bliss",
        "owner":"David Cameron"
      },
      {
        "rentifySubDomain":"seaviewsflatlet",
        "name":"Sea Views Flatlet",
        "owner":"Boris Johnston"
      },
      {
        "rentifySubDomain":"marineviews",
        "name":"Marine Views",
        "owner":"Boris Johnston"
      },
      {
        "rentifySubDomain":"sleepywestvillehollow",
        "name":"Sleepy Westville Hollow",
        "owner":"Ken Livingston"
      },
      {
        "rentifySubDomain":"therockgetaway",
        "name":"The Rock Getaway",
        "owner":"Ken Livingston"
      },
      {
        "rentifySubDomain":"holidaydriveflats",
        "name":"Holiday Drive Flats",
        "owner":"Ed Milliband"
      },
      {
        "rentifySubDomain":"quitespinneycottage",
        "name":"Quite Spinney Cottage",
        "owner":"Ed Milliband"
      },
      {
        "rentifySubDomain":"megalopolisresorts",
        "name":"Megalopolis Resorts",
        "owner":"Jacob Zuma"
      },
      {
        "rentifySubDomain":"midlandsmeandergetaway",
        "name":"Midlands Meander Getaway",
        "owner":"Jacob Zuma"
      }
    ];

    dummyDataFactory.properties = [
      {
        "name":"Property One"
      },
      {
        "name":"Property Two"
      }
    ];

    return dummyDataFactory;
  }]);
