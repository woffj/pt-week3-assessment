/*Create a function called 'person' that accepts a name and an age parameter
  and returns an object with those properties. 
*/
	// function
	var person = function(name, age) {
		return {
			name: name,
			age: age
		}
	}

	// constructor function
    var Person = function(name, age) {
    	this.name = name;
    	this.age = age;
    }


// Call your function twice creating to different objects
	// function 
	var jeimi = person('Jeimi', 39);

	// constructor
    var jeimi = new Person('Jeimi', 39);
    var aaron = new Person('Aaron', 33);

/* In this scenario, can you add a method to your person functions prototoype and then have
   the objects you create with that function delegate to the person's prototype? */

   Person.prototype.hairColor = function() {
   	this.hairColor = hairColor;
   }
 	Person.prototype.eyeColor = function() {
 	this.eyeColor = eyeColor;
   }
   jeimi.hairColor = 'brown';

/* Create a Constructor function called 'Person' that accepts a name and an age paramter
    and returns an object with those parameters */




/* Add a property called sayAge to the Person's prototype which says that instances name */

    //code here

/* Create two instances of Person and call sayAge with one of those instances.