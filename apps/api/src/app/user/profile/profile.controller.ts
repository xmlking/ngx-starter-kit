import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiOAuth2, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser, Roles, RolesEnum } from '../../auth/decorators';
import { CrudController } from '../../core';
import { User } from '../user.entity';
import { CreateProfileDto } from './dto/create-profile.dto';
import { ProfileList } from './dto/profile-list.model';
import { Profile } from './profile.entity';
import { ProfileService } from './profile.service';
// UserModule -> SharedModule -> AuthModule -> UserModule, so

const ALLOWED_MIME_TYPES = ['image/gif', 'image/png', 'image/jpeg', 'image/bmp', 'image/webp'];

@ApiOAuth2(['read'])
@ApiTags('Profile', 'User')
@Controller('profile')
export class ProfileController extends CrudController<Profile> {
  constructor(private readonly profileService: ProfileService) {
    super(profileService);
  }

  @ApiOperation({ summary: 'get CurrentUser Profile' })
  @Get('myprofile')
  async myProfile(@CurrentUser() user: User): Promise<Profile> {
    console.log('in myprofile', user.profileId);
    if (user.profileId) {
      // TODO: https://github.com/typeorm/typeorm/issues/1865
      return this.profileService.findOne(user.profileId);
    } else {
      throw new NotFoundException('No Profile Found');
    }
  }

  @ApiOperation({ summary: 'find all Profiles. Admins only' })
  @ApiTags('Admin')
  @Roles(RolesEnum.ADMIN)
  @Get()
  async findAll(): Promise<ProfileList> {
    return this.profileService.findAll();
  }

  @ApiOperation({ summary: 'Find Profile by id. Admins only' })
  @ApiTags('Admin')
  @Roles(RolesEnum.ADMIN)
  @Get(':id')
  async findById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string): Promise<Profile> {
    console.log('in findById', id);
    return this.profileService.findOne(id);
  }

  @ApiOperation({ summary: 'Create new Profile.' })
  @ApiConsumes('multipart/form-data')
  // TODO @ApiImplicitFile({ name: 'file', required: true, description: 'Profile Picture' })
  // @ApiBody({
  //   description: 'Profile Picture',
  //   type: CreateProfileDto,
  // })
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: (req, file, cb) => {
        if (ALLOWED_MIME_TYPES.indexOf(file.mimetype) === -1) {
          return cb(
            new BadRequestException(
              `Error! Incorrect mimetype '${file.mimetype}'. Correct: ${ALLOWED_MIME_TYPES.join(', ')}`,
            ),
            false,
          );
        }
        cb(null, true);
      },
      limits: {
        fileSize: 1024000,
      },
    }),
  )
  @Post()
  async create(@Body() entity: CreateProfileDto, @UploadedFile() file, @CurrentUser() user: User): Promise<Profile> {
    if (user.profileId) {
      throw new BadRequestException('user already has profile. if you want to change, use UPDATE');
    }
    return this.profileService.create(entity, file, user);
  }

  @ApiOperation({ summary: 'Update an existing record' })
  @ApiConsumes('multipart/form-data')
  // TODO @ApiImplicitFile({ name: 'file', required: false, description: 'Profile Picture' })
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: (req, file, cb) => {
        if (ALLOWED_MIME_TYPES.indexOf(file.mimetype) === -1) {
          return cb(
            new BadRequestException(
              `Error! Incorrect mimetype '${file.mimetype}'. Correct: ${ALLOWED_MIME_TYPES.join(', ')}`,
            ),
            false,
          );
        }
        cb(null, true);
      },
      limits: {
        fileSize: 1024000,
      },
    }),
  )
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() entity: CreateProfileDto,
    @UploadedFile() file,
    @CurrentUser() user: User,
  ): Promise<any> {
    if (!user.profileId) {
      throw new ForbiddenException('Current User dont have profile');
    }
    if (user.profileId !== id) {
      // FIXME equal
      throw new ForbiddenException('only owner can update their profile');
    }
    return this.profileService.update(id, entity, file, user);
  }

  @ApiOperation({ summary: 'Delete Profile' })
  @Delete(':id')
  async delete(@Param('id') id: string, @CurrentUser() user: User): Promise<any> {
    if (!user.profileId) {
      throw new ForbiddenException('Current User dont have profile');
    }
    if (user.profileId !== id) {
      // FIXME equal
      throw new ForbiddenException('only owner can delete their profile');
    }
    return this.profileService.delete(parseInt(id, 10), user);
  }
}
