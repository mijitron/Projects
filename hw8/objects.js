/*
  AddedOnly.js

  Maintains in-memory database. Only implements add.
*/

(function() {
'use strict';
//=============================================================================

var people = [];

displayLocalStorage( );
	
displayPeople( );

$('#new-person').on( 'click', addNewPerson );

	//loads information after click, bring up current registration list from the server
$("#get-list").click(function(){
    $.load("https://pacific-meadow-64112.herokuapp.com/data-api/mhwang", function(){
    $('#list').show();
    });
});
//=============================================================================

function displayPeople( ) {
    var i, len, person;
    var tr, td;

    $('#people').empty();

    for ( i = 0, len = people.length; i < len; ++i ) {
        person = people[ i ];

        tr = $( '<tr>' );

        td = $( '<td>' );
        td.text( person.name );
        tr.append( td );

        td = $( '<td>' );
        td.text( person.age );
        tr.append( td );

        $('#people').append( tr );
    }

    $('#list').hide();
    $('#form-page').hide();
}

//=============================================================================

function addNewPerson( ) {
    $('#name').val( '' );
    $('#age').val( '' );

    $('#submit').one( 'click', addPerson, save2Server );

    $('#table-page').hide();
    $('#form-page').show();

    //=========================================================================

    function addPerson( evt ) {
        var newPerson = {
            name: $('#name').val(),
            age: $('#age').val()
        };
        people.push( newPerson );

        evt.preventDefault( );

        displayPeople( );
				saveData();
    }
		function save2Server ( evt) {
			$.post("https://pacific-meadow-64112.herokuapp.com/data-api/mhwang", function(){
        var newPerson = {
            name: $('#name').val(),
            age: $('#age').val()
        };
        people.push( newPerson );

        evt.preventDefault( );

        alert(status);
				saveData();
    });	
		}
}
//=============================================================================

function displayLocalStorage() {
  var listLocalStorage = localStorage["people"];
  if (listLocalStorage) {
    people = JSON.parse(listLocalStorage);
  } else {
    people = [];
  }  
  displayPeople();
}

function saveData() {
  localStorage["people"] = JSON.stringify(people);
}

//=============================================================================	
})();








