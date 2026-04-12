INPUT: 
	name: string, 
OUTPUT: 
	{ success: boolean, message: string }	

IF directorie don't exists
	ADD "ERROR MESSAGE" TO errors
	RETURN {success: false, errors}

TRY 
	DELETE directories[name]
CATCH 
	ADD "ERROR MESSAGE" TO errors

SET success TO TRUE;
	
RETURN { success, message }