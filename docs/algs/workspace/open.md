INPUT: 
	name || 
	name[] ||
	null
OUTPUT: 
	{ success: boolean, message: string }

IF name IS undefined OR name IS null
	opens current directorie

IF name IS a string
	IF directorie don't exists 
		SET "ERROR MESSAGE" TO message
		RETURN {success: false, message}

  opens directorie by name

IF name IS an Array 
	FOR i TO 0 FROM name.length - 1
			IF directorie don't exists 
				SET "ERROR MESSAGE" TO message 	
		    RETURN {success: false, message}
				
      opens directories by names
	
SET success TO TRUE;

RETURN { success, message }