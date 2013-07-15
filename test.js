


	var Schema = require( "./" );


	var db = new Schema( {
		  name: "eventbox"
		, database: "eventbox"
		, hosts: [ {
			  host: 				"10.0.100.1"
			, port: 				3306
			, user: 				"root"
			, password: 			""
			, weight: 				1
			, writable: 			true
			, maxConnections: 		10
		} ]
		, on: {
			load: function(){ 
				console.log( "schema loaded" ); 

				db.user.findOne( { email: "" }, function( err, user ){
					console.log( err, user, user.id );
				} );
			}
		}
	} );


	