import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';



//router HTTP endpoints
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() payload: CreateUserDto) {
    console.log('Controller', payload);
    return this.userService.create(payload);
  }
  @Get()
  findAll() {
    console.log("here")
    return this.userService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    console.log('Nuumber', id); 
    return this.userService.findOne(+id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    console.log('Number', id);
    return this.userService.remove(+id);
  }
}
