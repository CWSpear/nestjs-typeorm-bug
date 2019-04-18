import { Controller, Get, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Agency } from './agency.entity';
import { AgencyRepository } from './agency.repo';

@Controller('api/agencies')
export class AgencyController {
  constructor(
    @InjectRepository(AgencyRepository)
    private agencyRepo: AgencyRepository,
  ) {}

  @Get(':id')
  async getAgency(@Param('id') id: string): Promise<Agency> {
    return this.agencyRepo.findAgencyAndUsers(+id);
  }
}
