import { Controller } from '@nestjs/common';
import { ApiOAuth2Auth, ApiUseTags } from '@nestjs/swagger';

@ApiOAuth2Auth(['read'])
@ApiUseTags('Project')
@Controller('project')
export class ProjectController {}
