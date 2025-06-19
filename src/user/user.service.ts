import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { from } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async create(payload: CreateUserDto) {
    console.log('Service', payload);
    const data = await this.prisma.user.create({
      data: payload,
    });
    return data;
  }
  async findAll() {
    return await this.prisma.user.findMany();
  }
  async findOne(id: number) {
    return await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }
  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name: 'name',
      },
    });
  }
  async remove(id: number) {
    return await this.prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
}
