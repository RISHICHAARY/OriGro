const checkMerchant = "SELECT * FROM MERCHANTS WHERE EMAIL_ID = $1 OR MOBILE_NUMBER = $2 OR MERCHANDISE_NAME = $3";
const addMerchant = "INSERT INTO MERCHANTS ( FIRST_NAME, MIDDLE_NAME, LAST_NAME, EMAIL_ID, MOBILE_NUMBER, " + 
                    "BUILDING, CITY, STATE, PINCODE, LATTITUDE, LONGITUDE, " + 
                    "MERCHANDISE_NAME, NPOP_ID, STATUS, ROLE, RATING, DEVICE_TOKEN, PASSWORD ) " + 
                    "VALUES( $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18 )";
const getMerchant = "SELECT MERCHANT_ID, FIRST_NAME, MIDDLE_NAME, LAST_NAME, MERCHANDISE_NAME, EMAIL_ID, MOBILE_NUMBER, PASSWORD, " + 
                    "STATUS, ROLE, RATING " +
                    "FROM MERCHANTS WHERE EMAIL_ID = $1";

module.exports = {
    checkMerchant,
    addMerchant,
    getMerchant
}