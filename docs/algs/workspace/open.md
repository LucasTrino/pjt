INPUT: 
	name || 
	name[] ||
	null
OUTPUT: 
	{ success: boolean, message: string }

GET directories

DECLARE targetDirectory

IF name IS missing value
	OPEN current directory

IF name IS a string
	SET name AS [name]

IF name IS an array 
	FOR i TO 0 FROM name.length - 1
		SET targetDirectory AS GET directory BY name[i]
		IF targetDirectory IS missing value
			RETURN { success: false, message: 'error_message' }
	    
     	OPEN targetDirectory
	
RETURN { success: true, message: '' }