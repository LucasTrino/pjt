INPUT:
    name: string
OUTPUT:
    string || null

GET directories

DECLARE result

SET result AS SEARCH IN directories WHERE name IS EQUAL name LIMIT 1

IF result IS missing value
    RETURN null

RETURN result.path