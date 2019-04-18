import { AgencyRepository } from './agency/agency.repo';
import { UserRepository } from './user/user.repo';

// simple way to avoid cyclical deps is not to import these repos into `app.module.ts`
export const repos = [AgencyRepository, UserRepository];
