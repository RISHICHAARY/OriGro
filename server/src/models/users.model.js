const checkUser = "SELECT * FROM USERS WHERE EMAIL_ID = $1 OR MOBILE_NUMBER = $2";
const addUser = "INSERT INTO USERS ( FIRST_NAME, MIDDLE_NAME, LAST_NAME, EMAIL_ID, MOBILE_NUMBER, " + 
                    "BUILDING, CITY, STATE, PINCODE, LATTITUDE, LONGITUDE, " + 
                    "DEVICE_TOKEN, PASSWORD ) " + 
                    "VALUES( $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13 )";
const getUser = "SELECT USER_ID, FIRST_NAME, MIDDLE_NAME, LAST_NAME, EMAIL_ID, MOBILE_NUMBER, PASSWORD " + 
                    "FROM USERS WHERE EMAIL_ID = $1";

module.exports = {
    checkUser,
    addUser,
    getUser
}