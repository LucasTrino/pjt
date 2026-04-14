INPUT: 
	name: 
		string ||
		string[]
OUTPUT: 
	{ success: boolean, message: string }	

GET directories

DECLARE errorMessage
DECLARE targetDirectory

IF name IS a string
	SET name AS [name]		

IF name IS an array
	FOR EACH current IN name
		SET targetDirectory AS directories[current]
		IF targetDirectory IS missing value
			SET 'error_message' TO errorMessage
			RETURN { success: false, message: errorMessage }	
		TRY
    		REMOVE targetDirectory FROM directories	
		CATCH
			SET 'error_message' TO errorMessage

DECLARE success;

IF errorMessage IS missing value
	SET success TO true
ELSE 
	SET success TO false

RETURN { success, message }