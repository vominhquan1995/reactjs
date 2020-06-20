export class ValidationForm {
    static isNullString(value) {
        if (!value) {
            return true;
        }
        if (value && value.trim().length == 0) {
            /**
             * null trả về true
             */
            return true;
        }
        return false;
    }
}