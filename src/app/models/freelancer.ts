import { Address } from './address';
import { category } from './category';
import { Certificate } from './certificate';
import { Experience } from './experience';
import { language } from './language';
import { skill } from './skill';

export class Freelancer {
  constructor(
    public _id: string,
    public _rev: string,
    public name: string,
    public userName: string,
    public email: string,
    public mobile: number,
    public address: Address,
    public category: category[],
    public hoursPerWeek: number,
    public rating: number,
    public talentQuality: string,
    public availableBadge: boolean,
    public skills: skill[],
    public gender: string,
    public languages: language[],
    public jobsCompleted: number,
    public joinedDate: Date,
    public pricePerHour: number,
    public description: string,
    public certificates: Certificate[],
    public experiences: Experience[]
  ) {}
}
