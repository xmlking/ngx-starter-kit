import { HttpModule, Module } from '@nestjs/common';
import { SharedModule } from '../shared';
import { KubernetesService } from './kubernetes/kubernetes.service';
import { KubernetesController } from './kubernetes/kubernetes.controller';

@Module({
  imports: [SharedModule, HttpModule.register({ timeout: 5000 })],
  providers: [KubernetesService],
  controllers: [KubernetesController],
})
export class ExternalModule {}
