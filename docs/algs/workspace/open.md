INPUT: 
	name || 
	name[] ||
	null
OUTPUT: 
	{ success: boolean, errors: string[] }

CREATE errors AS empty array

IF name IS undefined OR name IS null
	opens current directorie

IF name IS a string
	CREATE exists AS exists(name)	

	IF exists IS NOT true
		ADD "ERROR MESSAGE" TO errors
		return

   	opens directorie by name

IF name IS an Array 
	FOR i TO 0 FROM name.length - 1
		CREATE exists AS exists(name)		

		IF exists IS NOT true
			ADD "ERROR MESSAGE" TO errors 
		    return	

        opens directories by names
	
IF errors is empty
	SET success TO true
ELSE 
	SET success TO false
	
RETURN { success, errors }