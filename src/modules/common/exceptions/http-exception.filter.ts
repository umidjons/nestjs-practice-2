import { ExceptionFilter, Catch } from '@nestjs/common';
import { HttpException } from '@nestjs/core';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {

  catch(exception: HttpException, response) {
    const status = exception.getStatus();

    response.status(status).json({
      statusCode: status,
      message: 'This is a message from HttpExceptionFilter.'
    });
  }

}
