INPUT:
    name: string
OUTPUT:
    boolean

GET directories

IF GET name FROM directories IS missing value
    RETURN false
ELSE 
    RETURN true