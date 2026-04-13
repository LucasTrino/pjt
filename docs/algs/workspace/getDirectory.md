INPUT: 
	name
OUTPUT: 
	{ success: boolean, message: string, data: string }

GET directories

IF name IS missing value
    RETURN { success: false, message: 'error_message' }

DECLARE targetDirectory AS GET directory BY name

IF targetDirectory NOT EXISTS IN directories
    RETURN { success: false, message: 'error_message }

DECLARE directoryPath AS GET path FROM targetDirectory

RETURN { success: true, message: '', data: directoryPath }

