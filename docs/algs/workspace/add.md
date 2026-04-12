INPUT: 
	path: string, 
	options: object
OUTPUT: 
	{ success: boolean, message: string }

DEFINE counter AS directories' length
DEFINE key AS null;

IF directorie already exists
	SET "ERROR MESSAGE" TO message
	RETURN {success: false, message}

IF options.name IS undefined OR options.name IS null
	SET key: `dir-${counter}`

TRY 
	SET directories[key] AS path;
CATCH 
	SET "ERROR MESSAGE" TO message

SET success TO TRUE;
	
RETURN { success, message }