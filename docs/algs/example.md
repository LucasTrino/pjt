INPUT: plugin
OUTPUT: validation results (isValid, list of errors)

CREATE a empty array of errors

IF plugin.initialize is missing
	ADD 'plugin has to have a initialize function' IN list errors
	
IF plugin.initialize is not a function or a promise
	ADD 'The initialize function has to be a function or a promise' IN list errors
	

IF errors list is empty
	SET isValid TO true
ELSE 
	SET isValid TO false
	
RETURN { isValid, errors }