import HttpCodes from '../constants/http-codes.enum';
import HttpErrors from '../constants/http-errors.enum';
import HttpException from './http-exception';

class NotFoundError extends HttpException {
    public constructor(message: string) {
        super(HttpCodes.NOT_FOUND, message, HttpErrors.NOT_FOUND);
    }
}

export default NotFoundError;
