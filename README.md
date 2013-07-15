ee-mysql-schema
===============

simple orm for ee-mysql


	var Schema = require( "ee-mysql-schema" );

	var schema = new Schema( {
		  database: 		"dbName"
 		, hosts: [
 			{
		          host:     "1dbHsot"
		        , user:     "dbUser"
		        , password: "dbPass"
		        , weight: 	"optional int ( used for load balancing )"
		        , writable: true
		    }
		]
	} );



	// create new record in the user table
	new schema.user( {
		  id: 		1
		, name: 	"michael"
	} ).save( function( err, user ){
		if ( err ) trhow err;
		log.dir( user );
	} );


	// find some users
	schema.user.find( { name: "michael" }, function( err, userList ){
		if ( err ) trhow err;
		log.dir( userList );

		// delete users
		userList.forEach( function( user ){
			user.delete( function( err ){} );
		} );
	} );

	// find a user
	schema.user.findOne( { id: 1 }, function( err, user ){
		if ( err ) trhow err;
		log.dir( user );

		// update user
		user.name = "fabian";
		user.save( function( err, user ){
			if ( err ) trhow err;
			log.dir( user );
		} );
	} );

	// delete a user
	schema.user.remove( { id: 1 }, function( err ){
		if ( err ) trhow err;
	} );


	schema.query( "SELECT whatever FROM myDatabase WHERE id = ?;", [ id ], function( err, rows ){
		if ( err ) throw err;
		log.dir( rows );
	} );