INPUT: 
	path: string, 
	options: object
OUTPUT: 
	{ success: boolean, message: string }

GET directories

DECLARE name AS options.name

IF name IS missing value
    RETURN { success: false, message: 'error_message' }

IF name EXISTS IN directories
    RETURN { success: false, message: 'error_message' }

DECLARE targetDirectory AS GET directory BY name

TRY
    SET name IN targetDirectory AS path
    RETURN { success: true, message: '' }
CATCH
    RETURN { success: false, message: 'error_message' }
