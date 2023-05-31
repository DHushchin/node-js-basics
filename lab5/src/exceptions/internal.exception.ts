import HttpCodes from '../constants/http-codes.enum';
import HttpErrors from '../constants/http-errors.enum';
import HttpException from './http-exception';

class InternalError extends HttpException {
    public constructor(message: string) {
        super(HttpCodes.INTERNAL_SERVER_ERROR, message, HttpErrors.INTERNAL_SERVER_ERROR);
    }
}

export default InternalError;
