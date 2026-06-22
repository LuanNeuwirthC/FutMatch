import { PartialType } from '@nestjs/mapped-types';
import { CreateQuadraDto } from './create-quadra.dto';

export class UpdateQuadraDto extends PartialType(CreateQuadraDto) {}
