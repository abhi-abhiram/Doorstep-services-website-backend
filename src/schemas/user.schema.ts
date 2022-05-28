/**
 * @openapi
 * components:
 *  schemas:
 *    RegisterUser:
 *      type: object
 *      required:
 *        - email
 *        - name
 *        - password
 *        - phoneNo
 *      properties:
 *        email:
 *          type: string
 *          default: jane.doe@example.com
 *        name:
 *          type: string
 *          default: Jane Doe
 *        password:
 *          type: string
 *          default: stringPassword123
 *        phoneNo:
 *          type: string
 *          default: 1234567890
 *        avatar:
 *          type: url
 *          default: www.userAvatar.com
 *    addAddress:
 *      type: object
 *      required:
 *        - address
 *        - city
 *        - state
 *        - country
 *        - pinCode
 *      properties:
 *        address:
 *          type: string
 *          default: "6 Woodside Lane West Babylon, NY 11704"
 *        city:
 *          type: string
 *          default: NYC
 *        state:
 *          type: string
 *          default: NY
 *        country:
 *          type: string
 *          default: USA
 *        pinCode:
 *          type: number
 *          default: 10012
 *    login:
 *      type: object
 *      required:
 *        - email
 *        - password
 *      properties:
 *        email:
 *          type: string
 *          default: "jane.doe@example.com"
 *        password:
 *          type: string
 *          default: "stringPassword123"
 */
