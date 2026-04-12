INPUT: 
	path: string, 
	options: object
OUTPUT: 
	{ success: boolean, errors: string[] }

CREATE errors: []

DEFINE counter AS directories' length
DEFINE key AS null;

IF directories[options.name] already exists
	ADD "ERROR MESSAGE" TO errors
	RETURN {success: false, errors}

IF options.name IS undefined OR options.name IS null
	SET key: `dir-${counter}`

TRY 
	SET directories[key] AS path;
CATCH 
	ADD "ERROR MESSAGE" TO errors

IF errors is empty
	SET success TO true
ELSE 
	SET success TO false
	
RETURN { success, errors }