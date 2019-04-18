import { EntityRepository, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Agency } from './agency.entity';
import { UserRepository } from '../user/user.repo';

@EntityRepository(Agency)
export class AgencyRepository extends Repository<Agency> {
  constructor(
    @InjectRepository(UserRepository)
    private userRepo: UserRepository,
  ) {
    super();
    // tslint:disable-next-line
    console.log(this.userRepo.constructor.name);
    // ☝️ We expect this to print `UserRepository`, but it prints `EntityManager`
  }

  async findAgencyAndUsers(agencyId: number): Promise<Agency> {
    const agency: Agency = {
      id: 1,
      name: 'Agency 1',
      users: [],
    };

    // TypeError: this.userRepo.findUsersByAgency is not a function
    agency.users = await this.userRepo.findUsersByAgency(agencyId);

    return agency;
  }
}
