// Copyright (c) 2022 Edward Mcnamara All rights reserved
//
// Created by: Edward Mcnamara
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict';
/**
 * This function calculates which rating of movie the user is allowed to watch based on their age 
 */
function calculate() {
  // Getting age from user
  let userAge =parseFloat(document.getElementById('userAge').value)
  let result;

  // if the user's age is greater than or equal to 18 display "You can see and R-rated movie alone, If you're up for it! ;)" 
  if (userAge >= 18) {
    result = "<br>You can see and R-rated movie alone, If you're up for it! ;)"
  // Otherwise, if the users age is greater tha or equal to 13, display "You can see a PG-13 movie alone!"
  } else if (userAge >= 13){
    result = "<br> You can see a PG-13 movie alone! "
  // Otherwise, if the user's age is greater than or equal to 8, display "You can see a G or PG rated movie alone"
  } else if (userAge >= 8){
    result = "You can see a G or PG rated movie alone"
  // Otherwise, if the user's age is less than 8, display "You’re not allowed to go to the movies alone"
  } else if (userAge < 8){
    result = "You’re not allowed to go to the movies alone"
  // Otherwise, they did not enter a valid age.
  } else {
    result = "Invalid age inputted. Please try again."
  }
  
  // Displaying results 
  document.getElementById('result').innerHTML = result
}