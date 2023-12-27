// console.log("connected");

//* async data for page. calling data for the trivia

// async function loadQuestions() {
//     const response = await fetch('/../tests/practice-test.json');
//     const questionData = await response.json();

//     console.log(questionData);
// }

// /** Calling functions */

// loadQuestions();

async function fetchData(url) {
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      // Handle the error here
      console.error('Error fetching data:', error.message);
      // You can choose to rethrow the error if needed
      throw error;
    }
  }
  
  //
  
  const dataUrl = '/../tests/floorPrep.json';
  
  fetchData(dataUrl)
    .then(data => {
      console.log('Data:', data);
      // Display data on page
      let getQuestions = $.ajax({
        url: dataUrl, 
        type: "POST",
        data: {
            search_text: search
        },
        dataType: "json"
      });
      getQuestions.fail(function (jqXHR, textStatus) {
        alert("Something went wrong loading (getQuestions)" + textStatus);
      });
      getQuestions.done(function (data) {
        if (data == null) {
            // Do nothing
            $(".question-container").hide();
        } else {
            let content = ``;
            $.each(data, function (i, item) {
                console.log(i);

                let type = item.type;

                if (type == "1") {
                    // carpet questions
                    let carpetQuestion_id = item.carpetQuestion_id;
                    content += `<div data-id="${movie_id}" class="clearFloat search-container-sub movie">
                                <div class="search-picture">
                                    <img src="./uploads/${cover_id}/${cover_name}" alt="${movie_name}">
                                </div>
                                <div class="search-text">${movie_name}</div>
                            </div>`;
                } else {
                    // people
                    let people_id = item.people_id;
                    let name = item.name;
                    let cover_id = item.cover_id;
                    let cover_name = item.cover_name;
                    content += `<div data-id="${people_id}" class="clearFloat search-container-sub people">
                                <div class="search-picture">
                                    <img src="./uploads/${cover_id}/${cover_name}" alt="${name}">
                                </div>
                                <div class="search-text">${name}</div>
                            </div>`;
                }
            });
            $(".question-container").html(content).show();
        }
      });
    })
    .catch(error => {
      // Handle the error from the fetchData function
      console.error('Error in getting data:', error.message);
    });
  


//* ****** Materialize Dropdown Initialization ****** *//
//* ****** JQuery **** *//

$('.dropdown-trigger').dropdown();


//* ****** Sidebar Nav Trigger Initialization ****** *//
//* ****** JQuery **** *//
$(document).ready(function(){
    $('.sidenav').sidenav();
  });