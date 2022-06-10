import { Observable } from 'rxjs';
import { Controller, Get, HttpCode } from '@nestjs/common';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';

import { ListUserUseCase } from '@/app/user/application/list-user/list-user.use-case';
import { UserDTO } from '@/app/user/domain/dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly listUserUseCase: ListUserUseCase) {}

  @Get()
  @ApiTags('users')
  @ApiOkResponse({ description: 'Lista de usuários', type: [UserDTO] })
  @HttpCode(200)
  listUsers(): Observable<UserDTO[]> {
    return this.listUserUseCase.execute();
  }
}
