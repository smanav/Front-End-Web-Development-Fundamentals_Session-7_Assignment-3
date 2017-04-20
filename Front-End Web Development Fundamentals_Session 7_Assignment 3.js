                                       // Increment value by one example each time when we call a function
                                       
                                       var increment = (function counter() {

                                       	var c = 0;

                                       	return function () {

                                       		c += 1;

                                       		return c;
                                       	}
                                       
                                       }());

                                       console.log('Increment value = ' + increment());

                                       console.log('Increment value = ' + increment());

                                       console.log('Increment value = ' + increment());

                                       console.log('Increment value = ' + increment());

                                       console.log('Increment value = ' + increment());

